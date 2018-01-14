import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

export default class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    return (
      <View style={styles.container}>
        <Text h1>Class Mate</Text>
        <Text h4>Student Dashboard</Text>
        <Text h2>Student Name</Text>
        <Text h2>Your Class Schedule</Text>
        <Text h2>Upcoming Due Dates</Text>
        <Text h2>Add a sidebar</Text>
      </View>
    );
  }
}
