
import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  View,
  PermissionsAndroid,
  DeviceEventEmitter
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import Beacons from 'react-native-beacons-manager';





///111111111111111////////////////111111111111111111111111111111111111111111111111111111111111111111111111111
var region = {
  identifier: 'Estimotes',
  uuid: '3e6906d-3881-46c3-af84-201164710b57',
  //major: 12345,
  //minor: 111
};

Beacons.startRangingBeaconsInRegion(region);
class paradise extends React.Component{
  getInitialState() {
    return {
      beacons: []
    };
  }
  componentDidMount() {
    console.log(';jgf')
    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        this.setState({
          beacons: data.beacons.filter(item => item.rssi < 0).map(item => item.rssi)
        });
      }
    );
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.device} />
        <View style={styles.beaconContainer}>
          <View style={styles.beacon} />
        </View>
      </View>
    );
  }
};
AppRegistry.registerComponent('paradise', () => paradise);

//Beacons.requestWhenInUseAuthorization(); ///нужно к этому вернутся не робит метод

Beacons.startRangingBeaconsInRegion(region);
DeviceEventEmitter.addListener(
  'beaconsDidRange',
  (data) => {
    console.log(data);
  }
);
//1111111111111111111/////////////////////////////////////////////////////1111111111111111111111111111111111111111111



export default class App extends Component {
  getInitialState() {
    return {
      beacons: []
    };
  }
  componentDidMount() {
    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        this.setState({
          beacons: data.beacons.filter(item => item.rssi < 0).map(item => item.rssi)
        });
      }
    );
  }
  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.device} />
        <View style={styles.beaconContainer}>
          <View style={styles.beacon} />
        </View>
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  btleConnectionStatus: {
    // fontSize: 20,
    paddingTop: 20
  },
  headline: {
    fontSize: 20,
    paddingTop: 20
  },
  row: {
    padding: 8,
    paddingBottom: 16
  },
  smallText: {
    fontSize: 11
  },
  device: {
    width: 80,
    height: 80,
    backgroundColor: '#6cab36'
  },
  beaconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  beacon: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 200,
    backgroundColor: '#7c7c81'
  }
});

AppRegistry.registerComponent(
  'App',
  () => App
);