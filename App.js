import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');
  const [count, setCount] = useState(0);

  const changeBG = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    setRandomColor(color);
    setCount(count+1);
  };

  const reset = () => {
    let color = '#000000';
    setRandomColor(color);
    setCount(0);
  };

  return (
    <>
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text style={styles.text}>Reset </Text>
        </TouchableOpacity>
        <Text style={styles.text}>You clicked {count} times</Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 20,
    color: '#FFFFFF',
    borderRadius: 5,
    textTransform: 'uppercase',
  },
});
