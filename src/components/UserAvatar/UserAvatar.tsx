import React from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {windowWidth} from './../../utils/Dimensions';
// import { Container } from './styles';
type Props = {
  imageUrl: ImageSourcePropType;
  firstname: String;
  age: number;
  onPress: Function;
};
const UserAvatar: React.FC<Props> = ({imageUrl, firstname, age, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <ImageBackground style={styles.container} source={imageUrl}>
        <View>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '700',
            }}>
            {firstname + ', ' + age}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default UserAvatar;
const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2 - 20,
    height: windowWidth / 2 - 20,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    padding: 10,
  },
});
