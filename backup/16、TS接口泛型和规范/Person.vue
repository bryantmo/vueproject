<template>
    <div class="person">
        ???
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script setup name="Person" lang="ts">
    import {type PersonInter} from '@/types'

    let person:PersonInter = {id:'11', name:'11111', age:124}

    // 手动指定一个Array和泛型
    let persons:Array<PersonInter> = [
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12} 
    ]

    // 引用自定义类型
    let persons2:PersonInterList = [
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12} 
    ]

    let persons3:PersonInters = [
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12},
        {id:'11', name:'11111', age:12} 
    ]
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