import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <Text>Home</Text>
      <Button title="go to maps" onPress={() => navigation.navigate('Maps')} />
      <Button
        style={styles.button}
        title="go to realtime"
        onPress={() => navigation.navigate('Realtime')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
});
