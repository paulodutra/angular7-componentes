# Gerando aplicação angular
- Para a criação de uma aplicação angular é necessário ter o angular/cli instalado para isso execute: 

```
 npm install -g @angular/cli
```

- Depois de instalado o cli do angular crie o projeto através do ng

```
ng new nome-do-projeto
```

- OBS: Por exemplo: ng new iniciando-com-angular7

- Para executar o projeto execute: 

```
ng serve

```

# Criando componentes 

- Para criar componentes, o angular prover a geração da estrutura em seu cliente ng, para isso 

```
ng generator nome-do-item-desejado
//ou
ng g nome-do-item-desejado nome-do-item
```
- Exemplo: ng g component

- O padrão dos nomes no angular é o padrão kebab nome-outro-nome
- O selector do component se torna uma tag para ser utilizado para imprimir o seu conteudo 

- exemplo  selector: 'app-employee-list' se torna <app-employee-list/> ou <app-employee-list></app-employee-list> 

- No angular temos um componente pai app.component e esse vai carregando os demais, é chamado de componente pai

- Para deixar a propriedade value do formulário reativo: [value]="name" (falou que a propriedade value é igual a propriedade name que esta no component)
- o par de cochetes define que a programação altera o html (bind de uma via)
- Diretiva vai ser um atributo que foi construido pelo angular, que vai interferir no comportamento do html
- Para deixar o comportamento como bind de duas vias o html alterar a programação use o [(ngModel)]="name" (nome da propriedade que esta na classe .ts do componente)
- Logo após isso importe em app.module.ts import {FormsModule} from '@angular/forms'

# Disparando eventos

- (click)="nomeDoMetodo" (recebe o nome do metodo que foi definido na classe .ts do component)
- o parenteses () representa que o html irá alterar a js (programação)
- o cochetes [] representa que a js(programação) irá alterar o html
- quando usa os dois [()] significa que é o two way databinding

- O ngFor precisa do * antes (*ngFor="")

# Mostrar ou esconder elementos
- O ngIf esconde o item pai e os filhos que estão abaixo deles: (Ele destroy o elemento)

```
<div *ngIf="salary < 1000">
    <label >Bonus</label>
    <input type="text" name="bonus" [(ngModel)]="bonus" /> 
</div>
```

- A propriedade reativa [hidden], esconde o item e os seus filhos, entretanto NÃO DESTROI o elemento

- O hidden é utilizado quando um elemento será escondido ou apresentado muitas vezes na aplicação (Ele demanda menos processamento)


# Camada de serviços

- Injeção de dependência

- O serviço pode ser gerado através do angular cli:

```
ng g service nome-do-servico

```

- Serviço é uma classe que pode ser usada e reutilizada em qualquer parte da aplicação

- Apartir da versão 7 do angular devido ao decorator @Injetable e a sua propriedade providerin, não é necessário registrar em providers dentro de app.module.ts

```
@Injectable({
  providedIn: 'root'
})

```

- OBS: Para versões anteriores é necessário

- Onde podemos injetar o serviço no método construtor de onde o mesmo será utilizado
- O serviço pode compartilhar dados com o template (no angular é chamado de serviço compartilhado ou serviceShared)
- Se na injeção de dependência o atributo estiver publico
- Toda vez que é iniciada a aplicação o angular cria uma instância unica do serviço (container de serviço), e esse serviço fica disponível até a aplicação ser fechada
- Como é uma instância unica a mesma é compartilhada em todos os lugares

- É a mesma instância compatilhada para todos os lugares que utilizarem o mesmo
- é uma boa pratica colocar certas regras dentro do serviço


# Gerando aplicação de produção

- Comando para gerar o build da aplicação angular

```
ng build
```

- Ao final do processo, gera criada uma pasta dist/nome-do-projeto com os arquivos do bundles

- Você pode testar o build utilizando um servidor web que sirva html, css e js

- Iremos utilizar o http-server, caso não tenha instalado na sua maquina, execute o seguinte comando:

```
npm install -g http-server

```

- Depois vá na pasta build/nome-do-projeto e execute:

``` 
http-server
```

- Abra o browser e acesse o endereço na http://127.0.0.1:8080/ para testar

## Integrando com o Boostrap 4

```
npm install bootstrap@4.1.3 jquery@3.3.1 pooper.js@1.14.4 --save 
```

Como o bootstrap trabalha com a estrutura de modulos é permitido importar componentes bootstrap de forma 
separada e utiliza-los dentro do arquivo app.module.ts ou importar a biblioteca inteira sem a necessidade de 
ter que realizar diversos importes.

Para importar css e js diretamente no projeto, você deverá ir no arquivo angular.json e ir na diretiva **architect** depois disso 
informe o css em **styles** e o js em **scripts**, conforme exemplo abaixo:

```
"architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/angular7-componentes",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ],
            "es5BrowserSupport": true
          },
```