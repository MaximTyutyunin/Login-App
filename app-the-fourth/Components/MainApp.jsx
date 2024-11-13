// MainApp.jsx
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const MainApp = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <View>
      {username ? (
        <Text>Welcome to the app, {username}!</Text>
      ) : (
        <Text>Please log in to continue.</Text>
      )}
    </View>
  );
};

export default MainApp;















// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function MainApp() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to the main app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
