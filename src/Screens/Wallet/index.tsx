import React from 'react';
import { Text } from 'react-native';
import Container from '../../Components/Container';
import globalStyles from '../../Theme/globalStyles';

const Wallet: React.FC = () => {
  return (
    <Container style={globalStyles.alignmentAllCenter}>
      <Text style={globalStyles.title}>Hello World! Wallet Screen</Text>
    </Container>
  );
};

export default Wallet;
