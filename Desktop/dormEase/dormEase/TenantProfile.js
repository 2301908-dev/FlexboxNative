import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TenantProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
        <View style={{ width: 30 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("./assets/tenantpfp.png")}
          style={styles.avatar}
        />

        <Text style={styles.name}>Kenn Silang</Text>
        <Text style={styles.subtext}>Member since 2025</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Information</Text>
          
          <View style={styles.row}>
            <Ionicons name="person-outline" size={22} />
            <View style={styles.column}>
              <Text style={styles.label}>Full Name</Text>
              <Text style={styles.value}>Kenn Silang</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={22} />
            <View style={styles.column}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>Kenn@gmail.com</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={22} />
            <View style={styles.column}>
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.value}>0954-558-6539</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>My Activity</Text>

          <TouchableOpacity style={styles.linkRow}>
            <Ionicons name="folder-outline" size={22} />
            <Text style={styles.linkText}>Archive</Text>
            <Ionicons name="chevron-forward" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkRow}>
            <Ionicons name="heart-outline" size={22} />
            <Text style={styles.linkText}>Favorites</Text>
            <Ionicons name="chevron-forward" size={20} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default TenantProfile;

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     backgroundColor: "#EFE9E3" 
    },
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    padding: 20 ,
    paddingVertical:50,
},
  title: {
     fontSize: 22,
      fontWeight: "bold", 
      color: "#333", 
    },
  content: { 
    alignItems: "center", 
    paddingBottom: 60 ,
},
  avatar: { width: 110, 
    height: 110, 
    borderRadius: 60,
     marginVertical: 10 ,
    },
  name: { 
    fontSize: 22, 
    fontWeight: "bold" ,
},
  subtext: { 
    color: "#777" ,
},
  card: {
    width: "90%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  cardTitle: { 
    fontWeight: "bold", 
    fontSize: 16,
     marginBottom: 10 ,
    },
  row: { 
    flexDirection: "row", 
    alignItems: "center",
     marginVertical: 10,
     },
  column: { 
    marginLeft: 10 ,
},
  label: { 
    fontWeight: "600", 
    color: "#444", 
},
  value: { 
    color: "#555",
 },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  linkText: { 
    marginLeft: 10, 
    fontSize: 16, 
    flex: 1 ,
},
});
