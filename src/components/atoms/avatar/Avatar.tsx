import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

interface Props {
  source: ImageSourcePropType;
  size?: number;
}

export const Avatar: React.FC<Props> = ({ source, size = 50 }) => {
  return (
    <Image
      style={{ width: size, height: size, borderRadius: size / 2 }}
      source={source}
    />
  );
};
