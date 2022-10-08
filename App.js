import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Component} from 'react';

const App = () => {
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
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
          }}
          style={{
            width: SCREEN_WIDTH / 2,
            height: SCREEN_HEIGHT / 4,
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
        <Text style={{textAlign: 'center'}}>Shoes</Text>
      </View>
    );
  }
}

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export default App;
