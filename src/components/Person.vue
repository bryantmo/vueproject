<template>
    <div class="person">
        <h2>当前求和为：{{sum}}</h2>
        <button @click="add">点我sum+1</button>
    </div>
</template>

<script setup name="Person" lang="ts">
    import {ref, onBeforeMount, onMounted,
        onBeforeUpdate, onUpdated,
        onBeforeUnmount, onUnmounted} from 'vue'

    //数据
    let sum = ref(0)

    // 方法
    function add() {
        sum.value += 1
    }

    // 生命周期 - 创建； beforeCreate created => 被setup函数取代
    console.log("创建好子组件...")

    // 生命周期 - 挂载：onBeforeMount, onBeforeUpdate
    onBeforeMount(() => {
        console.log("子挂载前函数，手动调用一次onBeforeMount，是vue合适的时候调用的")
    })

    onMounted(() => {
        console.log("子挂载完毕函数")
    })

    // 生命周期 - 更新：onBeforeUpdate, onUpdated
    onBeforeUpdate(() => {
        console.log("子更新前")
    })

    onUpdated(() => {
        console.log("子更新完毕")
    })

    // 生命周期 - 卸载：
    onBeforeUnmount(() => {
        console.log("子卸载前")
    })

    onUnmounted(() => {
        console.log("子卸载完毕")
    })

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