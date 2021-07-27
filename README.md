# RDF Stores

## Como executar localmente

É necessário que você possua o NodeJS e o NPM instalado no seu computador.

1. Extraia os arquivos ou clone o repositório do Github em sua máquina.
2. Vá para a raíz do projeto e instale as dependência do backend executando:

```
npm install
```

3. Após isso vá para a pasta client e instale as dependências do frontend:
```
cd client
npm install
```

4. Então, com as dependências instaladas, execute primeiramente o backend. Para isto você deve estar na pasta raíz do projeto e execute o comando: 
```
npm start
```

Dessa forma o backend será executado na porta `3333`

5. Execute o frontend, então na pasta `client` execute o comando:
```
npm start
```

Dessa forma o backend será executado na porta `3000`

6. Agora com o frontend e backend rodando, você deve estar com o GraphDB executando localmente. Para isso faça o download do GraphDB em https://graphdb.ontotext.com/. Para ter acesso ao Free você deve fazer uma conta.

7. Após a instalação é só rodar o executável, na qual criará um endpoint na porta  `7200`.

8. Agora você deverá acessar o GraphDB em `http://localhost:7200`.

9. Crie um repositório chamado: `websemantica-ep`. O nome deverá ser esse, pois utilizamos essa referência nesse sistema.

10. Importe o grafo no GraphDB em `Import` -> `RDF` -> `Upload RDF files`. Utilize o arquivo `epWebSemanticaOficial.ttl` que está nesse repositório na pasta `docs`.

11. Para acessar o frontend do sistema entre em `http://localhost:3000/admin/login`.

12. Você deverá ter sido cadastrado para isso só fazer a requisição HTTP [POST] para http://localhost:3333/cliente. Enviando o seguinte body. 

```
{
	"sub": "Cliente",
	"data": {
		"username": "username",
		"password": "password"
	}
}
```

13. Para realizar cadastros de produtos e lojas, você poderá fazer requisições para:


### Lojas (POST) 
http://localhost:3333/lojas

Body:
```
{
	"sub": "Loja",
	"data": {
		"nomeLoja": "Cultura",
		"atividade": "livros",
		"link": "https://www.cultura.com.br/",
		"localizacao": "2A"
	}
}
```


### Lojas (POST) 
http://localhost:3333/produtos

Body
```
{
	"sub": "Produto",
	"data": {
		"nomeProduto": "Batata frita",
		"categoria": "batatas",
		"preco": "15",
		"produtoDe": "http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/Loja/903a62e1-77af-474e-9749-1a4aa29b19ca"
	}
}
```

Onde o ID do produto é o última parte da url de produtoDe.

13. Por fim, é só utilizar normalmente o sistema através do frontend, navegando pelas lojas, adicionando produtos, verificando o carrinho e finalizando a compra.