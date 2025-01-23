import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddJourney = ({ navigation, addJourney }) => {
  const [flightNumber, setFlightNumber] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleAddJourney = () => {
    if (flightNumber && dateTime) {
      addJourney({ flightNumber, dateTime });
      navigation.goBack();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Flight Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter flight number"
        value={flightNumber}
        onChangeText={setFlightNumber}
      />

      <Text style={styles.label}>Date and Time:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter date and time"
        value={dateTime}
        onChangeText={setDateTime}
      />

      <Button title="Add Journey" onPress={handleAddJourney} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
});

export default AddJourney;