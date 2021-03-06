/*
 * Coded by Brad Just on 2/1/19.
 * Purpose: Displays information to the user thanking them for RSVPing for an event.
 * Notable Features: None
 */

import React, { Component } from 'react';
import {
        StyleSheet,
        View,
        Text,
        ImageBackground,
        Dimensions,
        ActivityIndicator,
        Platform,
      }
from 'react-native';

import GenericBanner from '../General/genericBannerScreen.js'

export default class Rsvp extends Component {
  constructor(props) {
  super(props);
  this.state = {
  }
}

static navigationOptions = {
  headerLeftContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '2%',
    marginLeft: '.05%'
  },
  headerStyle: {
    height: (.07 * Dimensions.get('window').height),
    backgroundColor: 'rgb(165,36,59)',
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerRightContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '2%',
  },
};


  render() {

    const { navigation } = this.props;
    const title = navigation.getParam('title', 'No Title');
    const requirement = navigation.getParam('requirement', 'No Req');
    const date = navigation.getParam('date', 'No Date');
    const email = navigation.getParam('email', 'No Email');
    const geolocation = navigation.getParam('geolocation', 'No Geolocation');

    return ( <GenericBanner title={'See you at the event!'} text={'Thank you for letting us know you are coming'} /> );

  }
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  opacity: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center'
  },
  infoBannerContainer: {
    height: '35%',
    backgroundColor: 'rgb(165,36,59)',
    justifyContent: 'space-evenly'
  },
  textTitle: {
    fontSize: (.045 * Dimensions.get('window').height),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
  },
  text: {
    fontSize: (.04 * Dimensions.get('window').height),
    color: 'white',
    textAlign: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
  },
  }
);
