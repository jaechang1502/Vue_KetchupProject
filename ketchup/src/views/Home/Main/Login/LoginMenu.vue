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
               <div class="p-2"><a href="#">회원가입</a></div>
           </div>
           <hr>
           <div class="mt-5">
               <b-button variant="warning" block > <b-icon class="mr-2" icon="chat-fill"></b-icon>  카카오톡으로 로그인</b-button>
                <b-button variant="danger" block > <b-icon icon="google" class="mr-2" ></b-icon> 구글로 로그인</b-button>
               <b-button variant="primary" block > <b-icon icon="facebook" class="mr-2" ></b-icon>  페이스북으로 로그인</b-button>
              
              
           </div>     
        </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>