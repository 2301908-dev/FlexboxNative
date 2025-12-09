import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PropertyVerificationScreen = ({ navigation }) => {
  const properties = [
    {
      id: 1,
      name: "E-MO DORMITORY - Hostel Reviews",
      address: "W4R9+J6J, Lipa City, Batangas",
      image: require("./assets/dorm1.jpg"),
      status: "Pending",
    },
    {
      id: 2,
      name: "STAR DORMITORY Batangas City",
      address: "National Highway, Batangas City, 4200",
      image: require("./assets/dorm2.jpg"),
      status: "Pending",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#444" />
        </TouchableOpacity>
        <Text style={styles.header}>Property Verification</Text>
      </View>

      {properties.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />

          <Text style={styles.title}>{item.name}</Text>

          <View style={styles.locationRow}>
            <Ionicons name="location" size={16} color="#D65A5A" />
            <Text style={styles.address}>{item.address}</Text>
            <View style={styles.badgePending}>
              <Text style={styles.badgeText}>Pending</Text>
            </View>
          </View>

          <View style={styles.infoBtn}>
            <Ionicons name="document-text-outline" size={18} color="#888" />
            <Text style={{ marginLeft: 5, color: "#777" }}>
              View Property Info & Documents
            </Text>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.rejectBtn}>
              <Text style={styles.rejectText}>Reject</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.acceptBtn}>
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={styles.goVerifiedBtn}
        onPress={() => navigation.navigate("VerifiedProperties")}
      >
        <Text style={styles.goVerifiedText}>Go to Verified Properties</Text>
        <Ionicons name="chevron-forward" size={20} color="#fff" />
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#F4F4F4" },

  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  header: { fontSize: 22, fontWeight: "bold", marginLeft: 10, color: "#333" },

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
  address: { marginLeft: 5, color: "#666", flex: 1 },

  badgePending: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: "#FFE5B4",
    borderRadius: 6,
  },
  badgeText: { fontSize: 12, color: "#A06D30" },

  infoBtn: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 8,
  },

  actionRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 12 },

  rejectBtn: {
    flex: 1,
    backgroundColor: "#FFD6D6",
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  rejectText: { textAlign: "center", color: "#D9534F", fontWeight: "bold" },

  acceptBtn: {
    flex: 1,
    backgroundColor: "#D4FFD6",
    paddingVertical: 10,
    borderRadius: 10,
  },
  acceptText: { textAlign: "center", color: "#4CAF50", fontWeight: "bold" },

  goVerifiedBtn: {
    backgroundColor: "#D6A781",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  goVerifiedText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 6,
  },
});

export default PropertyVerificationScreen;
