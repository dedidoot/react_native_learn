import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Component} from 'react';
import shoes from './assets/ic_shoes.jpeg';

const App = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
    </ScrollView>
  );
};

const SampleComponent = () => {
  function onText(text) {
    console.log(text);
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <Text style={{fontSize: 20}}>Hello, React Native!</Text>
        <Text>Mobile Application Development Framework</Text>
        <Text1Component />
        <Text2Component />
        <TextInput
          style={{borderWidth: 1, borderColor: 'grey', height: 48}}
          placeholder={'Your input'}
          placeholderTextColor={'grey'}
          onChangeText={text => onText(text)}
        />
        <MyPhoto />
        <ProductComponent />
      </View>
    </SafeAreaView>
  );
};

function Text1Component() {
  return <Text style={{color: 'grey'}}>Javascript Language</Text>;
}

const Text2Component = () => {
  return <Text style={{color: 'grey'}}>Build Application iOS & Android</Text>;
};

const MyPhoto = () => {
  return (
    <Image
      source={{
        uri: 'https://placeimg.com/100/100/tech',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class ProductComponent extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#f2f2f2',
          padding: 10,
          width: 212,
          marginTop: 16,
          marginLeft: 16,
          borderRadius: 8,
        }}>
        <Image
          source={shoes}
          style={{
            width: 188,
            height: 107,
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

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export default App;
