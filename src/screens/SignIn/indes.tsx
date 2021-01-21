import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  InputArea,
  CustomButtom,
  CustomButtomText,
  SignMessageButtom,
  SignMessageButtomText,
  SignMessageButtomTextBold,
} from './styles';

import BarberLogo from '../../assets/barber.svg';
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail" />
        <SignInput IconSvg={LockIcon} placeholder="Digite sua senha" />

        <CustomButtom>
          <CustomButtomText>LOGIN</CustomButtomText>
        </CustomButtom>
      </InputArea>

      <SignMessageButtom>
        <SignMessageButtomText>
          Ainda não possui uma conta?
        </SignMessageButtomText>
        <SignMessageButtomTextBold>Cadastre-se</SignMessageButtomTextBold>
      </SignMessageButtom>
    </Container>
  );
};
