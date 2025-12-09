import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = ({ navigation, route }) => {
  const { tenantName, avatar } = route.params || {};
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi, is this still available? I would like to book.',
      sender: 'tenant',
      time: '1:42 pm',
    },
    {
      id: 2,
      text: 'Yes, it is still available! When would you like to move in?',
      sender: 'owner',
      time: '1:45 pm',
    },
    {
      id: 3,
      text: 'Great! I would like to move in next week. Can I schedule a visit first?',
      sender: 'tenant',
      time: '1:47 pm',
    },
    {
      id: 4,
      text: 'Of course! What day works best for you?',
      sender: 'owner',
      time: '1:50 pm',
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'owner',
        time: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        }).toLowerCase(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const renderMessage = (msg) => {
    const isOwner = msg.sender === 'owner';
    
    return (
      <View 
        key={msg.id} 
        style={[
          styles.messageContainer,
          isOwner ? styles.ownerMessage : styles.tenantMessage
        ]}
      >
        {!isOwner && (
          <Image source={{ uri: avatar }} style={styles.messageAvatar} />
        )}
        
        <View style={[
          styles.messageBubble,
          isOwner ? styles.ownerBubble : styles.tenantBubble
        ]}>
          <Text style={[
            styles.messageText,
            isOwner ? styles.ownerText : styles.tenantText
          ]}>
            {msg.text}
          </Text>
          <Text style={[
            styles.messageTime,
            isOwner ? styles.ownerTime : styles.tenantTime
          ]}>
            {msg.time}
          </Text>
        </View>
      </View>
    );
  };

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
        
        <View style={styles.headerCenter}>
          <Image source={{ uri: avatar }} style={styles.headerAvatar} />
          <Text style={styles.headerTitle}>{tenantName}</Text>
        </View>
        
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.chatContainer}
        keyboardVerticalOffset={90}
      >
        <ScrollView 
          style={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.messagesContent}
        >
          {messages.map((msg) => renderMessage(msg))}
        </ScrollView>

        {/* Message Input */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="add-circle-outline" size={28} color="#999" />
          </TouchableOpacity>
          
          <TextInput
            style={styles.messageInput}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={handleSend}
          >
            <Ionicons name="send" size={24} color="#D6A781" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 5,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headerAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  moreButton: {
    padding: 5,
  },
  chatContainer: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 20,
    paddingBottom: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  ownerMessage: {
    justifyContent: 'flex-end',
  },
  tenantMessage: {
    justifyContent: 'flex-start',
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 15,
  },
  ownerBubble: {
    backgroundColor: '#D6A781',
    borderBottomRightRadius: 4,
    marginLeft: 'auto',
  },
  tenantBubble: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 4,
  },
  ownerText: {
    color: '#FFFFFF',
  },
  tenantText: {
    color: '#333',
  },
  messageTime: {
    fontSize: 11,
    marginTop: 4,
  },
  ownerTime: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'right',
  },
  tenantTime: {
    color: '#999',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    gap: 10,
  },
  attachButton: {
    padding: 5,
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
    maxHeight: 100,
    color: '#333',
  },
  sendButton: {
    padding: 5,
  },
});

export default ChatScreen;