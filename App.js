import React from "react";
import Todos from "./Todos";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>TODO APP</Text>
      </View>
      <View style={styles.addGoal}>
        <TextInput placeholder="Add your goal here" style={styles.textInput} />
        <View style={{ width: "17%" }}>
          <Button title="ADD" color="#F65058FF" />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <Todos />
        <Todos />
        <Todos />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#FBDE44FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  textHeader: {
    color: "#28334AFF",
    fontWeight: "bold",
    fontSize: 40,
    paddingLeft: 10,
  },
  addGoal: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    width: "80%",
    height: 40,
    padding: 10,
    margin: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#28334AFF",
  },
  scrollView: {
    backgroundColor: "#0f0",
  },
});
