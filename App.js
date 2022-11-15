import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProductComponent} from './src/ProductComponent';
import {ProfileComponent} from './src/ProfileComponent';
import {useEffect, useState} from 'react';
import ProfileFuncComp from './src/ProfileFunctionalComponent';
import ProfilePropsComponent from './src/ProfilePropsComponent';
import CalculatorWithStateClassComponent from './src/CalculatorWithStateClassComponent';
import CalculatorWithStateFunctionalComponent from './src/CalculatorWithStateFunctionalComponent';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  const [username, setUsername] = useState('Joni');
  const [day, setDay] = useState(1);
  const posts = [];

  for (let i = 0; i < 3; i++) {
    posts.push(i);
  }
  /*useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  });*/

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: SCREEN_HEIGHT}}>
      <ScrollView>
        {/*<ProfileFuncComp />*/}
        <TouchableOpacity
          onPress={() => {
            setUsername('Joni Updated...');
            setDay(99);
          }}>
          <ProfilePropsComponent username={username} day={day} />
        </TouchableOpacity>
        {posts.map(post => {
          return (
            <ProfilePropsComponent
              key={post}
              username={Date.now()}
              day={post}
            />
          );
        })}
        <CalculatorWithStateClassComponent />
        <CalculatorWithStateFunctionalComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const ProductPostView = () => {
  return (
    <View style={{marginTop: 16}}>
      <ProfileComponent />
      <ProductComponent />
      <View
        style={{
          backgroundColor: '#EDEDED',
          flex: 1,
          height: 1,
          marginTop: 16,
        }}
      />
    </View>
  );
};

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export default App;
