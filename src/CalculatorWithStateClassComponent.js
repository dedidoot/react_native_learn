import {Component} from 'react';
import {Button, Text, View} from 'react-native';

class CalculatorWithStateClassComponent extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 50}}>
          {this.state.number}
        </Text>
        <Button
          title="Add"
          onPress={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        />
      </View>
    );
  }
}

export default CalculatorWithStateClassComponent;
