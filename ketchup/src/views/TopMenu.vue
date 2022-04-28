<template>
        <b-navbar class="headbar" toggleable="lg" type="dark">
            <b-collapse id="nav-collapse" is-nav="is-nav">
                <b-navbar-brand to="/">
                    <img src="../assets/123.png" alt=""/></b-navbar-brand>
                <b-navbar-nav>
                    <b-button class="ml-5" style="color: white" variant="#2c2a34">
                        <img src="../assets/undo.png" alt=""/></b-button>
                    <b-button style="color: white" variant="#2c2a34">
                        <img src="../assets/redo.png" alt=""/></b-button>
                    <b-nav-form>
                        <input class="subject" type="text" placeholder="제목을 입력하세요"/>
                        <button class="btnsub" type="submit">
                            <img src="../assets/pencil.png" alt=""/>
                        </button>
                    </b-nav-form>
                </b-navbar-nav>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </b-collapse>
            <b-navbar-nav class="ml-auto">
              <b-button class="pro">💎프리미엄</b-button>
              <b-button class="native">💰선택구매</b-button>
              <b-button class="native">💾저장하기</b-button>
              <b-button class="native">📥다운로드</b-button>
              <b-button class="native"><img src="../assets/share.png" alt=""></b-button>
            </b-navbar-nav>
        </b-navbar>
</template>

<script>
export default {
    name: 'TopMenu',
    

}
</script>

<style>

</style>