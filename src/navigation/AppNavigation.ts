import { createStaticNavigation } from '@react-navigation/native';
import RootStack, { RootStackParamList } from './RootStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default createStaticNavigation(RootStack);
