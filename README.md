# Beer Store - Cardápio Digital

## Como publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo: `beerstore-cardapio`.
2. Envie todos os arquivos desta pasta para o repositório.
3. Vá em **Settings > Pages**.
4. Em **Source**, escolha **Deploy from branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Clique em **Save**.

O link ficará parecido com:
`https://SEUUSUARIO.github.io/beerstore-cardapio/`

## Como alterar produtos e preços
Abra o arquivo `produtos.json` e altere os campos:
- `nome`
- `descricao`
- `preco`
- `imagem`

## Como trocar imagens
1. Coloque a nova imagem na pasta `imagens/`.
2. No `produtos.json`, altere o caminho do produto para a nova imagem.

Exemplo:
`"imagem": "imagens/filet-beer-store.webp"`

## Happy Hour
No arquivo `produtos.json`, ajuste:
```
"happyHour": {
  "inicio": "14:00",
  "fim": "19:40",
  "titulo": "HAPPY HOUR",
  "texto": "Caipiroscas especiais no horário promocional."
}
```
O banner aparece automaticamente nesse horário.

## Instagram
O botão do Instagram fica no rodapé e aponta para:
`@beerstoreochopp`
