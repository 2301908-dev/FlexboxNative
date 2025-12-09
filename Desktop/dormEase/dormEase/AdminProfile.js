import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AdminProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>

        {/* Back */}
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#444" />
        </TouchableOpacity>

        {/* Header */}
        <Text style={styles.header}>Admin Profile</Text>

        {/* Profile */}
        <Image 
          source={require('./assets/tenantpfp.png')}
          style={styles.profileImg}
        />

        <Text style={styles.name}>Marco Perez</Text>
        <Text style={styles.subText}>Owner since 2025</Text>

        {/* Personal Info */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Information</Text>

          <View style={styles.row}>
            <Ionicons name="person-outline" size={22} color="#000" />
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

        {/* Administrative Role */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Administrative Role</Text>

          <View style={styles.rowLabel}>
            <Text style={styles.label}>Role</Text>
            <Text style={styles.value}>Super Admin</Text>
          </View>

          <View style={styles.rowLabel}>
            <Text style={styles.label}>Permissions</Text>
            <Text style={styles.value}>Full Access</Text>
          </View>
        </View>

        {/* Security */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Security</Text>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#444" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Two-Factor Authentication</Text>
            <Ionicons name="chevron-forward" size={20} color="#444" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F1E9DF',
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
      alignSelf: 'center', 
      marginTop: 10, 
      borderRadius: 55,
     },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold',
     textAlign: 'center',
      marginTop: 10 ,
    },
  subText: { 
    textAlign: 'center',
     color: '#666', 
     marginBottom: 20 ,
    },
  card: { 
    backgroundColor: '#fff', 
    padding: 18, 
    borderRadius: 14, 
    margin: 20,
    marginBottom: 10, 
    elevation: 3 ,
},
  cardTitle: { 
    fontSize: 18,
     fontWeight: 'bold',
      marginBottom: 12 ,
    },

  row: { 
    flexDirection: 'row', 
    alignItems: 'center',
     marginBottom: 14,
     },
  infoCol: {
     marginLeft: 10 ,
    },

  rowLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  label: { 
    fontSize: 14, 
    color: '#777' ,
},
  value: { 
    fontSize: 16,
     fontWeight: 'bold' ,
    },

  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  optionText: { 
    fontSize: 15, 
    fontWeight: '500',
 }
});

export default AdminProfile;
