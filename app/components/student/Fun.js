import React from 'react';
import { StyleSheet, View, ScrollView, Image, WebView, Platform, Linking } from 'react-native';
import { Text } from 'react-native-elements';
import { Video } from 'expo';

export default class StudentClassSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      contentContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      WebViewContainer: {
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
      },
    });
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          scrollEnabled
        >
          <Text h1>Class Mate</Text>
          <Text h4>Student Class Sharing</Text>
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 300, height: 300 }}
          />

          <Image source={{ uri: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/bunny8-57a2765cf139e__880.jpg' }} style={{ width: 250, height: 350 }} />

          <View style={{ height: 300 }}>

            <WebView
              style={styles.WebViewContainer}
              javaScriptEnabled
              domStorageEnabled
              source={{ uri: 'https://www.youtube.com/embed/dFKhWe2bBkM' }}
            />

          </View>

          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://google.com')}
          >
            Google
          </Text>

          <WebView
            ref={(ref) => { this.videoPlayer = ref; }}
            scalesPageToFit
            source={{ html: '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube.com/embed/' + '2d7s3spWAzo' + '?modestbranding=1&playsinline=1&showinfo=0&rel=0" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>' }}
            // onNavigationStateChange={this.onShouldStartLoadWithRequest} //for Android
          />


          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 300, height: 300 }}
          />

        </ScrollView>

      </View>
    );
  }
}
