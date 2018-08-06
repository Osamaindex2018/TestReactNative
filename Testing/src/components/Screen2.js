import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import createDeepstream from 'deepstream.io-client-js';

export default class App extends React.Component {
  state = {
    // myStatus: '',
    text: '',
    messages: [],
  };

  componentDidMount = () => {
    const options = {
      reconnectIntervalIncrement: 10000,
      maxReconnectInterval: 30000,
      maxReconnectAttempts: Infinity,
      heartbeatInterval: 60000,
    };

    this.ds = createDeepstream('192.168.0.232:6020', options);

    this.ds.on('connectionStateChanged', connection => {
      console.log(connection);
    });

    this.ds.on('error', err => {
      console.log(err);
    });

    this.client = this.ds.login();
    // console.log(this.client.getUid());

    this.list = this.client.record.getList('chat');

    this.list.on('entry-added', item => {
      console.log(item);
      this.setState(prevState => ({
        messages: [this.state.text, ...prevState.messages],
      }));
    });

    // this.record.subscribe(data => {
    //   console.log(data);
    //   this.setState(prevState => ({
    //     ...prevState,
    //     myStatus: data.status,
    //   }));
    // });

    // this.record.subscribe(r => {
    //   console.log('sybsc');
    //   this.setState({
    //     ...this.state,
    //     ...r,
    //   });
    //   console.log(r);
    // });

    this.list.whenReady(x => {
      this.setState({
        messages: this.list.getEntries().reverse(),
      });
    });

    // this.record.set({
    //   firstname: 'muhamad',
    //   lastname: 'gameel',
    // });

    // this.record.whenReady(r => {
    //   console.log('record:');
    //   console.log(r);
    // });

    // this.record.subscribe(value => {
    //   console.log(value);
    // });

    // this.list = this.client.record.getList('messages2');

    // this.list.subscribe(item => {
    //   this.setState({
    //     messages: item,
    //   });
    // });

    // this.list.whenReady(list => {
    //   this.setState({
    //     messages: this.list.getEntries(),
    //   });
    // });
  };

  // componentWillUnmount = () => {
  //   console.log('un mount');
  //   this.record.discard();
  // };

  // handlePress = () => {
  //   console.log(this.record.get());
  // };

  handleSend = () => {
    // const id = `message/${this.client.getUid()}`;
    // this.client.record.getRecord(id).set('type', 'convertible');
    this.list.addEntry(this.state.text);
    // this.record.set({
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="char"
            onChangeText={text => {
              this.setState({ text });
            }}
            style={{ width: '80%', marginBottom: 15 }}
          />
          <Button title="send" onPress={this.handleSend} />
        </View>
        <ScrollView style={styles.messagesContainer}>
          {this.state.messages.map((message, i) => (
            <View key={i} style={styles.item}>
              <Text style={styles.text}>{message}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <TextInput
  //         placeholder="firstname"
  //         onChangeText={text => {
  //           // this.setState({ firstname: text });

  //           this.record.set({
  //             firstname: text,
  //           });
  //         }}
  //         style={{ width: '80%', marginBottom: 15 }}
  //       />
  //       <TextInput
  //         placeholder="lastname"
  //         onChangeText={text => {
  //           this.chatList.set({
  //             lastname: text,
  //           });
  //           // this.setState({ lastname: text });
  //         }}
  //         style={{ width: '80%', marginBottom: 15 }}
  //       />
  //       <Button title="send" onPress={this.handleSend} />
  //       <View style={styles.messagesContainer}>
  //         <Text>First Name: {this.state.firstname}</Text>
  //         <Text>Last Name: {this.state.lastname}</Text>
  //       </View>
  //     </View>
  //   );
  // }

  // render() {
  //   return (
  //     <View style={{ alignItems: 'center', marginTop: 200, flex: 1 }}>
  //       <Button title="Press" onPress={this.handlePress} />
  //       <Text style={{ fontSize: 24 }}>My Status</Text>
  //       <Text style={{ fontSize: 28, color: 'red' }}>
  //         {this.state.myStatus}
  //       </Text>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  messagesContainer: {
    margin: 5,
    alignSelf: 'stretch',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  item: {
    backgroundColor: '#333',
    padding: 10,
    alignSelf: 'stretch',
    margin: 10,
  },
  text: {
    color: 'white',
  },
});