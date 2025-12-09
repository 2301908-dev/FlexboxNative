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

const NotificationsScreen = ({ navigation }) => {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'booking',
      icon: 'calendar',
      iconBg: '#FFE8CC',
      iconColor: '#FF9800',
      title: 'New Booking Request',
      subtitle: 'Tenant wants to visit on Jan 15, 2025',
      time: 'Today',
      hasAction: true,
      unread: true,
    },
    {
      id: 2,
      type: 'message',
      icon: 'mail',
      iconBg: '#E3F2FD',
      iconColor: '#2196F3',
      title: 'New Message',
      subtitle: 'From John',
      time: 'Today',
      hasAction: true,
      unread: true,
    },
    {
      id: 3,
      type: 'payment',
      icon: 'cash',
      iconBg: '#E8F5E9',
      iconColor: '#4CAF50',
      title: 'Payment Received',
      subtitle: '',
      time: 'Yesterday',
      hasAction: false,
      unread: false,
    },
    {
      id: 4,
      type: 'message',
      icon: 'mail',
      iconBg: '#E3F2FD',
      iconColor: '#2196F3',
      title: 'New Message',
      subtitle: 'From Mary',
      time: 'Last 7 Days',
      hasAction: false,
      unread: false,
    },
    {
      id: 5,
      type: 'message',
      icon: 'mail',
      iconBg: '#E3F2FD',
      iconColor: '#2196F3',
      title: 'New Message',
      subtitle: 'From Peter',
      time: 'Last 7 Days',
      hasAction: false,
      unread: false,
    },
  ];

  // Group notifications by time
  const groupedNotifications = {
    today: notifications.filter(n => n.time === 'Today'),
    yesterday: notifications.filter(n => n.time === 'Yesterday'),
    last7Days: notifications.filter(n => n.time === 'Last 7 Days'),
  };

  const handleNotificationPress = (notification) => {
    if (notification.type === 'message') {
      navigation.navigate('Messages');
    } else if (notification.type === 'booking') {
      // Navigate to bookings or show details
      console.log('Navigate to booking details');
    } else if (notification.type === 'payment') {
      // Navigate to payment history
      console.log('Navigate to payment history');
    }
  };

  const renderNotificationItem = (notification) => (
    <TouchableOpacity
      key={notification.id}
      style={[
        styles.notificationItem,
        notification.unread && styles.unreadNotification
      ]}
      onPress={() => handleNotificationPress(notification)}
    >
      <View style={[styles.iconContainer, { backgroundColor: notification.iconBg }]}>
        <Ionicons name={notification.icon} size={24} color={notification.iconColor} />
      </View>

      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{notification.title}</Text>
        {notification.subtitle ? (
          <Text style={styles.notificationSubtitle}>{notification.subtitle}</Text>
        ) : null}
      </View>

      {notification.hasAction && (
        <View style={styles.unreadDot} />
      )}
    </TouchableOpacity>
  );

  const renderSection = (title, notifications) => {
    if (notifications.length === 0) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.notificationsList}>
          {notifications.map(notification => renderNotificationItem(notification))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderSection('TODAY', groupedNotifications.today)}
        {renderSection('YESTERDAY', groupedNotifications.yesterday)}
        {renderSection('LAST 7 DAYS', groupedNotifications.last7Days)}

        {notifications.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="notifications-off-outline" size={80} color="#DDD" />
            <Text style={styles.emptyStateText}>No notifications yet</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 38,
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#999',
    marginLeft: 20,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  notificationsList: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  unreadNotification: {
    backgroundColor: '#FFFBF5',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#999',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF5252',
    marginLeft: 10,
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

export default NotificationsScreen;