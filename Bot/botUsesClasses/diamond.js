import { CategoricalParameter, DecimalParameter, IStrategy, IntParameter } from 'freqtrade/strategy';
import { DataFrame } from 'pandas';
import * as ta from 'talib/abstract';
import { reduce } from 'functools';
import * as qtpylib from 'freqtrade/vendor/qtpylib/indicators';

var _pj;

function _pj_snippets(container) {
  function set_properties(cls, props) {
    var desc, value;
    var _pj_a = props;

    for (var p in _pj_a) {
      if (_pj_a.hasOwnProperty(p)) {
        value = props[p];

        if (!(value instanceof Map || value instanceof WeakMap) && value instanceof Object && "get" in value && value.get instanceof Function) {
          desc = value;
        } else {
          desc = {
            "value": value,
            "enumerable": false,
            "configurable": true,
            "writable": true
          };
        }

        Object.defineProperty(cls.prototype, p, desc);
      }
    }
  }

  container["set_properties"] = set_properties;
  return container;
}

_pj = {};

_pj_snippets(_pj);

class Diamond extends IStrategy {
  populate_indicators(dataframe, metadata) {
    return dataframe;
  }

  populate_buy_trend(dataframe, metadata) {
    var conditions;
    conditions = [];
    conditions.append(qtpylib.crossed_above(dataframe[this.buy_fast_key.value].shift(this.buy_horizontal_push.value), dataframe[this.buy_slow_key.value] * this.buy_vertical_push.value));

    if (conditions) {
      dataframe.loc[[reduce((x, y) => {
        return x & y;
      }, conditions), "buy"]] = 1;
    }

    return dataframe;
  }

  populate_sell_trend(dataframe, metadata) {
    var conditions;
    conditions = [];
    conditions.append(qtpylib.crossed_below(dataframe[this.sell_fast_key.value].shift(this.sell_horizontal_push.value), dataframe[this.sell_slow_key.value] * this.sell_vertical_push.value));

    if (conditions) {
      dataframe.loc[[reduce((x, y) => {
        return x & y;
      }, conditions), "sell"]] = 1;
    }

    return dataframe;
  }

}

_pj.set_properties(Diamond, {
  "buy_fast_key": new CategoricalParameter(["open", "high", "low", "close", "volume"], {
    "default": "ma_fast",
    "space": "buy"
  }),
  "buy_horizontal_push": new IntParameter(0, 10, {
    "default": 0,
    "space": "buy"
  }),
  "buy_params": {
    "buy_fast_key": "high",
    "buy_horizontal_push": 7,
    "buy_slow_key": "volume",
    "buy_vertical_push": 0.942
  },
  "buy_slow_key": new CategoricalParameter(["open", "high", "low", "close", "volume"], {
    "default": "ma_slow",
    "space": "buy"
  }),
  "buy_vertical_push": new DecimalParameter(0.5, 1.5, {
    "decimals": 3,
    "default": 1,
    "space": "buy"
  }),
  "minimal_roi": {
    "0": 0.242,
    "13": 0.044,
    "51": 0.02,
    "170": 0
  },
  "sell_fast_key": new CategoricalParameter(["open", "high", "low", "close", "volume"], {
    "default": "ma_fast",
    "space": "sell"
  }),
  "sell_horizontal_push": new IntParameter(0, 10, {
    "default": 0,
    "space": "sell"
  }),
  "sell_params": {
    "sell_fast_key": "high",
    "sell_horizontal_push": 10,
    "sell_slow_key": "low",
    "sell_vertical_push": 1.184
  },
  "sell_slow_key": new CategoricalParameter(["open", "high", "low", "close", "volume"], {
    "default": "ma_slow",
    "space": "sell"
  }),
  "sell_vertical_push": new DecimalParameter(0.5, 1.5, {
    "decimals": 3,
    "default": 1,
    "space": "sell"
  }),
  "stoploss": -0.271,
  "timeframe": "5m",
  "trailing_only_offset_is_reached": false,
  "trailing_stop": true,
  "trailing_stop_positive": 0.011,
  "trailing_stop_positive_offset": 0.054
});

export default Diamond

