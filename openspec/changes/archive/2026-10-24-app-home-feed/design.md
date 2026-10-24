## Context

Estado atual: `app/` é 100% boilerplate create-next-app (Geist Theme, tema zinc) e existem 16 mockups aprovados em `references/pantallas/*.dc.html` como fonte de verdade. O mock `feed.dc.html` tem ~300 linhas de HTML com **apenas estilos inline e zero classes**, navegação entre telas e fontes Fredoka/Nunito via CDN. A sidebar (248px, sticky, 100vh) é byte-idêntica em 9 mockups; a coluna central (`max-width` variável 680–880px, padding `34px 40px 80px`) muda por tela. Restrições do projeto: Next.js 16 (`cacheComponents: true`, `partialPrefetching: true`), Tailwind v4 via Turbopack, TypeScript strict, sem git, sem testes.

## Goals / Non-Goals

**Goals:**
- `/` renderizando o feed visualmente **extremamente idêntico** ao mock (alvo de aceitação: screenshot diff contra `references/screenshots/feed.png`).
- Shell de app (sidebar + main rolável) em layout de route group, pronto para as 9+ telas que o reutilizam, sem copiá-lo por tela.
- Zero dependências novas; zero lógica dinâmica.

**Non-Goals:**
- Autenticação, banco de dados, API, estado (likes/commentários funcionais), data real na saudação.
- Telas irmãs (`/ninos`, `/avisos`, `/mi-cuenta`, `/login`, `/crear-publicacion`, `/detalle-publicacion`, `/foto`) — só os links existem.
- Design system / classes Tailwind — convergir para classes só quando houver repetição real entre telas; até lá, fidelidade > idiomatismo.

## Decisions

1. **Route group `(app)` para o shell — não no layout raiz.**
   Por quê: `login.dc.html` e `activar-cuenta.dc.html` não possuem sidebar; se o `<aside>` vivesse no layout raiz, essas telas herdariam chrome errado. Raiz fica com `html/body`, `lang="es"`, metadata e `<head>` de fontes.
   Alternativa descartada: sidebar no layout raiz (menos um arquivo, mas contamina telas sem sidebar).

2. **Tradução verbatim: estilos inline do mock → objetos `style` JSX.**
   Por quê: "idêntico" precisa ser verdade por construção, não por comparação manual de ~80 regras CSS. Copiar as strings de estilo intactas (camelCase: `strokeWidth`, `strokeLinecap`, `fontFamily`, `letterSpacing:"0.8px"`, escalas como `fontSize:15.5` intocadas) torna o diff visual quase gratuito.
   Alternativas descartadas: Tailwind arbitrário (`bg-[#F6ECDF]` etc., ≈3×  trabalho e risco de drift) e `dangerouslySetInnerHTML` (blob irreviewable, re-render insalubre).

3. **Google Fonts por `<link>` verbatim, não `next/font`.**
   Por quê: o mock carrega Fredoka/Nunito via `link rel=preconnect` + `css2?family=...` e os estilos inline hardcodam `font-family:'Fredoka'`/`'Nunito'` (~15 ocorrências). `next/font` renomeia as famílias, forçando refatoração de todos os objetos `style` — trocar um risco zero por fricção desnecessária neste estágio.
   Custo aceito: fonts via CDN em runtime (câmbio para `next/font` fica trivial num change futuro, se desejado).

4. **CSS do `<helmet>` do mock copiado literalmente para `globals.css`.**
   Por quê: elimina qualquer incerteza sobre o que o preflight do Tailwind cobre (ex.: `a{text-decoration:none;color:inherit}`, scrollbar `#E4D6C4` não são cobertos). Bloco minúsculo, autônomo, igual ao mock por construção. Preflight continua ativo para o resto.

5. **Coluna central na página, shell no layout.**
   Por quê: o `<main>` rolável (`flex:1;min-width:0;height:100vh;overflow-y:auto`) é constante entre telas; o wrapper interno (`max-width:760px` no feed, 680px em mi-cuenta, 880px em ninos…) não é. Layout entrega `<main>{children}`; página entrega `<div style={{maxWidth:760px...}}>`.

6. **Links internos com `next/link`.**
   Por quê: evita `@next/next/no-html-link-for-pages` e é o idiomático do App Router. Rotas alvo não existem ainda — 404 conhecido e aceito (estrutura de nav correta desde o dia 1, rotas acendem com as próximas telas).

7. **Os 3 posts verbatim na página, sem componente `PostCard`.**
   Por quê: os cards diferem em 6 dimensões (avatar de letra vs ícone, cor/label do badge, foto opcional, contadores), então a abstração precisaria de slots/union e custaria o mesmo que 3 blocos copiados — com mais risco de drift contra o mock. A fonte de dados (BD) forçará a extração de qualquer forma; quando isso acontecer, a extração parte de blocos literais, que são a melhor referência.

## Risks / Trade-offs

- [Conflito de rota em `/` se `app/page.tsx` boilerplate não for removido] → task de apagar o arquivo antes de criar `app/(app)/page.tsx`.
- [Fonts via CDN exigem internet no primeiro render; offline cai para `system-ui` e métricas mudam] → screenshot de aceitação executado online; risco confinado a dev.
- [Scrollbar custom é WebKit-only] → limitação herdada do próprio mock; Firefox renderiza scrollbar nativa.
- [Repetição de ~450 linhas de JSX estilo-a-estilo] → trade-off de fidelidade assumido; o conteúdo é hardcoded e a consolidação vem com o dado real.
- [Layout pasted sidebar ficará divergente quando mock de login/etc. evoluírem] → sidebar única em `(app)/layout.tsx`; futuras mudanças de shell são edita pontual.

## Migration Plan

Troca direta sem dados: editar `globals.css`/`layout.tsx`, apagar `app/page.tsx`, criar `(app)/layout.tsx` + `(app)/page.tsx`. Rollback = apagar os novos arquivos e restaurar o boilerplate (cópia do layout original mantida no change, se necessário; sem git no diretório).

## Open Questions

Nenhum bloqueante. Resolvidos por decisão: fontes via `<link>`, 404 tolerado nos links futuros, conteúdo hardcoded ("martes 17 jun", contadores 3/1, 5/2, 8/0).
