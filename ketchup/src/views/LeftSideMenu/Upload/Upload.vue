<template>
  <div>
    <b-button class="w-100 mb-2" style="background-color: #ff7800"> 내 파일 업로드</b-button>
    <b-input-group class="mb-3">
            <b-input-group-prepend is-text="is-text">
                <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input v-model="text" placeholder="통합검색" class="total_search"></b-form-input>
        </b-input-group>
        <div>
          <!---내일할것--->
        </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>