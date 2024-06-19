import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import SearchFrame from './SearchFrame';
import { FeaturedJobs } from './Featuredjobs';
import { PopularJobs } from './Popularjobs';

function HomeScreen({ route }) {
    const { userName, email } = route.params;

  return (
    <ScrollView style={styles.container}>
        <View style={styles.homeHeader}>
            <View>
                <Text style={styles.name}> {userName}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.homeHeader}>
                <Image style={styles.profileImage} source={require('../assets/profieImage.png')} />
                <View style={styles.active}/>
            </View>
        </View>

        <SearchFrame/>

        <View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Featured Jobs</Text>
                <Text style={styles.more}>See all</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.jobs}>
                <FeaturedJobs 
                    background={require('../assets/cardblue.png')}
                    companyLogo={require('../assets/facebook.png')}
                    jobTitle={'Software Engineer'}
                    company={'Facebook'}
                    pay= {'$180,000'}
                    location={'Accra, Ghana'}
                />
                 <FeaturedJobs 
                    background={require('../assets/cardblueblack.png')}
                    companyLogo={require('../assets/google.png')}
                    jobTitle={'IT Technician'}
                    company={'Google'}
                    pay= {'$260,000'}
                    location={'Los Angeles, California'}
                />
                 <FeaturedJobs 
                    background={require('../assets/cardviolet.png')}
                    companyLogo={require('../assets/amazon-color-svgrepo-com.svg')}
                    jobTitle={'Database Administrator'}
                    company={'Amazon'}
                    pay= {'$225,000'}
                    location={'Remote'}
                />
                 <FeaturedJobs 
                    background={require('../assets/cardwine.png')}
                    companyLogo={require('../assets/apple-logo-svgrepo-com.svg')}
                    jobTitle={'Social Media Manager'}
                    company={'Apple'}
                    pay= {'$100,000'}
                    location={'Medford, Texas'}
                />
                <FeaturedJobs 
                    background={require('../assets/cardorange.png')}
                    companyLogo={require('../assets/alibaba-svgrepo-com.svg')}
                    jobTitle={'Marketing Manager'}
                    company={'Alibaba'}
                    pay= {'$150,000'}
                    location={'Takoradi, Ghana'}
                />
                <FeaturedJobs 
                  background={require('../assets/cardindigo.png')}
                  companyLogo={require('../assets/google.png')}
                  jobTitle={'Software Engineer'}
                  company={'Google'}
                  pay= {'$240,000'}
                  location={'Tema, Ghana'}
              />
                <FeaturedJobs 
                    background={require('../assets/cardgreen.png')}
                    companyLogo={require('../assets/facebook.png')}
                    jobTitle={'Product Manager'}
                    company={'Facebook'}
                    pay= {'$190,000'}
                    location={'Accra, Ghana'}
                />
                <FeaturedJobs 
                  background={require('../assets/cardblack.png')}
                  companyLogo={require('../assets/amazon-color-svgrepo-com.svg')}
                  jobTitle={'Creative Designer'}
                  company={'Amazon'}
                  pay= {'$260,000'}
                  location={'Remote'}
              />
                
            </ScrollView>
        </View>

        <View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Popular Jobs</Text>
                <Text style={styles.more}>See all</Text>
            </View>

            <FlatList
                data={jobsData}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (
                
                  <PopularJobs
                    jobTitle={item.jobTitle}
                    company={item.company}
                    pay={item.pay}
                    location={item.location}
                    Imagesrc={item.Imagesrc}
                  />
                )}
              />

        </View>
        
    </ScrollView>
  );
}

const jobsData = [
  {
    id: '1',
    jobTitle: 'Jr Excutive',
    company: 'Burger King',
    pay: '$96,000/y',
    location: 'Los Angelos, US',
    Imagesrc: require('../assets/burgerKing.png'),
  },
  {
    id: '2',
    jobTitle: 'Product Manager',
    company: 'Beats',
    pay: '$84,000/y',
    location: 'Florida, US',
    Imagesrc: require('../assets/beats.png'),
  },
  {
    id: '3',
    jobTitle: 'Product Manager',
    company: 'Facebook',
    pay: '$98,000/y',
    location: 'Florida, US',
    Imagesrc: require('../assets/facebook.png'),
  },

  {
    id: '4',
    jobTitle: 'Data Scientist',
    company: 'Google',
    pay: '$96,000/y',
    location: 'Los Angelos, US',
    Imagesrc: require('../assets/google.png'),
  },
  {
    id: '5',
    jobTitle: 'Digital Markerter',
    company: 'McDonalds',
    pay: '$60,000/y',
    location: 'Texas, US',
    Imagesrc: require('../assets/mcdonalds-svgrepo-com.svg'),
  },
  {
    id: '6',
    jobTitle: 'Software Engineer',
    company: 'Microsoft',
    pay: '$80,000/y',
    location: 'Califonia, US',
    Imagesrc: require('../assets/microsoft-svgrepo-com.svg'),
  },
  {
    id: '7',
    jobTitle: 'Data Analyst',
    company: 'Google',
    pay: '$76,000/y',
    location: 'Georgia, US',
    Imagesrc: require('../assets/google.png'),
  },
  {
    id: '8',
    jobTitle: 'Data Scientist',
    company: 'Microsoft',
    pay: '$96,000/y',
    location: 'New York, US',
    Imagesrc: require('../assets/microsoft-svgrepo-com.svg'),
  },
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFD',
        padding: '20px',
        font: 'poppins',
        flexGrow: 1,
        flexDirection: 'column'
      },
      homeHeader:{
        display: 'flex',
        flexDirection: 'row',  
        alignItems: 'flex-start', 
        justifyContent: 'space-between',
        marginTop: '20px'
      },
      name: {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '36px',
        color: '#0D0D26',
      },
      email:{
        color: '#95969D',
        lineHeight: '24px',
        fontSize: '20px',
        fontWeight: '400',
        paddingLeft: '7px'
      }, 
      profileImage: {
        width: '54px',
        height: '54px',
      },
      active: {
        width: '8px',
        height: '8px',
        backgroundColor: '#FC1010',
        borderRadius: '50%',
        position: 'absolute',
        top: '6px',
        left: '40px',
      },
      titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '10px',
        marginBottom:'20px'
      },
      title: {
        color: '#0D0D26',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '20.8px'
      },
      more: {
        color: '#95969D',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16.8px',
      },
      jobs: {
        color: 'white',
      }


});

export default HomeScreen;