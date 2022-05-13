<template>
  <div class="text-center">
       <b-spinner v-if="showHideSpinner" class="mr-auto" variant="light" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
  </div>
</template>

<script>
export default {
    beforeMount(){
      this.showHideSpinner = true;  
    },
    mounted () {
    this.showHideSpinner = false;
    },
    data(){
        return{
            showHideSpinner: true
        }
    }

}
</script>

<style>

</style>