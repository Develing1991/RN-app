import React from 'react';
import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../constants';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'field' | 'outlined';
  size?: 'large' | 'medium';
  invalid?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const CustomButton = ({
  label,
  variant = 'field',
  size = 'large',
  invalid = false,
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      disabled={invalid}
      style={({pressed}) => [
        styles.container,
        styles[size],
        invalid && styles.invalid,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
      ]}
      {...props}>
      <View style={styles[size]}>
        <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  invalid: {
    opacity: 0.5,
  },
  field: {
    backgroundColor: colors.PINK_700,
  },
  outlined: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },
  fieldPressed: {
    backgroundColor: colors.PINK_500,
  },
  outlinedPressed: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
    opacity: 0.5,
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 660 ? 15 : 10, //15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 660 ? 12 : 8, //12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  fieldText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.PINK_700,
  },
});

export default CustomButton;
