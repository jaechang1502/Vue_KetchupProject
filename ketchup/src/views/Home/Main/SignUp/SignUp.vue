<template>
  <div>
    <mainhead></mainhead>
    <div class="signup_con justify-content-center">
        <div class="text-center">
            <h2>회원가입</h2>
        </div>
        <b-form @submit.stop.prevent>
        <div class="mt-4">
            <p>이름</p>
            <b-form-input v-model="signup.name" type="text" ></b-form-input>
        </div>
         <div class="mt-4">
            <p>이메일</p>
            <b-form-input type="email" v-model="signup.email"  :state="mailcheck" ></b-form-input>
            <b-form-invalid-feedback :state="mailcheck">
                  올바르지않은 이메일입니다
                 </b-form-invalid-feedback>
        </div>
        <div class="mt-4">
            <p>비밀번호</p>
            <b-form-input  type="password" v-model="signup.pw1" :state="pwcheck"></b-form-input>
        </div>
        <div class="mt-4">
            <p>비밀번호 확인</p>
            <b-form-input  type="password" v-model="signup.pw2" :state="pwcheck"></b-form-input>
              <b-form-invalid-feedback :state="pwcheck">
                  패스워드 길이는 최소 6자 최대 15자 입니다<br/> ※ 문자와 조합해주세요
                 </b-form-invalid-feedback>
            <b-form-valid-feedback :state="pwcheck">
                비밀번호 확인 완료
            </b-form-valid-feedback>
        </div>
        <div class="align-items-center mt-5">

            <b-button variant="outline-success" :disabled="formcheck" block  @click="loginSign">회원가입 완료</b-button>
        </div>
        
     </b-form>
    </div>
    <mainbottom></mainbottom>
  </div>
</template>

<script>
//vuex 아이디값,패스워드값,이름값 받아서 firebase에 전해줘야되는디 왜 안되냐고 이색기야
import mainhead from '../MainHead.vue'
import mainbottom from '../MainBottom.vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
    data() {
        return {
            signup: {
                name: '',
                pw1:'',
                pw2:'',
                email:'',
            }
          
        }
    },
    components: {
        mainhead,
        mainbottom,
    },
    mounted () {
        this.$store.commit('loginmenu',false)
    },
    computed: { 
        mailcheck(){
             var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            return this.signup.email.match(regExp) != null
        },
        pwcheck(){
            return this.signup.pw1 == this.signup.pw2 && this.signup.pw1 != '' && this.signup.pw2 != ''
             && this.signup.pw1.length > 6 && this.signup.pw1.length < 15 
             && this.signup.pw2.length > 6 && this.signup.pw2.length < 15 
        },
        formcheck(){
            if(!this.mailcheck || !this.pwcheck){
            return true
            }
            return false
        }
    },
    methods: {
        loginSign(){
        const auth = getAuth();
         createUserWithEmailAndPassword(auth, this.signup.email,this.signup.pw1)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(userCredential)
        alert('회원가입 축하드립니다 😁');
        this.$router.push('/')
            }).catch((error) => {
            console.log(error)
            alert('회원가입실패');
    });
        }
    }
    

}
</script>

<style>

</style>