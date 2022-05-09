<template>
  <div>
            <b-navbar class="headbar" toggleable="lg" type="dark">
            <b-collapse id="nav-collapse" is-nav="is-nav">
                <b-navbar-brand to="/">
               
                <div class="shake"><img src="../../../assets/123.png" alt=""/></div></b-navbar-brand>
                <b-navbar-nav>
                  
                </b-navbar-nav>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </b-collapse>
            <b-navbar-nav class="ml-auto">
                <button class="login">로그인/가입</button>
               <button class="produce pl-2 pr-2" @click="editor()"> 케찹 제작하기</button>
            </b-navbar-nav>
        </b-navbar>
  </div>
</template>

<script>
export default {
     methods: {
        editor(){
            this.$router.push('/editor')
        }

     }
 }
</script>

<style>

</style>