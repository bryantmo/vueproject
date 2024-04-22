<template>
    <div class="person">
        <h1>名字：{person.name}</h1>
        <h2>年龄：{person.age}</h2>
        <h2>第一部车：{person.car.c1}</h2>
        <h2>第二部车：{person.car.c2}</h2>
        <button @click="changePersonName">修改名字</button>
        <button @click="changePersonAge">修改年龄</button>
        <button @click="changePersonCar1">修改第一部车子</button>
        <button @click="changePersonCar2">修改第二部车子</button>
        <button @click="changePersonCars">修改全部车子</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script setup name="Person" lang="ts">
    import {reactive} from 'vue'

    // 数据
    let person = reactive({
        name:"张三",
        age:18,
        car:{
            c1:'BMM',
            c2:'保时捷'
        }
    })

    // 方法列表
    function changePersonName() {
        person.name += "修改了名字"
    }
    function changePersonAge() {
        person.age += 1
    }
    function changePersonCar1() {
        person.car.c1 += "五菱宏光"
    }
    function changePersonCar2() {
        person.car.c1 += "小米su7"
    }
    function changePersonCars() {
        person.car = {
            c1:"五菱宏光",
            c2:"小米su7"
        }
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
    li{
        font-size: 20px;
    }
</style>