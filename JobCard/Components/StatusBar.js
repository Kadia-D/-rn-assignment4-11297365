import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.logo}>Jobizz</Text>
        <View > 
            <Text style={styles.intro}>Welcome Back 👋</Text>

        </View>
        <Text style={styles.slogan}>Let's log in. Apply to jobs!</Text>
      </View>
    );
  }