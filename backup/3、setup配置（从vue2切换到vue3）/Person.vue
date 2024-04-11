<template>
    <div class="person">
        <!-- <h2>姓名：{{a}}</h2>
        <h2>年龄：{{b}}</h2> -->
        <h2>姓名：{{age}}</h2>
        <h2>年龄：{{name}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
    // 以下是vue3的语法
    export default {
        name: 'Person',
        beforeCreate() {
            console.log('beforeCreate')
        },
        setup() {

            console.log('setup')
            console.log('@@',this); //this是不存在的,undefined,vue3弱化了this的使用

            //数据（选项式，非响应式，此时的name、age、tel都不是响应式）
            let name = '张三'
            let age = 19
            let tel = 188193523434

            // 注释-方法
            function changeName() {
                console.log('@name', name)
                name = 'zhang-san'
            }
            function changeAge() {
                console.log('@age', age)
                age += 235
            }            
            function showTel() {
                alert(tel)
            }

            // 把数据、方法都交出去
            return {name, age, tel, changeName, changeAge, showTel}

            // return {name, age}
            // return {a:name, b:age}
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
</style>