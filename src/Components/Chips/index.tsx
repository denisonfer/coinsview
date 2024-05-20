import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ScrollHorizontal from '../../Shared/ScrollHorizontal';
import { customColors } from '../../Theme/globalStyles';
import { IChipOption } from './interfaces';

interface IChipProps {
  chipOptions: IChipOption[];
  onPress: (id: number) => void;
}

const Chip: React.FC<IChipProps> = ({ chipOptions, onPress }) => {
  const renderChip = (option: IChipOption) => (
    <TouchableOpacity
      key={option.id}
      onPress={() => onPress(option.id)}
      style={[
        styles.chip,
        {
          backgroundColor: option.isActive
            ? customColors.primaryDark
            : customColors.darkGrey,
        },
      ]}
    >
      <Text
        style={{
          color: option.isActive
            ? customColors.snowWhite
            : customColors.stormGrey,
        }}
      >
        {option.name}
      </Text>
    </TouchableOpacity>
  );

  return <ScrollHorizontal>{chipOptions.map(renderChip)}</ScrollHorizontal>;
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 5,
  },
});

export default Chip;
