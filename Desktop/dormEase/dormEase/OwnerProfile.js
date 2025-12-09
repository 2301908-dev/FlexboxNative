import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const OwnerProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backBtn} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={26} color="#444" />
        </TouchableOpacity>

        {/* Header */}
        <Text style={styles.header}>My Profile</Text>

        {/* Profile Image */}
        <Image 
          source={require('./assets/tenantpfp.png')} 
          style={styles.profileImg}
        />

        {/* Name */}
        <Text style={styles.name}>Marco Perez</Text>
        <Text style={styles.subText}>Owner since 2025</Text>

        {/* Personal Info */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Information</Text>

          <View style={styles.row}>
            <Ionicons name="person-outline" size={22} color="#444" />
            <View style={styles.infoCol}>
              <Text style={styles.label}>Full Name</Text>
              <Text style={styles.value}>Marco Perez</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={22} color="#D9534F" />
            <View style={styles.infoCol}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>Marco262@gmail.com</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={22} color="#000" />
            <View style={styles.infoCol}>
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.value}>0966-278-1688</Text>
            </View>
          </View>
        </View>

        {/* Properties Count */}
        <View style={styles.card}>
          <Text style={styles.label}>Total Properties</Text>
          <Text style={styles.value}>3</Text>
        </View>

        {/* Property Overview */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Property Management Overview</Text>
          <Text style={styles.value}>Boarding House</Text>
          <Text style={styles.value}>Dormitory</Text>
        </View>

      </ScrollView>
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: { 
    flex: 1,
     backgroundColor: '#F1E9DF'
     },
  backBtn: { 
    marginTop: 40, 
    marginLeft: 20 ,
},
  header: { 
    fontSize: 26, 
    fontWeight: 'bold',
    textAlign: 'center', 
    marginTop: 10 ,
},
  profileImg: { 
    width: 110,
     height: 110, 
     borderRadius: 55,
      alignSelf: 'center',
       marginTop: 10 ,
    },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center',
     marginTop: 10,
    },
  subText: { textAlign: 'center',
     color: '#666', 
     marginBottom: 20 ,
    },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    marginHorizontal: 20,
    marginBottom: 18,
    elevation: 3,
  },
  cardTitle: { 
    fontSize: 18,
     fontWeight: 'bold',
      marginBottom: 10 ,
    },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center',
     marginBottom: 14,
     },
  infoCol: { 
    marginLeft: 10 ,
},
  label: { 
    fontSize: 14,
     color: '#777', 
    },
  value: { 
    fontSize: 16, 
    fontWeight: 'bold',
 }
});

export default OwnerProfile;
