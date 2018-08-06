

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Input from "./src/components/Input";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";

const api = user => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (user.email === "osama@gmail.com") {
      reject({ email: "Email already used" });
    } else {
      resolve();
    }
  }, 2000)
})

export default class App extends Component {

  onHandleSubmit = async (values, bag) => {
    try {
      await api(values);
      bag.setSubmitting(false);
      alert("Welcome");
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={this.onHandleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string().email("Not Valid Email").required(),
            password: Yup.string().min(6).required(),
            confirmPassword: Yup.string().oneOf([Yup.ref("password", null)], "confirm password must match password").required()
          })}
          render={({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid, isSubmitting }) => (
            <React.Fragment>
              <Input
                label="email"
                name="email"
                autoCapitalize="none"
                value={values.email}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                error={touched.email && errors.email}
              />
              <Input
                label="password"
                name="password"
                autoCapitalize="none"
                secureTextEntry
                value={values.password}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                error={touched.password && errors.password}
              />
              <Input
                label="confirm password"
                name="confirmPassword"
                autoCapitalize="none"
                secureTextEntry
                value={values.confirmPassword}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <Button
                backgroundColor="green"
                borderRadius={5} title="Submit"
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            </React.Fragment>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
