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

export default () => {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput />
        <SignInput />

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
