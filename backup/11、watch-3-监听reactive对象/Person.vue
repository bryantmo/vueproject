<template>
    <div class="person">

        <h1>情况2：监视【reactive】的对象类型</h1>
        <h2>牌子：{{ car.brand }}</h2>
        <h2>价格：{{ car.price }}</h2>
        <button @click="changeBrand">修改牌子</button>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改整部车</button>

    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script setup name="Person" lang="ts">
   
    import {reactive, watch} from 'vue'

    // reactive-对象类型，vue官方规定：对象不能整体修改
    let car = reactive({brand:'BBM',price:100})


    function changeBrand() {
        // 改变对象属性
        car.brand += '五菱宏光'
    }

    function changePrice() {
        // 改变对象属性
        car.price += 1000
    }

    function changeCar() {
        // 地址值会变化
        // 1/2两种办法，都不能整体修改对象
        //1- car = reactive({brand:'xiaomi su7', price:29.9})
        //2- car = ({brand:'xiaomi su7', price:29.9})
        //3- car：批量替换了car的属性，而没有替换掉整个对象
        Object.assign(car, {brand:'xiaomi su7', price:29.9})
    }

    // 监听了car对象，由于是reactive,此时监听是默认开启深度监视的，且无法关闭
    watch(car, (newVal, oldVal)=>{
        console.log(car)
        console.log('非深度监视，改对象值时才触发：car has changed: newVal = ', newVal, ', oldVal = ', oldVal)
    })

    // 监听reactive时，拿到的都是同一个对象，只是在原来对象里面，更新了属性而已

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