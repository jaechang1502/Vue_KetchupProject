<template>
  <div>
 
       <b-input-group class="mb-3">
            <b-input-group-prepend is-text="is-text">
                <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input  placeholder="캐릭터검색" class="total_search"></b-form-input>
        </b-input-group>
        <div>
             <b-skeleton-img></b-skeleton-img>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>