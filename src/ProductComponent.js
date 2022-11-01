import {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import shoes from '../assets/ic_shoes.jpeg';

export class ProductComponent extends Component {
  render() {
    console.log('sip', Date.now());
    return (
      <View
        style={{
          backgroundColor: '#f2f2f2',
          padding: 10,
          marginTop: 16,
          marginHorizontal: 16,
          borderRadius: 8,
        }}>
        <Image
          source={shoes}
          style={{
            width: '100%',
            height: 107,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
        <Text style={TitleTextStyle.text}>Shoes</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'orange',
            marginTop: 12,
          }}>
          Rp. 280.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: 'black',
            marginTop: 4,
          }}>
          Jakarta
        </Text>
        <BuildButton />
      </View>
    );
  }
}

const BuildButton = () => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        borderRadius: 12,
        marginTop: 12,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          padding: 8,
        }}>
        Buy
      </Text>
    </View>
  );
};

const TitleTextStyle = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});
