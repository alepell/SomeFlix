import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ContainerSearch,
  SearchBar,
  ContainerResult,
  MovieContainer,
  MovieTitle,
} from './styles';
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState('John Wick');

  useEffect(() => {
    if (searchString) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=1d96f0084e2f6fdd39cc6ad08d1c17c9&language=en-US`,
        )
        .then((res) => {
          setData(res.data.results);
        });
    }
  }, [searchString]);

  return (
    <SafeAreaView>
      <ContainerSearch>
        <Icon name="md-search" size={30} color="#ccc" style={styles.icon} />
        <SearchBar
          value={searchString}
          placeholder="Search for your favorite movies"
          onChangeText={(text) => setSearchString(text)}
        />
      </ContainerSearch>
      <ContainerResult>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <MovieContainer>
              <MovieTitle>{item.original_title}</MovieTitle>
            </MovieContainer>
          )}
          keyExtractor={(item2) => item2.id.toString()}
        />
      </ContainerResult>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 25,
  },
});
export default Search;
