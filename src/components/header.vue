<template>
<div class="header">
    <h4 class="title">数据后台</h4>
    <image class="avatar" src="javascript:;" />
    <a class="link__login-out" href="javascript:;">登出</a>
</div>
</template>
<style lang="scss" scoped>
.header {
    height: 48px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    .title {
        margin: 0;
        color: #9972dc;
        line-height: 48px;
        padding: 0 20px;
        float: left;
    }

    .avatar {
        float: right;
        height: 30px;
        width: 30px;
        background: #fff;
        border-radius: 100%;
        display: block;
    }

    .link__login-out {
        margin: 10px 15px 0 0;
        float: right;
    }
}
</style>
<script>
export default {
}
</script>
