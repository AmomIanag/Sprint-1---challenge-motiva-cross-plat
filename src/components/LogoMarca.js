import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";

export default function LogoMarca({
  titulo = "motiva",
  pequeno = false,
}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/simbolo-motiva.png")}
        style={styles.simbolo}
        resizeMode="contain"
      />

      <Text
        style={[
          styles.texto,
          pequeno && styles.textoPequeno,
        ]}
      >
        {titulo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  simbolo: {
    width: 40,
    height: 35,
    marginRight: 6,
  },

  texto: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "bold",
  },

  textoPequeno: {
    fontSize: 23,
  },
});