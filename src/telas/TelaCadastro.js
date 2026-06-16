import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import ContainerTela from "../components/ContainerTela";
import LogoMarca from "../components/LogoMarca";
import { salvarUsuario } from "../storage/authStorage";

export default function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rm, setRm] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState("");

  function emailValido(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  async function cadastrar() {
    const novosErros = {};

    if (!nome.trim()) {
      novosErros.nome = "Nome obrigatório";
    }

    if (!email.trim()) {
      novosErros.email = "E-mail obrigatório";
    } else if (!emailValido(email)) {
      novosErros.email = "Digite um e-mail válido";
    }

    if (!rm.trim()) {
      novosErros.rm = "RM obrigatório";
    }

    if (!senha) {
      novosErros.senha = "Senha obrigatória";
    } else if (senha.length < 6) {
      novosErros.senha = "A senha deve ter pelo menos 6 caracteres";
    }

    if (!confirmarSenha) {
      novosErros.confirmarSenha = "Confirmação de senha obrigatória";
    } else if (senha !== confirmarSenha) {
      novosErros.confirmarSenha = "As senhas não são iguais";
    }

    setErros(novosErros);
    setMensagem("");

    if (Object.keys(novosErros).length > 0) {
      return;
    }

    const usuario = {
      nome: nome.trim(),
      email: email.trim().toLowerCase(),
      rm: rm.trim(),
      senha,
    };

    try {
      await salvarUsuario(usuario);

      setMensagem("Cadastro realizado com sucesso!");

      setTimeout(() => {
        navigation.replace("Login");
      }, 1000);
    } catch {
      setMensagem("Não foi possível salvar o cadastro.");
    }
  }

  return (
    <ContainerTela>
      <View style={styles.header}>
        <LogoMarca />
      </View>

      <KeyboardAvoidingView
        style={styles.area}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.conteudo}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.titulo}>Criar conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#888888"
            value={nome}
            onChangeText={(texto) => {
              setNome(texto);
              setErros({ ...erros, nome: "" });
            }}
          />

          {erros.nome ? (
            <Text style={styles.erro}>{erros.nome}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#888888"
            value={email}
            onChangeText={(texto) => {
              setEmail(texto);
              setErros({ ...erros, email: "" });
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {erros.email ? (
            <Text style={styles.erro}>{erros.email}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholder="RM"
            placeholderTextColor="#888888"
            value={rm}
            onChangeText={(texto) => {
              setRm(texto);
              setErros({ ...erros, rm: "" });
            }}
            keyboardType="numeric"
          />

          {erros.rm ? (
            <Text style={styles.erro}>{erros.rm}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#888888"
            value={senha}
            onChangeText={(texto) => {
              setSenha(texto);
              setErros({ ...erros, senha: "" });
            }}
            secureTextEntry
          />

          {erros.senha ? (
            <Text style={styles.erro}>{erros.senha}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            placeholderTextColor="#888888"
            value={confirmarSenha}
            onChangeText={(texto) => {
              setConfirmarSenha(texto);
              setErros({ ...erros, confirmarSenha: "" });
            }}
            secureTextEntry
          />

          {erros.confirmarSenha ? (
            <Text style={styles.erro}>{erros.confirmarSenha}</Text>
          ) : null}

          {mensagem ? (
            <Text style={styles.sucesso}>{mensagem}</Text>
          ) : null}

          <Pressable style={styles.botao} onPress={cadastrar}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </Pressable>

          <Pressable onPress={() => navigation.replace("Login")}>
            <Text style={styles.link}>Já tenho uma conta</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: "#5D20F5",
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  area: {
    flex: 1,
  },

  conteudo: {
    alignItems: "center",
    paddingHorizontal: 35,
    paddingTop: 28,
    paddingBottom: 35,
  },

  titulo: {
    color: "#5D20F5",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 24,
  },

  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#EDEDED",
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#333333",
    elevation: 3,
    marginBottom: 16,
  },

  erro: {
    width: "100%",
    color: "#D71920",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 7,
  },

  sucesso: {
    color: "#16A94F",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 12,
  },

  botao: {
    minWidth: 140,
    height: 44,
    backgroundColor: "#5D20F5",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    paddingHorizontal: 24,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  link: {
    color: "#5D20F5",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 18,
  },
});