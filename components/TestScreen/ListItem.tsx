import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Define props for the ListItem
interface ListItemProps {
  title: string;
  subtitle: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, subtitle }) => {
  return (
    <View className="flex-row items-center p-4 border-b border-gray-200">
      <Ionicons name="location-outline" size={20} color="gray" />
      <View className="ml-4">
        <Text className="font-semibold">{title}</Text>
        <Text className="text-sm text-gray-500">{subtitle}</Text>
      </View>
    </View>
  );
};

export default ListItem;
