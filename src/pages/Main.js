import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Loading} from '../components';
import Router from '../router';

const Main = () => {
  const loading = useSelector(state => state.global.loading);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>

      {loading && <Loading type={'modal'} />}
    </>
  );
};

export default Main;
