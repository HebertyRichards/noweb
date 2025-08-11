
# Noweb Front-End + API Challenge

## Descrição

É uma página única criada em **React**, utilizando **TypeScript** e **Tailwind CSS**, que reproduz fielmente o layout fornecido no Figma.

Inclui uma funcionalidade de busca de CEP, que abre uma modal para digitar o CEP e retorna os dados de endereço pela API pública do [ViaCEP](https://viacep.com.br), preenchendo automaticamente os campos e bloqueando a edição.

---

## Link da Demo

[https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app)

---

## Tecnologias usadas

- React
- TypeScript
- Tailwind CSS
- Componentes da biblioteca shadcn/ui
- API ViaCEP para consulta de CEP
- Vercel para deploy

---

## Funcionalidades

- Layout responsivo baseado no design desktop do Figma.
- Modal de busca de CEP ativada ao clicar no botão de busca no cabeçalho.
- Validação do CEP.
- Consulta à API ViaCEP para preenchimento automático dos campos: Logradouro, Complemento, Bairro, Cidade, Estado e CEP.
- Campos preenchidos automaticamente ficam bloqueados para edição.
- Permite múltiplas pesquisas dentro da mesma modal sem fechá-la.
- Tratamento de erros e feedback para CEP inválido ou não encontrado.

---

## Como rodar localmente

### Pré-requisitos

- Node.js (versão 16+ recomendada)
- npm ou pnpm

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/HebertyRichards/noweb.git
   cd noweb-front-api-challenge
   ```

2. Instale as dependências:
   ```bash
   caso for pnpm -> npm install -g pnpm
   pnpm i 
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

---

