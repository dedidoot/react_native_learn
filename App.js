import {Image, SafeAreaView, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <Text>Sip1</Text>
        <Text>Sip2</Text>
        <Text>Sip3</Text>
        <Text1Component />
        <Text2Component />
        <TextInput style={{borderWidth: 1}} />
        <MyPhoto />
      </View>
    </SafeAreaView>
  );
};

function Text1Component() {
  return <Text>Text1</Text>;
}

const Text2Component = () => {
  return <Text>Text2</Text>;
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

export default App;
