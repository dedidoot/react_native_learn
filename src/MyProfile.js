import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const MyProfile = () => {
  return (
    <View style={MyProfileStyle.rootWrapper}>
      <View style={MyProfileStyle.imageWrapper}>
        <Image
          source={{uri: 'https://placeimg.com/640/480/people'}}
          style={MyProfileStyle.imageRound}
        />
        <Text style={MyProfileStyle.textRound}>99</Text>
      </View>
      <Text style={MyProfileStyle.title}>Alexander Sebastiano</Text>
      <Text style={MyProfileStyle.subtitle}>Software Engineer</Text>
    </View>
  );
};

export default MyProfile;

const MyProfileStyle = StyleSheet.create({
  rootWrapper: {
    alignItems: 'center',
  },
  imageWrapper: {},
  imageRound: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
  },
  textRound: {
    color: 'white',
    position: 'absolute',
    padding: 4,
    borderRadius: 24 / 2,
    right: 20,
    top: 10,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  title: {
    marginTop: 16,
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
  },
});
