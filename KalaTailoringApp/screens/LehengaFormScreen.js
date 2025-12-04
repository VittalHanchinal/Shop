import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from 'react-native';

export default function LehengaFormScreen({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        customerName: '',
        customerNumber: '',
        customerPrice: '',
        lehengaType: 'Simple',
        lehengaLength: '',
        blouseLength: '',
        waist: '',
        hip: '',
        chest: '',
        receivedDate: new Date().toISOString().split('T')[0],
        deliverydDate: '',
    });

    const handleSubmit = async () => {
        if (!formData.customerName || !formData.customerNumber) {
            Alert.alert('Error', 'Please fill in customer name and number');
            return;
        }

        Alert.alert('Success', 'Customer added successfully (Demo)', [
            { text: 'OK', onPress: () => navigation.goBack() },
        ]);
    };

    const updateField = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Add Lehenga Customer</Text>
                <View style={{ width: 60 }} />
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text style={styles.sectionTitle}>Customer Details</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Customer Name *</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.customerName}
                            onChangeText={(value) => updateField('customerName', value)}
                            placeholder="Enter customer name"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Phone Number *</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.customerNumber}
                            onChangeText={(value) => updateField('customerNumber', value)}
                            placeholder="Enter phone number"
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Price (₹)</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.customerPrice}
                            onChangeText={(value) => updateField('customerPrice', value)}
                            placeholder="Enter price"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Lehenga Type</Text>
                        <View style={styles.typeSelector}>
                            {['Simple', 'Designer', 'Bridal'].map((type) => (
                                <TouchableOpacity
                                    key={type}
                                    style={[
                                        styles.typeButton,
                                        formData.lehengaType === type && styles.activeTypeButton,
                                    ]}
                                    onPress={() => updateField('lehengaType', type)}
                                >
                                    <Text
                                        style={[
                                            styles.typeButtonText,
                                            formData.lehengaType === type && styles.activeTypeButtonText,
                                        ]}
                                    >
                                        {type}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Measurements</Text>

                    <View style={styles.row}>
                        <View style={[styles.inputGroup, styles.halfWidth]}>
                            <Text style={styles.label}>Lehenga Length</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.lehengaLength}
                                onChangeText={(value) => updateField('lehengaLength', value)}
                                placeholder="0"
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={[styles.inputGroup, styles.halfWidth]}>
                            <Text style={styles.label}>Blouse Length</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.blouseLength}
                                onChangeText={(value) => updateField('blouseLength', value)}
                                placeholder="0"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.inputGroup, styles.halfWidth]}>
                            <Text style={styles.label}>Waist</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.waist}
                                onChangeText={(value) => updateField('waist', value)}
                                placeholder="0"
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={[styles.inputGroup, styles.halfWidth]}>
                            <Text style={styles.label}>Hip</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.hip}
                                onChangeText={(value) => updateField('hip', value)}
                                placeholder="0"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Chest</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.chest}
                            onChangeText={(value) => updateField('chest', value)}
                            placeholder="0"
                            keyboardType="numeric"
                        />
                    </View>

                    <Text style={styles.sectionTitle}>Dates</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Delivery Date</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.deliverydDate}
                            onChangeText={(value) => updateField('deliverydDate', value)}
                            placeholder="YYYY-MM-DD"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={styles.submitButtonText}>Add Customer</Text>
                        )}
                    </TouchableOpacity>

                    <View style={{ height: 40 }} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
    backButton: { fontSize: 16, color: '#9333EA', fontWeight: '600' },
    title: { fontSize: 18, fontWeight: 'bold', color: '#1F2937' },
    scrollView: { flex: 1 },
    form: { padding: 20 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginTop: 16, marginBottom: 12 },
    inputGroup: { marginBottom: 16 },
    label: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8 },
    input: { backgroundColor: '#fff', borderRadius: 12, padding: 14, fontSize: 16, borderWidth: 1, borderColor: '#E5E7EB' },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    halfWidth: { width: '48%' },
    typeSelector: { flexDirection: 'row', gap: 8 },
    typeButton: { flex: 1, paddingVertical: 10, paddingHorizontal: 12, borderRadius: 8, backgroundColor: '#fff', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB' },
    activeTypeButton: { backgroundColor: '#9333EA', borderColor: '#9333EA' },
    typeButtonText: { fontSize: 14, color: '#6B7280', fontWeight: '500' },
    activeTypeButtonText: { color: '#fff' },
    submitButton: { backgroundColor: '#9333EA', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 24, shadowColor: '#9333EA', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
    submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
