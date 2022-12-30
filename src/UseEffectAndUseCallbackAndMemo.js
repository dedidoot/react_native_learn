import { Button, Text, TouchableOpacity, View } from "react-native";
import {memo, useCallback, useEffect, useState} from 'react';

function UseEffectAndUseCallbackAndMemo() {
  const [count, setCount] = useState(0);

  const [number, setNumber] = useState(0);
  const incrementNumber = useCallback(async () => {
    await delay(1000);
    setNumber(number + 1);
  }, [number]);
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log('render UseEffectAndUseCallbackAndMemo...');

  useEffect(() => {
    incrementNumber();
  }, []);

  return (
    <View>
      <OnlyText text={'Only Text'} setText={setCount} />
      <TextMe label={'number'} val={number} />
      <TextYou label={'count'} val={count} />
      <Button
        onPress={incrementNumber}
        title={'Change callback'}
        color="#841584"
      />

      <Button
        onPress={incrementCount}
        title={'Do not change callback'}
        color="#841584"
      />
    </View>
  );
}

const OnlyText = props => {
  console.log('text', props.text, props);
  return (
    <TouchableOpacity
      onPress={() => {
        props.setText(Date.now());
      }}>
      <Text>
        {props.text} {Date.now()}
      </Text>
    </TouchableOpacity>
  );
};

const TextMe = memo(({label, val}) => {
  console.log(`${label} TextMe render`);
  /*
   * Add more component in here, you can get benefit NO RE-RENDER components
   * */
  return (
    <Text>
      {label} {val} {Date.now()}
    </Text>
  );
});

const TextYou = memo(({label, val}) => {
  console.log(`${label} TextYou render`);
  /*
   * Add more component in here, you can get benefit NO RE-RENDER components
   * */
  return (
    <Text>
      {label} {val} {Date.now()}
    </Text>
  );
});

const delay = ms => new Promise(res => setTimeout(res, ms));

export default UseEffectAndUseCallbackAndMemo;
