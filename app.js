import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import seta1 from './assets/seta.png';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={seta1} style={styles.setaimg}/>
      <Text style={styles.headtxt}>Account</Text>
      </View>
      <View style={styles.maincont}>
      <Text style={styles.mainconttxt}>Log in or create an account to access your{'\n'}projects,view local development servers, and{'\n'}more.</Text>
      <View style={styles.button1}>
        <Text style={styles.buttontxt}>Log in</Text>
      </View>
      <View style={styles.button2}>
        <Text style={styles.buttontxt2}>Sing up</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#010101'
  },
  header:{
    backgroundColor:'black',
    width:'100%',
    height:'7%'
  },
  setaimg:{
    position:'relative',
    top:16,
    left:10,
    width:25,
    height:25,
  },
  headtxt:{
    position:'relative',
    left:50,
    bottom:8,
    fontWeight:'bolder',
    color:'white',
    fontSize:20,
  },
 maincont:{
   width:'100%',
   height:'24%',
   backgroundColor:'#161B21'
 },
  mainconttxt:{
    position:'relative',
    paddingTop:20,
    left:15,
    color:'#818892',
    fontWeight:'400'
  },
  button1:{
    position:'realtive',
    left:12,
    top:15,
    padding:12,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#1E2327',
    width:'93%',
    backgroundColor:'#1E2327'
  },
  buttontxt:{
    position:'relative',
    left:120,
    fontSize:15,
    color:'white',
    fontWeight:'bolder',
  },
  button2:{
    position:'realtive',
    left:12,
    top:15,
    marginTop:13,
    padding:12,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#1E2327',
    width:'93%',
    backgroundColor:'#2F363E'
  },
  buttontxt2:{
    position:'relative',
    left:120,
    fontSize:15,
    color:'white',
    fontWeight:'bolder',
  },
  
});
