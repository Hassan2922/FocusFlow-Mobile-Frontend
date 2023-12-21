import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Messages = () => {
  const [messages, setMessages] = useState([
    'Hello, this is a message!',
    'Another message here...',
    'A third message for the example.',
    'And another one...',
    'More messages to come!',
    'Last message for now!',
  ]);

  const loadMoreMessages = () => {
    setMessages(prevMessages => [
      ...prevMessages,
      'New message added dynamically!',
      'Another new message!',
      'And one more!',
      'And one more!',
      'And one more!',
      'And one more!',
      'And one more!',
      'And one more!',
      'And one more!',
      'And one more!',
    ]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      onEndReached={loadMoreMessages}
      onEndReachedThreshold={0.1}
    >
      {messages.map((message, index) => (
        <Text
          key={index}
          style={[styles.messageText, index === 0 && { marginTop: 200 }]}
        >
          {message}
        </Text>
      ))}
      <TouchableOpacity onPress={loadMoreMessages} style={styles.showMoreButton}>
        <Text style={styles.showMoreButtonText}>Load More</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 20, // Additional padding to allow room for the "Load More" button
  },
  messageText: {
    color: '#00CCFF',
    borderColor: '#00CCFF',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  showMoreButton: {
    backgroundColor: '#00CCFF',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  showMoreButtonText: {
    color: '#303030',
    fontWeight: 'bold',
  },
});

export default Messages;
