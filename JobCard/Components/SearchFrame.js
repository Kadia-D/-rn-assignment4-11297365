import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

const SearchFrame = () => {
  return (
        <View style={styles.intro}>
            <View> 
            <TextInput placeholder='Search for a job or position' style={styles.searchbar}/>
            <Image source={require('../assets/searchicon.png')} style={styles.searchicon} />
            </View>
            <View style={styles.filter} >
                <Image 
                source={require('../assets/filtericon.png')} 
                style={styles.filterImage} 
            />
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
    intro:{
        display: 'flex',
        flexDirection: 'row',  
        alignItems: 'flex-start', 
        justifyContent: 'space-between',
        marginTop: '20px',
        marginBottom: '25px',
    },
    searchbar:{
        color: '#95969D',
        borderRadius: '12px',
        width: '290px',
        height: '49px',
        paddingLeft: '50px',
        marginLeft: '18px',
        marginTop: '25px',
        backgroundColor: '#F2F2F3',
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '22.5px'
      }, 
      searchicon:{
        position: 'relative',
        width: '16px',
        height: '16px',
        left: '35px',
        top: '-33px',
        cursor: 'pointer',
      },
      filter: {
        backgroundColor: '#F2F2F3',
        borderRadius:'12px',
        width: '48px',
        height: '48px',
        marginTop: '25px',
        marginRight: '20px',
      },
      filterImage: {
        height: '25.5px',
        width: '28.5px',
        margin: 'auto',
      },
});

export default SearchFrame;