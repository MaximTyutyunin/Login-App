// LoginForm.jsx
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    if (username && password) {
      dispatch(login({ username }));
      navigation.navigate("MainApp");
    }
  };

  return (
    <View>
      {isLoggedIn ? (
        <Text>Welcome back, {username}!</Text>
      ) : (
        <>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

export default LoginForm;



















// import React, { useState } from "react";
// import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
// import { ActivityIndicator } from "react-native-paper";

// export default function LoginForm({ navigation }) {
//   // Receive navigation prop

//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });

//   const handleLogin = () => {
//     Alert.alert(
//       "Login Attempt",
//       `Username: ${credentials.username}\nPassword: ${credentials.password}`
//     );
//     setCredentials({ username: "", password: "" });

//     // Navigate to the MainApp screen
//     navigation.navigate("MainApp");
//   };

//   return (
//     <View style={styles.container}>
//       <ActivityIndicator />
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={credentials.username}
//         onChangeText={(text) =>
//           setCredentials({ ...credentials, username: text })
//         }
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={credentials.password}
//         onChangeText={(text) =>
//           setCredentials({ ...credentials, password: text })
//         }
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingLeft: 8,
//   },
// });
