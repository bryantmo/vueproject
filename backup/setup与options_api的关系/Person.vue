<template>
    <div class="person">
        <!-- <h2>姓名：{{a}}</h2>
        <h2>年龄：{{b}}</h2> -->
        <h2>姓名：{{age}}</h2>
        <h2>年龄：{{name}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <hr>
        <h2>测试1-vue2的data()兼容 a ={{a}}</h2>
        <h2>测试1-vue2的data()兼容 c ={{c}}</h2>
        <button @click="b">测试2-vue2的method()兼容</button>
    </div>
</template>

<script lang="ts">
   
    export default {
        name: 'Person',
        // 以下是vue3对vue2的语法兼容
        data() {
            return {
                a:100,
                c:this.name, 
                d:900
            }
        },
        methods: {
            b() {
                console.log('b')
            }
        }
        ,
        // 以下是vue3的语法
        setup() {

            console.log('setup')

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

            // 把数据、方法都交出去，模板才能使用
            return {name, age, tel, changeName, changeAge, showTel}
            // return {name, age}
            // return {a:name, b:age}\

            // setup返回值也可以是一个渲染函数
            // return ()=> 'hahaha' // 箭头函数
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