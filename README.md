# 🔪 ketchup_project  - Image Editor
- Toast UI ImageEditor [링크](https://github.com/nhn/tui.image-editor)
- Vue2
- bootstrap vue


## Member
이재창(@jaechang1502)


### firebase config file(이거 안하면 설치 안됨)
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


## 📖 프로젝트 설치
- 설치
```
cd ketchup
npm install
```
- 실행
- 
```
npm run serve
```
- 배포
```
npm run build
```
- lint 수정
 ```
npm run lint
```


### firebase deploy
firebase:deploy   = vue-cli-service build && firebase deploy




### 🛠 처음에 어떻게 햇나?
[그냥따라햇음](https://morioh.com/p/74cfb27578ef)
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

