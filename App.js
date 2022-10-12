import {ScrollView} from 'react-native';
import {ProductComponent} from './src/ProductComponent';
import SampleComponent from './src/SampleComponent';

const App = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <ProductComponent />
      <SampleComponent />
      <ProductComponent />
      <ProductComponent />
      <SampleComponent />
      <ProductComponent />
      <ProductComponent />
      <SampleComponent />
      <ProductComponent />
    </ScrollView>
  );
};

export default App;
