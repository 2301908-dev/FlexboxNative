import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VerifiedPropertiesScreen = ({ navigation }) => {
  const verified = [
    {
      id: 1,
      name: "G2J Dormitory Student Dormitory",
      address: "548, Gulod Labac, Batangas City",
      image: require("./assets/dorm3.jpg"),
      status: "Active",
    },
    {
      id: 2,
      name: "HomeNest Dorm",
      address: "262, Lawas, Batangas City",
      image: require("./assets/dorm4.jpg"),
      status: "Active",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons 
          name="chevron-back"
          size={26}
          color="#444"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>Verified Properties</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput style={styles.input} placeholder="Search by name, address, owner" />
      </View>

      {verified.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />

          <Text style={styles.title}>{item.name}</Text>

          <View style={styles.locationRow}>
            <Ionicons name="location" size={16} color="#D65A5A" />
            <Text style={styles.address}>{item.address}</Text>
          </View>

          <View style={styles.badgeActive}>
            <Text style={styles.badgeText}>Active</Text>
          </View>
        </View>
      ))}

      <View style={{ height: 60 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#F4F4F4" },

  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  header: { fontSize: 22, fontWeight: "bold", marginLeft: 10, color: "#333" },

  searchBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 45,
    marginBottom: 15,
  },

  input: { marginLeft: 10, flex: 1 },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },

  image: { width: "100%", height: 150, borderRadius: 12, marginBottom: 10 },

  title: { fontSize: 16, fontWeight: "bold", marginBottom: 4, color: "#333" },

  locationRow: { flexDirection: "row", alignItems: "center" },
  address: { marginLeft: 5, color: "#666" },

  badgeActive: {
    marginTop: 8,
    backgroundColor: "#D4FFD6",
    paddingVertical: 4,
    borderRadius: 6,
    width: 60,
    alignItems: "center",
  },

  badgeText: { fontSize: 12, color: "#4CAF50" },
});

export default VerifiedPropertiesScreen;
