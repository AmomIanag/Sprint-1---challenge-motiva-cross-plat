# Projeto Monitoramento Inteligente Motiva 

> Solução Integrada de Gestão de Vegetação e Segurança Viária para a Concessionária Motiva (Desafio CCR - Sprint 1).

---

## 👥 Integrantes do Grupo
*   **[Amom Ianaguivara Brito]** - RM: [565718]
*   **[Victor Chen]** - RM: [565363]
*   **[Fernando Antônio de Oliveira]** - RM: [562549]
*   **[Vinícius Mello Siqueira]** - RM: [565257]
*   **[Gabriel Ramos]** - RM: [564074]

---

## 📌 1. O Problema Selecionado
O foco deste projeto é resolver a **ineficiência e a escala limitada das inspeções visuais manuais** na conservação de áreas verdes das rodovias. 

*   **A Dor da Concessionária:** Atualmente, a identificação de mato alto e obstrução de sinalização depende de equipes humanas circulando diariamente pelas vias. Esse modelo gera altos custos logísticos (combustível, frotas e pessoal) e respostas reativas.
*   **Impacto Regulatório e de Segurança:** A demora em identificar problemas resulta em riscos graves à segurança viária (perda de visibilidade em placas e curvas) e gera penalidades financeiras pesadas aplicadas por órgãos reguladores como **ARTESP e ANTT**.
*   **O Objetivo:** Automatizar o diagnóstico do crescimento vegetal para garantir intervenções preventivas no momento ideal.

---

## 👤 2. Persona Detalhada
Para alinhar a experiência do aplicativo às necessidades reais do negócio, definimos a seguinte persona principal:

> **Roberto Silva (42 anos) — Supervisor de Conservação Rodoviária**
> *   **Papel:** Responsável por coordenar as frentes de trabalho de poda, roçagem e manutenção de ativos ao longo de 400 km de rodovia.
> *   **Frustrações:** Falta de previsibilidade. Ele frequentemente envia equipes para trechos que ainda não precisavam de corte, enquanto outros pontos críticos sofrem com sinalização encoberta e geram notificações da ARTESP.
> *   **Necessidade:** Uma ferramenta centralizada que diga exatamente **onde** a vegetação precisa de intervenção urgente e **quando** programar as próximas rotas de poda com base no clima.

---

## 💡 3. A Proposta de Solução (Ecossistema Híbrido)
A solução consiste em uma plataforma mobile alimentada por um **funil tecnológico de duas camadas**, eliminando o monitoramento visual humano:

1.  **Vigilância Macro (Satélite):** Utiliza constelações de satélites para varrer toda a rodovia periodicamente através do índice **NDVI (Mapeamento de Biomassa)**. O satélite não mede centímetros de altura, mas atua como um "alarme de fumaça", detectando anomalias onde o volume verde está crescendo de forma acelerada.
2.  **Vigilância Cirúrgica (Drone-in-a-Box):** Uma vez acionado pelo alerta do satélite, um drone autônomo decola de sua estação física (Dock) mais próxima. Ele voa até a coordenada sem intervenção humana, utiliza sensores de profundidade e visão computacional para **calcular a altura exata da grama em centímetros** e verificar se há obstrução de placas.
3.  **Inteligência Sazonal e App:** Os dados são consolidados por uma IA que entende o regime de chuvas (ajustando os alertas se for verão ou seca). O gestor recebe no aplicativo ordens de serviço prontas e triadas por níveis de criticidade (Crítico, Atenção e Planejado).

---

## 🛠️ 4. Stack Tecnológica e Justificativa

| Tecnologia | Função no Projeto | Justificativa Técnica |
| :--- | :--- | :--- |
| **React Native** | Framework Principal | Permite o desenvolvimento multiplataforma (iOS e Android) com uma única base de código, acelerando a entrega. |
| **Expo** | Ambiente de Desenvolvimento | Facilita o acesso simplificado a APIs nativas do dispositivo e simplifica os testes em tempo real pelo grupo. |
| **React Navigation** | Navegação entre telas | Essencial para criar a estrutura de abas (*Bottom Tab Navigation*) exigida para a usabilidade do app. |
| **Expo Location** | Serviços de Geolocalização | Usado para mapear os KMs exatos da rodovia e indicar onde os alertas do satélite/drone foram gerados. |

---

## 📋 5. Documento de Requisitos (Resumo)

### Requisitos Funcionais (RF)
*   **RF-001:** O aplicativo deve exibir um Dashboard Geral com os indicadores de trechos críticos, em atenção e normais.
*   **RF-002:** O sistema deve apresentar um mapa interativo contendo a camada de calor (dados do satélite) e os pins de inspeção dos drones.
*   **RF-003:** O app deve gerar notificações push automáticas para o gestor sempre que a IA classificar um trecho como "Crítico".
*   **RF-004:** O usuário deve ser capaz de emitir uma Ordem de Serviço de poda diretamente pela central de alertas do app.

### Requisitos Não Funcionais (RNF)
*   **RNF-001:** O aplicativo deve ser responsivo e se adaptar perfeitamente a diferentes tamanhos de tela (Android e iOS).
*   **RNF-002:** O carregamento das coordenadas geográficas e das imagens do drone deve ocorrer em menos de 3 segundos sob conexões 4G.
*   **RNF-003:** A interface deve seguir estritamente o guia de identidade visual institucional (padrão roxo/branco da concessionária).

---

## 🎨 6. Protótipo Navegável (Figma)
O protótipo de alta fidelidade simula a jornada completa do usuário, cobrindo o fluxo de login, visualização de mapas de satélite, dados de telemetria do drone e disparo de ordens de manutenção.

🔗 **[CLIQUE AQUI PARA ACESSAR O PROTÓTIPO NO FIGMA](https://www.figma.com/design/Y3wKlkhxwHISzipeRF67d3/Prot%C3%B3tipo-app---challenge-motiva?node-id=0-1&t=trR4pVo4QEATt4zK-1)**
