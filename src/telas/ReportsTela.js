import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import ContainerTela from "../components/ContainerTela";
import HeaderApp from "../components/HeaderApp";

export default function ReportsTela({ aoSair }) {
  const [exportado, setExportado] = useState(false);

  return (
    <ContainerTela>
      <HeaderApp titulo="Relatórios & ROI" aoSair={aoSair} />

      <View style={styles.conteudo}>
        <Text style={styles.subtitulo}>
          Indicadores estratégicos e conformidade operacional
        </Text>

        <View style={styles.indicadores}>
          <View style={styles.cardIndicador}>
            <Text style={styles.nomeIndicador}>
              Redução de Custos
            </Text>

            <Text style={styles.valor}>-32%</Text>
          </View>

          <View style={styles.cardIndicador}>
            <Text style={styles.nomeIndicador}>
              Eficiência Operacional
            </Text>

            <Text style={styles.valor}>+47%</Text>
          </View>
        </View>

        <View style={styles.grafico}>
          <View style={styles.linhaHorizontal1} />
          <View style={styles.linhaHorizontal2} />
          <View style={styles.linhaHorizontal3} />

          <View style={[styles.barra, styles.barra1]} />
          <View style={[styles.barra, styles.barra2]} />
          <View style={[styles.barra, styles.barra3]} />
          <View style={[styles.barra, styles.barra4]} />
          <View style={[styles.barra, styles.barra5]} />

          <View style={styles.meses}>
            <Text style={styles.mes}>Jan</Text>
            <Text style={styles.mes}>Fev</Text>
            <Text style={styles.mes}>Mar</Text>
            <Text style={styles.mes}>Abr</Text>
            <Text style={styles.mes}>Mai</Text>
          </View>
        </View>

        <View style={styles.cardIa}>
          <Text style={styles.textoIa}>
            IA prevê redução de 41% em incidentes{"\n"}
            nos próximos 3 meses.
          </Text>
        </View>

        <Pressable
          style={[
            styles.botaoExportar,
            exportado && styles.botaoSucesso,
          ]}
          onPress={() => setExportado(true)}
        >
          <Text style={styles.textoExportar}>
            {exportado
              ? "▣  PDF Exportado com Sucesso!"
              : "▣  Exportar Relatório de Conformidade (PDF)"}
          </Text>
        </Pressable>
      </View>
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
  },

  subtitulo: {
    color: "#666666",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 12,
  },

  indicadores: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 53,
  },

  cardIndicador: {
    width: "46%",
    height: 78,
    backgroundColor: "#DDDDDD",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
  },

  nomeIndicador: {
    color: "#111111",
    fontSize: 12,
    fontWeight: "bold",
  },

  valor: {
    color: "#13A84D",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 4,
  },

  grafico: {
    height: 155,
    marginTop: 23,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  linhaHorizontal1: {
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#EEEEEE",
  },

  linhaHorizontal2: {
    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#EEEEEE",
  },

  linhaHorizontal3: {
    position: "absolute",
    top: 110,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#EEEEEE",
  },

  barra: {
    width: 9,
    backgroundColor: "#9BCFEB",
    borderRadius: 5,
  },

  barra1: {
    height: 80,
  },

  barra2: {
    height: 35,
  },

  barra3: {
    height: 105,
  },

  barra4: {
    height: 45,
  },

  barra5: {
    height: 25,
  },

  meses: {
    position: "absolute",
    bottom: 2,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  mes: {
    color: "#999999",
    fontSize: 9,
  },

  cardIa: {
    height: 72,
    backgroundColor: "#7430E8",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 8,
    marginTop: 16,
  },

  textoIa: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoExportar: {
    height: 47,
    backgroundColor: "#5B20BE",
    borderRadius: 16,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 17,
  },

  botaoSucesso: {
    backgroundColor: "#16A94F",
  },

  textoExportar: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
});