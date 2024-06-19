import React from 'react';
import { View, StyleSheet, Text, Image, } from 'react-native';


export const PopularJobs = ({ jobTitle, company, pay, location, Imagesrc }) => {
  return (
      <View style={styles.container}>
        <View>
         <Image source={Imagesrc } style={styles.image} />
        </View>
        <View>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.pay}>{pay}</Text>
          <Text style={styles.company}>{location}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '97%',
      height: '74px',
      flexDirection: 'row',
      marginBottom: '15px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingLeft: '15px',
      paddingRight: '15px',
    },
    jobTitle: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '18.2px',
      color: '#0D0D26',
    },
    pay:{
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '19.2px',
      color: '#0D0D26',
      textAlign: 'right',
    },
    company: {
      fontWeight: '400',
      fontSize: '13px',
      lineHeight: '20.2px',
      color: '#0D0D26',
    
    },
    image: {
      width: '42px',
      height: '43px',
    },
    right: {
      alignItems: 'right',
    
    },
});