// import React from 'react';
// import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
// import createDeepstream from 'deepstream.io-client-js';

// export default class App extends React.Component {
//   state = {
//     text: '',
//     messages: [],
//   };
//   // componentWillUnmount() {
//   //   alert("discard")
//   //   this.record.discard();
//   // }
//   componentDidMount = () => {
//     const options = {
//       reconnectIntervalIncrement: 10000,
//       maxReconnectInterval: 30000,
//       maxReconnectAttempts: Infinity,
//       heartbeatInterval: 60000,
//     };

//     this.ds = createDeepstream('192.168.0.107:6020', options);

//     this.ds.on('connectionStateChanged', connection => {
//       console.log(connection);
//     });

//     this.ds.on('error', err => {
//       console.log(err);
//     });

//     this.client = this.ds.login();
//     console.log(this.client.getUid());

//     this.record = this.client.record.getRecord('test2');

//   };

//   handleBefore = () => {
//     this.record.set({
//       status: "before trip"
//     })

//   };
//   handleArrived = () => {
//     this.record.set({
//       status: "arrived trip"
//     })
//   };

//   handleEnd = () => {
//     this.record.set({
//       status: "end trip"
//     })
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="char"
//             onChangeText={text => {
//               this.setState({ text });
//             }}
//             style={{ width: '80%', marginBottom: 15 }}
//           />
//           <Button title="send" onPress={this.handleSend} />
//         </View>
//         <View style={{flexDirection:"row",alignItems:"center"}}>

//           <Button  title="before" onPress={this.handleBefore} />

//           <Button  title="arrived" onPress={this.handleArrived} />

//           <Button  title="end" onPress={this.handleEnd} />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   messagesContainer: {
//     margin: 5,
//     alignSelf: 'stretch',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     margin: 5,
//   },
//   item: {
//     backgroundColor: '#333',
//     padding: 10,
//     alignSelf: 'stretch',
//     margin: 10,
//   },
//   text: {
//     color: 'white',
//   },
// });







// // import React, { Component } from 'react';
// // import { Platform, StyleSheet, Text, View } from 'react-native';
// // import Input from "./src/components/Input";
// // import { Button } from "react-native-elements";
// // import { Formik } from "formik";
// // import * as Yup from "yup";

// // const api = user => new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     if (user.email === "osama@gmail.com") {
// //       reject({ email: "Email already used" });
// //     } else {
// //       resolve();
// //     }
// //   }, 2000)
// // })

// // export default class App extends Component {

// //   onHandleSubmit = async (values, bag) => {
// //     try {
// //       await api(values);
// //       bag.setSubmitting(false);
// //       alert("Welcome");
// //     } catch (error) {
// //       bag.setSubmitting(false);
// //       bag.setErrors(error)
// //     }
// //   }
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Formik
// //           initialValues={{ email: "", password: "", confirmPassword: "" }}
// //           onSubmit={this.onHandleSubmit}
// //           validationSchema={Yup.object().shape({
// //             email: Yup.string().email("Not Valid Email").required(),
// //             password: Yup.string().min(6).required(),
// //             confirmPassword: Yup.string().oneOf([Yup.ref("password", null)], "confirm password must match password").required()
// //           })}
// //           render={({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid, isSubmitting }) => (
// //             <React.Fragment>
// //               <Input
// //                 label="email"
// //                 name="email"
// //                 autoCapitalize="none"
// //                 value={values.email}
// //                 onChange={setFieldValue}
// //                 onTouch={setFieldTouched}
// //                 error={touched.email && errors.email}
// //               />
// //               <Input
// //                 label="password"
// //                 name="password"
// //                 autoCapitalize="none"
// //                 secureTextEntry
// //                 value={values.password}
// //                 onChange={setFieldValue}
// //                 onTouch={setFieldTouched}
// //                 error={touched.password && errors.password}
// //               />
// //               <Input
// //                 label="confirm password"
// //                 name="confirmPassword"
// //                 autoCapitalize="none"
// //                 secureTextEntry
// //                 value={values.confirmPassword}
// //                 onChange={setFieldValue}
// //                 onTouch={setFieldTouched}
// //                 error={touched.confirmPassword && errors.confirmPassword}
// //               />
// //               <Button
// //                 backgroundColor="green"
// //                 borderRadius={5} title="Submit"
// //                 onPress={handleSubmit}
// //                 disabled={!isValid || isSubmitting}
// //                 loading={isSubmitting}
// //               />
// //             </React.Fragment>
// //           )}
// //         />
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// // });



// // import React, { Component } from 'react';
// // import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// // import * as Animatable from "react-native-animatable";
// // import createDeepstream from 'deepstream.io-client-js';

// // export default class WelcomeScreen extends Component {
// //   componentDidMount() {
// //     const options = {
// //       reconnectIntervalIncrement: 10000,
// //       maxReconnectInterval: 30000,
// //       maxReconnectAttempts: Infinity,
// //       hearbeatInterval: 60000
// //     };
// //     this.ds = createDeepstream("192.168.0.107:6020", options);
// //     this.ds.on('connectionStateChanged', connection => {
// //       this.setState({ connection });
// //       console.log("RECONNECT", connection);
// //     }
// //     );
// //     this.ds.on("error", err => {
// //       console.log("err", err);
// //     });
// //     this.client = this.ds.login();
// //     // this.list = this.ds.record.getList("employees");
// //     // this.list = this.list.on("entery-added", value => {
// //     //   this.setState({
// //     //     list: value
// //     //   })
// //     // });
// //   }
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text>ssssssss</Text>
// //       </View>


// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// // });
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
      console.log("Connection state", connection);
    });

    this.ds.on('error', err => {
      console.log("errorrrrrrr", err);
    });

    this.client = this.ds.login();
    // console.log(this.client.getUid());

    this.list = this.client.record.getList('chat');

    this.list.on('entry-added', item => {
      console.log("item", item);
      this.setState(prevState => ({
        messages: [item, ...prevState.messages],
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