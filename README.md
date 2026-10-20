## Descrição do Projeto

Utilizando JavaScrip e Tailwind CSS, eu, Matheus Antony, juntamente com Nicolas Emanuel, desenvolvemos um site com um painel de playlist.

O site apresenta a duração de cada música e calcula automaticamente a duração total da playlist. Além disso, as músicas são classificadas de acordo com sua duração, podendo ser consideradas curtas, médias ou longas.

## Testes Realizados

Durante o desenvolvimento do projeto, realizamos alguns testes para verificar o funcionamento correto do site.

### 1. Teste de funcionamento do Tailwind CSS

O primeiro teste realizado foi a verificação do funcionamento do Tailwind CSS após cada atualização feita no projeto.

Para isso, utilizamos o seguinte comando:

npm run build:css

Com esse comando, verificamos se o Tailwind CSS está sendo compilado corretamente e se as alterações realizadas estão funcionando normalmente.

### 2. Verificação de erros pelo navegador

O segundo teste foi realizado utilizando as ferramentas de desenvolvedor do Google Chrome.

Pressionamos F12 para abrir as ferramentas do navegador e verificamos o Console, procurando possíveis erros durante a execução do site.

Também verificamos se o JavaScript estava funcionando corretamente e realizando os cálculos e classificações esperados.

### 3. Teste de responsividade

O terceiro teste foi relacionado à responsividade do site.

Testamos a interface em diferentes tamanhos de tela, incluindo dispositivos móveis e telas com resolução de aproximadamente 1280px, verificando se os elementos permaneciam organizados e funcionais.

### 4. Teste do limite de duração das músicas

O quarto teste foi realizado alterando o limite de duração definido no JavaScript.

Modificamos os valores utilizados para determinar quando uma música deve ser considerada curta, média ou longa, verificando se o sistema atualizava corretamente as classificações após cada mudança.