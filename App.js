import {SafeAreaView, ScrollView, View} from 'react-native';
import {ProductComponent} from './src/ProductComponent';
import {ProfileComponent} from './src/ProfileComponent';
import MyProfile from './src/MyProfile';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <MyProfile />
        <ProductPostView />
        <ProductPostView />
        <ProductPostView />
        <ProductPostView />
        <ProductPostView />
        <ProductPostView />
        <ProductPostView />
        <ProductPostView />
        <ProductPostView />
        <ProductPostView />
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

export default App;
