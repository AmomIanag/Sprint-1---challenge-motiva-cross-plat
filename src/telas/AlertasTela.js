import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import ContainerTela from "../components/ContainerTela";
import HeaderApp from "../components/HeaderApp";
import { alertasIniciais } from "../data/mockData";

export default function AlertasTela({ aoSair }) {
  const [filtro, setFiltro] = useState("Todos");
  const [alertas, setAlertas] = useState(alertasIniciais);

  function enviarEquipe(id) {
    const novosAlertas = alertas.map((alerta) => {
      if (alerta.id === id) {
        return {
          ...alerta,
          tipo: "resolvido",
        };
      }

      return alerta;
    });

    setAlertas(novosAlertas);
  }

  const alertasFiltrados = alertas.filter((alerta) => {
    if (filtro === "Todos") {
      return true;
    }

    if (filtro === "Crítico") {
      return alerta.tipo === "critico";
    }

    return alerta.tipo === "resolvido";
  });

  return (
    <ContainerTela>
      <HeaderApp titulo="Central de alertas" aoSair={aoSair} />

      <View style={styles.conteudo}>
        <Text style={styles.subtitulo}>
          Monitoramento operacional em tempo real
        </Text>

        <View style={styles.filtros}>
          {["Todos", "Crítico", "Resolvido"].map((item) => (
            <Pressable
              key={item}
              style={[
                styles.botaoFiltro,
                filtro === item && styles.filtroAtivo,
              ]}
              onPress={() => setFiltro(item)}
            >
              <Text style={styles.textoFiltro}>{item}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.lista}>
          {alertasFiltrados.map((alerta) => {
            const resolvido = alerta.tipo === "resolvido";
            const critico = alerta.tipo === "critico";

            let cor = "#F5C400";

            if (critico) {
              cor = "#ED2427";
            }

            if (resolvido) {
              cor = "#16A94F";
            }

            return (
              <View
                key={alerta.id}
                style={[styles.card, { backgroundColor: cor }]}
              >
                <View style={styles.cardTopo}>
                  <Text style={styles.tituloCard}>
                    {alerta.km} -{" "}
                    {resolvido ? "Resolvido" : alerta.titulo}
                  </Text>

                  <View style={styles.selo}>
                    <Text style={styles.textoSelo}>
                      {resolvido
                        ? "Resolvido"
                        : critico
                        ? "Crítico"
                        : "Atenção"}
                    </Text>
                  </View>
                </View>

                <Text style={styles.descricao}>
                  {resolvido
                    ? "Equipe enviada.\nOcorrência finalizada."
                    : alerta.descricao}
                </Text>

                <View style={styles.areaBotao}>
                  <Pressable
                    style={[
                      styles.botaoAcao,
                      resolvido && styles.botaoEquipeAtiva,
                    ]}
                    onPress={() => enviarEquipe(alerta.id)}
                  >
                    <Text
                      style={[
                        styles.textoAcao,
                        resolvido && styles.textoEquipeAtiva,
                      ]}
                    >
                      {resolvido
                        ? "Equipe Ativa"
                        : critico
                        ? "Enviar equipe"
                        : "Agendar Equipe"}
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}

          {alertasFiltrados.length === 0 && (
            <Text style={styles.semAlertas}>
              Nenhum alerta nessa categoria.
            </Text>
          )}
        </View>
      </View>
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    paddingHorizontal: 19,
  },

  subtitulo: {
    color: "#666666",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 12,
  },

  filtros: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 45,
    marginHorizontal: 18,
  },

  botaoFiltro: {
    minWidth: 74,
    height: 29,
    backgroundColor: "#DADADA",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },

  filtroAtivo: {
    backgroundColor: "#5D20F5",
  },

  textoFiltro: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  lista: {
    marginTop: 20,
  },

  card: {
    minHeight: 120,
    borderRadius: 20,
    padding: 14,
    marginBottom: 16,
    elevation: 6,
  },

  cardTopo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  tituloCard: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    flex: 1,
  },

  selo: {
    backgroundColor: "rgba(255,255,255,0.22)",
    borderRadius: 15,
    paddingHorizontal: 13,
    paddingVertical: 5,
  },

  textoSelo: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  descricao: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 8,
    width: "70%",
  },

  areaBotao: {
    alignItems: "flex-end",
  },

  botaoAcao: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },

  botaoEquipeAtiva: {
    backgroundColor: "#078F40",
    paddingHorizontal: 20,
  },

  textoAcao: {
    color: "#111111",
    fontSize: 12,
    fontWeight: "bold",
  },

  textoEquipeAtiva: {
    color: "#FFFFFF",
  },

  semAlertas: {
    textAlign: "center",
    color: "#777777",
    marginTop: 30,
  },
});