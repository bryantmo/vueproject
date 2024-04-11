<template>
    <!-- div样式模板，不需要使用.value，但是js里面要使用.value进行操作 -->
    <div class="person">
        <h2>姓名：{{age}}</h2>
        <h2>年龄：{{name}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- 这个必要，对vue3来说，有2个<script> api，
   - 一个负责配置组合式api的
   - 一个配置组件名字的
-->
<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<!-- 语法糖：自动return 只要关注数据、方法即可
            - 前：<script lang="ts">
            - 后：<script setup lang="ts">
-->
<script setup name="Person" lang="ts">

    // 引入ref
    import {ref} from 'vue'

    let age =ref(666)
    let name = ref('张三')
    let tel = ref('110')


    console.log('age', age)
    console.log('name', name)
    console.log('tel', tel)

    // 注释-方法
    function changeName() {
        name.value = 'zhang-san'
        console.log('@name', name)
    }
    function changeAge() {
        age.value += 235
        console.log('@age', age)
    }            
    function showTel() {
        alert(tel.value)
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