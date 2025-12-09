import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TenantBookingsScreen = ({ navigation }) => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      dormName: 'G2J Dormitory',
      type: 'Student Dormitory',
      dateRange: 'July 25, 2025 - Dec 15, 2025',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
    },
    {
      id: 2,
      dormName: 'Campus Dormitory',
      type: 'University',
      dateRange: 'July 26, 2025 - Dec 15, 2025',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    },
  ]);

  const handleCancelPress = (booking) => {
    setSelectedBooking(booking);
    setShowCancelModal(true);
  };

  const handleConfirmCancel = () => {
    setBookings(bookings.filter(b => b.id !== selectedBooking.id));
    setShowCancelModal(false);
    Alert.alert('Booking Cancelled', `Your booking at ${selectedBooking.dormName} has been cancelled.`);
    setSelectedBooking(null);
  };

  const renderBookingCard = (booking) => (
    <View key={booking.id} style={styles.bookingCard}>
      <View style={styles.statusBadge}>
        <Text style={[
          styles.statusText,
          booking.status === 'confirmed' ? styles.confirmedStatus : styles.pendingStatus
        ]}>
          {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
        </Text>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.bookingInfo}>
          <Text style={styles.dormName}>{booking.dormName}</Text>
          <Text style={styles.dormType}>{booking.type}</Text>
          <Text style={styles.dateRange}>{booking.dateRange}</Text>
        </View>

        <Image source={{ uri: booking.image }} style={styles.dormImage} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.viewButton}
          onPress={() => console.log('View details')}
        >
          <Text style={styles.viewButtonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => handleCancelPress(booking)}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
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
        <Text style={styles.headerTitle}>Bookings</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Confirmed Section */}
        {bookings.filter(b => b.status === 'confirmed').length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Confirmed</Text>
            {bookings
              .filter(b => b.status === 'confirmed')
              .map(booking => renderBookingCard(booking))}
          </View>
        )}

        {/* Pending Section */}
        {bookings.filter(b => b.status === 'pending').length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pending</Text>
            {bookings
              .filter(b => b.status === 'pending')
              .map(booking => renderBookingCard(booking))}
          </View>
        )}

        {bookings.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="calendar-outline" size={80} color="#DDD" />
            <Text style={styles.emptyStateTitle}>No Bookings Yet</Text>
            <Text style={styles.emptyStateText}>
              Your bookings will appear here once you make a reservation
            </Text>
          </View>
        )}

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Cancel Confirmation Modal */}
      <Modal
        visible={showCancelModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCancelModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Are you sure you want to cancel Booking?</Text>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.modalYesButton}
                onPress={handleConfirmCancel}
              >
                <Text style={styles.modalYesText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalNoButton}
                onPress={() => setShowCancelModal(false)}
              >
                <Text style={styles.modalNoText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={28} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Messages')}
        >
          <Ionicons name="mail-outline" size={28} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="list" size={28} color="#D6A781" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Favorites')}
        >
          <Ionicons name="bookmark-outline" size={28} color="#999" />
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
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
  },
  bookingCard: {
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
  statusBadge: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  confirmedStatus: {
    color: '#4CAF50',
  },
  pendingStatus: {
    color: '#FF9800',
  },
  cardContent: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bookingInfo: {
    flex: 1,
    paddingRight: 10,
  },
  dormName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  dormType: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  dateRange: {
    fontSize: 13,
    color: '#999',
  },
  dormImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  viewButton: {
    flex: 1,
    backgroundColor: '#D6A781',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#999',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  emptyStateText: {
    fontSize: 15,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomSpacer: {
    height: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    width: '100%',
    maxWidth: 350,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalYesButton: {
    flex: 1,
    backgroundColor: '#D6A781',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalYesText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalNoButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  modalNoText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  navItem: {
    padding: 5,
  },
});

export default TenantBookingsScreen;