# 🔪 ketchup_project  - Image Editor
- Toast UI ImageEditor [링크](https://github.com/nhn/tui.image-editor)
- Vue2
- bootstrap vue


## Member
이재창(@jaechang1502)


### 🛠 스타트 빌드
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

## 📖 프로젝트 설치
- 설치
```
npm install
```
- 실행
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
## Text
1. 처음에 [Tooning](https://tooning.io/tooning-landing-main)이라는걸 보고  와 대단하다 하면 재밋겠다 한걸 진짜 프로젝트에 넣어버려서 부담감 ㅠㅠㅠㅠㅠ   
2. 프론트엔드를 하려 왓지만 막상 쉽다던 vue써보니 어렵다는걸 알고 눈물만 흘렷다.(사실 php도 그랫음 쉽다햇는데 해보니 어려움)   
3. HTML CanvasAPI쓰려햇는데 영 몰라서 못썻음  
<!----------->
<strong>개선</strong> 
1. 걍 함  
2. 눈물찔끔흘리면서 강의 봄  그리고 토이프로젝트 햇는데 강의 그대로 프로젝트 올리기에는 창피해서 깃허브에도 안올림  
3. ToastUI ImageEditor API 써봄  (콘솔창 뒤져봐야됨)

###firebase deploy
firebase:deploy   = vue-cli-service build && firebase deploy

###firebase config file
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

