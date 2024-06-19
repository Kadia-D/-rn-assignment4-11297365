import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Jobs = ({companyLogo, jobTitle, company, pay, location, background}) => {
  return (
    <View style={styles.jobcard}>
        <Image source={background} style={styles.maskImage} />
        <View style={styles.details}>
            <View style={styles.cardheader}>
                <View style={styles.logo}>
                    <Image source={companyLogo} style={styles.companyLogo} />
                </View>
                <View style={styles.headerText}>
                    <Text style={styles.jobTitle}>{jobTitle}</Text>
                    <Text style={styles.company}>{company}</Text>
                </View>
                
            </View>
            
            <View style={styles.sub}>
                <Text style={styles.subtext}>{pay}</Text>
                <Text style={styles.subtext}>{location}</Text>
            </View>
        </View>  
    </View>
  );
};

const styles = StyleSheet.create({
    jobcard:{
        width: '280px',
        height: '186px',
        borderRadius: '24px',
        
        marginBottom: '35px',
        marginLeft: '8px',
      },
    details: {
        zIndex: 50,
        position: 'relative',
        top: '-175px',
        color: 'white',
    },
    cardheader:{
        flexDirection: 'row',
        alignContent: 'center',
    },
    companyLogo:{
        width: '22px',
        height: '24px',
        
        alignSelf: 'center'
    },
    jobTitle:{
        fontSize: '16px',
        marginLeft: '20px',
        marginTop: '10px',
        fontWeight: '600',
        color: 'white',
    },
    logo:{
        width: '46px',
        Height: '46px',
        borderRadius: '12px',
        backgroundColor: 'white',
        marginLeft: '20px',
        marginTop: '10px',
        justifyContent: 'center',
    
    },
    company:{
        fontSize: '12px',
        marginLeft: '20px',
        fontWeight: 500,
        color: 'white',
    },
    maskImage: {
        width: '280px',
        height: '186px',
        borderRadius: '24px',
       
    },
    sub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '260px',
        marginTop: '90px',
        width: '240px',
        alignSelf: 'center',  
    },
    subtext:{
        color: 'white',
    }

});