import { AntDesign } from '@expo/vector-icons';
import React from 'react';

interface IProps {
  name: string;
  size: number;
  focused: boolean;
  tintColor: string;
}

const TabBarIcon = ({ focused, name, size, tintColor }: IProps) => {
  return <AntDesign name={name} size={size ? size : 24} color={tintColor} />;
};

export default TabBarIcon;
