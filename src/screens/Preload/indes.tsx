import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        console.log('validate');
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, [navigation]);

  return (
    <Container>
      <BarberLogo width="100%" heigth="160" />
      <LoadingIcon size="large" color="#FFF" />
    </Container>
  );
};
