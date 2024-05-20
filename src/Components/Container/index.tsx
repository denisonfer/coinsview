import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { customColors } from '../../Theme/globalStyles';

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container = ({ children, style }: IProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.baseStyle}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.black,
  },
  baseStyle: {
    flex: 1,
    backgroundColor: customColors.black,
    padding: 24,
  },
});

export default Container;
