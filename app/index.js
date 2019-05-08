import { Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator }  from 'react-navigation';

const mainApp = createDrawerNavigator({
    Home: {
        screen: () => <Text>Home Screen</Text>,
    },
});

const mainStack = createStackNavigator({
    home: () => (<Text>Stack</Text>)
},
{
    initialRouteName: 'home',
}
);

export default createAppContainer(mainStack);

