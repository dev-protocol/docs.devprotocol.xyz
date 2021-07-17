---
title: O whitepaper do protocolo
date: 2021-05-07
permalink: /{{ locale }}/whitepaper/index.html
eleventyNavigation:
  key: Protocol
  order: 30
  title: O whitepaper do protocolo
---

## O mundo visado pelo Dev Protocol

As atividades econômicas são baseadas em diversas atividades do mundo real. Essas atividades precisam de investimentos para concretizar crescimento e lucro futuros. Dev Protocol é uma tecnologia descentralizada que avalia de modo justo várias atividades que não receberam uma avaliação econômica e percebe sua distribuição autônoma e sustentabilidade por meio de negociação P2P e distribuição de remunerações.

### Visão geral

Indivíduos agregam valor por meio de atividades. Dev Protocol oferece recursos de distribuição de mercado, stakes e remunerações para tokenização dessas atividades e sua negociação por meio do P2P. Quando as atividades são tokenizadas, pode-se alcançar o seguinte:

- Remunerações de mercado são obtidas com base no staking
- Uma atividade tokenizada sofre Staking (suporte financeiro) por terceiros
- Oferecer valor como um incentivo para o Staking
- Compartilhar propriedades com participantes de atividade conjunta e distribuição de recompensas de mercado

Staking é uma nova maneira de negociar dinheiro usando o mecanismo de inflação. Com o staking, a sustentabilidade das atividades dos usuários é protegida e os usuários obtêm valor com um custo financeiro zero. Este é o mecanismo que oferece lucro para todas as propriedades que foram liberadas anteriormente sem custo ou por meio de outros mecanismos indiretos de monetização. Dev Protocol visa um valor total de staking que supere as atividades de doação que ocorreram por meio do curso legal.

Dev Protocol transfere para a comunidade a formulação de sua política, que serve como um princípio de orientação para sua governança, de modo que possa ser atualizado conforme as circunstâncias. Os usuários podem livremente propor uma nova política através do protocolo. Para que uma política entre em vigor, os usuários de staking (também conhecidos como stakers) precisam aprová-la por meio do voto. Uma política pode estar relacionada a uma decisão sobre a taxa de inflação e outros aspectos do ecossistema. A [política atual está aqui](https://github.com/dev-protocol/protocol/blob/main/docs/POLICY.md).

### Mercado

O mercado serve para oferecer garantia de identidade, certificando a atividade de um indivíduo na blockchain. Um mercado é criado para cada destino de autenticação, e a comunidade pode propor a abertura de novos mercados.

### Tokenização

Por premissa, a posse das atividades de um usuário é certificada para pertencer ao usuário no Dev Protocol. Isso é diferente do modelo empregado nas plataformas Web existentes, onde a plataforma possui os dados do usuário e separa a posse e a utilização das propriedades. Uma propriedade pode ser usada infinitamente por meio da camada de aplicação construída sobre o Dev Protocol.

### Método de Tokenização

Ao autenticar uma conta externa que expressa a posse da atividade no Dev Protocol, os usuários podem definir sua atividade como uma “propriedade” no mercado e certificar que são os donos da propriedade. Ao autenticar uma propriedade, o usuário paga uma comissão em DEV, definida pela política, e a comissão paga é imediatamente queimada. Os usuários podem autenticar várias propriedades e conectá-las a diversos mercados.

### Lucro, Remuneração de Mercado, Inflação, Deflação

Quem possui uma Propriedade recebe uma remuneração de mercado com base no total da propriedade que teve suporte financeiro (staked).
O fluxo de DEV no protocolo pode ser resumido com o ciclo de vida a seguir. Para simplificar, o dono de uma Propriedade aparece como um “participante da atividade” e um terceiro que recebe alguma forma de utilidade aparece como um “usuário”, embora um usuário possa ser classificado como ambos.

1. DEV é recém-mintado por um participante da atividade e sofre inflação.
2. Um usuário suporta o DEV para o participante da atividade.
3. Quanto mais staking uma Propriedade consegue reunir, mais DEV esse participante da atividade pode mintar novamente.
4. Como uma vantagem pelo staking, o participante da atividade opcionalmente poderá oferecer utilidade ao usuário.
5. Quando o usuário cancela o staking, este usuário consegue retirar o valor do stake, além de uma parte do DEV que o participante da atividade obteve por meio da oferta.

O valor total das remunerações é determinado (dinâmica ou estaticamente) com base na política relativa à taxa de inflação para o DEV. A [política atual encontra-se aqui](https://github.com/dev-protocol/protocol/blob/main/docs/POLICY.md). Através do protocolo, DEV é novamente emitido, queimado, suportado financeiramente e flutua com base na demanda.

### Direitos Compartilhados com Participantes da Atividade Conjunta

O dono de uma Propriedade possui inicialmente 100% dos direitos de posse. Possuir 100% dos direitos de posse é equivalente ao direito de receber todas as remunerações do mercado. É possível que várias pessoas, como participantes da atividade conjunta, possuam os direitos de posse transferindo uma parte dos direitos de posse. Aqueles que detêm os direitos de posse podem receber uma parte das remunerações de mercado com base na razão de posse. Isso é percebido pelo fato de que o Property Contract que representa os direitos de posse está em conformidade com o padrão ERC20.

### Tesouro

A posse da propriedade, por padrão, é 100% pertencente ao dono da Propriedade. Porém, o percentual especificado pela Política será enviado ao Treasury Contract. A [política atual encontra-se aqui](https://github.com/dev-protocol/protocol/blob/main/docs/POLICY.md). Treasury Contract adquire/acumula uma parte das remunerações de mercado recebidas de uma Propriedade mantendo uma parte da Propriedade tokenizada sobre o protocolo. O Treasury Contract acumula Propriedades e DEV, que são usados como recursos financeiros para a comunidade.

### Staking

O staking é usado no Dev Protocol como um sistema de staking que permite a negociação de diversas Propriedades. Staking é um mecanismo que aumenta as remunerações de mercado por meio do depósito temporário de DEV para uma propriedade. Considerando o staking, o pagador receber utilidade do participante da atividade, e este recebe as remunerações de mercado que aumentaram durante o período do staking. O staking continua enquanto o pagador precisa dessa utilidade, aumentando o valor de escassez do DEV. Recebendo o staking, o participante da atividade garante a sustentabilidade de sua atividade.

### Fluxo de Suporte

Ao realizar o staking do DEV em uma Propriedade por um período de tempo específico, essa pessoa recebe opcionalmente algum tipo de vantagem.
Com base na quantidade de DEV suportada, um valor de remuneração de mercado (inflação) é adicionado à propriedade. Quanto maior for o período de tempo do staking pelo pagador, mais remunerações de mercado são prometidas ao participante da atividade.
Como juros, o apoiador recebe uma parte do DEV recém-adquirido pelo participante da atividade. Nesse momento, o valor que pode ser recebido é determinado pelo valor que o usuário suportou em comparação com o valor total do staking.
Quando o período de staking termina, o DEV suportado na propriedade é liberado e o usuário pode retirá-lo.

### Governança

Existem muitos incentivos embutidos no Dev Protocol, de modo que todos os usuários podem receber lucro sem prejudicar os interesses um do outro. Não existe uma teoria definitiva sobre a interação desses incentivos, e esperamos que a comunidade, incluindo os stakeholders, proponham melhorias constantemente. Como parte da política, no Dev Protocol são aceitos índices com incerteza de fontes externas. Além do mais, a [política atual encontra-se aqui](https://github.com/dev-protocol/protocol/blob/main/docs/POLICY.md).

### Camada de Aplicação

Ao apostar seu DEV em um participante da atividade, os usuários recebem algum tipo de vantagem desse participante da atividade (embora também seja possível que o usuário que oferece staking entre em contato com o participante da atividade e solicite benefícios de forma direta). A camada de aplicação executa automaticamente uma série de negociações. Essa camada repassa o staking do usuário para o participante da atividade e repassa a vantagem do participante da atividade para o usuário. A motivação para a criação de uma camada de aplicação depende das intenções de cada indivíduo, mas veja a seguir as motivações possíveis.

- Aumentar o valor do DEV possuído
- Receber uma parte das remunerações, herdando uma parte da Propriedade do participante da atividade
- Coletar uma comissão do usuário

Se o usuário que oferece staking receber alguma vantagem, esta será fornecida por meio das camadas de aplicação.

---

### Mecanismo

O Dev Protocol é composto pelos 14 contratos principais a seguir.

- Market Contract (Contrato de Mercado)
- Market Factory Contract (Contrato de Fábrica de Mercados)
- Property Contract (Contrato de Propriedade)
- Property Factory Contract (Contrato de Fábrica de Propriedades)
- Metrics Contract (Contrato de Métricas)
- Policy Contract (Contrato de Política)
- Policy Factory Contract (Contrato de Fábrica de Políticas)
- Lockup Contract (Contrato de Lockup)
- Allocator Contract (Contrato de Alocador)
- Withdraw Contract (Contrato de Retirada)
- Withdraw Factory Contract (Contrato de Fábrica de Retiradas)
- Address Config Contract (Contrato de Configuração de Endereço)
- Treasury Contract (Contrato de Tesouro)
- Dev Contract (Contrato de Dev)

![Chart](/content/{{ locale }}/images/chart-of-contracts.png)

### Market Contract

O Market Contract representa um grupo específico de propriedades. As propriedades tratadas pelo Dev Protocol podem ser definidas por meio da função `authenticate`.

Qualquer um pode propor livremente um Market Contract. Porém, para que ele entre em vigor, precisa ser aprovado por meio de voto dos proprietários de Property Contracts existentes. O número de votos será a soma do contador staked no Property Contract e os `totals`. Em geral, espera-se que os votos sejam executados pelos donos da propriedade, mas os executores de staking podem usar sua própria contagem de stakes como o número de votos para fins de votação. Nesse caso, será atribuído o endereço do Property Contract sujeito ao staking.
A função `authenticate` autentica o executor da função como dono da propriedade. Por exemplo, um repositório GitHub é atribuído, e o fato de que o executor é o dono desse repositório GitHub é autenticado. Portanto, qualquer um que não seja o proprietário do Property Contract não poderá executar a função `authenticate`. Essa função é chamada diretamente por um usuário, e espera-se que a função `authenticateCallback` seja chamada para que a autenticação tenha sucesso. Ao executar a função `authenticate`, uma comissão definida pelo Policy Contract é paga em DEV, e a comissão paga é automaticamente queimada.

### Market Factory Contract

O Market Factory Contract gera um novo Market Contract.

A geração de um Market Contract é feita executando-se a função create. A função create recebe o endereço para o Property Contract com a interface next e gera um novo Market Contract.

```solidity
contract IMarketBehavior {
    string public schema;

    function authenticate(
        address _prop,
        string memory _args1,
        string memory _args2,
        string memory _args3,
        string memory _args4,
        string memory _args5,
        address market
    ) public returns (address);

    function getId(address _metrics) external view returns (string memory);
}
```

Ao implementar a função `authenticate`, recomenda-se bastante que você verifique se o emissor está associado ao Market Contract. Para verificar, por favor, crie uma função para definir o endereço do Market Contract associado.

```solidity
function authenticate(
    address _prop,
    string memory _args1,
    string memory,
    string memory,
    string memory,
    string memory,
    address market,
    address
) public returns (bool) {
    require(msg.sender == associatedMarket, 'Emissor inválido');
    // Método de autenticação exclusivo
}
```

O `schema` é uma string de caracteres tipo array do JSON, que explica o significado dos argumento que a função `authenticate` recebe para autenticação. O valor máximo para esses argumentos é 5, além do endereço do Property Contract. A seguir podemos ver um exemplo.

```solidity
string public schema = '["Identidade do seu ativo", "Token somente de leitura", "Mais alguma coisa"]';
```

A função `authenticate` sempre trata do segundo argumento como a ID exclusiva. Consequentemente, não devem ser atribuídos valores que não possam garantir a exclusividade. O schema a seguir é um exemplo incorreto.

```solidity
string public schema = '["Token somente de leitura", "Seu repositório GitHub (p.ex., seu-nome/repos)"]';
```

E o schema a seguir é um exemplo correto.

```solidity
string public schema = '["Seu repositório GitHub (p.ex., seu-nome/repos)", "Token somente de leitura"]';
```

A função `getId` recebe um argumento como um endereço de Metrics Contract e retorna o nome do ativo autenticado. Por exemplo, esse valor de retorno é algo semelhante a `dev-protocol/dev-kit-js`.

O Market Factory Contract cria um novo Market Contract que possui o método proxy e outros elementos do contrato. Existem três métodos proxy, que são `authenticate`, `schema` e `getId`. Também foram incluídas a função `authenticatedCallback`, que recebe a autenticação bem-sucedida, e a função vote, que aceita votos.

### Property Contract

O Property Contract representa o grupo de propriedades do usuário. Esse token está em conformidade com o padrão ERC20 e pode ser transferido para qualquer endereço de e-mail.

Cada detentor de Property Contract (Token) receberá remunerações de mercado com base no saldo do Property Contract (Token) que ele possui. A responsabilidade pelo cálculo das remunerações de mercado é do Allocator Contract, enquanto o recebimento das remunerações de mercado é responsabilidade do Withdraw Contract. O Property Contract é um padrão ERC20 puro.

A função `transfer` para o Property Contract solicita que o Allocator Contract ajuste o valor que pode ser retirado, pois o valor das remunerações de mercado que pode ser retirado varia com base nas variações do saldo.

Um Property Contract em seu estado inicial não é garantia de ativos (p.ex., repositórios GitHub).

Para que uma Propriedade seja associada a um ativo, um Market Contract precisa estar associado ao Property Contract. A associação é estabelecida pela função `authenticatedCallback` para o Market Contract. Diversos Market Contracts podem estar associados a um Property Contract. Um Property Contract pode representar um grupo de ativos específicos ou um Property Contract pode ser criado para cada ativo.

### Property Factory Contract

O Property Factory Contract gera um novo Property Contract.

A criação de um Property Contract é feita pela execução da função `create`. O `name` e o `symbol` são indicados na forma de argumentos. Para facilitar a comparação com os Property Contracts, `totalSupply` é fixado como `10000000` (no Solidity, ele é `10000000000000000000000000`) e `decimals` é fixado em 18.

Quando o Property Factory Contract gera um novo Property Contract, parte do estoque total será alocada ao Treasury Contract.

Os tokens atribuídos ao Treasury Contract serão usados pela equipe de desenvolvedores do Dev Protocol para o desenvolvimento mais flexível de caso de uso ou então serão retornados ao criador do Property Contract.

A participação da alocação para o Treasury Contract é determinada pela função `shareOfTreasury` do Policy Contract. Além disso, o endereço do Treasury Contract é determinado pela função `treasury` do Policy Contract.

Os usuários que ainda não têm um Property Contract desejarão criar um Property Contract para serem autenticados com o Market Contract ao mesmo tempo. Para fazer isso, o Property Factory Contract expõe o método `createAndAuthenticate`. O método `createAndAuthenticate` cria um Property Contract e o utiliza consistentemente para a autenticação com um Market Contract.

### Metrics Contract

O Metrics Contract representa a associação entre os Property Contracts e os Market Contracts.

Quando a função `authenticatedCallback` do Market Contract é chamada, é gerado um Metrics Contract, que possui os endereços do Property Contract e do Market Contract.

`authenticatedCallback` para o Market Contract retorna o endereço para o Metrics Contract. Criando um mapa que reúne os endereços para o Market Contract e o Metrics Contract, é possível manter o contexto de autenticação.

### Lockup Contract

O Lockup Contract gerencia o staking nos Property Contracts.

#### lockup

Quando um usuário realiza o staking do seu próprio DEV em um Property Contract. Esta função só pode ser executada por uma função `deposit` para DEV.

Ignorando o endereço do Property Contract para participar do staking e o valor do DEV, o Lockup Contract realiza o staking do DEV. Os stakes podem ser acrescentados quantas vezes desejar.

Com o staking do DEV, os usuários podem receber alguma utilidade do proprietário do Property Contract correspondente. O staking continua até que a utilidade seja necessária, aumentando o valor de escassez do DEV.

Um valor total de remuneração acumulada no momento do staking (acumulação do valor de retorno da função `calculateMaxRewardsPerBlock` do Allocator Contract, de acordo com o bloco em andamento) é registrado e usado para o cálculo da remuneração na retirada.

Um valor de remuneração é o mesmo, independentemente do Property Contract do destino do staking, mas tudo muda quando a razão de staking é alterada. Portanto, o Lockup Contract acompanha a “soma acumulada da remuneração por staking” e atualiza o valor toda vez que o staking é acrescentado ou retirado.

As variáveis a seguir são usadas para calcular um valor de remuneração para um usuário de staking.

- r: Valor da remuneração total acumulada (acumulação de um valor de retorno da função `calculateMaxRewardsPerBlock` do AllocatorContract, de acordo com o bloco em andamento)
- t: Valor total staked
- s: Valor staked do usuário
- Policy.holdersShare: Função da taxa de remuneração recebida por um detentor de Property Contract
  A fórmula de cálculo é a seguinte:

```solidity
total_interest = s(r / t - Policy.holdersShare(r / t, t))
```

A razão `r / t` nesta fórmula mostra a "soma acumulada da remuneração por staking".

O valor de juros que podem ser retirados por usuário pode ser calculado subtraindo-se o valor de `total_interest` de quando o usuário realizou o último staking ou retirada do valor mais recente de `total_interest`.

Quando alguém que realiza o staking recebe uma remuneração, um valor de `total_interest` por usuário substitui o valor mais recente. Dessa forma, um valor de juros passíveis de retirada não ultrapassa o valor máximo que uma pessoa pode retirar. Um exemplo pode ser visto a seguir. Para simplificar, `r`, `t` e `s` não são considerados aqui.

1. Alice está fazendo um staking de 500 DEV pela primeira vez quando o `total_interest` é 100. Quando `total_interest` atinge 500, o valor de juros passível de retirada é `(500-100) × 500 = 200000`.
2. `total_interest` torna-se 520, e Alice retira novamente. O valor de juros passível de retirada é `(520-500) × 500 = 10000`.

Alice faz a segunda retirada e ganha `200000 + 10000 = 210000`. Se Alice não tivesse feito a primeira retirada, o valor de juros passível de retirada para ela agora seria `(520-100) × 500 = 210000`. Com isso, fica claro que o valor de juros para retirada não muda conforme o momento da retirada.

Esta fórmula só é válida quando o valor do staking de uma pessoa é constante. Portanto, é preciso atualizar o `total_interest` e capturar o valor de juros passíveis de retirada ao executar a função `withdraw` do Lockup Contract.

#### withdraw

Todo ou parte do DEV que o usuário fez staking no Property Contract e o valor total dos juros passíveis de retirada serão retirados.

### Allocator Contract

O Allocator Contract tem várias funções para a determinação das remunerações de mercado.

#### calculateMaxRewardsPerBlock

Calcula retorna um valor por bloco de uma remuneração total dada a todos os usuários.
Apanhe um valor de staking total do DEV em determinado momento de um cálculo e um número total de ativos autenticados. Esta função atua como um substituto para a função rewards do Policy Contract. A correlação entre os argumentos e os valores de retorno é definida pela Política.

### Withdraw Contract

O Withdraw Contract desempenha várias funções para o gerenciamento da quantidade de remunerações de mercado que podem ser retiradas.

#### withdraw

Retira as remunerações de mercado para o Property Contract. Quando chamado, o executor retira a quantidade que pode ser retirada.

Uma quantia de remuneração é determinada por uma razão de staking de um Property Contract. Logo, o Withdraw Contract consulta o Lockup Contract para obter um valor de retirada acumulado do detentor do Property Contract (quantia de remuneração acumulada do detentor de acordo com o bloco em andamento) e calcula uma quantia passível de retirada.

As variáveis a seguir são usadas para calcular uma quantia de retirada para um detentor de Propriedade.

- `r`: Quantia de remuneração total acumulada (acumulação de um valor de retorno da função `calculateMaxRewardsPerBlock` do Allocator Contract, de acordo com o bloco em andamento)
- `t`: Valor total do staking
- `s`: Valor do staking do Property Contract
- `ts`: Estoque total do Property Contract
- `b`: Saldo do Property Contract para o usuário
- `Policy.holdersShare`: Função da taxa de remuneração recebida por um detentor do Property Contract

A fórmula do cálculo é a seguinte:

```solidity
total_reward = b(s(Policy.holdersShare(r / t, t)) / ts)
```

A quantia de remuneração que pode ser retirada por detentor do Property Contract pode ser calculada subtraindo-se o valor de `Policy.holdersShare(r / t, t)` quando o usuário fez a retirada pela última vez do `Policy.holdersShare(r / t, t)` mais recente e multiplicando-se o resultado por b.

Dessa forma, uma quantia de remuneração passível de retirada não ultrapassa o valor máximo que uma pessoa pode retirar. Um exemplo disso pode ser visto a seguir. Para simplificar, `Policy.holdersShare(r / t, t)` é indicado como i.

1. Alice possui 500 tokens de um Property Contract. Quando `i` atinge 100, a quantia passível de retirada é `(100-0) × 500 = 50000`.
2. `i` passa para 120 e Alice faz nova retirada. O valor da retirada é `(120-100) × 500 = 10000`.

Alice faz duas retiradas e ganha `50000 + 10000 = 60000`. Se Alice não tivesse feito a primeira retirada, o valor que ela poderia sacar agora seria `(120 - 0) × 500 = 60000`. Com isso, fica claro que o valor passível de retirada não muda conforme o momento da retirada.

Esta fórmula só é válida quando o saldo de um detentor da Propriedade é constante. Portanto, é preciso atualizar o `i` ao executar a função `transfer` de um Property Contract.

### Policy Contract

O Policy Contract representa a política do Dev Protocol. O Dev Protocol atribui a formulação de índices incertos à comunidade e atualiza os índices com base nas circunstâncias.

Qualquer um pode livremente propor um Policy Contract. Porém, para que ele entre em vigor, é preciso que seja aprovado por vota dos usuários de staking. O número de votos será a quantidade de staking para cada Property Contract por usuário. O voto é concluído executando-se vote para o Policy Contract.

Assim que o novo Policy Contract recebe votos afirmativos suficientes para atender às condições, ele entrará em vigor, e o antigo Policy Contract deixará de existir.

O Policy Contract decide a respeito dos índices listados a seguir.

#### rewards

O valor total das remunerações de mercado para o bloco. Ele é chamado para o cálculo de remunerações de mercado no Allocator Contract, e o valor total das remunerações de mercado é calculado por meio das variáveis a seguir.

- Total de Stakes na Propriedade
- Contagem Total de Propriedades (Total de Metrics Contracts)

#### holdersShare

A participação de remunerações de mercado recebidas pelo detentor do Property Contract (Token). É chamado para o cálculo de remunerações de mercado no Allocator Contract, e a participação de remunerações de mercado recebidas pelo detentor do Property Contract (Token) é calculada por meio das variáveis a seguir.

- Valor das Remunerações de Mercado
- Quantidade de Stakes

A participação recebida pelo executor do stake é a parte em excesso da Participação de Detentores.

#### authenticationFee

A comissão pela autenticação de uma propriedade. É chamado dentro de authenticatedCallback para o Market Contract, e a comissão pela autenticação de uma propriedade é decidida com base nas variáveis a seguir.

- Quantidade Total de Propriedades (Total de Metrics Contracts)
- Total de Stakes Atual no Property Contract

#### marketApproval

Se um novo Market Contract está em vigor ou não. É chamado de dentro de vote para o Market Contract, e se o novo Market Contract está em vigor ou não é decidido com base nas variáveis a seguir.

- Votos Afirmativos
- Votos Negativos

#### policyApproval

Se um novo Policy Contract está em vigor ou não. Dentro de `vote` para o Policy Contract proposto, `policyApproval` para o Policy Contract atual é chamado, e se o novo Policy Contract está em vigor, isso é decidido com base nas variáveis a seguir.

- Votos Afirmativos
- Votos Negativos

#### marketVotingBlocks

O número de blocos entre a proposta de um novo Market Contract e o final da votação. Quando a votação termina, o Market Contract será rejeitado.

#### policyVotingBlocks

O número de blocos entre a proposta de um novo Policy Contract e o final da votação. Quando a votação terminar, o Policy Contract será rejeitado.

#### shareOfTreasury

A participação do estoque total de Property Contracts recém-emitidos e recebidos pelo Treasury Contract. Dentro do construtor para o Property Contract, é chamado shareOfTreasury para o Policy Contract atual, e a participação enviada ao Treasury Contract entra em vigor com base nas variáveis a seguir.

- Estoque total do Property Contract

#### treasury

O endereço do contrato do Treasury Contract atual.

### Policy Factory Contract

O Policy Factory Contract gera um novo Policy Contract.

A geração de um contrato de Política é Feita executando-se uma função create. A função create apanha o endereço do Policy Contract criado por um usuário e permite que a função vote aceite votos.

### Lockup Storage Contract, Market Group Contract, Policy Group Contract, Property Group Contract, Vote Counter Storage Contract, Withdraw Storage Contract

Estes contratos tornam persistente o estado dos outros contratos. Sua finalidade é exclusivamente manter o estado e o método getter sem esperar pela implementação.

### DEV

DEV é o token ERC20 que serve como moeda chave para o Dev Protocol.

[https://etherscan.io/token/0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26]
