import React, {useState} from 'react';
import {Alert, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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

export default () => {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const navigation = useNavigation();

  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '') {
      let json = await Api.signIn(emailField, passwordField);
      if(json.token) {
        // TODO
      }else {
        Alert.alert('Alerta', 'E-mail e/ou senha inválidos', [], {cancelable: true});
      }
    } else {
      Alert.alert('Alerta', 'Preencha os campos!', [], {cancelable: true});
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [
        {
          name: 'SignUp',
        },
      ],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
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
          <CustomButtomText>LOGIN</CustomButtomText>
        </CustomButtom>
      </InputArea>

      <SignMessageButtom onPress={handleMessageButtonClick}>
        <SignMessageButtomText>
          Ainda não possui uma conta?
        </SignMessageButtomText>
        <SignMessageButtomTextBold>Cadastre-se</SignMessageButtomTextBold>
      </SignMessageButtom>
    </Container>
  );
};
