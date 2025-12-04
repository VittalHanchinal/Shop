import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { getPicoCustomers, getCompletedPicoCustomers } from '../services/api';

export default function PicoListScreen({ navigation }) {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('pending');

    useEffect(() => {
        loadCustomers();
    }, [activeTab]);

    const loadCustomers = async () => {
        setLoading(true);
        try {
            const response =
                activeTab === 'pending'
                    ? await getPicoCustomers()
                    : await getCompletedPicoCustomers();

            if (response.success) {
                setCustomers(response.data || []);
            } else {
                Alert.alert('Error', response.message);
            }
        } catch (error) {
            console.error(error);
            setCustomers([]);
        } finally {
            setLoading(false);
        }
    };

    const renderCustomer = ({ item }) => (
        <TouchableOpacity style={styles.customerCard}>
            <View style={styles.customerInfo}>
                <Text style={styles.customerName}>{item.costomerName}</Text>
                <Text style={styles.customerPhone}>{item.costomerNumber}</Text>
            </View>
            <View style={styles.customerMeta}>
                <Text style={styles.customerPrice}>₹{item.costomerPrice}</Text>
                <Text style={styles.customerDate}>{item.deliverydDate}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Pico Fall</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('PicoForm')}
                >
                    <Text style={styles.addButtonText}>+ Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'pending' && styles.activeTab]}
                    onPress={() => setActiveTab('pending')}
                >
                    <Text style={[styles.tabText, activeTab === 'pending' && styles.activeTabText]}>
                        Pending
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
                    onPress={() => setActiveTab('completed')}
                >
                    <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>

            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#9333EA" />
                </View>
            ) : customers.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No customers found</Text>
                    <Text style={styles.emptySubtext}>Add a new customer to get started</Text>
                </View>
            ) : (
                <FlatList
                    data={customers}
                    renderItem={renderCustomer}
                    keyExtractor={(item) => item.costomerId?.toString() || Math.random().toString()}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 60, backgroundColor: '#fff' },
    backButton: { fontSize: 16, color: '#9333EA', fontWeight: '600' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#1F2937' },
    addButton: { backgroundColor: '#9333EA', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 },
    addButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
    tabs: { flexDirection: 'row', backgroundColor: '#fff', paddingHorizontal: 20, paddingBottom: 16 },
    tab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: 'transparent' },
    activeTab: { borderBottomColor: '#9333EA' },
    tabText: { fontSize: 16, color: '#6B7280', fontWeight: '500' },
    activeTabText: { color: '#9333EA', fontWeight: '700' },
    listContainer: { padding: 16 },
    customerCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4 },
    customerInfo: { flex: 1 },
    customerName: { fontSize: 18, fontWeight: '600', color: '#1F2937', marginBottom: 4 },
    customerPhone: { fontSize: 14, color: '#6B7280' },
    customerMeta: { alignItems: 'flex-end' },
    customerPrice: { fontSize: 18, fontWeight: 'bold', color: '#9333EA', marginBottom: 4 },
    customerDate: { fontSize: 12, color: '#6B7280' },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
    emptyText: { fontSize: 18, fontWeight: '600', color: '#6B7280', marginBottom: 8 },
    emptySubtext: { fontSize: 14, color: '#9CA3AF' },
});
