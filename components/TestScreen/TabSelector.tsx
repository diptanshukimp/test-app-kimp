import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Define the props for the component
interface TabSelectorProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const tabs = ['Buy', 'Rent', 'Sold'];

const TabSelector: React.FC<TabSelectorProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <View className="flex-row justify-between p-2 bg-gray-100">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setSelectedTab(tab)}
          className={`p-2 ${selectedTab === tab ? 'bg-white' : 'bg-transparent'} rounded-md`}
        >
          <Text className={`text-sm ${selectedTab === tab ? 'font-bold' : 'font-normal'}`}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabSelector;
