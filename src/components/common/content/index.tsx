import * as React from 'react';
import { Container } from './style';

export const Content: React.FC<ContentProps> = ({ children }: ContentProps) => <Container>{children}</Container>;
