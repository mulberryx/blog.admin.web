<template>
<div class="wrapper">
    <div class="header">
        <h4 class="title">数据后台</h4>
    </div>
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
    <div class="main">
        <router-view />
    </div>
</div>
</template>

<style lang="scss">
.wrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    .el-menu {
        background-color: transparent;

        .el-menu-item {
            color: #fff;

            a {
                color: #fff;
                text-decoration: none;
                width: 100%;
                height: 100%;
                display: block;
            }

            &.is-active {
                color: #409EFF;

                a {
                    color: #409EFF;
                }
            }
        }

        .el-submenu__title {
            color: #fff;

            &.is-active {
                color: #409EFF;
            }

            i {
                color: #fff;
            }

            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }

    .header {
        height: 48px;
        width: 100%;
        background-color: rgba(64, 158, 255, 0.1);

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
        top: 48px;
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

// 全局公共样式
.view {
    padding: 15px 10px;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
}

.el-pagination {
    margin: 15px 0 0 0;
}
</style>
