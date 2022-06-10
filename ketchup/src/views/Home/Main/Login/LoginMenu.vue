<template>
   <div class="login_background">
        <div class="login_con">
           <div class="d-flex justify-content-between align-items-center">
                <h4>로그인</h4>
                <button class="btn btn-primary-outline" @click="$store.commit('loginmenu',false)"><b-icon icon="x-lg"></b-icon></button>
           </div>
           <div class="p-2 mt-3">
             <div>이메일</div>
             <b-form-input type="email"  placeholder="가입한 email"></b-form-input>
             <div class="mt-3">패스워드</div>
             <b-form-input type="password" placeholder="가입한 password"></b-form-input>
           </div>
           <div class="mt-3">
               <b-button block type="submit" variant="success">로그인</b-button>
           </div>
           <div class="d-flex justify-content-center align-items-center mt-3">
               <div class="p-2"><a>비밀번호찾기</a></div>
               <div class="p-2"> <router-link to="/signup">회원가입</router-link></div>
           </div>
           <hr>
           <div class="mt-5">
               <KakaoCheck></KakaoCheck>
                <b-button @click="$store.commit('')" class="mt-2" variant="danger" block > <b-icon icon="google" class="mr-2" ></b-icon> 구글로 로그인</b-button>
               <b-button variant="primary" block > <b-icon icon="facebook" class="mr-2" ></b-icon>  페이스북으로 로그인</b-button>
              
              
           </div>     
        </div>
        </div>
</template>

<script>
import KakaoCheck from './LoginCheck/KakaoCheck.vue'
export default {
    components: {
        KakaoCheck
    }

}
</script>

<style>

</style>