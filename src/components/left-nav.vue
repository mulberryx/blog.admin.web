<template>
<div class="left-nav">
    <el-menu
        default-active="home"
        class="left-nav-menu"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="home">
            <router-link to="/" slot="title"><i class="el-icon-share"></i>首页</router-link>
        </el-menu-item>
        <el-submenu index="user">
            <template slot="title">
                <i class="el-icon-star-off"></i>
                <span>用户管理</span>
            </template>
            <el-menu-item index="user-list"><router-link to="/user-list">查询</router-link></el-menu-item>
            <el-menu-item index="user-save"><router-link to="/user-save">新建 / 编辑</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="content">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span>内容管理</span>
            </template>
            <el-menu-item index="content-list"><router-link to="/content-list">查询</router-link></el-menu-item>
            <el-menu-item index="content-save"><router-link to="/content-save">新建 / 编辑</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="tag">
            <template slot="title">
                <i class="el-icon-news"></i>
                <span>标签管理</span>
            </template>
            <el-menu-item index="tag-list"><router-link to="/tag-list">查询</router-link></el-menu-item>
            <el-menu-item index="tag-save"><router-link to="/tag-save">新建 / 编辑</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="journal">
            <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>日志管理</span>
            </template>
            <el-menu-item index="journal-list"><router-link to="/journal-list">查询</router-link></el-menu-item>
            <el-menu-item index="journal-save"><router-link to="/journal-save">新建 / 编辑</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="plan">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>计划管理</span>
            </template>
            <el-menu-item index="plan-list"><router-link to="/plan-list">查询</router-link></el-menu-item>
            <el-menu-item index="plan-save"><router-link to="/plan-excute">新建 / 编辑</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="scan">
            <template slot="title">
                <i class="el-icon-search"></i>
                <span>扫描</span>
            </template>
            <el-menu-item index="scan-list"><router-link to="/scan-list">结果查询</router-link></el-menu-item>
            <el-menu-item index="scan-excute"><router-link to="/scan-excute">运行</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="spider">
            <template slot="title">
                <i class="el-icon-view"></i>
                <span>爬虫</span>
            </template>
            <el-menu-item index="spider-list"><router-link to="/home">结果查询</router-link></el-menu-item>
            <el-menu-item index="spider-excute"><router-link to="/home">运行</router-link></el-menu-item>
        </el-submenu>
    </el-menu>
</div>
</template>
<style lang="scss" scoped>
.left-nav {
    position: absolute;
    top: 48px;
    bottom: 0;
    width: 260px;
    margin: 0;

    .left-nav-menu {
        height: 100%;
    }

    i {
        vertical-align: -2px;
        color: #6b4f9a;
    }
}
</style>
<script>
export default {
}
</script>
