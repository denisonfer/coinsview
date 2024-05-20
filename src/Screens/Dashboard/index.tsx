import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-wagmi-charts';

import Chip from '../../Components/Chips';
import { IChipOption } from '../../Components/Chips/interfaces';
import CoinCard from '../../Components/CoinCard';
import Container from '../../Components/Container';
import { fetchCoinData } from '../../Services/coinsService';
import { coinMapping } from '../../Shared/CoinsMapping';
import {
  ICoinByIdResponse,
  ISymbolTicker,
} from '../../Shared/StreamsInterfaces/SymbolTickerInterface';
import globalStyles, { customColors } from '../../Theme/globalStyles';
import { formatCurrency } from '../../Utils/formatCurrency';

const Dashboard: React.FC = () => {
  const symbol: keyof typeof coinMapping = 'btcusdt';

  const [tickerData, setTickerData] = useState<ISymbolTicker>(
    {} as ISymbolTicker
  );
  const [symbolInfo, setSymbolInfo] = useState<ICoinByIdResponse>(
    {} as ICoinByIdResponse
  );

  const [chipOptions, setChipOptions] = useState<IChipOption[]>([
    { id: 1, name: 'Favoritos', isActive: true },
    { id: 2, name: 'Popular', isActive: false },
    { id: 3, name: 'Top Vencedores', isActive: false },
    { id: 4, name: 'Top Perdedores', isActive: false },
  ]);

  useEffect(() => {
    const socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@ticker`
    );

    const openListener = () => {
      console.log('socket opened');
    };

    const messageListener = (event: { data: string }) => {
      const tickerData = JSON.parse(event.data);
      if (tickerData) {
        setTickerData({
          priceChange: parseFloat(tickerData.p),
          priceChangePercent: parseFloat(tickerData.P),
          close: tickerData.c,
          high: tickerData.h,
          low: tickerData.l,
          quoteVolume: tickerData.q,
          timestamp: tickerData.E,
        });
      }
    };

    const errorListener = (event: Event & { error?: Error }) => {
      const error = event.error || new Error('Unknown error');
      console.error('socket error:', error);
    };

    const closeListener = () => {
      console.log('socket closed');
    };

    socket.onopen = openListener;
    socket.onmessage = messageListener;
    socket.onerror = errorListener;
    socket.onclose = closeListener;

    return () => {
      socket.close();
    };
  }, [symbol]);

  useEffect(() => {
    async function getCoinInfo() {
      const data = await fetchCoinData(symbol);
      setSymbolInfo(data);
    }

    getCoinInfo();
  }, [symbol]);

  const handleChipPress = (id: number) => {
    setChipOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        isActive: option.id === id ? !option.isActive : false,
      }))
    );
  };

  const data = [
    {
      timestamp: 1716172303798,
      value: Number('66657.75000000'),
    },
    {
      timestamp: 1716172304553,
      value: Number('66657.75'),
    },
    {
      timestamp: 1716172332803,
      value: Number('66674.98000000'),
    },
    {
      timestamp: 1716172335791,
      value: Number('66675.00000000'),
    },
    // continue with the rest of the data with random values
    {
      timestamp: 1716172335791,
      value: Number('66675.00000000'),
    },
    {
      timestamp: 1716172303798,
      value: Number('66657.75000000'),
    },
    {
      timestamp: 1716172304553,
      value: Number('66657.75'),
    },
    {
      timestamp: 1716172332803,
      value: Number('66674.98000000'),
    },
    {
      timestamp: 1716172335791,
      value: Number('66675.00000000'),
    },
    // continue with the rest of the data with random values
    {
      timestamp: 1716172335791,
      value: Number('66675.00000000'),
    },
    {
      timestamp: 1716172303798,
      value: Number('66657.75000000'),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: customColors.black }}>
      <View style={styles.header}>
        <LinearGradient
          colors={[customColors.primaryLight, customColors.purple]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={[globalStyles.title, { marginTop: 'auto' }]}>
            Seu saldo
          </Text>
          <Text style={globalStyles.title}>
            {formatCurrency({ amount: 2610.5 })}
          </Text>
        </LinearGradient>
      </View>
      <Container>
        <Chip chipOptions={chipOptions} onPress={handleChipPress} />

        <CoinCard symbolData={{ ...tickerData, ...symbolInfo }} />

        <LineChart.Provider data={data}>
          <LineChart width={Dimensions.get('window').width - 60} height={320}>
            <LineChart.Path color={customColors.primaryLight}>
              <LineChart.Gradient color={customColors.primaryLight} />
              <LineChart.HorizontalLine
                at={{ index: 0 }}
                color={customColors.stormGrey}
              />
            </LineChart.Path>
            <LineChart.CursorCrosshair color={customColors.snowWhite}>
              <LineChart.Dot color='red' at={1} />
              <LineChart.Tooltip
                textStyle={{ color: customColors.stormGrey }}
              />
            </LineChart.CursorCrosshair>
          </LineChart>
        </LineChart.Provider>

        {/*  <VictoryChart theme={VictoryTheme.material}>
		 <VictoryLine
			 style={{
				 data: { stroke: '#c43a31' },
				 parent: { border: '1px solid #ccc' },
			 }}
			 data={tickerData}
			 animate={{
				 duration: 1000,
				 onLoad: { duration: 1000 },
			 }}
		 />
	 </VictoryChart> */}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    height: 300,
    width: Dimensions.get('screen').width,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'red',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 24,
    paddingBottom: 24,
  },
});

export default Dashboard;
