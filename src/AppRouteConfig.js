 import { StackNavigator } from 'react-navigation';
import LoginPage from './LoginPage';
import UserDetail from './UserDetailScreen';

 const AppRouteConfig = StackNavigator({
  Login: { screen: LoginPage },
  Detail: { screen: UserDetail },
});

export default AppRouteConfig;
