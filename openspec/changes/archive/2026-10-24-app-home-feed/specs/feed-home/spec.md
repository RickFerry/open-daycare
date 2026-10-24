## ADDED Requirements

### Requirement: Header de saudação estático
A home `/` SHALL renderizar uma coluna central (`max-width: 760px; width: 100%; margin: 0 auto; padding: 34px 40px 80px`) iniciada pelo header de saudação exatamente como no mock: eyebrow "GUARDERÍA · SALA SOLES" (12.5px, 800, `letter-spacing: 0.8px`, `#D9583C`), H1 "Buenas, Caro" (Fredoka 600/30px/`#3F362E`) e meta "12 niños · martes 17 jun" (14.5px/`#94887B`). Esses textos SHALL ser hardcoded (sem relógio, sem banco).

#### Scenario: Saudação idêntica ao mock
- **WHEN** o usuário abre `/`
- **THEN** o header exibe "GUARDERÍA · SALA SOLES", "Buenas, Caro" e "12 niños · martes 17 jun" com as especificações visuais do mock

### Requirement: Card composer de nova publicação
A home SHALL renderizar, abaixo do header, um link-card para `/crear-publicacion` com: avatar circular 40px ("C", fundo `#F2937A`), placeholder "Compartí un momento…" (15px/`#A89A8B`) e chip de câmera 38px (fundo `#FBE3D8`, ícone `#E0654A`), com cartão branco `#FFFDF9`, borda `#ECE0D0`, radius 18px e sombra suave conforme o mock.

#### Scenario: Composer redireciona para criação
- **WHEN** o usuário clica no card "Compartí un momento…"
- **THEN** o navegador navega para `/crear-publicacion`

### Requirement: Divisor "PUBLICADO HOY"
Entre o composer e os posts, a home SHALL renderizar o divisor com label "PUBLICADO HOY" (12.5px, 800, letter-spacing 0.8px, `#8A7C6D`) e linha horizontal flex (`flex: 1; height: 1px; background: #E7DAC8`).

#### Scenario: Divisor presente
- **WHEN** o usuário abre `/`
- **THEN** o divisor aparece entre o composer e o primeiro post, com a linha preenchendo o espaço restante

### Requirement: Três posts de conteúdo hardcoded
A home SHALL renderizar três cartões de post (fundo `#FFFDF9`, borda `#ECE0D0`, radius 20px, padding `20px 22px`, sombra do mock) nesta ordem, verbatim do mock:
1. **Logro** — avatar de letra "M" (fundo `#A9D9E8`, ícone "M" em `#1F7A93`), "Mateo" / "14:20 · publicado por vos", badge pill "LOGRO" (fundo `#CFEBD8`, dot `#3E9B6C`, texto `#3E9B6C`), linha "Para: familia de Mateo", texto "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.", footer com 3 curtidas (coração `#E0654A` preenchido) e 1 comentário.
2. **Actividad** — mesmo cabeçalho "Mateo" / "09:40 · publicado por vos", badge "ACTIVIDAD" (fundo `#C7E7F1`, dot `#2E89A6`), "Para: familia de Mateo", texto "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.", **placeholder de foto** e footer com 5 curtidas e 2 comentários.
3. **Anuncio** — avatar de ícone megafone (fundo `#CCD8F4`, ícone `#4E72C8`), título "Anuncio general" / "07:50 · publicado por vos", badge "ANUNCIO" (fundo `#CCD8F4`, dot e texto `#4E72C8`), "Para: toda la sala", texto "El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.", footer com 8 curtidas e 0 comentários.

O rodapé de cada post SHALL ter: contagem de likes sombreada (`#E0654A`, 700/14px), link de comentário (`#94887B`) para `/detalle-publicacion`, e "Editar" (`#C5503A`, 800/14px) para `/crear-publicacion`; os três blocos separados por `gap: 16px`.

#### Scenario: Conteúdo e contadores exatos
- **WHEN** o usuário abre `/`
- **THEN** os três posts aparecem em ordem logro → actividad → anuncio, com contadores 3/1, 5/2 e 8/0 e os textos literalmente como no mock

#### Scenario: Link de comentário e edição
- **WHEN** o usuário clica no ícone de comentário ou em "Editar" de qualquer post
- **THEN** o navegador navega para `/detalle-publicacion` ou `/crear-publicacion` respectivamente

### Requirement: Placeholder de foto no post de actividad
O post de actividad SHALL incluir um bloco de altura 200px ocupando a largura do card: borda tracejada `1.5px dashed #DBCDBA`, raio 16px, fundo `#F4ECE1`, ícone de imagem 30px + label "Foto · pintando con témperas" (13.5px/`#B0A290`), como link para `/foto`.

#### Scenario: Placeholder redireciona para a foto
- **WHEN** o usuário clica no placeholder do post de actividad
- **THEN** o navegador navega para `/foto`

### Requirement: Ausência de lógica dinâmica
A home SHALL ser totalmente estática: nenhum fetch, estado, relógio ou interatividade funcional (curtidas/comentários não são clicáveis como contadores). Mudanças futuras de dados NÃO pertencem a esta capability.

#### Scenario: Sem requisições de rede da home
- **WHEN** o usuário abre `/` observando o network log
- **THEN** nenhuma chamada de API ocorre (apenas assets estáticos e fontes)
