import {Dimensions, SafeAreaView, ScrollView, View} from 'react-native';
import {ProductComponent} from './src/ProductComponent';
import {ProfileComponent} from './src/ProfileComponent';
import {useState} from 'react';
import ProfilePropsComponent from './src/ProfilePropsComponent';
import CalculatorWithStateClassComponent from './src/CalculatorWithStateClassComponent';
import CalculatorWithStateFunctionalComponent from './src/CalculatorWithStateFunctionalComponent';
import ReactNativeSvg from './src/ReactNativeSvg';
import CallAPIAxios from './src/CallAPIAxios';
import UseEffectAndUseCallback from "./src/UseEffectAndUseCallback";
import UseEffectAndUseCallbackAndMemo from "./src/UseEffectAndUseCallbackAndMemo";

const App = () => {
  const posts = [];
  const [thisIsClickFromProductItem, setThisIsClickFromProductItem] =
    useState(0);
  const [item, setItem] = useState(0);

  for (let i = 0; i < 3; i++) {
    posts.push(i);
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: SCREEN_HEIGHT}}>
      <ScrollView>
        {/*{posts.map(post => {
          return (
            <ProfilePropsComponent
              key={post}
              username={Date.now()}
              day={post}
              onItemClicked={() => {
                setThisIsClickFromProductItem(thisIsClickFromProductItem + 1);
                console.log('hello item ', post);
              }}
            />
          );
        })}
        <CalculatorWithStateFunctionalComponent
          number2={thisIsClickFromProductItem}
        />
        <View style={{marginTop: 50}} />
        <ProfilePropsComponent
          key={3}
          username={item}
          day={993}
          onItemClicked={() => {
            setItem(item + 1);
          }}
        />
        <CalculatorWithStateClassComponent number={item} />
        <ReactNativeSvg />
        <UseEffectAndUseCallback />*/}
        <UseEffectAndUseCallbackAndMemo />
        {/*<CallAPIAxios index={1} />
        <CallAPIAxios index={2} />
        <CallAPIAxios index={3} />
        <CallAPIAxios index={4} />*/}
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
