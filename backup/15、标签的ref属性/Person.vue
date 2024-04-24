<template>
    <div class="person">
        <h1>中国</h1>

        <h2 ref="title2">深圳</h2>

        <h3>腾讯</h3>

        <button @click="showLog">点我输出h2元素</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script setup name="Person" lang="ts">
    import {ref, defineExpose} from 'vue'

    // 创建一个title2，用于存储ref标记内容
    let title2 = ref()
   
    function showLog() {
        console.log("Person组件:", title2.value)
    }


    // 声明一些数据
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    // 定义对外显示的数据 exposed instance properties when it is accessed by a parent component via template refs.
    defineExpose({a,b,c})
</script>

<!-- 局部样式 ,下面所有的选择器，只能选中以上的所有东西-->
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
    li{
        font-size: 20px;
    }
</style>