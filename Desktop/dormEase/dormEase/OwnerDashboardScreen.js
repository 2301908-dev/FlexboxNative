import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OwnerDashboardScreen = ({ navigation }) => {
  const managementCards = [
    {
      id: 1,
      title: 'Booking Management',
      icon: 'calendar',
      iconBg: '#FFE8CC',
      iconColor: '#FF9800',
      stats: '5 upcoming check-ins this month',
      action: 'View',
      screen: 'BookingManagement',
    },
    {
      id: 2,
      title: 'Room Management',
      icon: 'bed',
      iconBg: '#E8F5E9',
      iconColor: '#4CAF50',
      stat1: '8 of 10 Rooms Occupied',
      stat2: '2 Rooms available for booking',
      action: 'View',
      screen: 'RoomManagement',
    },
    {
      id: 3,
      title: 'Report Management',
      icon: 'document-text',
      iconBg: '#E3F2FD',
      iconColor: '#2196F3',
      stats: 'Monthly Revenue so far',
      amount: '12k',
      action: 'View',
      screen: 'ReportManagement',
    },
  ];

  const renderManagementCard = (card) => (
    <View key={card.id} style={styles.managementCard}>
      <View style={styles.cardHeader}>
        <View style={[styles.cardIcon, { backgroundColor: card.iconBg }]}>
          <Ionicons name={card.icon} size={24} color={card.iconColor} />
        </View>
        <Text style={styles.cardTitle}>{card.title}</Text>
      </View>

      <View style={styles.cardContent}>
        {card.stats && (
          <Text style={styles.statsText}>{card.stats}</Text>
        )}
        {card.stat1 && (
          <>
            <Text style={styles.statsText}>{card.stat1}</Text>
            <Text style={styles.statsText}>{card.stat2}</Text>
          </>
        )}
        {card.amount && (
          <Text style={styles.amountText}>{card.amount}</Text>
        )}
      </View>

      <TouchableOpacity 
        style={styles.viewButton}
        onPress={() => navigation.navigate(card.screen)}
      >
        <Text style={styles.viewButtonText}>{card.action}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('./hut.png')} 
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Text style={styles.greeting}>Hello, Owner!</Text>
        
        {/* Rental Activity Link */}
        <TouchableOpacity style={styles.activityLink}>
          <Text style={styles.activityLinkText}>View Dormitory - </Text>
          <Text style={[styles.activityLinkText, styles.linkHighlight]}>
            Open for Bookings
          </Text>
        </TouchableOpacity>

        {/* Management Cards */}
        <View style={styles.cardsContainer}>
          {managementCards.map((card) => renderManagementCard(card))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={28} color="#D6A781" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Messages')}
        >
          <Ionicons name="mail-outline" size={28} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="add-circle" size={28} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate("OwnerProfile")}
        >
        <Ionicons name="person-outline" size={28} color="#999" />
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
    paddingVertical: 50,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  activityLink: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  activityLinkText: {
    fontSize: 14,
    color: '#666',
  },
  linkHighlight: {
    color: '#D6A781',
    fontWeight: '600',
  },
  cardsContainer: {
    gap: 15,
  },
  managementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardIcon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  cardContent: {
    marginBottom: 15,
  },
  statsText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 5,
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  viewButton: {
    backgroundColor: '#D6A781',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-end',
    minWidth: 80,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    height: 30,
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

export default OwnerDashboardScreen;