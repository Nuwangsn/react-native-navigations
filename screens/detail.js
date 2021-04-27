import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const detail = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Go to details</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Top Tabs"
          onPress={() => props.navigation.navigate('Top Tabs')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Bottom Tabs"
          onPress={() => props.navigation.navigate('Bottom Tabs')}
        />
      </View>
    </View>
  );
};

export default detail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '60%',
    margin: 10,
  },
});
