import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import auth from "@react-native-firebase/auth";

const AuthScreens = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View>
      <Text>Login or Signup</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={handleSignup} />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default AuthScreens;
