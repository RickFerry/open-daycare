## Why

O `app/` ainda é boilerplate do create-next-app, enquanto `AGENTS.md` estabelece `references/pantallas/*.dc.html` como fonte de verdade do design. A tela `feed.dc.html` é a home do projeto e a primeira tela real: implementá-la em `/` (sem autenticação e sem banco de dados) estabelece o shell compartilhado (sidebar byte-idêntica em 9 telas do mock) e resolve a dívida de rota `/` que hoje mostra um placeholder genérico.

## What Changes

- Substituir a página boilerplate de `/` pela coluna feed traduzida 1:1 de `references/pantallas/feed.dc.html` — **100% estática e hardcoded** (3 posts, contadores, data "martes 17 jun"), sem fetch, sem estado, sem interatividade real.
- Tradução verbatim de estilos inline → objetos `style` JSX (camelCase), sem conversão para classes Tailwind — garantia de fidelidade pixel-a-pixel com o mock.
- Criar o shell de app em um route group: `(app)/layout.tsx` com flex-wrapper + `<aside>` 248px (sidebar) + `<main>` rolável, exatamente como no mock.
- Editar o layout raiz: `lang="es"`, `<link>`s do Google Fonts (Fredoka + Nunito) copiados verbatim, metadata "OpenDayCare"; remover fontes Geist e classes de body do boilerplate.
- Substituir o CSS de `app/globals.css` pelo bloco `<style>` do `<helmet>` do mock (paleta, reset, scrollbar), mantendo `@import "tailwindcss"`.
- Links internos via `next/link` para rotas futuras ainda inexistentes (`/ninos`, `/avisos`, `/mi-cuenta`, `/login`, `/crear-publicacion`, `/detalle-publicacion`, `/foto`) — darão 404 até as próximas telas.
- Remover `app/page.tsx` boilerplate (conflito de rota com `app/(app)/page.tsx`).

## Capabilities

### New Capabilities

- `app-shell`: moldura persistente das telas "com sidebar" — flex layout full-height, `<aside>` fixo de 248px (logo OpenDayCare/Sala Soles, botão "Nueva publicación", nav Feed/Niños/Avisos/Mi cuenta, chip de usuário Caro Giménez + logout) e `<main>` com scroll próprio (flex:1, height:100vh, overflow-y:auto). O conteúdo central (coluna `max-width` com padding `34px 40px 80px`) pertence a cada página, pois varia por tela.
- `feed-home`: a home `/` — coluna de 760px com header de saudação ("Buenas, Caro", meta "12 niños · martes 17 jun"), card composer ("Compartí un momento…"), divisor "PUBLICADO HOY" e 3 posts (logro, actividad com placeholder de foto, anuncio) com badges, contadores e links Editar/detalhe/foto exatamente como no mock. Todo conteúdo hardcoded; nenhum dado dinâmico.

### Modified Capabilities

(nenhum — primeiro change do projeto, `openspec/specs/` está vazio)

## Impact

- **Código**: `app/layout.tsx` (editado), `app/globals.css` (editado), `app/page.tsx` (removido), `app/(app)/layout.tsx` e `app/(app)/page.tsx` (novos). Nenhum arquivo fora de `app/`.
- **Dependências**: nenhuma nova — só `next/link` (já presente no Next) e as fontes carregadas via CDN do Google Fonts em runtime.
- **Rotas**: `/` passa a renderizar o feed; rotas linkadas não existem ainda (404 esperado e tolerado nesta fase).
- **Build**: página totalmente estática — caso trivial para `cacheComponents: true` (sem dados async, sem Suspense necessário).
- **Risco de regressão**: baixo — substituição pura de boilerplate; nada no projeto consome `app/page.tsx` ou o tema Geist.
