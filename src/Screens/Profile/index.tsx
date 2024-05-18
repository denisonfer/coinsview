import React from 'react';
import { Text } from 'react-native';
import Container from '../../Components/Container';
import globalStyles from '../../Theme/globalStyles';

const Profile: React.FC = () => {
  return (
    <Container style={globalStyles.alignmentAllCenter}>
      <Text style={globalStyles.title}>Hello World! Profile Screen</Text>
    </Container>
  );
};

export default Profile;
