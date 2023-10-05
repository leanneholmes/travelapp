import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import Title from '../../Title';
import styles from './styles';
import Categories from '../../Categories';
import AttractionCard from '../../AttractionCard';
import jsonData from '../../../data/attractions.json';
import categories from '../../../data/categories.json';

const ALL = 'All';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );

      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => String(item?.id)}
        numColumns={2}
        style={{flexGrow: 1}}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found.</Text>
        }
        ListHeaderComponent={
          <>
            <View style={{margin: 32}}>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go?" />
              <Title text="Explore Attractions" style={styles.subtitle} />
            </View>
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[ALL, ...categories]}
            />
          </>
        }
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            onPress={() => navigation.navigate('AttractionDetails', {item})}
            imageSrc={item.images?.length ? item.images[0] : null}
            title={item.name}
            subtitle={item.city}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
