import {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import axios from 'axios';

const CallAPIAxios = props => {
  const [user, setUser] = useState({
    avatar: '',
    first_name: '',
    last_name: '',
  });

  const getData = () => {
    axios
      .get('https://reqres.in/api/users/' + props.index)
      .then(result => {
        setUser(result.data.data);
      })
      .catch(err => console.log('error ', err));
  };

  return (
    <View>
      <Text>{user.first_name}</Text>
      <Text>{user.last_name}</Text>
      <Image style={{width: 100, height: 100}} source={{uri: user.avatar}} />
      <Button onPress={getData} title="Call API" color="#841584" />
    </View>
  );
};

export default CallAPIAxios;
