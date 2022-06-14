<template>
  <div>
            <b-navbar class="headbar " toggleable="lg" type="dark">
            <b-collapse id="nav-collapse" is-nav="is-nav">
                <b-navbar-brand to="/">
               
                <div class="shake"><img src="../../../assets/123.png" alt=""/></div></b-navbar-brand>
                <b-navbar-nav>
                  
                </b-navbar-nav>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </b-collapse>
            <b-navbar-nav class="ml-auto">
                <button v-if="$store.state.userinfo == ''" class="login" @click="$store.commit('loginmenu',true)">Login / Sign Up</button>
                <button v-if="$store.state.userinfo != ''" class="login">{{$store.state.userinfo.email}}</button>
                <button class="login  text-flicker-out-glow" @click="editor()">제작하기</button>
                
              
            </b-navbar-nav>
        </b-navbar>
       <LoginMenu v-if="$store.state.loginmenu"></LoginMenu>
  </div>
</template>

<script>
import LoginMenu from './Login/LoginMenu.vue'
export default {
     methods: {
        editor(){
            this.$router.push('/editor')
        }

     },
     components: {
         LoginMenu
     }
     
 }
</script>

<style>

</style>