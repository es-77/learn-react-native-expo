import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    // <View>
    //   <Slot />
    //   <Text>_layout</Text>
    // </View>

    <Stack>
      <Stack.Screen name="/index" options={{ title: "Index Page" }} />
      <Stack.Screen name="/about" options={{ title: "About Page" }} />
      <Stack.Screen name="/contact" options={{ title: "Contact Page" }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
