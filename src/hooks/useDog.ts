import {
    ref, onBeforeMount, onMounted,
    onBeforeUpdate, onUpdated,
    onBeforeUnmount, onUnmounted, reactive
} from 'vue'
import axios from 'axios'

/**
 * Hook不仅仅能写钩子和方法，还能写生命周期
 * @returns 
 */

// 暴露一个方法
export default function qwe() {
    // 数据2 - 狗图片数据
    let dogList = reactive([
        'https://images.dog.ceo//breeds//pembroke//n02113023_9001.jpg',
        'https://images.dog.ceo//breeds//pembroke//n02113023_4611.jpg'
    ])

    // 方法2-取狗图片
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log(result.data)
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }

    }

    onMounted(() => {
        getDog()
    })

    // 向外提供东西
    return { dogList, getDog }
}