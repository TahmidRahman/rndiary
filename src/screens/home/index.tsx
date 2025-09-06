/* eslint-disable react-native/no-inline-styles */
import ThemedBackground from 'components/ThemedBackground';
import ThemedButton from 'components/ThemedButton';
import { useNavigation } from '@react-navigation/native';
import { useTheme, useThemeDispatch } from '@/ctx/theme';
import ThemedText from 'components/ThemeText';

const TODAYS_DATE = new Date().toISOString().split('T')[0];

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useThemeDispatch();
  return (
    <ThemedBackground>
      <ThemedText>{`Current theme: ${theme}`}</ThemedText>
      <ThemedButton
        onClick={() => dispatch({ type: 'switch_theme' })}
        style={{ marginBottom: 16 }}
      >
        Switch theme
      </ThemedButton>
      <ThemedButton
        onClick={() => navigation.navigate('Create')}
        style={{ marginBottom: 16 }}
      >
        Create new entry
      </ThemedButton>
      <ThemedButton
        onClick={() => navigation.navigate('View', { date: TODAYS_DATE })}
      >
        Today's entry
      </ThemedButton>
    </ThemedBackground>
  );
};

export default Home;
