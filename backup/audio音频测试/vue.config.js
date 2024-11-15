import { defineConfig } from "vite";

export default defineConfig({
    devServer:{
        proxy:"http://localhost:11444/hunyuan/get_voice_by_id"  //跨域请求处理
      }
})