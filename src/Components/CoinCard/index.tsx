import React from 'react';
import { Image, Text, View } from 'react-native';
import { TSymbolTicker } from '../../Shared/StreamsInterfaces/SymbolTickerInterface';
import { formatCurrency } from '../../Utils/formatCurrency';
import { styles } from './styles';

interface ICoinCardProps {
  symbolData: TSymbolTicker;
}

const CoinCard: React.FC<ICoinCardProps> = ({ symbolData }) => {
  if (!symbolData) {
    return null;
  }

  const { image, name, symbol, close, priceChangePercent } = symbolData;

  return (
    <View style={styles.card}>
      <Image source={{ uri: image?.small }} style={styles.image} />

      <View style={styles.nameView}>
        <Text style={styles.textHeading}>{name}</Text>
        <Text style={styles.textSubHeading}>{symbol?.toUpperCase()}</Text>
      </View>

      <View>
        <Text style={styles.textHeading}>
          {formatCurrency({ amount: parseFloat(close) || 0 })}
        </Text>
        <Text
          style={[
            styles.textSubHeading,
            { color: priceChangePercent > 0 ? 'green' : 'red' },
          ]}
        >
          {priceChangePercent || 0}%
        </Text>
      </View>
    </View>
  );
};

export default CoinCard;
