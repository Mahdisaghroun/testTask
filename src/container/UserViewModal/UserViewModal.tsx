import React from 'react';
import {Modal, View, ImageBackground, Text} from 'react-native';

// import { Container } from './styles';
import {windowHeight, windowWidth} from './../../utils/Dimensions';

const UserViewModal: React.FC = props => {
  return (
    <Modal visible={props.visible} onRequestClose={() => props.onClose()}>
      <ImageBackground
        source={{uri: props?.user?.image}}
        imageStyle={{
          width: windowWidth,
          height: windowHeight,
          resizeMode: 'cover',
        }}
        style={{
          flex: 1,
          width: windowWidth,
          height: windowHeight,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: '#000',
            padding: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 25}}>
            {props.user?.firstName} {props.user?.lastName}
          </Text>
          <Text style={{color: '#fff', fontSize: 25}}>{props.user?.age}</Text>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default UserViewModal;
