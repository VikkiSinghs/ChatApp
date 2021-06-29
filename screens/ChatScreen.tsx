import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import NewMessageButton from "../components/NewMessageButton";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import chatRooms from '../data/ChatRooms';
import ChatListItem from '../components/ChatListItem';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      style={{width: '100%'}}
      data={chatRooms}
      renderItem={({ item }) => <ChatListItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}
      />
      <NewMessageButton/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
