import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function TabBar({ state, navigation }) {
  function mostrarIcone(nomeRota, selecionada) {
    const cor = "#FFFFFF";
    const tamanho = selecionada ? 25 : 23;

    if (nomeRota === "Dashboard") {
      return (
        <Ionicons
          name={selecionada ? "home" : "home-outline"}
          size={tamanho}
          color={cor}
        />
      );
    }

    if (nomeRota === "Mapa") {
      return (
        <Ionicons
          name={selecionada ? "map" : "map-outline"}
          size={tamanho}
          color={cor}
        />
      );
    }

    if (nomeRota === "Alertas") {
      return (
        <Ionicons
          name={selecionada ? "alert-circle" : "alert-circle-outline"}
          size={tamanho}
          color={cor}
        />
      );
    }

    return (
      <MaterialCommunityIcons
        name="clipboard-text-clock-outline"
        size={tamanho}
        color={cor}
      />
    );
  }

  return (
    <View style={styles.barra}>
      {state.routes.map((rota, indice) => {
        const selecionada = state.index === indice;

        function abrirTela() {
          if (!selecionada) {
            navigation.navigate(rota.name);
          }
        }

        return (
          <Pressable
            key={rota.key}
            style={styles.botao}
            onPress={abrirTela}
          >
            <View
              style={[
                styles.caixaIcone,
                selecionada && styles.caixaSelecionada,
              ]}
            >
              {mostrarIcone(rota.name, selecionada)}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    height: 74,
    backgroundColor: "#5D20F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  botao: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  caixaIcone: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  caixaSelecionada: {
    backgroundColor: "rgba(255,255,255,0.13)",
  },
});