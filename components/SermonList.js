import { ListItem, Avatar } from 'react-native-elements';
import {FlatList} from 'react-native';
import React from 'react';
import sermons from './sermon';



  const  keyExtractor = (item, index) => index.toString();    

export function SermonList(props) {
   let navigation = props.navigation;

   renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={()=>navigation.navigate('SermonDetail', { id: item.id })}>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

    return (
        <FlatList
          keyExtractor={keyExtractor}
          data={sermons}
          renderItem={renderItem}
        />
      )
    
}