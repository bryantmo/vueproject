<template>
    <div class="person">
        <h1>情况1：监视【ref】的基本类型</h1>
        <h2>当前求和为:{{sum }}</h2>
        <button @click="changeSum">点我sum++</button><br>

        <h1>情况2：监视【ref】的对象类型</h1>
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
   
    import {ref, watch} from 'vue'

    // ref-基础数据
    let sum = ref(10)

    function changeSum() {
        sum.value++
    }

    // 监听了sum基础数据
    const stopwatch = watch(sum, (newVal, oldVal) => {
        // 回调函数
        console.log('newVal=', newVal, ', oldVal=', oldVal)
        if (newVal >= 20) {
            //将watch监听器赋值给一个变量，在取消监听的时候调用此变量即可
            stopwatch()
        }
    }) 

    // ref-对象类型
    let car = ref({brand:'BBM',price:100})


    function changeBrand() {
        // 改变对象属性
        car.value.brand += '五菱宏光'
    }

    function changePrice() {
        // 改变对象属性
        car.value.price += 1000
    }

    function changeCar() {
        // 地址值会变化
        car.value = {brand:'xiaomi su7', price:29.9}
    }

    // 监听了car对象,此时监听的是对象的地址值，如果要监听对象内部属性，要手动开启深度监视
    watch(car, (newVal, oldVal)=>{
        console.log('非深度监视，改对象值时才触发：car has changed: newVal = ', newVal, ', oldVal = ', oldVal)
    })

    watch(car, (newVal, oldVal)=>{
        console.log('深度监视，改对象值时才触发：car has changed: newVal = ', newVal, ', oldVal = ', oldVal)
    }, 
    // 配置项
    {
        deep:true, 
        // 一上来就出发回调函数的执行
        immediate:true
    })
/**
 * 对象没变时，地址值一样；
    当修改属性时，监听器拿到的newVal, oldVal都是同个对象，并且是修改后的对象；
    当修改对象时，监听器拿到的newVal, oldVal是不同个对象
 */

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