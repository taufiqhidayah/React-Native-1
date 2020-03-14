import React, { Component } from 'react';
import { Image,StyleSheet, Text, View, Alert, ScrollView, TouchableOpacity } from 'react-native';
export default class App extends Component {

  constructor() {
    super();
    this.tmpArray = [
      { name: "Taufiq", age: 16, class: "B.C.A" , image:"tata.jpg" },
      { name: "Tono", age: 17, class: "B.C.A", image:"tata.jpg" },
      { name: "Dina", age: 18, class: "B.C.A", image:"tata.jpg" },
      { name: "Dinda", age: 19, class: "B.C.A" , image:"tata.jpg"}
    ];

  } 
  showArrayItem = (item) => {
    // Alert.alert(item);
    this.props.navigation.navigate('Details',{
        itemId: item.name,
        otherParam: item.age,
      })
  }

  render() {

    return (

      <View style={styles.MainContainer}>

        <ScrollView>

          {
            this.tmpArray.map((item, key) => (

              <TouchableOpacity key={key} onPress={this.showArrayItem.bind(this,item)}>
              
                {/* <Image source={require(`../android/app/src/assets/img/${item.image}`)} style={{width: '100%', height:'100%'}}/> */}
                <Text style={styles.TextStyle} > Name = {item.name} </Text>
                <Text style={styles.TextStyle} > Age = {item.age} </Text>
                <Text  style={styles.TextStyle} > Class = {item.class} </Text>
                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

              </TouchableOpacity>

            ))
          }

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    margin: 2,
  },

  TextStyle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left'
  }

});