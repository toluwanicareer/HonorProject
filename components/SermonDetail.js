import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import sermons from './sermon';
import { Audio } from 'expo-av';


const SermonDetail = ( {route, navigation} ) => {

    const {id} = route.params;
    const [sermon, ] = useState(sermons.filter(item=> item.id == id)[0])
    const [sound, setSound] = React.useState();

    navigation.setOptions({title: sermon.name})

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    async function playSound() {  
        const audioPermission = await Audio.requestPermissionsAsync();
        
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/sermon.mp4')
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync(); 
        
    }

    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.container}>
                <Button title="Listen to Sermon" onPress={playSound} />
            </View>
                <Text style={styles.title}>{sermon.name}</Text>
                <Text style={styles.verse}>{sermon.verse}</Text>
                <Text style={styles.body}>{sermon.sermon}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      padding: 20,
      
      
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
    },
    verse: {
        fontStyle: 'italic',
        marginTop: 20,

    },
    body: {
      marginTop: 30,
        backgroundColor: '#ccc',
        padding: 20,
    }
})

export default SermonDetail