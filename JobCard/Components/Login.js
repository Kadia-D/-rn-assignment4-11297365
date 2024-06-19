import { View, Text, StyleSheet } from "react-native";
import { Header } from './Header';
import { LoginForm } from "./LoginForm";
import { useState } from "react";

export const Login = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [email, setemail] = useState('');
    return (
      <View>
        <Header/>
        <LoginForm onPress={() => navigation.navigate("Home" , {userName: userName, email: email}) } 
        setemail= {setemail} setUserName={setUserName} email={email} userName={userName}/>
      </View>
    );
  }