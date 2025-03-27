# Finanças App

Este é um aplicativo de finanças desenvolvido com **React Native** para gerenciamento de finanças pessoais. O app permite que o usuário faça cadastro, login, registre receitas e despesas, veja o saldo atual, as saídas e entradas do dia, além de poder deletar qualquer receita ou despesa registrada. O app também possui navegação entre páginas usando **Stack** e **Drawer**.

## Funcionalidades

- **Cadastro e login** de usuários.
- **Registro de receitas e despesas**.
- **Exibição de saldo atual**.
- **Exibição de entradas e saídas do dia**.
- **Pesquisa de despesas por datas específicas usando um calendário interativo**.
- **Deleção de receitas e despesas**.
- **Logout** do usuário.
- Navegação entre páginas usando **Stack** e **Drawer**.

## Tecnologias Utilizadas

- **React Native**: Framework para o desenvolvimento do aplicativo.
- **React Navigation**: Biblioteca para navegação entre telas, incluindo **Stack Navigator** e **Drawer Navigator**.
- **React Native Calendars**: Biblioteca para exibição de calendário e seleção de datas.
- **Styled Components**: Biblioteca para estilização de componentes no React Native.
- **API RESTful**: Consumo de API para persistência de dados.
- **Axios**: Biblioteca para fazer requisições HTTP.

## API

Este aplicativo consome uma API desenvolvida por **Matheus Fraga** para gerenciamento das finanças. A API fornece todos os endpoints necessários para cadastrar, listar e excluir receitas e despesas.

Você pode acessar o repositório da API **[aqui](https://github.com/devfraga/backend-financas)**.

## Como Rodar o Projeto

### Requisitos

- **Node.js** (versão 12 ou superior)
- **React Native CLI** (ou **Expo CLI**, caso esteja usando o Expo)
- **Android Studio** para emular dispositivos ou rodar em dispositivos reais.
- **Aviso importante**: Ao utilizar a API localmente, é necessário substituir `localhost` ou `127.0.0.1` pelo **endereço IP da sua máquina**. Isso garante que o aplicativo consiga se conectar corretamente ao servidor.  

  Para encontrar o seu IP, execute o seguinte comando no terminal:  

  - **Windows**:  
    ```bash
    ipconfig
    ```  
    O endereço estará na linha **"Endereço IPv4"**.  

  - **macOS/Linux**:  
    ```bash
    ifconfig | grep inet
    ```  
    O IP estará listado após `inet`.  

  Após obter o IP, configure a URL da API no código:  

  ```javascript
  const api = "http://<SEU_ENDERECO_IP>:3333";

### Instalação

1. Clone este repositório
2.  Navegue até o diretório
3.  Instale as dependências com "npm install"
4.  Inicie o aplicativo
