/*import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Create = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#00CCFF',
    fontWeight: 'bold',
    fontSize: 24, // Adjust the font size as needed
  },
});

export default Create;*/
import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Modal, TextInput } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { COLORS } from "../constants";
//import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class App extends Component {
  constructor(props) {
    super(props);

    let startDate = moment(); // today

    // Create a week's worth of custom date styles and marked dates.
    let customDatesStyles = [];
    let markedDates = [];
    for (let i = 0; i < 7; i++) {
      let date = startDate.clone().add(i, 'days');

      customDatesStyles.push({
        startDate: date, // Single date since no endDate provided
        dateNameStyle: { color: '#00CCFF' }, // Set text color for the day name
        dateNumberStyle: { color: '#00CCFF' }, // Set text color for the day number
        // Random color...
        //dateContainerStyle: { backgroundColor: `#${(`#00000${(Math.random() * (1 << 24) | 0).toString(16)}`).slice(-6)}` },
      });

      let dots = [];
      let lines = [];
      let events = [];

      markedDates.push({
        date,
        dots,
        lines,
        events,
      });
    }

    this.state = {
      selectedDate: startDate,
      customDatesStyles,
      markedDates,
      startDate,
      events: [], // Initialize events as an empty array
      isModalVisible: false,
      newActivityText: '',
    };
  }

  datesBlacklistFunc = date => {
    return date.isoWeekday() === 8; // disable Saturdays
  }

  onDateSelected = selectedDate => {
    this.setState({ selectedDate });
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    const selectedDateEvents = this.state.markedDates.find(date => date.date.isSame(selectedDate, 'day'));
    const events = selectedDateEvents ? selectedDateEvents.events : [];
    this.setState({ formattedDate, events });
  }

  setSelectedDateNextWeek = date => {
    const selectedDate = moment(this.state.selectedDate).add(1, 'week');
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    this.setState({ selectedDate, formattedDate });
  }

  setSelectedDatePrevWeek = date => {
    const selectedDate = moment(this.state.selectedDate).subtract(1, 'week');
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    this.setState({ selectedDate, formattedDate });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  addActivity = () => {
    const { selectedDate, newActivityText } = this.state;
  
    // Clone the markedDates array to avoid direct mutation
    const updatedMarkedDates = [...this.state.markedDates];
  
    // Find the index of the selected date in markedDates or -1 if not found
    const selectedIndex = updatedMarkedDates.findIndex(dateInfo =>
      dateInfo.date.isSame(selectedDate, 'day')
    );
  
    // If the selected date is not found, create a new entry for it
    if (selectedIndex === -1) {
      updatedMarkedDates.push({
        date: selectedDate.clone(),
        events: [newActivityText],
      });
    } else {
      // If the selected date is found, update the events array
      updatedMarkedDates[selectedIndex].events.push(newActivityText);
    }
  
    // Update the state
    this.setState({
      markedDates: updatedMarkedDates,
      isModalVisible: false,
      newActivityText: '',
    });
  
    // Update the events for the selected date
    const updatedEvents = updatedMarkedDates.find(dateInfo =>
      dateInfo.date.isSame(selectedDate, 'day')
    ).events;
  
    this.setState({ events: updatedEvents });
  }

  render() {
    const eventsList = this.state.events.map((event, index) => (
      <Text key={index} style={{ fontSize: 18, marginTop: 10,color:"#00CCFF" }}>
        {event}
      </Text>
    ));

    //const eventScheduleSection = eventsList.length > 0 ? (
      const eventScheduleSection = (
        <View>
          <Text style={{ fontSize: 24, marginTop: 20 ,color:"#00CCFF"}}>Event Schedule</Text>
          {eventsList.length > 0 ? (
            eventsList
          ) : (
            <View style={{ borderStyle: 'dotted', borderWidth: 2, borderRadius: 5, padding: 10, margin: 10 ,borderColor:"#00CCFF"}}>
              <Text style={{ fontSize: 18, textAlign: 'center',color:"#00CCFF" }}>
                No Activities Scheduled
              </Text>
            </View>
          )}
        </View>
      );
      
    return (
      <View style={{ backgroundColor: '#303030', flex: 1 }}>
        <CalendarStrip
          scrollable
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          iconContainer={{ flex: 0.1, color: '#00CCFF' }}
          daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: '#9265DC' }}
          style={{ height: 200, paddingTop: 20, paddingBottom: 10, marginTop: 20 }}
          calendarHeaderStyle={{ color: '#00CCFF' }}
          calendarColor={"#404040"}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
          customDatesStyles={this.state.customDatesStyles}
          highlightDateNameStyle={{ color: 'white' }}
          highlightDateNumberStyle={{ color: 'yellow' }}
          highlightDateContainerStyle={{ backgroundColor: 'black' }}
          markedDates={this.state.markedDates}
          datesBlacklist={this.datesBlacklistFunc}
          selectedDate={this.state.selectedDate}
          onDateSelected={this.onDateSelected}
          useIsoWeekday={false}
        />

        <Text style={{ fontSize: 24,color:"#00CCFF" }}>Selected Date: {this.state.formattedDate}</Text>

        {eventScheduleSection}

        <TouchableOpacity onPress={this.toggleModal}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 24, marginRight: 10,color:"#00CCFF"  }}>Schedule Activity</Text>
            <Text style={{ fontSize: 24 ,color:"#00CCFF"}}>+</Text>
          </View>
        </TouchableOpacity>

        <Modal
  animationType="slide"
  transparent={true}
  visible={this.state.isModalVisible}
  onRequestClose={this.toggleModal}
>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ backgroundColor: '#404040', padding: 20, borderRadius: 10, width: 300 }}>
      <Text style={{ fontSize: 20, marginBottom: 10, color: "#00CCFF" }}>Add Activity</Text>
      <TextInput
        style={{ borderWidth: 2, borderColor: "#00CCFF", borderRadius: 5, padding: 10, marginBottom: 10, color: "#00CCFF" }}
        placeholder="Enter activity"
        placeholderTextColor="#00CCFF"
        value={this.state.newActivityText}
        onChangeText={(text) => this.setState({ newActivityText: text })}
      />

      <Text style={{ fontSize: 20, marginBottom: 10, color: "#00CCFF" }}>Enter Time</Text>
      <TextInput
        style={{ borderWidth: 2, borderColor: "#00CCFF", borderRadius: 5, padding: 10, marginBottom: 10, color: "#00CCFF" }}
        placeholder="Enter time"
        placeholderTextColor="#00CCFF"
        // You can set default time value or leave it empty
        value={this.state.newTimeText}
        onChangeText={(text) => this.setState({ newTimeText: text })}
      />

      <Button onPress={this.addActivity} title="Add" color="#00CCFF" />
      <Button onPress={this.toggleModal} title="Cancel" color="red" />
    </View>
  </View>
</Modal>





        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 70,marginTop: 60 }}>
          <Button
            onPress={this.setSelectedDatePrevWeek}
            title="prev week"
            color="#00CCFF"
          />
          <Button
            onPress={this.setSelectedDateNextWeek}
            title="next week"
            color="#00CCFF"
          />
        </View>
      </View>
    );
  }
}