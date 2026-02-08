# Site da Professora Natalia — "Vamos ver se damos match?"

Site front-only para uma professora de inglês. O visitante faz um mini questionário para ver se combina com o método da professora antes de entrar em contato.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Pronto para deploy na **Vercel**

## Como rodar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Faça push do projeto para um repositório Git (GitHub, GitLab ou Bitbucket).
2. Acesse [vercel.com](https://vercel.com), importe o repositório.
3. Deploy automático. Não é necessário configurar backend.

## Onde editar

| O que | Onde |
|-------|------|
| **Perguntas do quiz** | `src/data/quiz.ts` — array `QUIZ_QUESTIONS` |
| **Limiar do match** | `src/data/quiz.ts` — constante `MATCH_THRESHOLD` (0 a 1) |
| **Mensagens do resultado** | `src/components/MatchResult.tsx` |
| **Link do formulário de contato** | `src/components/Contact.tsx` — `CONTACT_FORM_URL` |
| **Embed do Google Calendar** | `src/components/Calendar.tsx` — `CALENDAR_EMBED_URL` |
| **Textos do hero / CTA** | `src/components/Hero.tsx` |

## Lógica do match

- Cada pergunta tem várias opções; cada opção tem um **score** entre 0 e 1.
- Respostas alinhadas ao método da professora têm score mais alto (ex.: 0,9 ou 1).
- No final, é calculada a **média** dos scores das respostas.
- Se a média for **≥** `MATCH_THRESHOLD` (padrão 0,55), o resultado é **"Acho que a gente combina!"**.
- Caso contrário, é exibida a mensagem mais suave ("Talvez a gente precise conversar um pouco mais").
- Tudo roda no front; não há backend.

## Cores do projeto

- Rosa claro (bg): `#F8B6B0`
- Rosa suave (bg): `#FAD0CB`
- Marrom escuro: `#4A2E1F`
- Marrom médio: `#6B4A3A`
- Off-white: `#F6F1EB`
- Rosa destaque: `#E96C6C`
