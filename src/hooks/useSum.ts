import {ref, onBeforeMount, onMounted,
    onBeforeUpdate, onUpdated,
    onBeforeUnmount, onUnmounted, reactive, computed} from 'vue'
import axios from 'axios'

export default function sum() {

    //数据1 - 加法数据
    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 10
    })

    // 方法1-加法
    function add() {
        sum.value += 1
    }

    onMounted(() => {
        add()
        add()
    })

    // 向外提供东西，别人在使用的时候，得到一个sum和add方法
    return {sum, add, bigSum}
}