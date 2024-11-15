<template>
    <div class="div">
         <!-- 使用v-bind指令绑定图片的src属性 -->
        <div>
            <img :src="imageSrc" alt="Vue Logo" height="580" width="1000">
        </div>


        <div>
            <input type="text" v-model="nameValue" placeholder="输入元素：祝福名字"/>
            <input type="text" v-model="ageValue" placeholder="输入元素：对方年龄"/>
            <input type="text" v-model="typeValue" placeholder="输入对方年龄段：1-宝宝,2-儿童,3-女孩,4-男孩,5-女士,6-男士"/>
            <input type="text" v-model="extentInfoValue" placeholder="输入元素：生成文本要求"/>
            <!-- 按钮，点击后发送请求 -->
            <button @click="createAudio">生成音频</button>
        </div>

        <div>
            <input type="text" v-model="inputValue" placeholder="输入语音id"/>
            <!-- 按钮，点击后发送请求 -->
            <button @click="fetchAudio">获取音频</button>
        </div>

        <!-- 音频播放器 -->
        <div>
            <audio  ref="myAudio1" controls>
                <source ref="audioSrc" type="audio/awv" />
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>

</template>

<script lang="ts" setup name="App">
    import { RouterView, RouterLink } from 'vue-router';
    // RouterLink是组件，内置属性 active-class 

    import { ref } from 'vue';
    import {axios} from 'axios';

    const nameValue = ref('');
    const ageValue = ref('');
    const typeValue = ref('');
    const extentInfoValue = ref('');
    
    async function createAudio() {
        try {
        // 构建请求URL hunyuan
        // const response2 = await fetch('/api/create_content_and_voice?' + 
        const response2 = await fetch('http://localhost:11444/hunyuan/create_content_and_voice?' + 
          'name='+encodeURIComponent(nameValue.value) + '&' +
          'age='+ ageValue.value  + '&' +
          'type=' + typeValue.value  + '&' +
          'extendInfo=' + encodeURIComponent(extentInfoValue.value), 
          {
            method: 'post',
            headers: {
               'Access-Control-Allow-Origin':'http://localhost:11444',
               'Access-Control-Allow-Credentials': 'true'
            }
          }
        );
        console.log("post response, ", response2);        
      } catch (error) {
        console.error('Error fetching audio:', error);
      }
    }

    const myAudio1 = ref(null);
    const audioSrc = ref(null);
    const dataString = ref('');
    const inputValue = ref('');
    const imageSrc = ref('src/asserts/pic/girl.png');
    
    async function fetchAudio() {
        try {
        // 构建请求URL
        const url = 'http://localhost:11444/hunyuan/get_voice_by_id?id='+inputValue.value;
        console.log("inputValue, ", inputValue.value);
        // 发送GET请求
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 假设后端返回的是音频文件的URL
        console.log('response => ', response);
        const readableStream = response.body;
        if (readableStream) {
          dataString.value = await streamToString(readableStream);
        }
        // 更新audioSrc的值
        myAudio1.value.src = 'data:audio/wav;base64,' + dataString.value; 
      } catch (error) {
        console.error('Error fetching audio:', error);
      }
    }

    // 反序列化语音数据
    async function streamToString(readableStream) {
        const reader = readableStream.getReader();
        let result = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += new TextDecoder().decode(value);
        }
        return result;
    }

 
</script>

<style>
    .title {
        text-align: center;
        word-spacing: 5px;
        margin: 30px 0;
        height: 70px;
        line-height: 70px;
        background-image: linear-gradient(45deg, gray, white);
        border-radius: 10px;
        box-shadow: 0 0 2px;
    }
    .app2 {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 90px;
        padding: 20px;
    }
    .navigate {
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    }
    .navigate a {
        display: block;
        text-align: center;
        width: 90px;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        background-color: gray;
        text-decoration: none;
        color: white;
        font-size: 18px;
        letter-spacing: 5px;
    }
    .navigate a.xiaozhupeiqi {
        background-color: #64967E;
        color: #64967E;
        font-weight: 900;
        text-shadow: 0 0 1px black;
        font-family: 'Courier New', Courier, monospace;
    }
    .main-content {
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 10px;
        width: 90%;
        height: 400px;
        border: 1px solid;
    }
</style>