import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import LogoMarca from "./LogoMarca";

export default function HeaderApp({ titulo, aoSair }) {
  return (
    <View style={styles.header}>
      <LogoMarca titulo={titulo} pequeno={titulo.length > 14} />

      <Pressable onPress={aoSair}>
        <Text style={styles.logout}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: "#5D20F5",
    paddingHorizontal: 18,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  logout: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 3,
  },
});