<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities = "cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet  from './components/Alphabet'

export default {
    name: 'City',
    data () {
        return {
            cities: {},
            hotCities: []
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },

    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then(this.getCityInfoSucc)
        },

        getCityInfoSucc (res) {
            res = res.data
            if(res.ret && res.data){
                this.cities = res.data.cities
                this.hotCities = res.data.hotCities
            }
        }
    },

    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>