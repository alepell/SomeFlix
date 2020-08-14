import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import {MoviePoster, TrendingText, Container, MovieText} from './styles';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=1d96f0084e2f6fdd39cc6ad08d1c17c9',
      )
      .then((res) => {
        setTrendingMovies(res.data.results);
      });
  }, []);
  return (
    <SafeAreaView>
      <Container>
        <TrendingText>Trend of the week</TrendingText>
        <Carousel
          data={trendingMovies}
          sliderWidth={450}
          itemWidth={350}
          renderItem={({item}) => (
            <View>
              <MoviePoster
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                width={100}
              />
              <MovieText>{item.title}</MovieText>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Trending;
