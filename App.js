import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import resolveAssetSource from 'resolveAssetSource';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgrounds: [
        require('./assets/images/1.jpg'),
        require('./assets/images/2.jpg'),
        require('./assets/images/3.jpg'),
        require('./assets/images/4.jpg'),
        require('./assets/images/5.jpg'),
        require('./assets/images/7.jpg'),
        require('./assets/images/8.jpg'),
        require('./assets/images/9.jpg'),
      ],
    }
  }
  render() {
    const { backgrounds } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal>
          {
            backgrounds && backgrounds.map((background, index) => (
              <Image
                source={background}
                key={index}
                resizeMode="cover"
                style={styles.image} />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#eee",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    borderRadius: 5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});
