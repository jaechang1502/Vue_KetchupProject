<template>
   <div class="login_background">
        <div class="login_con">
           <div class="d-flex justify-content-between align-items-center">
                <h4>로그인</h4>
                <button class="btn btn-primary-outline" @click="$store.commit('loginmenu',false)"><b-icon icon="x-lg"></b-icon></button>
           </div>
           <div class="p-2 mt-3">
             <div>이메일</div>
             <b-form-input type="email" v-model="LogEmail"  placeholder="가입한 email"></b-form-input>
             <div class="mt-3">패스워드</div>
             <b-form-input type="password"  v-model="password" placeholder="가입한 password"></b-form-input>
           </div>
           <div class="mt-3">
               <b-button block type="submit" variant="success" @click="signIn">로그인</b-button>
           </div>
           <div class="d-flex justify-content-center align-items-center mt-3">
               <div class="p-2"><a>비밀번호찾기</a></div>
               <div class="p-2"> <router-link to="/signup">회원가입</router-link></div>
           </div>
           <hr>
           <div class="mt-5">
               <KakaoCheck></KakaoCheck>
                <b-button class="mt-2" variant="danger" block > <b-icon icon="google" class="mr-2" ></b-icon> 구글로 로그인</b-button>
               <b-button variant="primary" block > <b-icon icon="facebook" class="mr-2" ></b-icon>  페이스북으로 로그인</b-button>
              
              
           </div>     
        </div>
        </div>
</template>

<script>
import KakaoCheck from './LoginCheck/KakaoCheck.vue'
import {getAuth,signInWithEmailAndPassword } from "firebase/auth";

export default {
    data(){
      return {
        LogEmail: '',
        password: ''
      } 
    },
    components: {
        KakaoCheck
    },
     methods: {
        signIn(){
           const auth = getAuth();
            signInWithEmailAndPassword(auth, this.LogEmail, this.password).then((userCredential) => {
            const user = userCredential.user;
            //세션값 넣어야되는디 https://sjwiq200.tistory.com/37 npm만 설치 해놧으나 어디에서 세션을 써야되는가.. 
           this.$store.commit('loginmenu',false);
           this.$store.commit('userinfo',user);              
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode == 'auth/wrong-password'){
      alert('아따 패스워드가 다른디?')
    }else if(errorCode == 'auth/user-not-found'){
      alert("유저를 찾을수 없다는디요?")
    }
    alert(errorCode)
    alert(errorMessage)
  });
        }
    }

}
</script>

<style>

</style>