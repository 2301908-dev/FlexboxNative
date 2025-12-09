import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReportManagementScreen = ({ navigation }) => {
  const [reportType, setReportType] = useState('Booking Transaction Records');
  const [dateRange, setDateRange] = useState('Last 30 days');

  const summaryData = {
    totalBookings: { value: 125, trend: '+15 this month' },
    pendingRequests: { value: 4, subtitle: 'Awaiting Confirmation' },
    confirmed: { value: 118, subtitle: 'Occupied' },
    cancellations: { value: 3, subtitle: 'Last 30 days' },
  };

  const handleGenerateReport = () => {
    Alert.alert(
      'Generate Report',
      `Generating ${reportType} report for ${dateRange}...`,
      [{ text: 'OK' }]
    );
  };

  const renderSummaryCard = (title, data, color) => (
    <View style={[styles.summaryCard, { borderLeftColor: color, borderLeftWidth: 4 }]}>
      <Text style={styles.summaryTitle}>{title}</Text>
      <Text style={styles.summaryValue}>{data.value}</Text>
      {data.trend && <Text style={styles.summaryTrend}>{data.trend}</Text>}
      {data.subtitle && <Text style={styles.summarySubtitle}>{data.subtitle}</Text>}
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
        <Text style={styles.headerTitle}>Report Management</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Generate Report Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Generate Report Logs</Text>
          <Text style={styles.sectionSubtitle}>
            Select a report type and date range to generate
          </Text>

          <View style={styles.formCard}>
            <Text style={styles.formLabel}>Report type</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>{reportType}</Text>
              <Ionicons name="chevron-down" size={20} color="#999" />
            </TouchableOpacity>

            <Text style={styles.formLabel}>Date Range</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>{dateRange}</Text>
              <Ionicons name="calendar-outline" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.generateButton}
              onPress={handleGenerateReport}
            >
              <Text style={styles.generateButtonText}>Generate Report</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Booking System Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Booking System Summary</Text>
          <Text style={styles.sectionSubtitle}>
            Quick overview of recent booking activities
          </Text>

          <View style={styles.summaryGrid}>
            {renderSummaryCard('Total Bookings', summaryData.totalBookings, '#4CAF50')}
            {renderSummaryCard('Pending Requests', summaryData.pendingRequests, '#FF9800')}
            {renderSummaryCard('Confirmed', summaryData.confirmed, '#2196F3')}
            {renderSummaryCard('Cancellations', summaryData.cancellations, '#FF5252')}
          </View>
        </View>

        {/* System Logs Database */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>System Logs Database</Text>
          <Text style={styles.sectionSubtitle}>
            View detailed system and activity logs
          </Text>

          <TouchableOpacity style={styles.logCard}>
            <View style={styles.logIconContainer}>
              <Ionicons name="document-text" size={28} color="#D6A781" />
            </View>
            <View style={styles.logContent}>
              <Text style={styles.logTitle}>Booking Records</Text>
              <Text style={styles.logSubtitle}>All Transaction history</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logCard}>
            <View style={styles.logIconContainer}>
              <Ionicons name="time" size={28} color="#D6A781" />
            </View>
            <View style={styles.logContent}>
              <Text style={styles.logTitle}>System Activity Logs</Text>
              <Text style={styles.logSubtitle}>Verification, updates, etc</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
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
  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#999',
    marginBottom: 15,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  generateButton: {
    backgroundColor: '#D6A781',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryGrid: {
    gap: 12,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  summaryTrend: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '600',
  },
  summarySubtitle: {
    fontSize: 12,
    color: '#999',
  },
  logCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFE8CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  logContent: {
    flex: 1,
  },
  logTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  logSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  bottomSpacer: {
    height: 30,
  },
});

export default ReportManagementScreen;