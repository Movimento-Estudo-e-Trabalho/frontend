# Documentação Formal do Frontend

## 1. Objetivo do Produto
O frontend apresenta o projeto Estágio Justo como uma plataforma ativista de transparência, com foco em informação confiável, denúncia segura e tomada de decisão informada por estudantes.

## 2. Escopo
- Aplicação web SPA em React + Vite.
- Navegação por rotas com React Router.
- Componentes de UI baseados em shadcn-ui e Tailwind CSS.

## 3. Arquitetura e Organização
- Entrada: `src/main.tsx` monta o React na raiz da página.
- Roteamento: `src/App.tsx` define as rotas principais.
- Páginas: `src/pages/*` contém as telas (Index, Empresas, Denuncia, etc.).
- Componentes: `src/components/*` agrupa UI composta (Header, HeroSection, etc.).
- UI primitives: `src/components/ui/*` contém componentes reutilizáveis (Button, Card, Input, etc.).
- Dados locais: `src/data/*` contém dados simulados para mock e exibição inicial.
- Utilitários: `src/lib/utils.ts` e `src/hooks/*` suportam lógica e UI.

## 4. Rotas Principais
- `/`: Landing page com manifesto, busca e destaques.
- `/empresas`: Listagem de empresas avaliadas.
- `/denuncia`: Formulário de denúncia anônima.
- `/preciso-de-ajuda`: Orientações e suporte.
- `/sobre`: Contexto do projeto e missão.
- `/contato`: Canais oficiais.
- `/avaliar`: Formulário de avaliação.
- `*`: Página de erro (NotFound).

## 5. Design System e Identidade Visual
### Paleta Oficial
- #ffb400 (amarelo energia)
- #0988a6 (azul petróleo)
- #f6511d (laranja mobilização)
- #13100a (preto manifesto)

### Tipografia
- Títulos: Space Grotesk
- Texto corrido: Public Sans

### Tokens de UI
Os tokens principais estão definidos em `src/index.css`:
- `--primary`, `--secondary`, `--accent`, `--foreground`, `--background`
- Gradientes: `--gradient-hero`, `--gradient-card`
- Sombras: `--shadow-card`, `--shadow-elevated`

### Componentes Visuais Chave
- Header com faixa de manifesto e CTA destacado.
- Hero com camadas visuais (imagem + gradiente + listras) e linguagem ativista.
- Cards com borda forte e sombra densa para impacto.

## 6. UX e Acessibilidade
- Contraste alto entre texto e fundo para leitura rápida.
- CTA visíveis e acima da dobra, com linguagem direta.
- Estrutura de formulário clara, com rótulos e feedback.
- Interações com hover e foco para reforço visual.

## 7. Fluxos Principais
1. Descoberta: usuário entra na home e entende a causa.
2. Pesquisa: filtra empresas e compara experiências.
3. Ação: avalia empresas ou envia denúncias.

## 8. Componentes Críticos
- `Header`: navegação, CTA e identidade ativista.
- `HeroSection`: mensagem principal e orientação de ação.
- `SearchSection`: filtro rápido com foco em informação prática.
- `RecentHighlights`: alertas e avaliação recente.

## 9. Padrões de Código
- Componentes funcionais com React Hooks.
- Classes Tailwind para composição rápida e consistente.
- Separação clara entre UI e dados mock.
- Comentários apenas quando ajudam a leitura.

## 10. Como Rodar Localmente
```sh
npm i
npm run dev
```

## 11. Manutenção e Evolução
- Migrar dados mock para API real.
- Implementar autenticação se necessário.
- Adicionar testes de UI e acessibilidade.

## 12. Convenções de Commit (sugestão)
- `feat`: nova funcionalidade
- `fix`: correções
- `refactor`: melhorias internas
- `docs`: atualização de documentação
