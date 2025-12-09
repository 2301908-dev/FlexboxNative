import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoleSelectionScreen from './RoleSelectionScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import DormEaseHome from './HomeScreen';
import OwnerDashboardScreen from './OwnerDashboardScreen';
import AdminDashboardScreen from './AdminDashboardScreen';
import DetailedSystemLogsScreen from './DetailedSystemLogsScreen';
import BookingManagementScreen from './BookingManagementScreen';
import RoomManagementScreen from './RoomManagementScreen';
import ReportManagementScreen from './ReportManagementScreen';
import SearchResultsScreen from './SearchResultsScreen';
import BookingPaymentScreen from './BookingPaymentScreen';
import PaymentReceiptScreen from './PaymentReceiptScreen';
import MessagesScreen from './MessagesScreen';
import ChatScreen from './ChatScreen';
import NotificationsScreen from './NotificationsScreen';
import SettingsScreen from './SettingsScreen';
import FavoritesScreen from './FavoritesScreen';
import ManageUsersScreen from './ManageUsersScreen';
import PropertyVerificationScreen from './PropertyVerificationScreen';
import VerifiedPropertiesScreen from './VerifiedPropertiesScreen';
import TenantBookingsScreen from './TenantBookingsScreen';
import TenantProfile from './TenantProfile';
import OwnerProfile from './OwnerProfile';
import AdminProfile from './AdminProfile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="RoleSelection"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="RoleSelection" 
          component={RoleSelectionScreen} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
        />
        <Stack.Screen 
          name="Home" 
          component={DormEaseHome} 
        />
        <Stack.Screen 
          name="OwnerDashboard" 
          component={OwnerDashboardScreen} 
        />
        <Stack.Screen 
          name="AdminDashboard" 
          component={AdminDashboardScreen} 
        />
        <Stack.Screen 
          name="DetailedSystemLogs" 
          component={DetailedSystemLogsScreen} 
        />
        <Stack.Screen 
          name="BookingManagement" 
          component={BookingManagementScreen} 
        />
        <Stack.Screen 
          name="RoomManagement" 
          component={RoomManagementScreen} 
        />
        <Stack.Screen 
          name="ReportManagement" 
          component={ReportManagementScreen} 
        />
        <Stack.Screen 
          name="SearchResults" 
          component={SearchResultsScreen} 
        />
        <Stack.Screen 
          name="BookingPayment" 
          component={BookingPaymentScreen} 
        />
        <Stack.Screen 
          name="PaymentReceipt" 
          component={PaymentReceiptScreen} 
        />
        <Stack.Screen 
          name="Messages" 
          component={MessagesScreen} 
        />
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} 
        />
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
        />
        <Stack.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
        />
        <Stack.Screen 
          name="ManageUsers" 
          component={ManageUsersScreen} 
        />
        <Stack.Screen 
          name="PropertyVerification" 
          component={PropertyVerificationScreen}
        />
        <Stack.Screen 
          name="VerifiedProperties" 
          component={VerifiedPropertiesScreen}
        />
        <Stack.Screen 
          name="TenantBookings" 
          component={TenantBookingsScreen} 
        />
        <Stack.Screen 
          name="TenantProfile" 
          component={TenantProfile}
        />
        <Stack.Screen 
          name="OwnerProfile" 
          component={OwnerProfile} 
        />
        <Stack.Screen 
          name="AdminProfile" 
          component={AdminProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;