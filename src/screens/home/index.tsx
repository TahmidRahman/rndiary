/* eslint-disable react-native/no-inline-styles */
import ThemedBackground from 'components/ThemedBackground';
import ThemedButton from 'components/ThemedButton';

const Home = () => {
  return (
    <ThemedBackground>
      <ThemedButton onClick={} style={{ marginBottom: 16 }}>
        Create new entry
      </ThemedButton>
      <ThemedButton onClick={}>Today's entry</ThemedButton>
    </ThemedBackground>
  );
};

export default Home;
