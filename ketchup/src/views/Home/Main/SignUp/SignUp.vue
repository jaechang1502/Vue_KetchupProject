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
            <b-form-input @input="form" type="text" ></b-form-input>
        </div>
         <div class="mt-4">
            <p>이메일</p>
            <b-form-input type="email" v-model="email"  :state="mailcheck" ></b-form-input>
            <b-form-invalid-feedback :state="mailcheck">
                  올바르지않은 이메일입니다
                 </b-form-invalid-feedback>
        </div>
        <div class="mt-4">
            <p>비밀번호</p>
            <b-form-input  type="password" v-model="pw1" :state="pwcheck"></b-form-input>
        </div>
        <div class="mt-4">
            <p>비밀번호 확인</p>
            <b-form-input  type="password" v-model="pw2" :state="pwcheck"></b-form-input>
              <b-form-invalid-feedback :state="pwcheck">
                  패스워드 길이는 최소 4자 최대 12자 입니다 
                 </b-form-invalid-feedback>
            <b-form-valid-feedback :state="pwcheck">
                비밀번호 확인 완료
            </b-form-valid-feedback>
        </div>
        <div class="align-items-center mt-5">

            <b-button variant="outline-success" block  @click="loginSign">회원가입 완료</b-button>
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
           pw1:'',
           pw2:'',
           email:'',
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
        form: {
            get(){
                return this.$store.state.name,this.$store.state.email,this.$store.state.pw1,this.$store.state.pw2;
            },
            set(a,b,c,d){
                return this.$store.state.commit('name',a),this.$store.state.commit('name',b),this.$store.state.commit('name',c),this.$store.state.commit('name',d);
            }
        },
        mailcheck(){
             var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            return this.email.match(regExp) != null
        },
        pwcheck(){
            return this.pw1 == this.pw2 && this.pw1 != '' && this.pw2 != ''
             && this.pw1.length > 4 && this.pw1.length < 12 
             && this.pw2.length > 4 && this.pw2.length < 12 
        },
    
    },
    methods: {
        loginSign(){
        const auth = getAuth();
         createUserWithEmailAndPassword(auth, this.email,this.pw1)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(userCredential)
            })
            .catch((error) => {
                
        console.log(error)
    });
        }
       
        
    }
    

}
</script>

<style>

</style>