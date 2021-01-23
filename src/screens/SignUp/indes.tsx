import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {
  Container,
  InputArea,
  CustomButtom,
  CustomButtomText,
  SignMessageButtom,
  SignMessageButtomText,
  SignMessageButtomTextBold,
} from './styles';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

export default () => {
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const {dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();

  const handleSignClick = async () => {
    if (nameField !== '' && emailField !== '' && passwordField !== '') {
      let res = await Api.signUp(nameField, emailField, passwordField);
      if (res.token) {
        await AsyncStorage.setItem('token', res.token);
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar,
          },
        });

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        Alert.alert('Erro', res.error, [], {
          cancelable: true,
        });
      }
    } else {
      Alert.alert('Alerta', 'Preencha os campos!', [], {cancelable: true});
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [
        {
          name: 'SignIn',
        },
      ],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(t: React.SetStateAction<string>) => setNameField(t)}
          password={false}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t: React.SetStateAction<string>) => setEmailField(t)}
          password={false}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t: React.SetStateAction<string>) =>
            setPasswordField(t)
          }
          password={true}
        />

        <CustomButtom onPress={handleSignClick}>
          <CustomButtomText>CADASTRAR</CustomButtomText>
        </CustomButtom>
      </InputArea>

      <SignMessageButtom onPress={handleMessageButtonClick}>
        <SignMessageButtomText>Já possui uma conta?</SignMessageButtomText>
        <SignMessageButtomTextBold>Faça Login</SignMessageButtomTextBold>
      </SignMessageButtom>
    </Container>
  );
};
