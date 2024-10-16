import React from 'react';
import { View, Text } from 'react-native';
import ListItem from './ListItem';

// Define the type for the data prop
interface ListSectionProps {
  title: string;
  data: { title: string; subtitle: string }[]; // array of objects with title and subtitle properties
}

const ListSection: React.FC<ListSectionProps> = ({ title, data }) => {
  return (
    <View>
      <Text className="font-bold text-lg p-4 bg-gray-100">{title}</Text>
      {data.map((item, index) => (
        <ListItem key={index} title={item.title} subtitle={item.subtitle} />
      ))}
    </View>
  );
};

export default ListSection;
