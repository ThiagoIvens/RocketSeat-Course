### CHAPTER I
## Module I
> Aula 1
Inicia o projeto com 'yarn init -y', instale o React através do comando 'yarn add react', em seguida instale o React DOM 'yarn add react-dom'. Após ter as ferramentas instaladas crie as pastas src ('mkdir src') e public ('mkdir public').
Crie o arquivo 'index.html' dentro da pasta public.

> Aula 2

Comece instalando o Babel:
``` 
yarn add @babel/core -D
yarn add @babel/cli -D
yarn add @babel/preset-env -D
``` 
Após instalado crie o arquivo 'babel.config.js' dentro da pasta raiz.
Dentro do arquivo adicione o seguinte codigo:
```
module.exports = {
    presets: [
        '@babel/preset-env'
    ]
}
```
Pronto!

Agora para continuar, crie o arquivo 'index.js' dentro da pasta src e cole o seguinte codigo a fim de testes:
```
const user = {
    name: 'Thiago',
};

console.log(user.address?.street);
```
E então   compile o index.js para um arquivo bundle atraves do babel:
```
yarn babel src/index.js -o dist/bundle.js
```

Adaptando o babel para react:
Substitua o codigo do index.js por
```
import React from "react";

function App() {
    return <h1>Hello World</h1>
}
```
Agora instale o preset do react:
```
yarn add @babel/preset-react -D
```
adicione esta dependencia ('@babel/preset-react') no babel.config.js.
Pronto!

Se preferir pode mudar o nome do arquivo 'index.js' para 'index.jsx' que é a nomenclatura assimilada ao react, pois usa html dentro do javascript (porém o browser não entende isso, por isso devemos usar o bundle como arquivo final).

> Aula 3
Agora vamos configurar o Webpack!
Comece instalando ele 'yarn add webpack webpack/cli webpack-dev-server -D'

Agora crie o arquivo de configurações na raiz do projeto 'webpack.config.js' com o seguinte código:
```
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {

    }
}
```