import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {
  // const data = navigator.geolocation.getCurrentPosition();
  // console.log(data);
  return (
    <View style={styles.view}>
      <Text>Map</Text>
      <MapView
        style={styles.map}
        showsTraffic={true}
        showsCompass={true}
        initialRegion={{
          latitude: -6.2023936,
          longitude: 106.65270989999999,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          draggable
          coordinate={{longitude: 106.65270989999999, latitude: -6.2023936}}
          title="Kota Tangerang"
          description="Tangerang"
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  view: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
