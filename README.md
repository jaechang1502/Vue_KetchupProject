# πͺ ketchup_project  - Image Editor
- Toast UI ImageEditor [λ§ν¬](https://github.com/nhn/tui.image-editor)
- Vue2
- bootstrap vue


## Member
μ΄μ¬μ°½(@jaechang1502)


### firebase config file(μ΄κ±° μνλ©΄ μ€μΉ μλ¨)
```shell
cd Vue_KetchupProject/ketchup/src/plugins
vi firebaseconfig.js
```
```javascirpt
export default {
    apiKey: ".....",
    authDomain: "x.firebaseapp.com",
    projectId: "x-74800",
    storageBucket: "x.appspot.com",
    messagingSenderId: "...",
    appId: "....",
    measurementId: "..."
  };
```


## π νλ‘μ νΈ μ€μΉ
- μ€μΉ
```
cd ketchup
npm install
```
- μ€ν
- 
```
npm run serve
```
- λ°°ν¬
```
npm run build
```
- lint μμ 
 ```
npm run lint
```


### firebase deploy
firebase:deploy   = vue-cli-service build && firebase deploy




### π  μ²μμ μ΄λ»κ² νλ?
[κ·Έλ₯λ°λΌνμ](https://morioh.com/p/74cfb27578ef)
```
npx @vue/cli create editor
cd editor
npm i @toast-ui/vue-image-editor bootstrap-vue
npm install sass-loader
npm install node-sass
vue add router
vue add axios
vue add vuex
```

