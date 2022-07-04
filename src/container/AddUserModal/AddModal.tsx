import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/Button';
import {addUser} from '../../store/actions/actions';

// import { Container } from './styles';
type Props = {
  visible: boolean;
  onClose: Function;
};
const AddUserModal: React.FC<Props> = ({visible, onClose, addUser}) => {
  const [user, setuser] = useState({
    id: new Date().getTime(),
    firstName: '',
    lastName: '',
    maidenName: '',
    age: null,

    image: '',

    company: {
      address: {
        address: '',
        city: '',
      },
      postalCode: '',
      state: '',
    },
  });
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text
              onPress={() => onClose()}
              style={{
                fontSize: 25,
                textAlign: 'right',
              }}>
              X
            </Text>
          </View>
          <Text>Personal Information</Text>
          <TextInput
            placeholder="First Name"
            onChangeText={t =>
              setuser({
                ...user,
                firstName: t,
              })
            }></TextInput>
          <TextInput
            placeholder="Last Name"
            onChangeText={t =>
              setuser({
                ...user,
                lastName: t,
              })
            }></TextInput>
          <TextInput
            placeholder="Age"
            onChangeText={t =>
              setuser({
                ...user,
                age: t,
              })
            }></TextInput>
          <TextInput
            placeholder="ImageUrl"
            onChangeText={t =>
              setuser({
                ...user,
                image: t,
              })
            }></TextInput>
          <Text>Company information</Text>
          <TextInput
            placeholder="City"
            onChangeText={t =>
              setuser({
                ...user,
                company: {
                  address: {
                    city: t,
                  },
                },
              })
            }></TextInput>
          <TextInput
            placeholder="Address"
            onChangeText={t =>
              setuser({
                ...user,
                company: {
                  address: {
                    address: t,
                  },
                },
              })
            }></TextInput>
          <TextInput
            placeholder="State"
            onChangeText={t =>
              setuser({
                ...user,
                company: {
                  state: t,
                },
              })
            }></TextInput>
          <TextInput
            placeholder="Postal Code"
            onChangeText={t =>
              setuser({
                ...user,
                company: {
                  state: {
                    postalCode: t,
                  },
                },
              })
            }></TextInput>
        </ScrollView>
        <Button
          title="Add user"
          onPress={() => {
            addUser(user);
            onClose();
          }}></Button>
      </View>
    </Modal>
  );
};
const mapStateToProps = state => {
  return {
    users: state.app.users,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    color: '#000',
  },
});
