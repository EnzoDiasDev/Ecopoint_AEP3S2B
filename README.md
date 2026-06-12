# EcoPoint

## Sistema Web para Incentivo ao Descarte Consciente e Sustentabilidade Urbana

### Sobre o Projeto

O **EcoPoint** é uma aplicação web desenvolvida com foco em sustentabilidade urbana, educação ambiental e incentivo à participação cidadã. A plataforma tem como objetivo facilitar a localização de pontos de coleta seletiva, permitir o registro de denúncias ambientais e promover a conscientização da população por meio de mecanismos de gamificação.

O projeto foi desenvolvido utilizando tecnologias front-end modernas, priorizando acessibilidade, responsividade, experiência do usuário e organização modular do código.

---

## Objetivo

O principal objetivo do EcoPoint é auxiliar cidadãos na adoção de práticas sustentáveis através de uma plataforma digital intuitiva que permita:

- Localizar ecopontos próximos;
- Consultar tipos de resíduos aceitos;
- Realizar denúncias ambientais;
- Acompanhar pontuação e participação do usuário;
- Incentivar ações sustentáveis por meio de recompensas simbólicas.

---

## Problema Abordado

O descarte incorreto de resíduos urbanos representa um dos principais desafios ambientais das cidades modernas. Muitas pessoas desconhecem:

- Onde descartar determinados materiais;
- Quais resíduos podem ser reciclados;
- Como denunciar irregularidades ambientais;
- A importância da participação individual na preservação ambiental.

O EcoPoint busca reduzir essa lacuna de informação por meio de uma interface simples e acessível.

---

## Funcionalidades

### Página Inicial

A tela inicial apresenta um resumo das principais informações do usuário e fornece acesso rápido aos recursos da plataforma.

**Recursos disponíveis:**

- Dashboard simplificado;
- Visualização de pontuação;
- Exibição do nível do usuário;
- Acesso rápido às funcionalidades principais.

---

### Mapa de Ecopontos

Permite visualizar locais de descarte ambiental disponíveis.

**Informações exibidas:**

- Nome do ecoponto;
- Distância aproximada;
- Endereço;
- Tipos de materiais aceitos.

**Exemplos de resíduos:**

- Papel;
- Plástico;
- Vidro;
- Metal;
- Eletrônicos;
- Pilhas;
- Óleo de cozinha.

---

### Sistema de Denúncias

Funcionalidade destinada ao registro de ocorrências ambientais.

Exemplos:

- Descarte irregular de lixo;
- Acúmulo de resíduos em áreas públicas;
- Poluição ambiental;
- Queima inadequada de materiais.

---

### Perfil do Usuário

Área responsável pela visualização de informações individuais.

Inclui:

- Nome do usuário;
- Pontuação acumulada;
- Nível de participação;
- Histórico de ações futuras.

---

### Gamificação

O sistema utiliza elementos de gamificação para incentivar o engajamento dos usuários.

**Mecânicas implementadas:**

- Sistema de pontos;
- Evolução de níveis;
- Recompensas simbólicas;
- Incentivo à participação contínua.

---

### Tema Claro e Escuro

A aplicação permite alternar entre:

- Light Mode;
- Dark Mode.

A preferência do usuário é armazenada localmente utilizando o Local Storage do navegador.

---

## Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3

### Tipografia

- Inter (Google Fonts)

### Armazenamento Local

- Local Storage

---

## Arquitetura do Projeto

```text
Ecopoint/
│
├── index.html
│
├── css/
│   └── ecopoint.css
│
├── js/
│   ├── main.js
│   └── icons.js
│
└── README.md
```

### Descrição dos Arquivos

#### index.html

Responsável pela estrutura principal da aplicação.

Contém:

- Layout geral;
- Barra lateral de navegação;
- Telas da aplicação;
- Componentes Bootstrap.

#### css/ecopoint.css

Arquivo de estilização personalizada.

Responsável por:

- Cores;
- Espaçamentos;
- Responsividade;
- Temas;
- Personalização dos componentes Bootstrap.

#### js/main.js

Implementa a lógica principal da aplicação.

Funções relacionadas a:

- Navegação entre telas;
- Controle de componentes;
- Sistema de pontuação;
- Manipulação da interface.

#### js/icons.js

Responsável pela centralização dos ícones utilizados no sistema.

---

## Requisitos

### Navegadores Compatíveis

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Opera

### Requisitos de Software

Não há necessidade de instalação de dependências ou frameworks adicionais.

É necessário apenas:

- Navegador moderno;
- Servidor web local (opcional).

---

## Como Executar o Projeto

Abra o arquivo:

```text
index.html
```

em qualquer navegador moderno.

---

## Responsividade

O sistema foi desenvolvido seguindo princípios de design responsivo.

Adapta-se para:

- Smartphones;
- Tablets;
- Notebooks;
- Monitores desktop.

O framework Bootstrap foi utilizado para garantir consistência visual em diferentes resoluções.

---

## Boas Práticas Aplicadas

Durante o desenvolvimento foram adotadas práticas amplamente utilizadas na indústria de software:

- Separação entre estrutura, estilo e comportamento;
- Organização modular dos arquivos;
- Reutilização de componentes;
- Responsividade mobile-first;
- Uso de variáveis e constantes para melhor manutenção;
- Persistência de preferências do usuário;
- Interface intuitiva e centrada no usuário.

---

## Possíveis Melhorias Futuras

Algumas evoluções previstas para futuras versões:

### Integração com API de Mapas

- Google Maps API;
- OpenStreetMap.

### Sistema de Autenticação

- Cadastro de usuários;
- Login seguro;
- Recuperação de senha.

### Backend

- Node.js;
- Java Spring Boot;
- PHP Laravel.

### Banco de Dados

- PostgreSQL;
- MySQL.

### Gamificação Avançada

- Ranking global;
- Conquistas;
- Medalhas;
- Desafios ambientais.

### Aplicativo Mobile

- React Native;
- Flutter.

---

## Metodologia de Desenvolvimento

O projeto foi desenvolvido seguindo uma abordagem incremental, com foco na construção de protótipos funcionais e validação contínua da experiência do usuário.

As decisões de design priorizaram:

- Simplicidade;
- Acessibilidade;
- Escalabilidade;
- Facilidade de manutenção.

---

## Conclusão

O EcoPoint demonstra a aplicação prática de tecnologias web modernas na resolução de problemas ambientais urbanos. A plataforma combina usabilidade, conscientização ambiental e gamificação para incentivar a participação ativa da população em ações sustentáveis.

Além de atender aos requisitos funcionais propostos, o projeto foi estruturado visando futuras expansões, permitindo sua evolução para uma solução completa de apoio à gestão ambiental urbana.
