## ADDED Requirements

### Requirement: Moldura de aplicativo com sidebar e main rolável
O sistema de UI SHALL renderizar, nas telas do grupo `(app)`, uma moldura flex de altura mínima `100vh` com fundo `#F6ECDF`, contendo uma `<aside>` fixa de exatamente 248px (`position: sticky; top: 0; height: 100vh`, fundo `#FFFDF9`, borda direita `1px solid #ECE0D0`, padding `24px 16px`) e um `<main>` com `flex:1; min-width:0; height:100vh; overflow-y:auto` que materializa o scroll da tela (o body não rola).

#### Scenario: Abrir a home com o shell correto
- **WHEN** o usuário abre `/`
- **THEN** a sidebar de 248px permanece visível e imóvel ao rolar, e o scroll acontece apenas dentro do `<main>`

### Requirement: Sidebar com identidade e navegação primária
A sidebar SHALL conter no topo o link logo (ícone sol em gradiente `#F8C3A8→#F2937A`, título "OpenDayCare" em Fredoka 600/17px, subtítulo "Sala Soles") apontando para `/`; abaixo, o botão de ação "Nueva publicación" (gradiente `#F4977E→#EE8164`, texto branco 800, border-radius 14px, sombra) apontando para `/crear-publicacion`; e uma navegação com 4 itens — Feed (`/`), Niños (`/ninos`), Avisos (`/avisos`) e Mi cuenta (`/mi-cuenta`) — cada um com seu ícone SVG 19px e estilo verbatim do mock. O item da tela ativa SHALL usar estado "ativo" (fundo `#FBE3D8`, texto `#D9583C`, peso 800). Links internos SHALL usar `next/link`.

#### Scenario: Navegação para tarefas futuras
- **WHEN** o usuário clica em "Niños", "Avisos" ou "Mi cuenta"
- **THEN** o navegador navega para `/ninos`, `/avisos` e `/mi-cuenta` respectivamente (rotas ainda não implementadas; 404 é comportamento aceito nesta fase)

#### Scenario: Estado ativo do item de navegação
- **WHEN** o usuário está na home (`/`)
- **THEN** o item "Feed" aparece com fundo `#FBE3D8` e cor `#D9583C`, e os demais itens permanecem neutros (`#6E6359`, fundo transparente, peso 600)

### Requirement: Chip de usuário e saída
A sidebar SHALL exibir, abaixo de um divisor (`border-top: 1px solid #ECE0D0`), o chip de usuário: avatar circular 38px de fundo `#F2937A` com a letra inicial "C" em Fredoka 600/branco, nome "Caro Giménez" (800/14px) e cargo "Maestra · Soles" (12px/`#A89A8B`), seguido de um botão de logout de 32px (fundo `#F6ECDF`, ícone de saída) apontando para `/login`.

#### Scenario: Botão de logout presente
- **WHEN** o usuário visualiza qualquer tela com shell
- **THEN** o controle de logout está visível no footer da sidebar e navega para `/login`

### Requirement: Base visual global (fontes, paleta e scrollbar)
O layout raiz SHALL carregar as fontes Fredoka (400–700) e Nunito (400–800 + itálico 400) via `<link>` do Google Fonts, definir `lang="es"` e metadata "OpenDayCare". O CSS global SHALL aplicar o bloco do mock verbatim: box-sizing universal, reset de margens de html/body, fundo `#F6ECDF` e cor `#3F362E` com `-webkit-font-smoothing: antialiased`, links sem decoração e com cor herdada, e scrollbar customizada (trilho transparente, thumb `#E4D6C4` com raio 8px).

#### Scenario: Home carregada online
- **WHEN** o usuário abre `/` com acesso à internet
- **THEN** os títulos usam Fredoka com o peso do mock e o corpo usa Nunito, sobre fundo `#F6ECDF`, com a barra de rolagem estilizada (`::-webkit-scrollbar`)
