import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { registerAction } from './src/firebase/firebase';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="firebase Action 1" onPress={() => {registerAction("screen1", "action1")}}></Button>
      <Button title="firebase Action 2" onPress={() => {registerAction("screen2", "action2")}}></Button>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
