import React, { Component } from 'react'
import {StyleSheet, Text, View ,TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class HomeActivity extends Component{
  constructor(props){
    super(props)
    this.state={
      username:'admin',
      password :'admin'
    }
  }
  loginData(){
    console.log("Trigger");
    if(this.state.username =='admin' && this.state.password =='admin'){
      this.props.navigation.navigate('List',{
        itemId: 86,
        otherParam: 'anything you want here',
      })
    }else{
      console.log("Gagal")
    }
  }
  render() {
    
    return (
      <View style={styles.pusat}>
        <TextInput

          style={{borderWidth:1}}
          placeholder="Username"
          onChangeText={text=>this.setState({username:text})}
        />
         <TextInput
          style={{borderWidth:1}}
          placeholder="Password"
          onChangeText={text=> this.setState({password:text})}
          
        />
        <Button
          onPress={()=>this.loginData()}
          title='Login'
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  pusat :{
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1 
  }
})

export default HomeActivity