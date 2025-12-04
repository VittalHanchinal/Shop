import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert,
    ScrollView,
} from 'react-native';
import { searchBilling } from '../services/api';

export default function BillingScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [customer, setCustomer] = useState(null);

    const handleSearch = async () => {
        if (!phoneNumber) {
            Alert.alert('Error', 'Please enter a phone number');
            return;
        }

        setLoading(true);
        try {
            const response = await searchBilling(phoneNumber);
            if (response.success && response.data) {
                setCustomer(response.data);
            } else {
                Alert.alert('Not Found', 'No customer found with this phone number');
                setCustomer(null);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to search');
            console.error(error);
            setCustomer(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Billing</Text>
                <View style={{ width: 60 }} />
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.searchSection}>
                    <Text style={styles.sectionTitle}>Search Customer</Text>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            placeholder="Enter phone number"
                            keyboardType="phone-pad"
                        />
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={handleSearch}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" size="small" />
                            ) : (
                                <Text style={styles.searchButtonText}>Search</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {customer && (
                    <View style={styles.customerCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Customer Details</Text>
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>
                                    {customer.status || 'Pending'}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Name:</Text>
                            <Text style={styles.detailValue}>
                                {customer.customerName || customer.costomerName || 'N/A'}
                            </Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Phone:</Text>
                            <Text style={styles.detailValue}>
                                {customer.customerNumber || customer.costomerNumber || 'N/A'}
                            </Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Service:</Text>
                            <Text style={styles.detailValue}>
                                {customer.serviceType || 'Blouse Stitching'}
                            </Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Received Date:</Text>
                            <Text style={styles.detailValue}>
                                {customer.receivedDate || 'N/A'}
                            </Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Delivery Date:</Text>
                            <Text style={styles.detailValue}>
                                {customer.deliverydDate || 'N/A'}
                            </Text>
                        </View>

                        <View style={styles.priceSection}>
                            <Text style={styles.priceLabel}>Total Amount</Text>
                            <Text style={styles.priceValue}>
                                ₹{customer.customerPrice || customer.costomerPrice || '0'}
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.printButton}>
                            <Text style={styles.printButtonText}>Generate Bill</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {!customer && !loading && phoneNumber && (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>No customer found</Text>
                        <Text style={styles.emptySubtext}>
                            Try searching with a different phone number
                        </Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
    backButton: { fontSize: 16, color: '#9333EA', fontWeight: '600' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#1F2937' },
    content: { flex: 1, padding: 20 },
    searchSection: { marginBottom: 24 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginBottom: 16 },
    searchContainer: { flexDirection: 'row', gap: 12 },
    searchInput: { flex: 1, backgroundColor: '#fff', borderRadius: 12, padding: 14, fontSize: 16, borderWidth: 1, borderColor: '#E5E7EB' },
    searchButton: { backgroundColor: '#9333EA', paddingHorizontal: 24, paddingVertical: 14, borderRadius: 12, justifyContent: 'center', minWidth: 100 },
    searchButtonText: { color: '#fff', fontSize: 16, fontWeight: '600', textAlign: 'center' },
    customerCard: { backgroundColor: '#fff', borderRadius: 16, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 3 },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
    cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#1F2937' },
    statusBadge: { backgroundColor: '#FEF3C7', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
    statusText: { color: '#92400E', fontSize: 12, fontWeight: '600' },
    detailRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    detailLabel: { fontSize: 14, color: '#6B7280', fontWeight: '500' },
    detailValue: { fontSize: 14, color: '#1F2937', fontWeight: '600' },
    priceSection: { marginTop: 20, paddingTop: 20, borderTopWidth: 2, borderTopColor: '#E5E7EB', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    priceLabel: { fontSize: 18, fontWeight: '600', color: '#1F2937' },
    priceValue: { fontSize: 28, fontWeight: 'bold', color: '#9333EA' },
    printButton: { backgroundColor: '#9333EA', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 20 },
    printButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    emptyState: { alignItems: 'center', marginTop: 60 },
    emptyText: { fontSize: 18, fontWeight: '600', color: '#6B7280', marginBottom: 8 },
    emptySubtext: { fontSize: 14, color: '#9CA3AF' },
});
