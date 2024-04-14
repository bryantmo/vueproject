<template>
    <div class="person">
        <!-- 
            v-bind:value 可以简写成 :value，单向绑定：一个属性数据，从数据流向页面，不能从页面流向数据；
            改为
            v-model:value 可以简写成 v-model
        -->
        姓：<input type="text" v-model="firstname"> <br>
        名：<input type="text" v-model="lastname"> <br>
        <!-- 全名：<span>{{ fullName }}</span><br>
        全名：<span>不计算-{{ fullName }}</span><br>
        全名：<span>不计算-{{ fullName }}</span><br> -->
        <!-- <button @click="changeFullName">修改fullname为lishi</button><br> -->
        全名fullName: <span>{{ fullName2 }}</span><br>
        <button @click="changeFullName2">修改fullname2为lishi</button><br>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script setup name="Person" lang="ts">
    import {computed, ref} from 'vue'

    let firstname=  ref('张')
    let lastname = ref('三')

    // computed:只计算一次，哪怕多出调用，都会有缓存取出来；而方法function必须显式调用多次
    // let fullName = computed(()=>{
    //     // 计算，默认是可读的
    //     console.log('计算',1, fullName)
    //     return firstname.value.slice(0,1).toUpperCase + firstname.value.slice(1) + '-' + lastname.value
    // })

    // computed：此时是一个计算属性，可读可写
    let fullName2 = computed({
        get(){
            console.log('计算get', fullName2)
            // return firstname.value.slice(0,1).toUpperCase + firstname.value.slice(1) + '-' + lastname.value
            return firstname + '-' + lastname
        },
        set(val) {
            console.log('计算set', val)
            const[str1, str2] = val.split('-')
            firstname.value = str1
            lastname.value = str2
        }
    })

    function changeFullName() {
        //验证了computed value is readonly，不能改
        // return fullName.value = 'li-shi'
    }

    function changeFullName2() {
        //验证了computed 可读写，只是引起了setter的调用，但页面数据没有改
        fullName2.value = 'li-shi'
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