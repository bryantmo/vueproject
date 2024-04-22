<template>
    <div class="person">
        <h1>名字：{{ person.name }}</h1>
        <h2>年龄：{{ person.age }}</h2>
        <h2>第一部车：{{ person.car.c1 }}</h2>
        <h2>第二部车：{{ person.car.c2 }}</h2>
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
    import {reactive, watch} from 'vue'

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
        person.car.c2 += "小米su7"
    }
    function changePersonCars() {
        person.car = {
            c1:"五菱宏光",
            c2:"小米su7"
        }
    }

    // 监听，这里要写一个匿名方法
    watch(()=>{return person.car.c1}, (oldVal, newVal)=>{
        console.log("监听了person.car.c1",oldVal, newVal)
    })

    // 同理，监听响应式对象的某个属性，该属性是基本类型的，要改成函数式
    watch(()=>{return person.car.c2},  (oldVal, newVal)=>{
        console.log("监听了person.car.c2",oldVal, newVal)
    })

    watch(()=>{return person.name},  (oldVal, newVal)=>{
        console.log("监听了person.name",oldVal, newVal)
    })

    watch(()=>{return person.age},  (oldVal, newVal)=>{
        console.log("监听了person.age",oldVal, newVal)
    })

    // 同理，监听对象类型，区分函数式监听和对象监听
    watch(person.car,  (oldVal, newVal)=>{
        console.log("监听了person.car",oldVal, newVal)
    }) // 细枝末节可以，但是整体不行
    watch(()=>{return person.car},  (oldVal, newVal)=>{
        console.log("监听了person.car，函数式",oldVal, newVal)
    }) // 细枝末节不可以，但是整体行

    // 细枝末节可以，但是整体行
    watch(()=>person.car,  (oldVal, newVal)=>{
        console.log("监听了person.car，函数式，深度",oldVal, newVal)
    }, {deep:true})

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