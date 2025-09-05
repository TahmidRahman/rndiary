import React from 'react';
import { useContext, useReducer } from 'react';
import { useColorScheme } from 'react-native';

// @ts-ignore
const ThemeContext = React.createContext<AppSupportedTheme>();

const ThemeDispatchContext =
  // @ts-ignore
  React.createContext<React.ActionDispatch<[{ type: string }]>>();

type AppSupportedTheme = 'light' | 'dark';
const themeReducer = (
  state: AppSupportedTheme,
  action: { type: string },
): AppSupportedTheme => {
  switch (action.type) {
    case 'switch_theme':
      return state === 'dark' ? 'light' : 'dark';
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const defaultTheme = colorScheme ? colorScheme : 'light';
  const [value, dispatch] = useReducer(themeReducer, defaultTheme);
  return (
    <ThemeContext value={value}>
      <ThemeDispatchContext value={dispatch}>{children}</ThemeDispatchContext>
    </ThemeContext>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeDispatch = () => {
  return useContext(ThemeDispatchContext);
};
