let defaultCity = '广州'
try {
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (error) {
    console.error('本地存储数据出错！')
}

export default {
    city: defaultCity
}

