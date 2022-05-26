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
            <b-form-input type="email" ></b-form-input>
        </div>
        <div class="mt-4">
            <p>비밀번호</p>
            <b-form-input  type="password"></b-form-input>
        </div>
        <div class="mt-4">
            <p>비밀번호 확인</p>
            <b-form-input  type="password"></b-form-input>
        </div>
     </b-form>
    </div>
    <mainbottom></mainbottom>
  </div>
</template>

<script>
import mainhead from '../MainHead.vue'
import mainbottom from '../MainBottom.vue'
export default {
    components: {
        mainhead,
        mainbottom,
    }

}
</script>

<style>

</style>