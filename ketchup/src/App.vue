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
<style lang="scss">
    body{
      background-color:#1e1e1e !important;
    }
    .btn.btn-primary,
    button {
        margin-right: 10px !important;
    }
    .button-toolbar {
        margin-bottom: 10px;
    }
    .headbar {
        background-color: #2c2a34 !important;
    }
    .subject {
        border-left: none;
        border-right: none;
        border-top: none;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #858485;
        outline: none;
        background: transparent;
        color: white;
        font-weight: 600;
    }
    .btnsub {
        border: none;
        background: transparent;
    }
    .pro{
      background: linear-gradient(90deg, rgba(250,115,12,1) 0%, rgba(183,43,172,1) 100%) !important;
    }
    .native{
      background: transparent !important;
    }
</style>