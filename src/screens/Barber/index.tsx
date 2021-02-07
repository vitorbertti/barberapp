import React, {useEffect, useState} from 'react';
import {Alert, Text} from 'react-native';
import {
  Container,
  Scroller,
  FakeSwiper,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarber(userInfo.id);
      if (json.error === '') {
        setUserInfo(json.data);
      } else {
        Alert.alert('Erro', json.error, [], {cancelable: true});
      }

      setLoading(false);
    };
    getBarberInfo();
  }, [userInfo.id]);

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{uri: item.url}} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper />
        )}
        <PageBody>
          <UserInfoArea />
          <ServiceArea />
          <TestimonialArea />
        </PageBody>
      </Scroller>
    </Container>
  );
};
