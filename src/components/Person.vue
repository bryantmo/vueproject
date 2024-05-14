<template>
    <div class="person">
        <h2>当前求和为：{{sum}}</h2>
        <button @click="add">点我sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index">
        <button @click="getDog">再来一只小狗</button>
    </div>
</template>

<script setup name="Person" lang="ts">
    import {ref, onBeforeMount, onMounted,
        onBeforeUpdate, onUpdated,
        onBeforeUnmount, onUnmounted, reactive} from 'vue'
    import axios from 'axios'

    //数据
    let sum = ref(0)
    let dogList = reactive([
        'https://images.dog.ceo//breeds//pembroke//n02113023_9001.jpg',
        'https://images.dog.ceo//breeds//pembroke//n02113023_4611.jpg'
    ])

    // 方法
    function add() {
        sum.value += 1
    }

    // 方法
    async function getDog() {
        let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        console.log(result.data)
        dogList.push(result.data.message)
    }

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

    img {
        /* width: 100px; */
        height: 100px;
        margin-left: 10px;
    }
</style>