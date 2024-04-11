<template>
    <div class="person">
        <h2>姓名：{{age}}</h2>
        <h2>年龄：{{name}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- 这个必要 -->
<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<!-- 语法糖：自动return 只要关注数据、方法即可；为了让开发更舒服
            - 前：<script lang="ts">
            - 后：<script setup lang="ts">
-->
<script setup lang="ts">
    let age = 666
    let name = '8888'
    let tel = '110'

    // 注释-方法
    function changeName() {
        console.log('@name', name)
        name = 'zhang-san'
    }
    function changeAge() {
        console.log('@age', age)
        age += 235
    }            
    function showTel() {
        alert(tel)
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0 5px;
    }
</style>