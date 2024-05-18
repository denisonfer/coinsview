import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { customColors } from '../../Theme/globalStyles';

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container = ({ children, style }: IProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.black,
  },
});

export default Container;
