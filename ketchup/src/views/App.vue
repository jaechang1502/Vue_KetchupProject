<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                path: this.$route && this.$route.path
            };
        },
        watch: {
            $route(route) {
                this.path = route.path;
            }
        }
    };
</script>
<style>
    
</style>