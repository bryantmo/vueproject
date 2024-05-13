<template>
    <!-- html 标签 -->
    <Person v-if="isShow"></Person>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'

    import {onMounted, ref} from 'vue'

    let isShow = ref(true)


    // 挂载完毕
    onMounted(()=>{
        console.log('父组件---挂载完毕')
    })

</script>

<style>
    .app2 {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 90px;
        padding: 20px;
    }
</style>