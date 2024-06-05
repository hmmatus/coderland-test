import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ListI } from '../../models/listElement.module';

interface ListElementCardProps {
  item: ListI;
}
const ListElementCard = ({ item }: ListElementCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'green',
  },
  title: {
    fontSize: 20,
    marginLeft: 12,
    color: 'black',
  },
});

export default ListElementCard;
