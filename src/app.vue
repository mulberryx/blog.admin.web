<template>
<div class="wrapper">
    <div class="header">
        <h4 class="title">数据后台</h4>
    </div>
    <div class="left-nav">
        <el-menu
            default-active="0"
            class="left-nav-menu"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="0">
                <i class="el-icon-share"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-star-off"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="1-1">查询</el-menu-item>
                <el-menu-item index="1-2">新建 / 编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>内容管理</span>
                </template>
                <el-menu-item index="2-1">查询</el-menu-item>
                <el-menu-item index="2-2">新建 / 编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-news"></i>
                    <span>标签管理</span>
                </template>
                <el-menu-item index="3-1">查询</el-menu-item>
                <el-menu-item index="3-2">新建 / 编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span>日志管理</span>
                </template>
                <el-menu-item index="4-1">查询</el-menu-item>
                <el-menu-item index="4-2">新建 / 编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>计划管理</span>
                </template>
                <el-menu-item index="5-1">查询</el-menu-item>
                <el-menu-item index="5-2">新建 / 编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-search"></i>
                    <span>扫描</span>
                </template>
                <el-menu-item index="6-1">结果查询</el-menu-item>
                <el-menu-item index="6-2">运行</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">
                    <i class="el-icon-view"></i>
                    <span>爬虫</span>
                </template>
                <el-menu-item index="7-1">结果查询</el-menu-item>
                <el-menu-item index="7-2">运行</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
    <div class="main">
        <router-view />
    </div>
</div>
</template>

<style lang="less" scoped>
.wrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    .header {
        height: 48px;
        width: 100%;
        border-bottom: 1px solid #e6e6e6;
        background: #5cacff;

        .title {
            margin: 0;
            color: #fff;
            line-height: 48px;
            padding: 0 20px;
            float: left;
        }
    }

    .left-nav {
        position: absolute;
        top: 49px;
        bottom: 0;
        width: 260px;
        margin: 0;

        .left-nav-menu {
            height: 100%;
        }
    }

    .main {
        position: absolute;
        left: 260px;
        top: 48px;
        right: 0;
        bottom: 0;
    }
}
</style>

<script>
export default {
    methods: {

    }
}
</script>
