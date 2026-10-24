## 1. Base global (layout raiz + CSS)

- [x] 1.1 Substituir `app/globals.css`: manter `@import "tailwindcss";` no topo, remover variáveis/dark-mode do boilerplate e colar verbatim o bloco `<style>` do `<helmet>` do mock (box-sizing, reset html/body, body Nunito `#F6ECDF`/`#3F362E` + antialiased, `a` sem decoração com cor herdada, `::-webkit-scrollbar` com thumb `#E4D6C4`).
- [x] 1.2 Editar `app/layout.tsx`: remover `Geist`/`Geist_Mono` e as classes `h-full antialiased` / `min-h-full flex flex-col`; definir `lang="es"`; adicionar no `<head>` JSX os 3 `<link>` do Google Fonts verbatim (preconnect ×2 + `css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap`); metadata `{ title: "OpenDayCare", description: "..." }` em espanhol.

## 2. Shell `(app)`

- [x] 2.1 Apagar `app/page.tsx` (boilerplate) para liberar a rota `/` antes de criar o route group.
- [x] 2.2 Criar `app/(app)/layout.tsx`: wrapper `<div style={{display:"flex",minHeight:"100vh",background:"#F6ECDF"}}>` verbatim do mock.
- [x] 2.3 Traduzir a `<aside>` completa para JSX verbatim (estilos inline preservados): logo OpenDayCare/Sala Soles (link `/`, sol SVG 21px em gradiente `#F8C3A8→#F2937A`), botão "Nueva publicación" (link `/crear-publicacion`, ícone +13px), nav com Feed(`/`, ativo: fundo `#FBE3D8`, texto `#D9583C`) / Niños(`/ninos`) / Avisos(`/avisos`) / Mi cuenta(`/mi-cuenta`) com seus SVGs 19px, e chip de usuário "Caro Giménez · Maestra · Soles" (avatar "C" `#F2937A`) com botão logout 32px (link `/login`, ícone de saída 16px). Todos os links internos via `next/link`.
- [x] 2.4 Fechar o layout com `<main style={{flex:1,minWidth:0,height:"100vh",overflowY:"auto"}}>` envolvendo `{children}` (a coluna central pertence à página, não ao layout).

## 3. Home `/` (coluna feed 760px)

- [x] 3.1 Criar `app/(app)/page.tsx` com a coluna verbatim: `maxWidth:760px,width:"100%",margin:"0 auto",padding:"34px 40px 80px"`.
- [x] 3.2 Header de saudação verbatim: eyebrow "GUARDERÍA · SALA SOLES" (`letterSpacing:"0.8px"`, `#D9583C`), H1 Fredoka 600/30px "Buenas, Caro", meta "12 niños · martes 17 jun" (hardcoded).
- [x] 3.3 Card composer verbatim (link `/crear-publicacion`): avatar "C" 40px `#F2937A`, placeholder "Compartí un momento…" `#A89A8B`, chip câmera 38px (`#FBE3D8`/`#E0654A`), sombra `0 4px 14px -10px rgba(120,90,60,.4)`.
- [x] 3.4 Divisor "PUBLICADO HOY" (`#8A7C6D`, 800, 12.5px) + hairline (`flex:1`, `#E7DAC8`).
- [x] 3.5 Post logro verbatim com comentário JSX `{/* post: logro */}`: avatar "M" (`#A9D9E8`/`#1F7A93`), "Mateo" / "14:20 · publicado por vos", badge LOGRO (`#CFEBD8`, dot `#3E9B6C`), "Para: familia de Mateo", texto completo do mock, footer 3 likes (coração `#E0654A` com `fill`) + 1 comentário (link `/detalle-publicacion`) + "Editar" (`#C5503A`, link `/crear-publicacion`).
- [x] 3.6 Post actividad verbatim com `{/* post: actividad */}`: cabeçalho "Mateo" / "09:40 · publicado por vos", badge ACTIVIDAD (`#C7E7F1`, dot `#2E89A6`), texto do mock, placeholder de foto 200px (dashed `#DBCDBA`, fundo `#F4ECE1`, ícone + "Foto · pintando con témperas", link `/foto`), footer 5 likes + 2 comentários + Editar.
- [x] 3.7 Post anuncio verbatim com `{/* post: anuncio */}`: avatar ícone megafone (`#CCD8F4`/`#4E72C8`), "Anuncio general" / "07:50 · publicado por vos", badge ANUNCIO (monoícone `#4E72C8`), "Para: toda la sala", texto do mock, footer 8 likes + 0 comentários + Editar.

## 4. Verificação de identidade

- [x] 4.1 `npx tsc --noEmit` e `npm run lint` sem erros (fontes de erro típicas: atributos SVG camelCase, `<a>` vs `next/link`).
- [x] 4.2 `npm run dev` online e visual debug: conferir fonte Fredoka/Nunito carregada (Network) e scroll acontecendo no `<main>`, não no body.
- [x] 4.3 Screenshot Playwright de `localhost:3000` (1440×900) em `.playwright-mcp/` e comparação lado a lado com `references/screenshots/feed.png`: cores, raios, sombras, badge pills, contadores 3/1, 5/2, 8/0 e espaçamentos idênticos; iterar até diff zero.
- [x] 4.4 `npm run build` conclui sem erros (página estática sob `cacheComponents: true`).
