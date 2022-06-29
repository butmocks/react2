
import React from 'react';

const NumbersList = ({ maybeStrategy }) => {
  return (
    <ul>
      {maybeStrategy.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;




let maybeStrategy = {
  "max_open_trades": -1,
  "stake_currency": "USDT",
  "stake_amount": 100,
  "tradable_balance_ratio": 0.99,
  "fiat_display_currency": "USD",
  "dry_run": true,
  "cancel_open_orders_on_exit": false,
  "trading_mode": "futures",
  "margin_mode": "isolated",
  "unfilledtimeout": {
    "entry": 10,
    "exit": 10,
    "exit_timeout_count": 0,
    "unit": "minutes"
  },
  "entry_pricing": {
    "price_side": "same",
    "use_order_book": true,
    "order_book_top": 1,
    "price_last_balance": 0.0,
    "check_depth_of_market": {
      "enabled": false,
      "bids_to_ask_delta": 1
    }
  },
  "exit_pricing": {
    "price_side": "same",
    "use_order_book": true,
    "order_book_top": 1
  },
  "exchange": {
    "name": "binance",
    "key": "",
    "secret": "",
    "ccxt_config": {},
    "ccxt_async_config": {},
    "pair_whitelist": [
      "AUDIO/USDT",
      "AAVE/USDT",
      "ALICE/USDT",
      "ARPA/USDT",
      "AVAX/USDT",
      "ATOM/USDT",
      "ANKR/USDT",
      "AXS/USDT",
      "ADA/USDT",
      "ALGO/USDT",
      "BTS/USDT",
      "BAND/USDT",
      "BEL/USDT",
      "BNB/USDT",
      "BTC/USDT",
      "BLZ/USDT",
      "BAT/USDT",
      "CHR/USDT",
      "C98/USDT",
      "COTI/USDT",
      "CHZ/USDT",
      "COMP/USDT",
      "CRV/USDT",
      "CELO/USDT",
      "DUSK/USDT",
      "DOGE/USDT",
      "DENT/USDT",
      "DASH/USDT",
      "DOT/USDT",
      "DYDX/USDT",
      "ENJ/USDT",
      "EOS/USDT",
      "ETH/USDT",
      "ETC/USDT",
      "ENS/USDT",
      "EGLD/USDT",
      "FIL/USDT",
      "FTM/USDT",
      "FLM/USDT",
      "GRT/USDT",
      "GALA/USDT",
      "HBAR/USDT",
      "HOT/USDT",
      "IOTX/USDT",
      "ICX/USDT",
      "ICP/USDT",
      "IOTA/USDT",
      "IOST/USDT",
      "KLAY/USDT",
      "KAVA/USDT",
      "KNC/USDT",
      "KSM/USDT",
      "LUNA/USDT",
      "LRC/USDT",
      "LINA/USDT",
      "LTC/USDT",
      "LINK/USDT",
      "MATIC/USDT",
      "NEAR/USDT",
      "MANA/USDT",
      "MTL/USDT",
      "NEO/USDT",
      "ONT/USDT",
      "OMG/USDT",
      "OCEAN/USDT",
      "OGN/USDT",
      "ONE/USDT",
      "PEOPLE/USDT",
      "RLC/USDT",
      "RUNE/USDT",
      "RVN/USDT",
      "RSR/USDT",
      "REEF/USDT",
      "ROSE/USDT",
      "SNX/USDT",
      "SAND/USDT",
      "SOL/USDT",
      "SUSHI/USDT",
      "SRM/USDT",
      "SKL/USDT",
      "SXP/USDT",
      "STORJ/USDT",
      "TRX/USDT",
      "TOMO/USDT",
      "TRB/USDT",
      "TLM/USDT",
      "THETA/USDT",
      "UNI/USDT",
      "UNFI/USDT",
      "VET/USDT",
      "YFI/USDT",
      "ZIL/USDT",
      "ZEN/USDT",
      "ZRX/USDT",
      "ZEC/USDT",
      "WAVES/USDT",
      "XRP/USDT",
      "XLM/USDT",
      "XTZ/USDT",
      "XMR/USDT",
      "XEM/USDT",
      "QTUM/USDT",
      "1INCH/USDT"
    ],
    "pair_blacklist": ["BNB/.*"]
  },
  "pairlists": [{ "method": "StaticPairList" }],
  "edge": {
    "enabled": false,
    "process_throttle_secs": 3600,
    "calculate_since_number_of_days": 7,
    "allowed_risk": 0.01,
    "stoploss_range_min": -0.01,
    "stoploss_range_max": -0.1,
    "stoploss_range_step": -0.01,
    "minimum_winrate": 0.6,
    "minimum_expectancy": 0.2,
    "min_trade_number": 10,
    "max_trade_duration_minute": 1440,
    "remove_pumps": false
  },
  "telegram": {
    "enabled": true,
    "token": "",
    "chat_id": ""
  },
  "api_server": {
    "enabled": true,
    "listen_ip_address": "0.0.0.0",
    "listen_port": 8080,
    "verbosity": "error",
    "enable_openapi": false,
    "jwt_secret_key": "556ebba5770ae3a07e80eda0f0f2b55df102896f8a5b86459c3433c1314345c4",
    "CORS_origins": [],
    "username": "",
    "password": ""
  },
  "bot_name": "",
  "initial_state": "running",
  "force_entry_enable": false,
  "internals": {
    "process_throttle_secs": 5
  }
}



