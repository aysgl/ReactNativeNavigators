import 'react-native-gesture-handler';
import BottomNavigation from './src/components/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/components/DrawerNavigation';
import {StatusBar} from 'react-native';
import Navigation from './src/components/Navigation';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        {/* <Navigation /> */}
        <DrawerNavigation />
        {/* <BottomNavigation /> */}
      </NavigationContainer>
    </>
  );
}

export default App;
