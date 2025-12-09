import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BookingManagementScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('requests');

  const bookingRequests = [
    {
      id: 1,
      name: 'Michael Angelo',
      dateRange: 'Mar 15, 2025 - Sep 15, 2025',
      room: 'Room 203 - Single Occupancy',
    },
    {
      id: 2,
      name: 'Bongbong M.',
      dateRange: 'Mar 18, 2025 - July 15, 2025',
      room: 'Room 202 - Single Occupancy',
    },
    {
      id: 3,
      name: 'Zaldy Co',
      dateRange: 'Apr 27, 2025 - June 15, 2025',
      room: 'Room 201 - Single Occupancy',
    },
  ];

  const confirmedBookings = [
    {
      id: 1,
      name: 'David lee',
      checkIn: 'March 10, 2025',
      room: 'Room 302',
    },
    {
      id: 2,
      name: 'Jacky Chan',
      checkIn: 'March 12, 2025',
      room: 'Room 101',
    },
  ];

  const handleConfirm = (booking) => {
    Alert.alert(
      'Confirm Booking',
      `Confirm booking for ${booking.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            Alert.alert('Success', `Booking confirmed for ${booking.name}`);
          },
        },
      ]
    );
  };

  const handleDecline = (booking) => {
    Alert.alert(
      'Decline Booking',
      `Decline booking for ${booking.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Decline',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Declined', `Booking declined for ${booking.name}`);
          },
        },
      ]
    );
  };

  const renderBookingRequest = (booking) => (
    <View key={booking.id} style={styles.requestCard}>
      <Text style={styles.requestName}>{booking.name}</Text>
      <Text style={styles.requestDate}>{booking.dateRange}</Text>
      <Text style={styles.requestRoom}>{booking.room}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => handleConfirm(booking)}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.declineButton}
          onPress={() => handleDecline(booking)}
        >
          <Text style={styles.declineButtonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderConfirmedBooking = (booking) => (
    <View key={booking.id} style={styles.confirmedCard}>
      <Ionicons name="calendar" size={24} color="#D6A781" style={styles.confirmedIcon} />
      <View style={styles.confirmedContent}>
        <Text style={styles.confirmedName}>{booking.name}</Text>
        <Text style={styles.confirmedDetails}>
          Check-In: {booking.checkIn} - {booking.room}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
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
        <Text style={styles.headerTitle}>Booking Management</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Rooms Available</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>76%</Text>
            <Text style={styles.statLabel}>Occupancy Rate</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'requests' && styles.activeTab]}
            onPress={() => setActiveTab('requests')}
          >
            <Text style={[styles.tabText, activeTab === 'requests' && styles.activeTabText]}>
              Requests
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'confirmed' && styles.activeTab]}
            onPress={() => setActiveTab('confirmed')}
          >
            <Text style={[styles.tabText, activeTab === 'confirmed' && styles.activeTabText]}>
              Confirmed
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content based on active tab */}
        {activeTab === 'requests' ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Booking requests</Text>
            {bookingRequests.map(booking => renderBookingRequest(booking))}
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Booking Confirmations</Text>
            {confirmedBookings.map(booking => renderConfirmedBooking(booking))}
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
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 15,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 13,
    color: '#D6A781',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
    gap: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#D6A781',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#999',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  requestName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  requestDate: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  requestRoom: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#D6A781',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  declineButtonText: {
    color: '#999',
    fontSize: 15,
    fontWeight: 'bold',
  },
  confirmedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  confirmedIcon: {
    marginRight: 15,
  },
  confirmedContent: {
    flex: 1,
  },
  confirmedName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  confirmedDetails: {
    fontSize: 13,
    color: '#666',
  },
  bottomSpacer: {
    height: 30,
  },
});

export default BookingManagementScreen;