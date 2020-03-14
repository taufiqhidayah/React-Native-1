import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
// import {withNavigation} from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class ProfileActivity extends Component {
  // static navigationOptions = {
  //   //Setting the header of the screen
  //   title: 'Second Page',
  // };
  render() {
    const {route,navigation} = this.props
    const { itemId } = route.params;
    const { otherParam } = route.params;
    
    return (
      <View>
        <Button onPress={()=> this.props.navigation.navigate('Home')}
        title="Kirim"/>
         <Text>
         itemId: {JSON.stringify(itemId)}
        </Text>
        <Text>
         itemId: {JSON.stringify(otherParam)}
        </Text>
      </View>
    )
  }
}
export default ProfileActivity
