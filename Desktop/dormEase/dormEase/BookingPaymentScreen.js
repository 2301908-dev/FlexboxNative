import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BookingPaymentScreen = ({ navigation, route }) => {
  const { dorm } = route.params || {};
  
  // Default dorm data if none provided
  const dormData = dorm || {
    name: 'G2J Dormitory',
    type: 'Student Dormitory',
    location: '548, Gulod Labac, Batangas City',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
  };

  const [selectedPayment, setSelectedPayment] = useState(null);

  const costBreakdown = [
    { label: 'Rent(1 month)', amount: 4000 },
    { label: 'Security Deposit (refundable)', amount: 700 },
    { label: 'One-time Service Fee', amount: 100 },
  ];

  const totalAmount = costBreakdown.reduce((sum, item) => sum + item.amount, 0);

  const paymentMethods = [
    { id: 'gcash', name: 'GCash', icon: 'logo-google', color: '#007DFF' },
    { id: 'grabpay', name: 'GrabPay', icon: 'card', color: '#00B14F' },
    { id: 'visa', name: 'Visa', icon: 'card', color: '#1A1F71' },
    { id: 'mastercard', name: 'Mastercard', icon: 'card', color: '#EB001B' },
  ];

  const handleConfirmPayment = () => {
    if (!selectedPayment) {
      Alert.alert('Payment Required', 'Please select a payment method to continue.');
      return;
    }

    // Generate transaction ID
    const transactionId = 'TK' + Math.floor(Math.random() * 1000000000) + 'EO';

    // Navigate to receipt screen
    navigation.navigate('PaymentReceipt', {
      dorm: dormData,
      paymentMethod: selectedPayment,
      totalAmount: totalAmount,
      transactionId: transactionId,
    });
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
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Dorm Info */}
        <View style={styles.dormInfoCard}>
          <Text style={styles.dormName}>{dormData.name}</Text>
          <Text style={styles.dormType}>{dormData.type}</Text>
          
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color="#D6A781" />
            <Text style={styles.locationText}>{dormData.location}</Text>
          </View>

          <Image source={{ uri: dormData.image }} style={styles.dormImage} />
        </View>

        {/* Cost Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cost Breakdown</Text>
          
          <View style={styles.costCard}>
            {costBreakdown.map((item, index) => (
              <View key={index} style={styles.costRow}>
                <Text style={styles.costLabel}>{item.label}</Text>
                <Text style={styles.costAmount}>₱ {item.amount.toLocaleString()}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Total Amount */}
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalAmount}>₱{totalAmount.toLocaleString()}</Text>
        </View>

        {/* Payment Methods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accepted Payment Methods</Text>
          
          <View style={styles.paymentMethodsContainer}>
            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                style={[
                  styles.paymentButton,
                  selectedPayment === method.name && styles.paymentButtonSelected
                ]}
                onPress={() => setSelectedPayment(method.name)}
              >
                <View style={[styles.paymentIcon, { backgroundColor: method.color }]}>
                  <Ionicons name={method.icon} size={24} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity
              style={[
                styles.securePaymentButton,
                selectedPayment === 'Secure' && styles.paymentButtonSelected
              ]}
              onPress={() => setSelectedPayment('Secure')}
            >
              <Ionicons name="lock-closed" size={20} color="#4CAF50" />
              <Text style={styles.secureText}>Secure</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleConfirmPayment}
        >
          <Text style={styles.confirmButtonText}>Confirm & Pay</Text>
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
  placeholder: {
    width: 38,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  dormInfoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dormName: {
    fontSize: 20,
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  costCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  costLabel: {
    fontSize: 15,
    color: '#666',
    flex: 1,
  },
  costAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D6A781',
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentButton: {
    width: 70,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  paymentButtonSelected: {
    borderColor: '#D6A781',
    backgroundColor: '#FFF8F0',
  },
  paymentIcon: {
    width: 50,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  securePaymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    gap: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  secureText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4CAF50',
  },
  confirmButton: {
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
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    height: 30,
  },
});

export default BookingPaymentScreen;