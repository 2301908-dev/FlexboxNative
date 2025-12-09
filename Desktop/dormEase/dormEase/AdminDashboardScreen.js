import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AdminDashboardScreen = ({ navigation }) => {
  const statsCards = [
    {
      id: 1,
      icon: 'people',
      iconColor: '#D6A781',
      value: '1,250',
      label: 'Total Users',
    },
    {
      id: 2,
      icon: 'business',
      iconColor: '#D6A781',
      value: '340',
      label: 'Active Properties',
    },
    {
      id: 3,
      icon: 'shield-checkmark',
      iconColor: '#D6A781',
      value: '15',
      label: 'Pending Verifications',
    },
    {
      id: 4,
      icon: 'document-text',
      iconColor: '#D6A781',
      value: '8',
      label: 'Spam Reports',
    },
  ];

 const quickActions = [{
  id: 1,
  icon: 'shield-checkmark',
  iconBg: '#FFE8CC',
  title: 'Verify Properties',
  onPress: () => navigation.navigate("PropertyVerification"),
},
  {
    id: 2,
    icon: 'people',
    iconBg: '#FFE8CC',
    title: 'Manage Users',
    onPress: () => navigation.navigate("ManageUsers"), 
  },
  {
    id: 3,
    icon: 'document-text',
    iconBg: '#FFE8CC',
    title: 'View Reports',
    onPress: () => navigation.navigate('DetailedSystemLogs'),
  },];

  const renderStatCard = (stat) => (
    <View key={stat.id} style={styles.statCard}>
      <View style={styles.statIcon}>
        <Ionicons name={stat.icon} size={28} color={stat.iconColor} />
      </View>
      <Text style={styles.statValue}>{stat.value}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
    </View>
  );

  const renderActionButton = (action) => (
    <TouchableOpacity
      key={action.id}
      style={styles.actionButton}
      onPress={action.onPress}
    >
      <View style={[styles.actionIcon, { backgroundColor: action.iconBg }]}>
        <Ionicons name={action.icon} size={24} color="#D6A781" />
      </View>
      <Text style={styles.actionTitle}>{action.title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin Dashboard</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {statsCards.map((stat) => renderStatCard(stat))}
        </View>

        {/* Quick Actions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsContainer}>
            {quickActions.map((action) => renderActionButton(action))}
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={28} color="#D6A781" />
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubbles-outline" size={28} color="#999" />
          <Text style={styles.navLabel}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="business-outline" size={28} color="#999" />
          <Text style={styles.navLabel}>Properties</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('AdminProfile')}
        >
          <Ionicons name="person-outline" size={28} color="#999" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingTop: 20,
    gap: 10,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statIcon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FFF5EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 13,
    color: '#D6A781',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  actionsContainer: {
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  actionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  bottomSpacer: {
    height: 30,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  navLabel: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
  activeNavLabel: {
    color: '#D6A781',
    fontWeight: '600',
  },
});

export default AdminDashboardScreen;