import React from 'react';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled('div')`
  min-height: 100vh;
  background: linear-gradient(to bottom, ${({ theme }) => theme.palette.primary.light} 0%, ${({ theme }) =>
  theme.palette.secondary.main} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled('div')`
  text-align: center;
  color: ${({ theme }) => theme.palette.common.white};
`;

const Home = () => {
  return (
    <RootContainer>
      <CssBaseline />
      <ContentContainer>
        <h1>Welcome to My App</h1>
        <p>Interactive linear gradient background</p>
      </ContentContainer>
    </RootContainer>
  );
};

export default Home;
