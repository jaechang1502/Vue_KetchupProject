<template>
    <div class="page">
        <TopMenu></TopMenu>
        <div class="Container d-flex w-100">
            <!-- 왼쪽 사이드 메뉴 컴포넌트 -->
          <sideMenu/>
           <!-- 에디터  -->
            <div class="imageEditorApp">
                <tui-image-editor ref="editor" :include-ui="useDefaultUI" :options="options"></tui-image-editor>
            </div>
            <!-- 오른쪽 사이드바 컴포넌트 -->
            <RightMenu/>
        <!-- 오른쪽 사이드바끝 -->
        </div>
    </div>
</template>
<script>
    import {ImageEditor} from "@toast-ui/vue-image-editor";
    import TopMenu from './TopMenu.vue';
    import SideMenu from './SideMenu.vue';
    import RightMenu from './RightMenu.vue';

    export default {
        name: "home",
        components: {
            TopMenu,
            SideMenu,
            RightMenu,
            "tui-image-editor": ImageEditor
        },
        data() {
            return {
                useDefaultUI: true,
                options: {
                    cssMaxWidth: window.innerWidth,
                    cssHeight: window.innerHeight,
                    includeUI: {
                       
                    },
                    initMenu: "filter"
                }
            };
        },
        methods: {
            cropMode() {
                const drawingMode = this
                    .$refs
                    .editor
                    .invoke("getDrawingMode");
                if (drawingMode == "CROPPER") {
                    this
                        .$refs
                        .editor
                        .invoke("startDrawingMode", "FREE_DRAWING");
                } else {
                    this
                        .$refs
                        .editor
                        .invoke("startDrawingMode", "CROPPER");
                }
            }
        }
    };
</script>
<style scoped="scoped">
    .imageEditorApp {
        width: 95vw;
        height: 93vh;
    }
</style>