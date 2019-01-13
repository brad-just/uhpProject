import React, { Component } from 'react';
import {
        StyleSheet,
        View,
        Text,
        ScrollView,
        ImageBackground,
        Dimensions,
        Animated,
      }
from 'react-native';

const HEADER_EXPANDED_HEIGHT = .17 * Dimensions.get('window').height
const HEADER_COLLAPSED_HEIGHT = 0

export default class EventRequirements extends Component {
  constructor(props) {
  super(props);
  this.state = {
    scrollY: new Animated.Value(0)
  }
};
  static navigationOptions = {
    headerLeftContainerStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginRight: '2%',
      marginLeft: '.05%',
    },
    headerStyle: {
      height: (.07 * Dimensions.get('window').height),
      borderBottomWidth: 0,
      elevation: 0,
      backgroundColor: 'rgb(165,36,59)',
    },
  };

  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });


      return (
        <View style={styles.container}>

          <ImageBackground source={require("../../../assets/Images/event_reqs.png")} style={styles.backgroundImage}>

            <Animated.View style={[styles.headerContainer, {height: headerHeight}]}>
              <Text style={styles.headerTitleText}>Event Requirements</Text>
              <Text style={styles.headerText}>To fulfill your event requirements,
                    you must complete 1 UHP Academic Event
                    and 1 Social Justice Event.
              </Text>
            </Animated.View>

            <View style={styles.opacity}>
              <ScrollView style={styles.bodyContainer}
                          onScroll={Animated.event(
                            [{ nativeEvent: {
                                contentOffset: {
                                   y: this.state.scrollY
                                 }
                               }
                            }])}
                        scrollEventThrottle={16}>
                <View style={styles.postItContainer}>

                  <View style={styles.postItHeader}>
                    <Text style={styles.postItHeaderText}>UHP Academic Event</Text>
                  </View>

                  <Text style={styles.postItBodyText}>Fulfilled by:</Text>

                  <View style={styles.postItBody}>
                    <Text style={styles.postItBodyText}>- Events sponsored by UHP</Text>
                    <Text style={styles.postItBodyText}>- Becoming a UHP mentor</Text>
                    <Text style={styles.postItBodyText}>- Fall Fellowship Workshop</Text>
                    <Text style={styles.postItBodyText}>- Honors peer advising workshops</Text>
                    <Text style={styles.postItBodyText}>- Senior Thesis Poster Session</Text>
                    <Text style={styles.postItBodyText}>- Any event advertised as a UHP Event in the weekly Honors Program newsletter</Text>
                  </View>

                </View>

                <View style={styles.postItContainer}>

                  <View style={styles.postItHeader}>
                    <Text style={styles.postItHeaderText}>Social Justice Event</Text>
                  </View>

                  <Text style={styles.postItBodyText}>Designed to encourage Honors students to expand their
                        perspectives beyond the classroom by participating in
                        an on-campus event focused on a social justice issue.</Text>

                  <View style={styles.postItBody}>
                    <Text style={styles.postItBodyText}>Fulfilled by attending programming by:</Text>
                    <Text style={styles.postItBodyText}>- SCCAP</Text>
                    <Text style={styles.postItBodyText}>- The MCC</Text>
                    <Text style={styles.postItBodyText}>- Markkula Center for Applied Ethics</Text>
                    <Text style={styles.postItBodyText}>- Other organizations or academic departments on campus</Text>
                  </View>

                </View>
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      );
    };
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    backgroundColor: 'rgb(165,36,59)',
  },
  headerTitleText: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: (.05 * Dimensions.get('window').height),
    marginBottom: '2%',
  },
  headerText: {
    fontSize: (.025 * Dimensions.get('window').height),
    textAlign: 'center',
    color: 'white',
    marginRight: '2%',
    marginLeft: '2%',
    marginBottom: '2%'
  },
  backgroundImage: {
    flex: 4,
    height: '100%',
    width: '100%'
  },
  opacity: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  bodyContainer: {
    width: '100%',
  },
  postItContainer: {
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    height: (.5 * Dimensions.get('window').height),
    width: (.90 * Dimensions.get('window').width),
    marginTop: (.05 * Dimensions.get('window').height),
    marginBottom: (.05 * Dimensions.get('window').height),
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  postItHeader: {
    alignItems: 'center',
  },
  postItHeaderText: {
    fontSize: (.04 * Dimensions.get('window').height),
    textAlign: 'center',
  },
  postItBody: {
    alignItems: 'flex-start',
  },
  postItBodyText: {
    fontSize: (.025 * Dimensions.get('window').height),
    marginLeft: (.02 * Dimensions.get('window').width),
    marginRight: (.02 * Dimensions.get('window').width)
  },
});