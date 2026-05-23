#  Documento de Especificação de Requisitos e Persona

> **Projeto:** Monitoramento Inteligente de Áreas Verdes  
> **Contexto:** Challenge CCR / Concessionária Motiva  
> **Sprint:** 1  

---

##  1. Persona Detalhada

### Roberto Silva (42 anos) — Supervisor de Conservação Rodoviária
*   **Perfil e Background:** Técnico em edificações com 15 anos de experiência em infraestrutura rodoviária. Lidera frentes de trabalho terceirizadas responsáveis pela capina, roçagem e limpeza de sinalizações nas rodovias da Motiva.
*   **Rotina de Trabalho:** Inicia o turno às 7h analisando as ocorrências do dia anterior. Passa cerca de 60% do tempo circulando de caminhonete pela rodovia para fiscalizar o estado do mato e validar se as placas estão visíveis.
*   **Relação com a Tecnologia:** Usuário intermediário. Utiliza o smartphone (Android intermediário fornecido pela empresa) para se comunicar via WhatsApp e preencher planilhas básicas. Detesta sistemas complexos ou lentos que o façam perder tempo na pista.
*   **Frustrações Atuais:**
    *   Enviar equipes de poda para trechos que "não precisavam", desperdiçando o orçamento mensal da frente de conservação.
    *   Receber notificações de penalidade da ARTESP/ANTT por placas encobertas que sua equipe não conseguiu avistar a tempo.
*   **Objetivos com a Solução:** Ter um aplicativo direto ao ponto que mostre exatamente quais KMs da rodovia possuem criticidade real, permitindo planejar a rota de poda da semana em menos de 10 minutos.

---

##  2. Requisitos Funcionais (RF)
*Os Requisitos Funcionais descrevem as ações e funcionalidades que o sistema deve executar para o usuário.*

*   **RF-001 - Autenticação de Usuário:** O aplicativo deve permitir o login de supervisores e gestores da Motiva utilizando suas credenciais corporativas (E-mail funcional e Senha).
*   **RF-002 - Dashboard de Visão Geral:** O sistema deve exibir na tela inicial um resumo quantitativo de trechos da rodovia classificados pela Inteligência Artificial em três níveis: Crítico (risco iminente/placa encoberta), Atenção e Planejado.
*   **RF-003 - Banner de Status Sazonal:** O app deve exibir um indicador dinâmico alertando o supervisor sobre a estação do ano atual (Ex: Verão/Chuva) e o fator de aceleração do crescimento da vegetação calculado pela IA.
*   **RF-004 - Mapa Interativo de Monitoramento:** O aplicativo deve carregar um mapa da concessão que renderize graficamente as manchas de densidade de biomassa (dados coletados via satélite/NDVI).
*   **RF-005 - Detalhamento da Telemetria do Drone:** Ao clicar em um ponto crítico do mapa, o app deve exibir os dados reais medidos pelo Drone-in-a-Box: a altura exata da vegetação em centímetros e a foto em alta resolução do local.
*   **RF-006 - Disparo de Ordem de Serviço (OS):** O supervisor deve ser capaz de clicar em um botão "Enviar Equipe" dentro de um alerta crítico para despachar uma ordem de manutenção para a equipe de campo.

---

##  3. Requisitos Não Funcionais (RNF)
*Os Requisitos Não Funcionais determinam os critérios de qualidade, desempenho e usabilidade do software.*

*   **RNF-001 - Multiplataforma (Compatibilidade):** O aplicativo deve ser desenvolvido utilizando **React Native** e **Expo**, garantindo funcionamento idêntico e fluido tanto em sistemas operacionais Android quanto iOS.
*   **RNF-002 - Desempenho e Carregamento:** O tempo de resposta para abrir as imagens em alta resolução enviadas pelos drones e renderizar os dados do mapa não deve ultrapassar 3 segundos em redes móveis 4G ou superiores.
*   **RNF-003 - Usabilidade e Interface:** A interface visual deve ser limpa, intuitiva e seguir a identidade visual da empresa (Header roxo institucional, fontes legíveis e uso de cores semafóricas: vermelho, amarelo e verde para criticidades).
*   **RNF-004 - Geolocalização de Alta Precisão:** O mapeamento dos alertas e a localização do usuário no mapa devem utilizar a API nativa do dispositivo (`Expo Location`) com precisão de alta fidelidade para o KM correto da rodovia.

---

##  4. Restrições Técnicas Identificadas
*As Restrições Técnicas são as limitações físicas, tecnológicas ou operacionais que delimitam o escopo do projeto.*

*   **RT-001 - Dependência de Conexão com a Internet:** Por se tratar de um aplicativo de monitoramento em tempo real, o preenchimento e atualização do mapa de calor dependem de conexão ativa com a internet (dados móveis ou Wi-Fi), não possuindo modo 100% offline para o painel de satélite.
*   **RT-002 - Processamento em Nuvem (Cloud Architecture):** O aplicativo mobile atuará estritamente como um cliente de visualização. O processamento pesado das imagens de satélite (cálculo de NDVI) e a visão computacional das fotos dos drones serão executados em servidores em nuvem externos para não travar o celular do supervisor.
*   **RT-003 - Dependência de Condições Climáticas (Hardware Externo):** A precisão dos dados em centímetros exibidos no aplicativo fica condicionada à capacidade de voo dos drones físicos. Em situações de tempestades severas, neblina extrema ou ventos acima do limite operacional do drone, as vistorias cirúrgicas não serão realizadas, congelando o último status coletado.
