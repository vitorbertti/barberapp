import React, {useEffect, useState} from 'react';
import {Alert, Text} from 'react-native';
import {Container} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  useEffect(() => {
    const getBarberInfo = async () => {
      let json = await Api.getBarber(userInfo.id);
      if (json.error === '') {
        setUserInfo(json.data);
      } else {
        Alert.alert('Erro', json.error, [], {cancelable: true});
      }
    }
    getBarberInfo();
  }, [userInfo.id]);

  return (
    <Container>
      <Text>Barbeiro: {userInfo.name}</Text>
    </Container>
  );
};
