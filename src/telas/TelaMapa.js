import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import * as Location from "expo-location";

import ContainerTela from "../components/ContainerTela";
import HeaderApp from "../components/HeaderApp";
import { pontosMapa } from "../data/mockData";

export default function TelaMapa({ navigation, aoSair }) {
  useEffect(() => {
    async function pedirLocalizacao() {
      await Location.requestForegroundPermissionsAsync();
    }

    pedirLocalizacao();
  }, []);

  function abrirImagem(item) {
    navigation.navigate("ImagemDrone", {
      imagem: item.imagem,
    });
  }

  return (
    <ContainerTela>
      <HeaderApp titulo="Mapa" aoSair={aoSair} />

      <View style={styles.espacoSuperior} />

      <Image
        source={require("../../assets/mapa.png")}
        style={styles.mapa}
        resizeMode="cover"
      />

      <View style={styles.areaCards}>
        {pontosMapa.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.km}>{item.km}</Text>

            <Text style={styles.descricao}>
              {item.descricao}
            </Text>

            <Pressable onPress={() => abrirImagem(item)}>
              <Text style={styles.link}>
                Ver Imagem Drone
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  espacoSuperior: {
    height: 80,
  },

  mapa: {
    width: "100%",
    height: 194,
  },

  areaCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 83,
  },

  card: {
    width: "31%",
    minHeight: 82,
    backgroundColor: "#DEDEDE",
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 13,
    elevation: 7,
  },

  km: {
    color: "#858585",
    fontSize: 12,
  },

  descricao: {
    color: "#858585",
    fontSize: 11,
    marginTop: 4,
  },

  link: {
    color: "#858585",
    fontSize: 10,
    marginTop: 5,
  },
});