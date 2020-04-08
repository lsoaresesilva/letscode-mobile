# 32Bits Mobile

## Instalação
### Pré-requisitos

 - React-native
 - Yarn
 - Node 12.X.X
 - Reactotron para visualizar logs (opcional o uso)

### Instalando

1. na pasta do projeto digite `yarn install`
2. depois digite `react-native run-android`

> Antes de digitar esse comando já deve está com o simulador ligado
3. No caminho raiz do projeto deve criar um arquivo chamado `.env` para configurar as variáveis de ambiente do projeto.
4. Existe um exemplo de o que precisa ter no arquivo `.env` no arquivo `.env.example` na pasta raiz do projeto
> Caso sua api key seja AIasdadQ234234dsdQhXe-JYP12ddIIiHM então deve adicionar apos o sinal de igual (sem espaço depois do sinal de igual), igual o exemplo a seguir.
> API_KEY=AIasdadQ234234dsdQhXe-JYP12ddIIiHM
> abaixo tem todas as variáveis que precisam ter no .env

| Variável | Descrição | Exemplo | Obrigatório |
|--|--|--|--|
| API_KEY | api key do firebase | API_KEY=AIasdadQ234234dsdQhXe-JYP12ddIIiHM | sim |
| AUTH_DOMAIN| auth domain do firebase | AUTH_DOMAIN=example-project.firebaseapp.com | sim |
| DATA_BASE_URL| data base url do firebase | DATA_BASE_URL=https://example-project.firebaseio.com | sim |
| PROJECT_ID | project id do firebase | PROJECT_ID=example-project | sim |
| STORAGE_BUCKET | storage bucket do firebase | STORAGE_BUCKET=example-project.appspot.com | sim |
| MESSAGING_SENDER_ID | messaging sender id do firebase | MESSAGING_SENDER_ID=6344947242342 | sim |
| APP_ID | app id id do firebase | MESSAGING_SENDER_ID=1:634234234324:web:08f409b2342343cf7851| sim |
| HOST_IP | IP da máquina que está rodando esse projeto | HOST_IP=192.168.0.155 | sim |

5. Por fim digite `react-native start`

### Erros
Caso ao digite o comando react-native run-android tiver errro digite  esse comando na pasta raiz do projeto `cd .\android && .\gradlew clean && cd .. && react-native run-android`
