import React from 'react';
import { Text } from 'react-native';
import Container from '../../Components/Container';
import globalStyles from '../../Theme/globalStyles';

const Dashboard: React.FC = () => {
  return (
    <Container style={globalStyles.alignmentAllCenter}>
      <Text style={globalStyles.title}>Dashboard</Text>
    </Container>
  );
};

export default Dashboard;
