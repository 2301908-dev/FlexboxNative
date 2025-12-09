import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentReceiptScreen = ({ navigation, route }) => {
  const { dorm, paymentMethod, totalAmount, transactionId } = route.params || {};
  
  // Default data if none provided
  const receiptData = {
    dorm: dorm || {
      name: 'G2J Dormitory',
      type: 'Student Dormitory',
      location: '548, Gulod Labac, Batangas City',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
    },
    totalAmount: totalAmount || 4800,
    paymentMethod: paymentMethod || 'Gcash',
    date: new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }),
    transactionId: transactionId || 'TK246790483EO',
    bookingReference: 'GTC-BK-20241204',
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Payment Receipt\n\nDorm: ${receiptData.dorm.name}\nAmount: ₱${receiptData.totalAmount.toLocaleString()}\nDate: ${receiptData.date}\nTransaction ID: ${receiptData.transactionId}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleDone = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#666" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Booking & Payment</Text>
          <Text style={styles.headerSubtitle}>Details</Text>
        </View>
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <Ionicons name="share-outline" size={24} color="#D6A781" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Success Icon */}
        <View style={styles.successContainer}>
          <View style={styles.successIconCircle}>
            <Ionicons name="checkmark" size={50} color="#FFFFFF" />
          </View>
          <Text style={styles.successTitle}>Payment Successful</Text>
          <Text style={styles.successSubtitle}>Thank you for your booking</Text>
        </View>

        {/* Receipt Card */}
        <View style={styles.receiptCard}>
          <Text style={styles.receiptTitle}>Receipt</Text>

          <View style={styles.receiptRow}>
            <Text style={styles.receiptLabel}>Total Amount Paid</Text>
            <Text style={styles.receiptValue}>₱ {receiptData.totalAmount.toLocaleString()}</Text>
          </View>

          <View style={styles.receiptRow}>
            <Text style={styles.receiptLabel}>Date</Text>
            <Text style={styles.receiptValue}>{receiptData.date}</Text>
          </View>

          <View style={styles.receiptRow}>
            <Text style={styles.receiptLabel}>Payment Method</Text>
            <Text style={styles.receiptValue}>{receiptData.paymentMethod}</Text>
          </View>

          <View style={styles.receiptRow}>
            <Text style={styles.receiptLabel}>Booking Reference</Text>
            <Text style={styles.receiptValue}>{receiptData.bookingReference}</Text>
          </View>

          <View style={styles.receiptRow}>
            <Text style={styles.receiptLabel}>Transaction ID</Text>
            <Text style={styles.receiptValueSmall}>{receiptData.transactionId}</Text>
          </View>
        </View>

        {/* Booking Details */}
        <View style={styles.bookingSection}>
          <Text style={styles.bookingTitle}>Booking Details</Text>

          <View style={styles.dormCard}>
            <Text style={styles.dormName}>{receiptData.dorm.name}</Text>
            <Text style={styles.dormType}>{receiptData.dorm.type}</Text>
            
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={16} color="#D6A781" />
              <Text style={styles.locationText}>{receiptData.dorm.location}</Text>
            </View>

            <Image 
              source={{ uri: receiptData.dorm.image }} 
              style={styles.dormImage} 
            />
          </View>
        </View>

        {/* Done Button */}
        <TouchableOpacity 
          style={styles.doneButton}
          onPress={handleDone}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>

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
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  shareButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  successContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  successIconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  successSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  receiptCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  receiptTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  receiptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  receiptLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  receiptValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'right',
  },
  receiptValueSmall: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'right',
    flex: 1,
  },
  bookingSection: {
    marginBottom: 20,
  },
  bookingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  dormCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dormName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  dormType: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 5,
  },
  locationText: {
    fontSize: 13,
    color: '#666',
    flex: 1,
  },
  dormImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  doneButton: {
    backgroundColor: '#D6A781',
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    height: 30,
  },
});

export default PaymentReceiptScreen;