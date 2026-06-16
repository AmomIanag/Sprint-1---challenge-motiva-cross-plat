import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE_USUARIO = "@motiva_usuario";
const CHAVE_SESSAO = "@motiva_sessao";

export async function salvarUsuario(usuario) {
  const usuarioTexto = JSON.stringify(usuario);

  await AsyncStorage.setItem(CHAVE_USUARIO, usuarioTexto);
}

export async function buscarUsuario() {
  const usuarioTexto = await AsyncStorage.getItem(CHAVE_USUARIO);

  if (!usuarioTexto) {
    return null;
  }

  return JSON.parse(usuarioTexto);
}

export async function salvarSessao(usuario) {
  const sessaoTexto = JSON.stringify({
    nome: usuario.nome,
    email: usuario.email,
    rm: usuario.rm,
  });

  await AsyncStorage.setItem(CHAVE_SESSAO, sessaoTexto);
}

export async function buscarSessao() {
  const sessaoTexto = await AsyncStorage.getItem(CHAVE_SESSAO);

  if (!sessaoTexto) {
    return null;
  }

  return JSON.parse(sessaoTexto);
}

export async function removerSessao() {
  await AsyncStorage.removeItem(CHAVE_SESSAO);
}