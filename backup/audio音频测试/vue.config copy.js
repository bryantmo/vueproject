import { defineConfig } from "vite";

export default defineConfig({
    devServer:{
        proxy: {
          "/api":{
            //请求地址
            target: "http://localhost:11444/hunyuan", // 当我们发送请求时的URL中有/api时，会将在/api前面的路径替换成target的值。
            changeOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          } 
        }
      }
})