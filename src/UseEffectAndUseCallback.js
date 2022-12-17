import {Button, Text, View} from 'react-native';
import {useCallback, useEffect, useState} from 'react';

function ExampleChild({callbackFunction}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(value + 1);
  }, [callbackFunction]);
  console.log('render ExampleChild...');
  return <Text>{value}</Text>;
}

function UseEffectAndUseCallback() {
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(0);

  const countCallback = useCallback(() => {
    return count;
  }, [count]);

  console.log('render UseEffectAndUseCallback...');

  return (
    <View>
      <ExampleChild callbackFunction={countCallback} />
      <Text>Another state value: {another}</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Change callback"
        color="#841584"
      />

      <Button
        onPress={() => setAnother(another + 1)}
        title="Do not change callback"
        color="#841584"
      />
    </View>
  );
}

export default UseEffectAndUseCallback;
