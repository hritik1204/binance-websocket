import React, { useState, createContext, useContext, useEffect } from "react";

const Token = createContext();

const Context = ({ children }) => {
  const tokens = [
    {
      name: "Bitcoin",
      ticker: "BTCUSDT",
      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    },
    {
      name: "Ethereum",
      ticker: "ETHUSDT",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
      name: "Matic",
      ticker: "MATICUSDT",
      logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    },
    {
      name: "Binance Coin",
      ticker: "BNBUSDT",
      logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    },
    {
      name: "XRP",
      ticker: "XRPUSDT",
      logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    },
    {
      name: "Solana",
      ticker: "SOLUSDT",
      logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    },
    {
      name: "Dogecoin",
      ticker: "DOGEUSDT",
      logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    },
    {
      name: "Cardano",
      ticker: "ADAUSDT",
      logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    },
    {
      name: "Chainlink",
      ticker: "LINKUSDT",
      logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    },
    {
      name: "Litecoin",
      ticker: "LTCUSDT",
      logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    },
    {
      name: "Polkadot",
      ticker: "DOTUSDT",
      logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    },
    {
      name: "Stellar",
      ticker: "XLMUSDT",
      logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
    },
    {
      name: "Uniswap",
      ticker: "UNIUSDT",
      logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    },
    {
      name: "Avalanche",
      ticker: "AVAXUSDT",
      logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    },
    {
      name: "Bitcoin Cash",
      ticker: "BCHUSDT",
      logo: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png",
    },
    {
      name: "Cosmos",
      ticker: "ATOMUSDT",
      logo: "https://cryptologos.cc/logos/cosmos-atom-logo.png",
    },
    {
      name: "EOS",
      ticker: "EOSUSDT",
      logo: "https://cryptologos.cc/logos/eos-eos-logo.png",
    },
    {
      name: "FTX Token",
      ticker: "FTTUSDT",
      logo: "https://cryptologos.cc/logos/ftx-token-ftt-logo.png",
    },
    {
      name: "TRON",
      ticker: "TRXUSDT",
      logo: "https://cryptologos.cc/logos/tron-trx-logo",
    },
    {
      name: "ADA",
      ticker: "ADAUSDT",
      logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=014",
    },

    // Add more tokens here
  ];

  const [selectedToken, setSelectedToken] = useState(tokens[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [price, setPrice] = useState(null);
  const [amount, setAmount] = useState(0);
  const [totalToken, setTotalToken] = useState(0);
  const [socket, setSocket] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTokenChange = (event) => {
    const selectedTicker = event.target.value;
    const newToken = tokens.find((token) => token.ticker === selectedTicker);
    setSelectedToken(newToken);
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);

    // setTotalToken(event.target.value);
  };
  const filteredTokens = searchQuery
    ? tokens
        .filter((token) =>
          token.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : tokens.slice(0, 6);

  // console.log(filteredTokens[0].logo);

  const handleSocketMessage = (event) => {
    const data = JSON.parse(event.data);
    const newData = (data.c * 81).toFixed(0);
    setPrice(newData);
  };

  const handleSocketClose = () => {
    setPrice(null);
    setSocket(null);
  };

  const handleTokenSelect = (ticker, logo) => {
    console.log(logo);
    setSelectedToken(
      tokens.find((token) => token.ticker === ticker || token.logo === logo)
    );
    setModalOpen(false);
  };

  useEffect(() => {
    if (socket) {
      socket.close();
    }

    const newSocket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${selectedToken.ticker.toLowerCase()}@ticker`
    );
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [selectedToken]);

  useEffect(() => {
    if (socket) {
      socket.onmessage = handleSocketMessage;
      socket.onclose = handleSocketClose;
    }
  }, [socket]);

  return (
    <Token.Provider
      value={{
        selectedToken,
        setSelectedToken,
        modalOpen,
        setModalOpen,
        price,
        setPrice,
        socket,
        setSocket,
        searchQuery,
        setSearchQuery,
        handleTokenChange,
        handleModalOpen,
        handleModalClose,
        handleSearchChange,
        filteredTokens,
        handleSocketMessage,
        handleSocketClose,
        handleTokenSelect,
        amount,
        handleAmountChange,
        totalToken,
      }}
    >
      {children}
    </Token.Provider>
  );
};

export default Context;
export const TokenState = () => {
  return useContext(Token);
};
