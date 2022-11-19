import {Component, useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const CalculatorWithStateFunctionalComponent = myProps => {
  let [number, setNumber] = useState(0);

  let {number2} = myProps;

  useEffect(() => {
    setNumber(number2);
  }, [number2]);

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 50}}>
        {number}
      </Text>
      <Button
        title="Add"
        onPress={() => {
          setNumber(number + 1);
        }}
      />
    </View>
  );
};

export default CalculatorWithStateFunctionalComponent;
