import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ProductComponent} from './ProductComponent';

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

export default SampleComponent;
