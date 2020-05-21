import React from "react";

import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function Todos() {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity style={styles.todo}>
        <View>
          <Text style={styles.mainText}>This is to do </Text>
          <Text>Pending</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#0ff",
          margin: 10,
          padding: 10,
        }}
      >
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#28334AFF",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  todo: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  mainText: {
    paddingBottom: 2,
    fontSize: 22,
  },
});
