import * as React from 'react';
import { Container, Content, Label } from './style';

export const Article: React.FC<ArticleProps> = ({ label, children }: ArticleProps) => (
  <Container>
    <Label>{label}</Label>
    <Content>{children}</Content>
  </Container>
);
