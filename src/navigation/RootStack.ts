import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/Home';
import CreateScreen from '@/screens/Entry/Create';
import ViewScreen from '@/screens/Entry/View';

export type RootStackParamList = {
  Home: undefined;
  Create: undefined;
  View: { date: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Home: HomeScreen,
    Create: CreateScreen,
    View: ViewScreen,
  },
});

export default RootStack;
