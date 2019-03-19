import * as React from 'react';
import { Container, Title, Subtitle } from './style';

export const Header: React.FC<HeaderProps> = ({ title, subtitle}: HeaderProps) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);
