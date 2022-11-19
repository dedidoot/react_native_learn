import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useEffect} from 'react';

const ProfilePropsComponent = propsKu => {
  let {username, day, onItemClicked} = propsKu;

  useEffect(() => {
    console.log('username mount...', username);
    return () => {
      console.log('username updated...', username);
    };
  }, [username]);

  useEffect(() => {
    console.log('day mount...', day);
    return () => {
      console.log('day updated...', day);
    };
  }, [day]);

  return (
    <TouchableOpacity onPress={onItemClicked}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
          }}>
          <Image
            style={{width: 48, height: 48, borderRadius: 30}}
            source={{uri: 'https://placeimg.com/100/100/tech'}}
          />
          <View style={{marginLeft: 8, flex: 1}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#000', fontSize: 18}}>{username}</Text>
              <Text style={{color: '#000', fontSize: 12}}>{day} day ago</Text>
            </View>
            <Text style={{color: '#000', fontSize: 14}}>Jakarta</Text>
          </View>
        </View>
        <Text
          style={{
            color: '#000',
            fontSize: 12,
            marginHorizontal: 16,
            marginTop: 8,
          }}>
          convallis posuere morbi leo urna molestie at elementum eu facilisis
          sed odio morbi quis commodo odio aenean sed adipiscing diam
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilePropsComponent;
