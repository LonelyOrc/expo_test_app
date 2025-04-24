import { View, StyleSheet } from 'react-native';

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" />
          <Button label="Use this photo" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ // constant variable of styles
  container: {
    flex: 1,
    backgroundColor: '#25293e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
