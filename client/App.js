import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Screens/Dashboard/Dashboard';
import Profile from './Screens/Profile/Profile';
import Practice from './Screens/Practice/Practice';
import Grievance from './Screens/Grievance/Grievance';
import DriveDetails from './Screens/Drive/DriveDetails';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Drives">
        <Drawer.Screen name="Drives" component={Dashboard} />
        <Drawer.Screen name="Announcements" component={Practice} />
        <Drawer.Screen name="Grievances" component={Grievance} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="DriveDetails" component={DriveDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}