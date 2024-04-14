<template>
    <div class="person">
        <h1>情况1：监视【ref】的基本类型</h1>
        <h2>当前求和为:{{sum }}</h2>
        <button @click="changeSum">点我sum++</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script setup name="Person" lang="ts">
   
    import {ref, watch} from 'vue'

    let sum = ref(10)

    function changeSum() {
        sum.value++
    }

    // 监听了sum
    const stopwatch = watch(sum, (newVal, oldVal) => {
        // 回调函数
        console.log('newVal=', newVal, ', oldVal=', oldVal)
        if (newVal >= 20) {
            //将watch监听器赋值给一个变量，在取消监听的时候调用此变量即可
            stopwatch()
        }
    }) 

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
    li{
        font-size: 20px;
    }
</style>