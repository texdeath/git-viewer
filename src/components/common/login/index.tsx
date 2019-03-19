import * as React from 'react';
import { Container, Content, Label } from './style';

export const Login: React.FC<LoginProps> = ({ label, children }: LoginProps) => (
  <Container>
    <Label>{label}</Label>
    <Content>{children}</Content>
  </Container>
);
