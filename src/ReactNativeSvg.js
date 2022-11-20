import {View, StyleSheet} from 'react-native';
import NotFound from '../assets/not_found_illustration.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <NotFound />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default ReactNativeSvg;
