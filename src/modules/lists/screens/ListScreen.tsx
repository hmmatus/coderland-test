import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../core/components/wrappers/ScreenWrapper';
import { useQuery } from '@tanstack/react-query';
import ListElementCard from '../components/cards/ListElementCard';

const ListScreen = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['list'],
    queryFn: async () => {
      const response = await fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements');
      return response.json();
    },
  });
  if (isLoading) return <ActivityIndicator />;
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => <ListElementCard item={item} />}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 12,
  },
});

export default ListScreen;
