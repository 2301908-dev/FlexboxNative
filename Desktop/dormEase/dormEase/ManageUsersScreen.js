import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ManageUsersScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Pending");

  const pendingUsers = [
    { id: 1, name: "User 1", email: "User@gmail.com" },
    { id: 2, name: "User 2", email: "User@gmail.com" },
    { id: 3, name: "User 3", email: "User@gmail.com" },
  ];

  const approvedUsers = [
    { id: 4, name: "User 4", email: "User@gmail.com", status: "Active" },
    { id: 5, name: "User 5", email: "User@gmail.com", status: "Active" },
    { id: 6, name: "User 6", email: "User@gmail.com", status: "Suspended" },
    { id: 7, name: "User 7", email: "User@gmail.com", status: "Active" },
    { id: 8, name: "User 8", email: "User@gmail.com", status: "Active" },
  ];

  const rejectedUsers = [
    { id: 9, name: "User 9", email: "User@gmail.com", reason: "Incomplete Docs", date: "Mar 18–July 15, 2025" },
    { id: 10, name: "User 10", email: "User@gmail.com", reason: "Spam Account", date: "Mar 18–July 15, 2025" },
  ];

  const renderTab = (label) => (
    <TouchableOpacity
      onPress={() => setActiveTab(label)}
      style={[styles.tab, activeTab === label && styles.activeTab]}
    >
      <Text style={[styles.tabText, activeTab === label && styles.activeTabText]}>
        {label} Users
      </Text>
    </TouchableOpacity>
  );

  const UserCard = ({ user, type }) => (
    <View style={styles.userCard}>
      <Image
        source={require("./assets/user.png")}
        style={styles.avatar}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>

        {type === "rejected" && (
          <>
            <Text style={styles.rejectReason}>Reason: {user.reason}</Text>
            <Text style={styles.rejectDate}>{user.date}</Text>
          </>
        )}
      </View>

      {type === "pending" && (
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.rejectBtn}>
            <Text style={styles.rejectText}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptBtn}>
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>
        </View>
      )}

      {type === "approved" && (
        <View style={styles.statusTag}>
          <Text style={styles.statusText}>{user.status}</Text>
        </View>
      )}

      <Ionicons name="ellipsis-vertical" size={22} color="#777" />
    </View>
  );

  const renderList = () => {
    if (activeTab === "Pending") {
      return pendingUsers.map((u) => (
        <UserCard key={u.id} user={u} type="pending" />
      ));
    }
    if (activeTab === "Approved") {
      return approvedUsers.map((u) => (
        <UserCard key={u.id} user={u} type="approved" />
      ));
    }
    if (activeTab === "Rejected") {
      return rejectedUsers.map((u) => (
        <UserCard key={u.id} user={u} type="rejected" />
      ));
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Users</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput placeholder="Search Users..." style={{ flex: 1 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {renderTab("Pending")}
        {renderTab("Approved")}
        {renderTab("Rejected")}
      </View>

      {/* List */}
      <ScrollView style={{ paddingHorizontal: 15 }}>
        {renderList()}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDF7F2" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingVertical: 50,
    backgroundColor: "#FFF",

  },
  headerTitle: { fontSize: 22, fontWeight: "700", marginLeft: 10 },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    margin: 15,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tab: { paddingVertical: 6 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "#D6A781" },
  tabText: { fontSize: 14, color: "#777" },
  activeTabText: { color: "#D6A781", fontWeight: "700" },

  userCard: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    elevation: 2,
  },

  avatar: { width: 45, height: 45, borderRadius: 25, marginRight: 12 },
  userName: { fontWeight: "700", fontSize: 16 },
  userEmail: { fontSize: 13, color: "#777", marginBottom: 5 },

  actionButtons: {
    flexDirection: "row",
    marginRight: 10,
    gap: 6,
  },
  rejectBtn: {
    backgroundColor: "#FFD1D1",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  rejectText: { color: "#C44", fontWeight: "600" },

  acceptBtn: {
    backgroundColor: "#CFF7CF",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  acceptText: { color: "#2C7A2C", fontWeight: "600" },

  statusTag: {
    backgroundColor: "#E8FFEA",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 10,
  },
  statusText: { color: "#3A8B3A", fontWeight: "700" },

  rejectReason: { color: "#555", fontSize: 12 },
  rejectDate: { color: "#999", fontSize: 11 },
});

export default ManageUsersScreen;