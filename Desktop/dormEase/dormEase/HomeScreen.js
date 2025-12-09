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

const DormEaseHome = ({ navigation }) => {  // ← ADD navigation prop
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - replace with your actual data
  const recommendedDorms = [
    {
      id: 1,
      name: 'University Lofts',
      price: '₱5k/mo',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
    },
    {
      id: 2,
      name: 'Campus Dormitory',
      price: '₱4k/mo',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    },
  ];

  const nearYouDorms = [
    {
      id: 3,
      name: 'EBM Dormitory',
      price: '₱3k/mo',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
    },
    {
      id: 4,
      name: 'Joelpادent Dormitory',
      price: '₱4k/mo',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400',
    },
    {
      id: 5,
      name: 'BBC Appartments',
      price: '₱6k/mo',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
    },
  ];

  const renderDormCard = (dorm, isLarge = false) => (
    <View key={dorm.id} style={[styles.dormCard, isLarge && styles.largeDormCard]}>
      <Image source={{ uri: dorm.image }} style={styles.dormImage} />
      <View style={styles.dormInfo}>
        <Text style={styles.dormName}>{dorm.name}</Text>
        <Text style={styles.dormPrice}>Starts from</Text>
        <Text style={styles.dormPriceAmount}>{dorm.price}</Text>
      </View>
      <TouchableOpacity style={styles.bookmarkIcon}>
        <Ionicons name="bookmark-outline" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );

  const renderSmallDormCard = (dorm) => (
    <View key={dorm.id} style={styles.smallDormCard}>
      <Image source={{ uri: dorm.image }} style={styles.smallDormImage} />
      <View style={styles.smallDormInfo}>
        <Text style={styles.dormName}>{dorm.name}</Text>
        <Text style={styles.dormPrice}>Starts from</Text>
        <Text style={styles.dormPriceAmount}>{dorm.price}</Text>
      </View>
      <TouchableOpacity style={styles.smallBookmarkIcon}>
        <Ionicons name="bookmark-outline" size={20} color="#333" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
     <View style={styles.header}>
  <View style={styles.headerLeft}>
    
    <TouchableOpacity onPress={() => navigation.navigate("TenantProfile")}>
      <Image 
        source={require('./assets/tenantpfp.png')}
        style={styles.logo}
      />
    </TouchableOpacity>

  </View>

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
        <Text style={styles.greeting}>Hello, Kenn!</Text>

        {/* Search Bar */}
        <TouchableOpacity 
          style={styles.searchContainer}
          onPress={() => navigation.navigate('SearchResults', { query: searchQuery })}
        >
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by university, city, or name of place"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={() => navigation.navigate('SearchResults', { query: searchQuery })}
          />
        </TouchableOpacity>

        {/* Recommended For You */}
        <Text style={styles.sectionTitle}>Recommended For You</Text>
        <View style={styles.recommendedSection}>
          {recommendedDorms.map((dorm) => renderDormCard(dorm, true))}
        </View>

        {/* Near You */}
        <Text style={styles.sectionTitle}>Near You</Text>
        <View style={styles.nearYouSection}>
          {nearYouDorms.map((dorm) => renderSmallDormCard(dorm))}
        </View>
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
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('TenantBookings')}
        >
          <Ionicons name="list-outline" size={28} color="#999" />
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
    paddingVertical: 50,
    backgroundColor: '#FFFFFF',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginBottom: 25,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  recommendedSection: {
    marginBottom: 30,
  },
  dormCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  largeDormCard: {
    height: 280,
  },
  dormImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  dormInfo: {
    padding: 15,
  },
  dormName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  dormPrice: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,
  },
  dormPriceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6A781',
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 190,
    right: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 5,
  },
  nearYouSection: {
    marginBottom: 100,
  },
  smallDormCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    height: 100,
  },
  smallDormImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  smallDormInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  smallBookmarkIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 5,
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

export default DormEaseHome;