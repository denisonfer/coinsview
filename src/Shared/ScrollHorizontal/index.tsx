import React from 'react';
import { ScrollView, View } from 'react-native';
import globalStyles from '../../Theme/globalStyles';

type ScrollHorizontalProps = {
  children: React.ReactNode;
};

const ScrollHorizontal: React.FC<ScrollHorizontalProps> = ({ children }) => {
  return (
    <View style={[globalStyles.row, { flexWrap: 'wrap' }]}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default ScrollHorizontal;
