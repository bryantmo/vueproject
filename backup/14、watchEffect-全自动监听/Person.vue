<template>
    <div class="person">
        <h1>水温超过60度，水位过80cm时，给服务器发请求</h1>
        <h2>水温：{{ temperature }} 度</h2>
        <h2>高度：{{ height }} cm</h2>
        <button @click="changeTemperature">修改水温+10</button>
        <button @click="changeHeight">修改高度+10</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script setup name="Person" lang="ts">
    import {ref, reactive, watch, watchEffect} from 'vue'

    // 数据
    let temperature = ref(10)
    let height = ref(10)

    // 方法列表
    function changeTemperature() {
        temperature.value += 10
    }
    function changeHeight() {
        height.value += 10
    }

    // 监听多个数据：用[]装起来多个函数式方法
    watch([()=>temperature, ()=>height], (oldVal, newVal)=>{
        console.log("同时监听多个数据：temperature，height，函数式，深度",oldVal, newVal)
    }, {deep:true})

    // 监听最新的值，要告诉watch，监听哪些元素
    watch([temperature, height], (value) => {
        console.log("最新的水温和水位=", value)
        let [newTemp, newHeight] = value
        if (newTemp >= 60 || newHeight >= 80) {
            console.log("告警：", newTemp, newHeight)
        }
    })

    // 如果是监视7个数据，那就只能填7个参数，非常麻烦，所以引出了watchEffect，不用告诉watchEffect
    watchEffect(()=>{
        // 直接写条件即可，这个方法会在两个参数被改动时，自动执行，能省事很多
        if(temperature.value >= 60 || height.value >=80) {
            console.log("给服务端发情期")
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