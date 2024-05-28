<template>
    <div class="app">
        <h2>Vue路由测试</h2>
        <!--导航区-->
        <div class="navigate">
            <RouterLink to="/home" active-class="xiaozhupeiqi">首页</RouterLink>
            <RouterLink to="/news" active-class="xiaozhupeiqi">新闻</RouterLink>
            <RouterLink to="/about" active-class="xiaozhupeiqi">关于</RouterLink>
        </div>
        <!--展示区-->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
    import { RouterView, RouterLink } from 'vue-router';
    // RouterLink是组件，内置属性 active-class 
</script>

<style>
    .title {
        text-align: center;
        word-spacing: 5px;
        margin: 30px 0;
        height: 70px;
        line-height: 70px;
        background-image: linear-gradient(45deg, gray, white);
        border-radius: 10px;
        box-shadow: 0 0 2px;
    }
    .app2 {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 90px;
        padding: 20px;
    }
    .navigate {
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    }
    .navigate a {
        display: block;
        text-align: center;
        width: 90px;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        background-color: gray;
        text-decoration: none;
        color: white;
        font-size: 18px;
        letter-spacing: 5px;
    }
    .navigate a.xiaozhupeiqi {
        background-color: #64967E;
        color: #64967E;
        font-weight: 900;
        text-shadow: 0 0 1px black;
        font-family: 'Courier New', Courier, monospace;
    }
    .main-content {
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 10px;
        width: 90%;
        height: 400px;
        border: 1px solid;
    }
</style>