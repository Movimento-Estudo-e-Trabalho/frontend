# Documentacao Formal do Frontend

## 1. Objetivo do Produto
O frontend apresenta o projeto EstagioJusto como uma plataforma ativista de transparencia, com foco em informacao confiavel, denuncia segura e tomada de decisao informada por estudantes.

## 2. Escopo
- Aplicacao web SPA em React + Vite.
- Navegacao por rotas com React Router.
- Componentes de UI baseados em shadcn-ui e Tailwind CSS.

## 3. Arquitetura e Organizacao
- Entrada: `src/main.tsx` monta o React na raiz da pagina.
- Roteamento: `src/App.tsx` define as rotas principais.
- Paginas: `src/pages/*` contem as telas (Index, Empresas, Denuncia, etc.).
- Componentes: `src/components/*` agrupa UI composta (Header, HeroSection, etc.).
- UI primitives: `src/components/ui/*` contem componentes reutilizaveis (Button, Card, Input, etc.).
- Dados locais: `src/data/*` contem dados simulados para mock e exibicao inicial.
- Utilitarios: `src/lib/utils.ts` e `src/hooks/*` suportam logica e UI.

## 4. Rotas Principais
- `/`: Landing page com manifesto, busca e destaques.
- `/empresas`: Listagem de empresas avaliadas.
- `/denuncia`: Formulario de denuncia anonima.
- `/preciso-de-ajuda`: Orientacoes e suporte.
- `/sobre`: Contexto do projeto e missao.
- `/contato`: Canais oficiais.
- `/avaliar`: Formulario de avaliacao.
- `*`: Pagina de erro (NotFound).

## 5. Design System e Identidade Visual
### Paleta Oficial
- #ffb400 (amarelo energia)
- #0988a6 (azul petroleo)
- #f6511d (laranja mobilizacao)
- #13100a (preto manifesto)

### Tipografia
- Titulos: Space Grotesk
- Texto corrido: Public Sans

### Tokens de UI
Os tokens principais estao definidos em `src/index.css`:
- `--primary`, `--secondary`, `--accent`, `--foreground`, `--background`
- Gradientes: `--gradient-hero`, `--gradient-card`
- Sombras: `--shadow-card`, `--shadow-elevated`

### Componentes Visuais Chave
- Header com faixa de manifesto e CTA destacado.
- Hero com camadas visuais (imagem + gradiente + listras) e linguagem ativista.
- Cards com borda forte e sombra densa para impacto.

## 6. UX e Acessibilidade
- Contraste alto entre texto e fundo para leitura rapida.
- CTA visiveis e acima da dobra, com linguagem direta.
- Estrutura de formulario clara, com rotulos e feedback.
- Interacoes com hover e foco para reforco visual.

## 7. Fluxos Principais
1. Descoberta: usuario entra na home e entende a causa.
2. Pesquisa: filtra empresas e compara experiencias.
3. Acao: avalia empresas ou envia denuncias.

## 8. Componentes Criticos
- `Header`: navegacao, CTA e identidade ativista.
- `HeroSection`: mensagem principal e orientacao de acao.
- `SearchSection`: filtro rapido com foco em informacao pratica.
- `RecentHighlights`: alertas e avaliacao recente.

## 9. Padroes de Codigo
- Componentes funcionais com React Hooks.
- Classes Tailwind para composicao rapida e consistente.
- Separacao clara entre UI e dados mock.
- Comentarios apenas quando ajudam a leitura.

## 10. Como Rodar Localmente
```sh
npm i
npm run dev
```

## 11. Manutencao e Evolucao
- Migrar dados mock para API real.
- Implementar autenticao se necessario.
- Adicionar testes de UI e acessibilidade.

## 12. Convencoes de Commit (sugestao)
- `feat`: nova funcionalidade
- `fix`: correcoes
- `refactor`: melhorias internas
- `docs`: atualizacao de documentacao
