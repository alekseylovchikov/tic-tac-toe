import { TextProps as NativeTextProps } from 'react-native';

export type Weight = '400' | '900';

export type TextProps = {
  weight?: Weight;
} & NativeTextProps;
