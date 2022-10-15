import {Component} from 'react';
import {Image, Text, View} from 'react-native';

export class ProfileComponent extends Component {
  render() {
    return (
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
              <Text style={{color: '#000', fontSize: 18}}>John Doe</Text>
              <Text style={{color: '#000', fontSize: 12}}>23 day ago</Text>
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 16,
            marginTop: 16,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 10,
            }}>
            Favorite Size:
          </Text>
          <AvailabilitySize size="28" />
          <AvailabilitySize size="29" />
          <AvailabilitySize size="30" />
          <AvailabilitySize size="31" />
          <AvailabilitySize size="32" />
        </View>
      </View>
    );
  }
}

const AvailabilitySize = props => {
  const {size} = props;
  return (
    <View
      style={{
        color: 'black',
        backgroundColor: '#EDEDED',
        borderRadius: 20,
        padding: 8,
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 10,
        }}>
        {size}
      </Text>
    </View>
  );
};
