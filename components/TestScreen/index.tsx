import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ListSection from './ListSection';

// Example data
const cityData = [
  { title: 'Oshawa ON', subtitle: 'Durham, Ontario' },
  { title: 'Rural Oshawa, Oshawa ON - 3233215', subtitle: 'Durham, Ontario' },
];

const neighborhoodData = [
  { title: 'Downtown Oshawa, Oshawa ON', subtitle: 'Durham, Ontario' },
  { title: 'Beaton Oshawa, Oshawa ON', subtitle: 'Durham, Ontario' },
];

const TestScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ListSection title="Cities" data={cityData} />
        <ListSection title="Neighborhood" data={neighborhoodData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestScreen;
