import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import AddUserModal from '../container/AddUserModal/AddModal';

// import { Container } from './styles';
import UserAvatar from './../components/UserAvatar/UserAvatar';
import {getUsersRequest} from './../store/actions/actions';
import {windowWidth} from './../utils/Dimensions';
import UserViewModal from './../container/UserViewModal/UserViewModal';

const Home: React.FC = props => {
  console.log(props.users);
  const [visible, setvisible] = useState(false);
  const [loading, setloading] = useState(true);
  const [selectedUser, setselectedUser] = useState(null);
  const [visibleModalView, setvisibleModalView] = useState(false);
  useEffect(() => {
    props.getUsers();
  }, []);
  useEffect(() => {
    if (props.users.length > 0) {
      setloading(false);
    }
  }, [props.users]);
  useEffect(() => {
    if (props.error) {
      setloading(false);
      alert(props.error);
    }
  }, [props.error]);
  return (
    <View
      style={{
        padding: 10,
        justifyContent: 'space-between',
      }}>
      {loading && (
        <ActivityIndicator
          animating
          color={'#000'}
          size="large"></ActivityIndicator>
      )}
      {!loading && (
        <FlatList
          data={[...props.users]}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          renderItem={({item}) => (
            <UserAvatar
              onPress={() => {
                setselectedUser(item);

                setvisibleModalView(true);
              }}
              firstname={item.firstName}
              age={item.age}
              imageUrl={{uri: item.image}}></UserAvatar>
          )}></FlatList>
      )}
      {!loading && (
        <View style={styles.absoluteView}>
          <Button title="Add user" onPress={() => setvisible(true)}></Button>
        </View>
      )}
      <AddUserModal
        visible={visible}
        onClose={() => setvisible(false)}></AddUserModal>
      <UserViewModal
        onClose={() => setvisibleModalView(false)}
        user={selectedUser}
        visible={visibleModalView}></UserViewModal>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    users: state.app.users,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsersRequest()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  absoluteView: {
    position: 'absolute',
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: '90%',
    height: 100,
    backgroundColor: '#fff',
  },
});
