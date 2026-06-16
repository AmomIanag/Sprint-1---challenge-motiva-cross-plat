import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import ContainerTela from "../components/ContainerTela";
import HeaderApp from "../components/HeaderApp";
import { indicadores } from "../data/mockData";

export default function DashboardTela({ aoSair }) {
  return (
    <ContainerTela>
      <HeaderApp titulo="Dashboard" aoSair={aoSair} />

      <View style={styles.conteudo}>
        <View style={styles.cardPeriodo}>
          <View>
            <Text style={styles.tituloPeriodo}>
              Período: Verão/Chuva
            </Text>

            <Text style={styles.textoPeriodo}>
              Ritmo de crescimento vegetal acelerado (3x)
            </Text>
          </View>

          <View style={styles.iconeClima}>
            <Ionicons
            name="rainy-outline"
            size={43}
            color="#FFFFFF"
            />
          </View>
        </View>

        <View style={styles.indicadores}>
          {indicadores.map((item) => (
            <View
              key={item.id}
              style={[
                styles.cardIndicador,
                { backgroundColor: item.cor },
              ]}
            >
              <Text style={styles.quantidade}>
                {item.quantidade}
              </Text>

              <Text style={styles.nomeIndicador}>
                {item.nome}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.monitoramento}>
          <View style={styles.monitoramentoHeader}>
            <Text style={styles.monitoramentoTitulo}>
              Monitoramento Inteligente
            </Text>

            <Text style={styles.ia}>● IA Ativa</Text>
          </View>

          <View style={styles.monitoramentoConteudo}>
            <Image
              source={require("../../assets/monitoramento.png")}
              style={styles.imagem}
            />

            <View style={styles.informacoes}>
              <Text style={styles.drone}>
                🔴 Drone KM84
              </Text>

              <Text style={styles.descricao}>
                Vegetação crítica detectada
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  cardPeriodo: {
    height: 95,
    backgroundColor: "#5D20F5",
    borderRadius: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    elevation: 12,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },

  tituloPeriodo: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },

  textoPeriodo: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 6,
  },

  iconeClima: {
    width: 53,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
  },

  indicadores: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  cardIndicador: {
    width: "30%",
    height: 77,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },

  quantidade: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  nomeIndicador: {
    color: "#FFFFFF",
    fontSize: 12,
  },

  monitoramento: {
    height: 138,
    backgroundColor: "#DADADA",
    borderRadius: 20,
    marginTop: 31,
    padding: 13,
  },

  monitoramentoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  monitoramentoTitulo: {
    color: "#111111",
    fontSize: 16,
    fontWeight: "bold",
  },

  ia: {
    color: "#16B957",
    fontSize: 11,
    fontWeight: "bold",
  },

  monitoramentoConteudo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
  },

  imagem: {
    width: 80,
    height: 70,
    borderRadius: 14,
  },

  informacoes: {
    marginLeft: 16,
  },

  drone: {
    fontSize: 13,
    fontWeight: "bold",
  },

  descricao: {
    color: "#555555",
    fontSize: 12,
    marginTop: 6,
  },
});