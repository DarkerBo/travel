export default {
    changeCity (state,city) {
        state.city = city
        try {
            localStorage.city = city
        } catch(error) {
            console.error('本地存储数据出错！')
        }
    }
}

