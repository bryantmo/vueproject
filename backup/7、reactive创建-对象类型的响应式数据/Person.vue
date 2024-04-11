<template>
    <div class="person">
        <!--赋值-->
        <h2>一辆{{car.brand}}车，价值{{car.price}}</h2>
        <button @click="changePrice">修改汽车价格</button>
     
        <h2>一辆{{new_energy.brand}}新能源车，价值{{new_energy.price}}</h2>
        <button @click="changeNewEnergyCarPrice">修改新能源汽车价格</button>

        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="g in games" :key="g.id">
                {{g.name}}
            </li>
        </ul>

        <button @click="changeGameName">修改第一个游戏名字</button>

        <hr>
        <h2>深层次对象数据修改 {{obj.a.b.c}}</h2>
        <button @click="changeDeepJson">测试深层次对象数据修改</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script setup name="Person" lang="ts">
    // 引入
    import {reactive} from 'vue'

    // 对象数据
    let car = {brand:'奔驰', price:100} // 静态数据
    let new_energy = reactive({brand:'小米su7', price:29.9}) // 响应式对象数据

    // 数组数据
    let games = reactive([
        {id:'adfasf1', name:'王者'},
        {id:'adfasf2', name:'王者2'},
        {id:'adfasf3', name:'王者3'}
    ])

    // 深层次对象数据
    let obj = reactive(
        {
        a:{
            b:{
                c:1000
            }
        }
    }
    )

    // 方法
    function changePrice () {
        car.price += 10
        console.log("car.price = ", car.price) // 这里在控制台看，是有改变的，按键生效，但是页面上数据没有变
    }

    function changeNewEnergyCarPrice() {
        new_energy.price += 100
        console.log(new_energy)
        console.log("new_energy.price = ", new_energy.price) // 这里在控制台看，是有改变的，按键生效，但是页面上数据没有变
    }

    function changeGameName() {
        games[0].name = '流星蝴蝶剑' // 如果要体现在页面，就要包起来
    }

    function changeDeepJson() {
        obj.a.b.c = 99999999
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