/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ThemedButton from '@/components/ThemedButton';
import { ThemeProvider } from 'ctx/theme';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <ThemedButton onClick={console.log}>Click me</ThemedButton>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
