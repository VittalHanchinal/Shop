import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
    const [adminName, setAdminName] = useState('');

    useEffect(() => {
        loadAdminData();
    }, []);

    const loadAdminData = async () => {
        const name = await AsyncStorage.getItem('adminName');
        setAdminName(name || 'Admin');
    };

    const handleLogout = async () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Logout',
                onPress: async () => {
                    await AsyncStorage.clear();
                    navigation.replace('Login');
                },
            },
        ]);
    };

    const services = [
        {
            id: 'blouse',
            title: 'Blouse Stitching',
            icon: '👗',
            gradient: ['#FF6B6B', '#FF8E53'],
            screen: 'BlouseList',
        },
        {
            id: 'churidar',
            title: 'Churidar Stitching',
            icon: '👘',
            gradient: ['#4ECDC4', '#44A08D'],
            screen: 'ChuridarForm',
        },
        {
            id: 'lehenga',
            title: 'Lehenga Stitching',
            icon: '👑',
            gradient: ['#F093FB', '#F5576C'],
            screen: 'LehengaForm',
        },
        {
            id: 'pico',
            title: 'Pico Fall',
            icon: '🧵',
            gradient: ['#FA709A', '#FEE140'],
            screen: 'PicoList',
        },
        {
            id: 'saree',
            title: 'Saree Design',
            icon: '🎨',
            gradient: ['#A8EDEA', '#FED6E3'],
            screen: 'SareeList',
        },
        {
            id: 'billing',
            title: 'Billing',
            icon: '💰',
            gradient: ['#667EEA', '#764BA2'],
            screen: 'Billing',
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <LinearGradient colors={['#6B46C1', '#9333EA']} style={styles.header}>
                <View style={styles.headerContent}>
                    <View>
                        <Text style={styles.greeting}>Welcome back,</Text>
                        <Text style={styles.adminName}>{adminName}</Text>
                    </View>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            {/* Services Grid */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.servicesContainer}>
                    <Text style={styles.sectionTitle}>Our Services</Text>
                    <View style={styles.grid}>
                        {services.map((service) => (
                            <TouchableOpacity
                                key={service.id}
                                style={styles.serviceCard}
                                onPress={() => navigation.navigate(service.screen)}
                                activeOpacity={0.8}
                            >
                                <LinearGradient
                                    colors={service.gradient}
                                    style={styles.serviceGradient}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                >
                                    <Text style={styles.serviceIcon}>{service.icon}</Text>
                                    <Text style={styles.serviceTitle}>{service.title}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Quick Stats */}
                <View style={styles.statsContainer}>
                    <Text style={styles.sectionTitle}>Quick Stats</Text>
                    <View style={styles.statsGrid}>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumber}>0</Text>
                            <Text style={styles.statLabel}>Pending Orders</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumber}>0</Text>
                            <Text style={styles.statLabel}>Completed</Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    header: {
        paddingTop: 60,
        paddingBottom: 24,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 16,
        color: '#E9D5FF',
    },
    adminName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 4,
    },
    logoutButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    logoutText: {
        color: '#fff',
        fontWeight: '600',
    },
    scrollView: {
        flex: 1,
    },
    servicesContainer: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 16,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceCard: {
        width: '48%',
        marginBottom: 16,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    serviceGradient: {
        padding: 20,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceIcon: {
        fontSize: 48,
        marginBottom: 12,
    },
    serviceTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    statsContainer: {
        padding: 20,
        paddingTop: 0,
    },
    statsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statCard: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        marginHorizontal: 4,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    statNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#9333EA',
    },
    statLabel: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 4,
    },
});
