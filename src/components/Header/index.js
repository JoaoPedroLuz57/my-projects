import React, { useContext } from 'react';

import { Title, Container } from './styles';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../Button';

export function Header({ title }) {
  const { handleToggleTheme, theme } = useContext(ThemeContext);

  return (
    <Container>
      <Title>{title}</Title>
      <Button onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </Button>
    </Container>
  );
}
