<template>
    <!-- html 结构 -->
    <div class="app2">
        <h1>hello vue</h1>
        <Person></Person>
    </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue'
    // JS/TS
    export default {
        name:'App bryant', //组件名
        components:{Person} //注册组件
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