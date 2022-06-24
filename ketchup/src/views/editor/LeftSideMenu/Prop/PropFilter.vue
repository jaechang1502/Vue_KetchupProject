<template>
  <div class="p-3">
    <div class="image_edit d-flex justify-content-between border-bottom">
      <div class="pb-2 prop_edit" @click="$store.commit('editmenu', 0)">정렬</div>
      <div class="pb-2 prop_edit" @click="$store.commit('editmenu', 1)">순서</div>
      <div class="pb-2 prop_edit" @click="$store.commit('editmenu', 2)">반전</div>
      <div class="pb-2 prop_edit" @click="$store.commit('editmenu', 3)">자르기</div>
      <div class="pb-2 prop_edit" @click="$store.commit('editmenu', 4)">복사</div>
    </div>
    <div class="mt-5 p-4 editcon" v-if="editmenu == 0">
      <div class="d-flex justify-content-between mb-5">
        <button class="editbutton">
          <b-icon icon="align-start"></b-icon> 왼쪽
        </button>
        <button class="editbutton">
          <b-icon icon="align-top"></b-icon> 상단
        </button>
      </div>
      <div class="d-flex justify-content-between mb-5">
        <button class="editbutton">
          <b-icon icon="align-middle"></b-icon> 가운데
        </button>
        <button class="editbutton">
          <b-icon icon="align-center"></b-icon> 중간
        </button>
      </div>
      <div class="d-flex justify-content-between mb-5">
        <button class="editbutton">
          <b-icon icon="align-end"></b-icon> 오른쪽
        </button>
        <button class="editbutton">
          <b-icon icon="align-bottom"></b-icon> 하단
        </button>
      </div>
    </div>

    <div class="mt-5 p-4 editcon" v-if="editmenu == 1">
    <div class="d-flex justify-content-between mb-5">
      <button class="editbutton">앞으로</button>
      <button class="editbutton">뒤로</button>
    </div>
      <div class="d-flex justify-content-between mb-5">
        <button class="editbutton">맨 앞으로</button>
        <button class="editbutton">맨 뒤로</button>
      </div>
    </div>

    <div class="mt-5 p-4 editcon" v-if="editmenu == 2">
       <div class="d-flex justify-content-between mb-5">
        <button class="editbutton">좌우 반전</button>
        <button class="editbutton">상하 반전</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      editmenu: state => state.mainStore.editmenu
    }),
  },


}
</script>

<style>
</style>