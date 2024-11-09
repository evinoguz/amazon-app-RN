import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{
            headerShown: true,
            headerTitle: 'Results',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              marginLeft: -20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
