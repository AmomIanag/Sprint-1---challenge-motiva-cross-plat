import React from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

export default function DroneImagemTela({ route, navigation }) {
  const { imagem } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={imagem}
        style={styles.imagem}
        resizeMode="cover"
      />

      <Pressable
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 18,
    paddingTop: 34,
    paddingBottom: 25,
  },

  imagem: {
    width: "100%",
    height: "100%",
  },

  botaoVoltar: {
    position: "absolute",
    top: 57,
    right: 27,
    padding: 6,
  },

  textoVoltar: {
    color: "#FFFFFF",
    fontSize: 25,
    textShadowColor: "#000000",
    textShadowRadius: 4,
  },
});