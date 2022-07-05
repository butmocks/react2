"use strict";
// -----------------
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSentence = toSentence;

function toSentence(items) {
  if (items.length <= 1) {
    return items[0] || '';
  }

  return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}


// ---------


export function toSentence(items) {
  if (items.length <= 1) {
    return items[0] || '';
  }

  return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}
// -------------


const Diamond(IStrategy) {
  buy_params = {
        "buy_fast_key": "high",
        "buy_horizontal_push": 7,
        "buy_slow_key": "volume",
        "buy_vertical_push": 0.942,
    },

    sell_params = {
        "sell_fast_key": "high",
        "sell_horizontal_push": 10,
        "sell_slow_key": "low",
        "sell_vertical_push": 1.184,
    },


    minimal_roi = {
        "0": 0.242,
        "13": 0.044,
        "51": 0.02,
        "170": 0
    }
    stoploss = -0.271,
    trailing_stop = True,
    trailing_stop_positive = 0.011,
    trailing_stop_positive_offset = 0.054,
    trailing_only_offset_is_reached = False,
    timeframe = '5m',
};

