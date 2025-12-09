import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchResultsScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState(route?.params?.query || 'Dormitory near Batangas City');

  // Sample dormitory data - Replace with your actual data
  const dormitories = [
    {
      id: 1,
      name: 'G2J Dormitory',
      type: 'Student Dormitory',
      location: '548, Gulod Labac, Batangas City',
      price: '₱4,800/month',
      rating: 4,
      status: 'Open For Booking',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
    },
    {
      id: 2,
      name: 'HomeNest Dorm',
      type: 'Student Dormitory',
      location: '262, Lawas, Batangas City',
      price: '₱5,500-7,000/month',
      rating: 4,
      status: 'Open For Booking',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    },
    {
      id: 3,
      name: 'Campus Haven',
      type: 'Student Dormitory',
      location: '123, Kumintang Ibaba, Batangas City',
      price: '₱3,500/month',
      rating: 5,
      status: 'Open For Booking',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
    },
    {
      id: 4,
      name: 'University Lofts',
      type: 'Premium Dormitory',
      location: '456, Alangilan, Batangas City',
      price: '₱6,000/month',
      rating: 5,
      status: 'Open For Booking',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400',
    },
    {
      id: 5,
      name: 'EBM Dormitory',
      type: 'Student Dormitory',
      location: '789, Bolbok, Batangas City',
      price: '₱4,200/month',
      rating: 3,
      status: 'Open For Booking',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={16}
          color="#FFD700"
        />
      );
    }
    return <View style={styles.starsContainer}>{stars}</View>;
  };

  const renderDormCard = (dorm) => (
    <View key={dorm.id} style={styles.dormCard}>
      <View style={styles.dormHeader}>
        <View style={styles.dormHeaderText}>
          <Text style={styles.dormName}>{dorm.name}</Text>
          <Text style={styles.dormType}>{dorm.type}</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{dorm.status}</Text>
        </View>
      </View>

      <View style={styles.locationContainer}>
        <Ionicons name="location" size={16} color="#D6A781" />
        <Text style={styles.locationText}>{dorm.location}</Text>
      </View>

      <Image source={{ uri: dorm.image }} style={styles.dormImage} />

      <View style={styles.dormFooter}>
        <View style={styles.ratingContainer}>
          {renderStars(dorm.rating)}
        </View>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name="bookmark-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.price}>{dorm.price}</Text>

      <TouchableOpacity 
        style={styles.detailsButton}
        onPress={() => {
          navigation.navigate('BookingPayment', { dorm });
        }}
      >
        <Text style={styles.detailsButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Image 
          source={require('./hut.png')} 
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Text style={styles.greeting}>Hello, Gian!</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by university, city, or name of place"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Results Header */}
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>Results</Text>
          <TouchableOpacity>
            <Ionicons name="information-circle-outline" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Dormitory Cards */}
        <View style={styles.resultsContainer}>
          {dormitories.map((dorm) => renderDormCard(dorm))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={28} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={28} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="list" size={28} color="#D6A781" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D6A781',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 8,
  },
  resultsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  resultsContainer: {
    marginBottom: 100,
  },
  dormCard: {
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
  dormHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  dormHeaderText: {
    flex: 1,
  },
  dormName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  dormType: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
  },
  statusBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 11,
    color: '#4CAF50',
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
    marginBottom: 12,
    resizeMode: 'cover',
  },
  dormFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingContainer: {
    flex: 1,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  bookmarkButton: {
    padding: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  detailsButton: {
    backgroundColor: '#D6A781',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
  },
  detailsButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
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

export default SearchResultsScreen;