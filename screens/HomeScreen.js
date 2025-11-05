import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [isGridView, setIsGridView] = useState(false);

  const menuItems = [
    {
      id: '1',
      name: 'Calls',
      icon: 'call',
      color: '#34C759',
      screen: 'Calls',
    },
    {
      id: '2',
      name: 'Camera',
      icon: 'camera',
      color: '#8E8E93',
      screen: 'Camera',
    },
    {
      id: '3',
      name: 'Messages',
      icon: 'chatbubble',
      color: '#34C759',
      screen: 'Messages',
    },
    {
      id: '4',
      name: 'Music',
      icon: 'musical-notes',
      color: '#FF3B30',
      screen: 'Music',
    },
    {
      id: '5',
      name: 'Photos',
      icon: 'images',
      color: '#007AFF',
      screen: 'Photos',
    },
  ];

  const handleItemPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderRowItem = ({ item }) => (
    <TouchableOpacity
      style={styles.rowItem}
      onPress={() => handleItemPress(item.screen)}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={24} color="white" />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderGridItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => handleItemPress(item.screen)}
      activeOpacity={0.7}
    >
      <View style={[styles.gridIconContainer, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={32} color="white" />
      </View>
      <Text style={styles.gridItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsGridView(!isGridView)}
        >
          <Text style={styles.toggleText}>
            Switch to {isGridView ? 'Rows' : 'Grid'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.viewTitle}>
          {isGridView ? 'Grid' : 'Rows'}
        </Text>
        
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={isGridView ? renderGridItem : renderRowItem}
          numColumns={isGridView ? 2 : 1}
          key={isGridView ? 'grid' : 'row'}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'flex-end',
  },
  toggleButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  toggleText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  viewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  // Row styles
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  // Grid styles
  gridItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 5,
    marginVertical: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    maxWidth: (width - 50) / 2,
  },
  gridIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  gridItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
});

export default HomeScreen;