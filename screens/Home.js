import React from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

//Components
import Header from '../components/Header';

const Home = ({appTheme}) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: appTheme.backgroundColor,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          marginTop: -28,
        }}></ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error,
  };
};

export default connect(mapStateToProps)(Home);
