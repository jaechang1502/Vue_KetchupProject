<template>
<div>
    <b-button @click="kakaoLoginBtn" variant="warning" block > <b-icon class="mr-2" icon="chat-fill"></b-icon>  카카오톡으로 로그인</b-button>
</div>
  
</template>

<script>

export default {
  name: "kakao",
  methods: {
    kakaoLoginBtn:function(){

      window.Kakao.init('f412e3a4b465f7ba967f46d709eae178') // Kakao Developers에서 요약 정보 -> JavaScript 키

      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: '/',
          success: function (response) {
            console.log(response)
          },
          fail: function (error) {
            console.log(error)
          },
        })
        window.Kakao.Auth.setAccessToken(undefined)
      }


      window.Kakao.Auth.login({
        success: function () {
          window.Kakao.API.request({
            url: '/',
            data: {
              property_keys: ["kakao_account.email"]
            },
            success: async function (response) {
              console.log(response);
            },
            fail: function (error) {
              console.log(error)
            },
          })
        },
        fail: function (error) {
          console.log(error)
        },
      })
    }
  }
}
</script>

<style>

</style>