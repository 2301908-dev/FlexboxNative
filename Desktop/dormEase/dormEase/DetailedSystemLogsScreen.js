import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetailedSystemLogsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const systemLogs = [
    {
      id: 1,
      icon: 'checkmark-circle',
      iconColor: '#4CAF50',
      iconBg: '#E8F5E9',
      title: 'User Login Success',
      description: 'Successful login from IP 192.168.11',
      userId: 'User ID: 101(Admin)',
    },
    {
      id: 2,
      icon: 'checkmark-circle',
      iconColor: '#4CAF50',
      iconBg: '#E8F5E9',
      title: 'User Login Success',
      description: 'Updated details for Dorm ID:582',
      userId: 'User ID: 101(Admin)',
    },
    {
      id: 3,
      icon: 'close-circle',
      iconColor: '#F44336',
      iconBg: '#FFEBEE',
      title: 'User Login Success',
      description: 'Transaction failed for booking',
      userId: 'User ID:204(Client)',
    },
    {
      id: 4,
      icon: 'add-circle',
      iconColor: '#2196F3',
      iconBg: '#E3F2FD',
      title: 'User Login Success',
      description: 'A new user account was created',
      userId: 'User ID: 204(Client)',
    },
    {
      id: 5,
      icon: 'warning',
      iconColor: '#FF9800',
      iconBg: '#FFF3E0',
      title: 'User Login Success',
      description: 'Password reset initiated from IP 192.168.115',
      userId: 'User ID:101(Admin)',
    },
    {
      id: 6,
      icon: 'trash',
      iconColor: '#F44336',
      iconBg: '#FFEBEE',
      title: 'User Login Success',
      description: 'Account permanently removed',
      userId: 'User ID:154(Client)',
    },
  ];

  const filteredLogs = systemLogs.filter(log =>
    log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.userId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderLogItem = (log) => (
    <View key={log.id} style={styles.logItem}>
      <View style={[styles.iconContainer, { backgroundColor: log.iconBg }]}>
        <Ionicons name={log.icon} size={28} color={log.iconColor} />
      </View>
      <View style={styles.logContent}>
        <Text style={styles.logTitle}>{log.title}</Text>
        <Text style={styles.logDescription}>{log.description}</Text>
        <Text style={styles.logUserId}>{log.userId}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detailed System Logs</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by user, action, or details"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {filteredLogs.length > 0 ? (
          <View style={styles.logsContainer}>
            {filteredLogs.map(log => renderLogItem(log))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={80} color="#DDD" />
            <Text style={styles.emptyStateText}>No logs found</Text>
          </View>
        )}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 38,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  logsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  logContent: {
    flex: 1,
  },
  logTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  logDescription: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
    lineHeight: 18,
  },
  logUserId: {
    fontSize: 12,
    color: '#999',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#999',
    marginTop: 15,
  },
  bottomSpacer: {
    height: 30,
  },
});

export default DetailedSystemLogsScreen;    