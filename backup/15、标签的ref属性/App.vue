<template>
    <!-- html 标签 -->
    <h2 class="person" ref="title2">你和</h2>
    <button @click="showLog">点我输出App组件的h2元素</button>
    <!-- 组件 标签 -->
    <Person ref="ren"></Person>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {ref} from 'vue'

    let title2 = ref()
    let ren = ref()

    function showLog() {
        console.log("App组件:", title2.value)
        console.log("ref加到组件标签里:",ren.value)
    }
</script>

<style>
    .app2 {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 90px;
        padding: 20px;
    }
</style>