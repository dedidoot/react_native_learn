import {Button, Text, View} from 'react-native';
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
      <TextMe label="number" val={number} />
      <TextYou label="count" val={count} />
      <Button
        onPress={incrementNumber}
        title="Change callback"
        color="#841584"
      />

      <Button
        onPress={incrementCount}
        title="Do not change callback"
        color="#841584"
      />
    </View>
  );
}

const TextMe = memo(({label, val}) => {
  console.log(`${label} TextMe render`);
  return (
    <Text>
      {label} {val}
    </Text>
  );
});

const TextYou = memo(({label, val}) => {
  console.log(`${label} TextYou render`);
  return (
    <Text>
      {label} {val}
    </Text>
  );
});

const delay = ms => new Promise(res => setTimeout(res, ms));

export default UseEffectAndUseCallbackAndMemo;
