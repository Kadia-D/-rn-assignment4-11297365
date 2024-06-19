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

  const styles = StyleSheet.create({
    header: {
        padding: "20px",
        flex: 1,
        alignItems: 'left',
        font: 'poppins',
        height: '20px',
        marginTop: '100px',
        marginBottom: '30px'
    },
    logo: {
        color: '#356899',
        fontWeight: '600',
        fontSize: '22px' 
    },
    intro:{
        fontWeight: '600',
        lineHeight: '33.6px',
        fontSize: '24px',
        color: '#0D0D26',
    },
    slogan:{
        fontWeight: 400,
        lineHeight: '22.4px',
        fontSize: '14px',
        color: '#0D0D26',
    }
    
  });