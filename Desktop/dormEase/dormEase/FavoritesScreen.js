import React, { useState } from 'react';
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

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Kenn's Dormitory",
      price: '₱5k/mo',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
      isFavorited: true,
    },
    {
      id: 2,
      name: 'Ancient rest Dormitory',
      price: '₱9k/mo',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      isFavorited: true,
    },
    {
      id: 3,
      name: 'Campus Dormitory',
      price: '₱9k/mo',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
      isFavorited: true,
    },
  ]);

  const toggleFavorite = (id) => {
    setFavorites(favorites.map(dorm => 
      dorm.id === id ? { ...dorm, isFavorited: !dorm.isFavorited } : dorm
    ));
  };

  const renderDormCard = (dorm) => (
    <View key={dorm.id} style={styles.dormCard}>
      <Image source={{ uri: dorm.image }} style={styles.dormImage} />
      
      <TouchableOpacity 
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(dorm.id)}
      >
        <Ionicons 
          name={dorm.isFavorited ? 'bookmark' : 'bookmark-outline'}
          size={28} 
          color={dorm.isFavorited ? '#D6A781' : '#FFFFFF'}
        />
      </TouchableOpacity>

      <View style={styles.dormInfo}>
        <Text style={styles.dormName}>{dorm.name}</Text>
        <Text style={styles.priceLabel}>Starts from</Text>
        <Text style={styles.priceAmount}>{dorm.price}</Text>
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
        <Text style={styles.headerTitle}>Favorites</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {favorites.filter(dorm => dorm.isFavorited).length > 0 ? (
          <View style={styles.dormsContainer}>
            {favorites
              .filter(dorm => dorm.isFavorited)
              .map(dorm => renderDormCard(dorm))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="bookmark-outline" size={80} color="#DDD" />
            <Text style={styles.emptyStateTitle}>No Favorites Yet</Text>
            <Text style={styles.emptyStateText}>
              Tap the bookmark icon on any dorm to add it to your favorites
            </Text>
          </View>
        )}

        <View style={styles.bottomSpacer} />
      </ScrollView>

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
          <Ionicons name="list-outline" size={28} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bookmark" size={28} color="#D6A781" />
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
  dormsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 20,
  },
  dormCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dormImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    padding: 8,
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
  priceLabel: {
    fontSize: 13,
    color: '#999',
    marginBottom: 2,
  },
  priceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6A781',
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

export default FavoritesScreen;