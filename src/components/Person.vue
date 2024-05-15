<template>
    <div class="person">
        <h2>当前求和为：{{sum}}, 放大10倍后：{{ bigSum }}</h2>
        <button @click="add">点我sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index">
        <button @click="getDog">再来一只小狗</button>
    </div>
</template>

<script setup name="Person" lang="ts">
    // import {ref, onBeforeMount, onMounted,
    //     onBeforeUpdate, onUpdated,
    //     onBeforeUnmount, onUnmounted, reactive} from 'vue'
    // import axios from 'axios'

    // //数据1 - 加法数据
    // let sum = ref(0)

    // //数据2 - 狗图片数据
    // let dogList = reactive([
    //     'https://images.dog.ceo//breeds//pembroke//n02113023_9001.jpg',
    //     'https://images.dog.ceo//breeds//pembroke//n02113023_4611.jpg'
    // ])

    // // 方法1-加法
    // function add() {
    //     sum.value += 1
    // }

    // // 方法2-取狗图片
    // async function getDog() {
    //     let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    //     console.log(result.data)
    //     dogList.push(result.data.message)
    // }

    // vue3：数据和方法，应该在一起
    // hook命名规范：useXXX，比如，useDog/useTeachers


    // 以下是通过hook来优化上述代码
    import useDog from '@/hooks/useDog'
    import useSum from '@/hooks/useSum'

    // 写跟sum相关的人，只需要维护这个useSum的钩子即可
    const {sum, add, bigSum} = useSum() 
    // 写跟dog相关的人，只需要维护这个useDog的钩子即可
    const {dogList, getDog} = useDog()

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