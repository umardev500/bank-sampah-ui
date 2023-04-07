import React from 'react';
import {Image, ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  sourceActive?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  focused?: boolean;
}

export const TabIcon = React.memo(
  ({source, sourceActive, style, focused}: Props) => {
    if (focused === true && sourceActive !== undefined) {
      return <Image style={style} source={sourceActive} />;
    }

    return <Image style={style} source={source} />;
  },
);
