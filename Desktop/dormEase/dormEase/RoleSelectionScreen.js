import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RoleSelectionScreen = ({ navigation }) => {
  const handleRoleSelection = (role) => {
    if (role === 'admin') {
      // Admin goes directly to dashboard without login
      navigation.navigate('AdminDashboard');
    } else {
      // Navigate to login with the selected role
      navigation.navigate('Login', { userRole: role });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={32} color="#999" />
        </TouchableOpacity>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Welcome! How will you</Text>
          <Text style={styles.title}>use our app?</Text>
          <Text style={styles.subtitle}>Choose your role to personalize your</Text>
          <Text style={styles.subtitle}>experience</Text>
        </View>

        {/* Role Options */}
        <View style={styles.rolesContainer}>
          {/* Tenant Option */}
          <TouchableOpacity
            style={[styles.roleCard, styles.tenantCard]}
            onPress={() => handleRoleSelection('tenant')}
          >
            <View style={styles.roleIconContainer}>
              <Ionicons name="person" size={28} color="#333" />
            </View>
            <View style={styles.roleTextContainer}>
              <Text style={styles.roleTitle}>I'm a Tenant</Text>
              <Text style={styles.roleDescription}>
                Looking to find a dorm or boarding house to rent.
              </Text>
            </View>
          </TouchableOpacity>

          {/* Owner Option */}
          <TouchableOpacity
            style={[styles.roleCard, styles.ownerCard]}
            onPress={() => handleRoleSelection('owner')}
          >
            <View style={styles.roleIconContainer}>
              <Ionicons name="home" size={28} color="#333" />
            </View>
            <View style={styles.roleTextContainer}>
              <Text style={styles.roleTitle}>I'm an Owner</Text>
              <Text style={styles.roleDescription}>
                Looking to list my property and manage tenants.
              </Text>
            </View>
          </TouchableOpacity>

          {/* Admin Option */}
          <TouchableOpacity
            style={[styles.roleCard, styles.adminCard]}
            onPress={() => handleRoleSelection('admin')}
          >
            <View style={styles.roleIconContainer}>
              <Ionicons name="shield-checkmark" size={28} color="#FFFFFF" />
            </View>
            <View style={styles.roleTextContainer}>
              <Text style={[styles.roleTitle, styles.adminText]}>I'm an Admin</Text>
              <Text style={[styles.roleDescription, styles.adminText]}>
                System administrator with full access.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
    marginBottom: 30,
  },
  titleSection: {
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginTop: 15,
    lineHeight: 22,
  },
  rolesContainer: {
    gap: 20,
  },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tenantCard: {
    backgroundColor: '#D6A781',
  },
  ownerCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  adminCard: {
    backgroundColor: '#2196F3',
  },
  roleIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  roleTextContainer: {
    flex: 1,
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  roleDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  adminText: {
    color: '#FFFFFF',
  },
});

export default RoleSelectionScreen;