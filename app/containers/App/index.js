/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import WelcomeScreen from '../Welcome/Welcome';
import Quiz from '../Quiz/Quiz';
import Result from '../Result/Result';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Quiz App"
        defaultTitle="Quiz App"
      >
        <meta name="Quiz App" content="Quiz App" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/result" component={Result} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
