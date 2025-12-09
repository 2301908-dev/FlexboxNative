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

const RoomManagementScreen = ({ navigation }) => {
  const propertyInfo = {
    name: 'Universal Dorms',
    address: '123 Real Avenue, Batangas',
  };

  const rooms = [
    {
      id: 1,
      number: 'Room 101',
      status: 'Mark Available',
      statusColor: '#4CAF50',
      availability: 'Occupied',
      availabilityColor: '#FF5252',
      tenant: 'David Laid',
      type: 'Single',
      capacity: '1 Person',
      price: '₱3500',
    },
    {
      id: 2,
      number: 'Room 102',
      status: 'Mark Occupied',
      statusColor: '#FF9800',
      availability: 'Available',
      availabilityColor: '#4CAF50',
      tenant: '',
      type: 'Single',
      capacity: '1 Person',
      price: '₱3500',
    },
    {
      id: 3,
      number: 'Room 201',
      status: 'Mark Occupied',
      statusColor: '#FF9800',
      availability: 'Available',
      availabilityColor: '#4CAF50',
      tenant: '',
      type: 'Double',
      capacity: '2 Person',
      price: '₱5000',
    },
    {
      id: 4,
      number: 'Room 202',
      status: 'Mark Available',
      statusColor: '#4CAF50',
      availability: 'Occupied',
      availabilityColor: '#FF5252',
      tenant: 'David Lee',
      type: 'Double',
      capacity: '2 Person',
      price: '₱5000',
    },
  ];

  const renderRoomCard = (room) => (
    <View key={room.id} style={styles.roomCard}>
      <View style={styles.roomHeader}>
        <Text style={styles.roomNumber}>{room.number}</Text>
        <View style={styles.roomHeaderRight}>
          <View style={[styles.statusBadge, { backgroundColor: room.statusColor }]}>
            <Text style={styles.statusText}>{room.status}</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.availabilityBadge, { backgroundColor: room.availabilityColor }]}>
        <Text style={styles.availabilityText}>{room.availability}</Text>
      </View>

      {room.tenant ? (
        <Text style={styles.tenantName}>{room.tenant}</Text>
      ) : null}

      <View style={styles.roomDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Type</Text>
          <Text style={styles.detailValue}>{room.type}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Capacity</Text>
          <Text style={styles.detailValue}>{room.capacity}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Price/Month</Text>
          <Text style={styles.detailValue}>{room.price}</Text>
        </View>
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
          <Ionicons name="chevron-back" size={28} color="#2196F3" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Room Management</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Property Info */}
        <View style={styles.propertyCard}>
          <View style={styles.propertyHeader}>
            <Text style={styles.propertyTitle}>My Properties</Text>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="create-outline" size={18} color="#FFFFFF" />
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.propertyInfo}>
            <View style={styles.propertyIcon}>
              <Ionicons name="business" size={24} color="#D6A781" />
            </View>
            <View style={styles.propertyDetails}>
              <Text style={styles.propertyName}>{propertyInfo.name}</Text>
              <Text style={styles.propertyAddress}>{propertyInfo.address}</Text>
            </View>
          </View>
        </View>

        {/* Room Properties Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Room Properties</Text>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add-circle" size={28} color="#D6A781" />
            </TouchableOpacity>
          </View>

          {rooms.map(room => renderRoomCard(room))}
        </View>

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
  propertyCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  propertyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D6A781',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 5,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  propertyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  propertyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFE8CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  propertyDetails: {
    flex: 1,
  },
  propertyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  propertyAddress: {
    fontSize: 13,
    color: '#666',
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    padding: 5,
  },
  roomCard: {
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
  roomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  roomNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  roomHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  availabilityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 10,
  },
  availabilityText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  tenantName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginBottom: 12,
  },
  roomDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 3,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 30,
  },
});

export default RoomManagementScreen;