import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import io from 'socket.io-client';
import axios from 'axios';

export default class Realtime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  getData = () => {
    axios({
      method: 'GET',
      url: 'http://192.168.43.81:3000/products',
    })
      .then((res) => {
        this.setState({
          product: res.data.data,
        });
        console.log(this.state.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  sendMessage = () => {
    this.socket.emit('chat message', {
      sender: 'Prio',
      receiver: 'Arief',
      msg: 'hai from app',
    });
  };

  componentDidMount() {
    this.getData();
    this.socket = io('http://192.168.43.81:3000');
    // this.socket.emit('chat message', 'hai from app');
    this.socket.on('product', (res) => {
      this.setState({product: [...this.state.product, res]});
    });
  }
  componentWillUnmount() {
    this.socket.removeAllListeners();
    this.socket.disconnect();
  }
  render() {
    return (
      <View>
        <Text> Realtime </Text>
        <Button title="send message" onPress={() => this.sendMessage()} />
        {this.state.product.map((data) => {
          return (
            <View key={data.id}>
              <Text>{data.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
