import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import {SlideImage} from '../assets/Carosel';
//import Banner from '../Components/Banner';
//import {windowWidth} from '../Dimension';
import Banner from '../Components/Banner';
const Home = () => {
  const {user, logout} = useContext(AuthContext);

  const randerBanner = ({item, index}) => {
    return <Banner data={item} />;
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
        {/* <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={SlideImage}
          renderItem={randerBanner}
          sliderWidth={windowWidth - 80}
          //itemWidth={itemWidth}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
