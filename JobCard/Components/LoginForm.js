import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, } from "react-native";


export const LoginForm = ({onPress,email, setemail, userName, setUserName}) => {
    

    return (
        <View style={styles.form}>
            <TextInput textContentType="text" 
             placeholder={'Name'}
             style={styles.inputbox}
             onChangeText={setUserName}
             value={userName}/>
            <TextInput textContentType="email" 
            placeholder={'Email'} 
            style={styles.inputbox}
            onChangeText={setemail}
            value={email}/>
            <TouchableOpacity style={styles.loginButton} 
            onPress={onPress}>
                Log in</TouchableOpacity>
            <View style={styles.MoreOptions}>
                <View style={styles.horizontalLine}/>
                <Text style={styles.options}>Or continue with</Text>
                <View style={styles.horizontalLine}/>
            </View>
            <View> 
                <Image  style={styles.Signin} source={require('../assets/signin.png')}/>
            </View>
            <View style={styles.futherOption}>
                <Text style={styles.noAccount}>Haven't an account yet? <Text style={styles.register}>Register</Text></Text>
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    form:{
        padding: '20px'
        
    },
    inputbox:{
        width: '98%',
        height: '52px',
        border: 'solid 1px #AFB0B6',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '45px',
        color: '#AFB0B6'
    },
    loginButton:{
        backgroundColor: '#356899',
        width: '98%',
        height: '52px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        font: 'poppins',
        borderRadius: '5px',
        justifyContent: 'center',
        marginBottom: '40px',
    },
    MoreOptions: {
        marginTop: '40px',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    horizontalLine:{
        width:  '50px',
        height: '1px',
        backgroundColorColor: '#AFB0B6',
        border: 'solid 0.3px #AFB0B6',
        flex: 1.5,
        alignSelf: 'center'
    },
    options: {
        color: '#AFB0B6',
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '16.44px',
        flex: 2,
        textAlign: 'center'
    },
    Signin: {
        width: '216px',
        height: '56px',
        marginTop: '60px',
        alignSelf: 'center'
    },
    futherOption: {
        marginTop: '40px',
    },
    noAccount: {
        color: '#BDBEC2',
        fontSize: '14px',
        fontWeight: 400,
        textAlign: 'center',
        lineHeight: '17.7px',
    },
    register: {
        color: '#356899' ,
        cursor: 'pointer'
    },

  })