import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../core/components/wrappers/ScreenWrapper';
import { useQuery } from '@tanstack/react-query';
import ListElementCard from '../components/cards/ListElementCard';
import { getListHook } from '../hooks/getList';
import LoadingLayout from '../../core/components/layouts/LoadingLayout';
const ListScreen = () => {
  const { data, isLoading, isError } = getListHook();
  if (isLoading) return <LoadingLayout />;
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
