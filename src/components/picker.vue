<style lang="scss" scoped="">
    @import "./../css/base";
    .lm-pick-box{
        width: 100%;
        // height: 3rem;
        position: fixed;
        bottom: 0;
        background-color: #eee;
        .title{
            padding: 0.04rem;
            @include inline(2)
        }
        .lm-pick-roll{
            -webkit-mask: -webkit-linear-gradient(bottom, #debb47 50%, rgba(36, 142, 36, 0));
            .lm-pick-roll-linear{
                -webkit-mask: -webkit-linear-gradient(top, #debb47 50%, rgba(36, 142, 36, 0));
                display: flex;
                position: relative;
                .wrapper{
                    flex: 1;
                    height: 1.5rem;
                    text-align: center;
                }
                .wrapper>ul>li{
                    line-height: 0.3rem;
                    height: 0.3rem;
                    display: block;
                }
                .wrapper>ul{
                    padding: 0.6rem 0;
                }
                .chose-one{
                    position: absolute;
                    top:0.6rem;
                    width: 100%;
                    height: 0.3rem;
                    border-top: 1px solid #333;
                    border-bottom: 1px solid #333;
                    pointer-events: none;
                }
            }
        }
    }
</style>
<template>
    <div class="lm-pick-box">
        <div class="title">
            <btn>
                取消
            </btn>
            <span></span>
            <btn>
                确定
            </btn>
        </div>
        <div class="lm-pick-roll">
            <div class="lm-pick-roll-linear">
                <scroll class="wrapper" ref="province" @scrollOver="provinceOver">
                    <ul class="scroll1">
                        <li v-for="(province , index) in pickData">
                            {{province.name}}
                        </li>
                    </ul>
                </scroll>
                <scroll class="wrapper" ref="city" @scrollOver="cityOver">
                    <ul class="scroll2">
                        <li v-for="(city , index) in city">
                            {{city.name}}
                        </li>
                    </ul>
                </scroll>
                <scroll class="wrapper" ref="district">
                    <ul class="scroll3">
                        <li v-for="(district , index) in district">
                            {{district.name}}
                        </li>
                    </ul>
                </scroll>

                <div class="chose-one"></div>
            </div>
        </div>
    </div>
</template>
<script>
    // import scroll from './../global/lmScroll'
    import btn from './btn'
    import scroll from './scroll'
    export default {
        components: {
            btn,scroll
        },
        data(){
            return{
                province:[],
                city:[],
                district:[],
                provinceVal:0,
                cityVal:0,
                districtVal:0,
                pickData:[{
                    name:'北京市',
                    value:'1',
                    child:[
                         
                        {
                            "id": "2051",
                            "name": "延庆县",
                            "child": [
                                {
                                    "id": "2099",
                                    "name": "延庆镇"
                                },
                                {
                                    "id": "2100",
                                    "name": "永宁镇"
                                },
                                {
                                    "id": "2101",
                                    "name": "康庄镇"
                                },
                                {
                                    "id": "2102",
                                    "name": "大榆树镇"
                                },
                                {
                                    "id": "2103",
                                    "name": "井庄镇"
                                },
                                {
                                    "id": "2104",
                                    "name": "八达岭镇"
                                }
                            ]
                        },
                        {
                        "id": "2288",
                        "name": "东城区"
                        },
                        {
                            "id": "2301",
                            "name": "大兴区"
                        },
                        {
                            "id": "2300",
                            "name": "昌平区"
                        },
                        {
                            "id": "2299",
                            "name": "顺义区"
                        },
                        {
                            "id": "2298",
                            "name": "通州区"
                        },
                        {
                            "id": "2297",
                            "name": "房山区"
                        },
                        {
                            "id": "2296",
                            "name": "门头沟区"
                        },
                        {
                            "id": "2295",
                            "name": "海淀区"
                        },
                        {
                            "id": "2294",
                            "name": "石景山区"
                        },
                        {
                            "id": "2293",
                            "name": "丰台区"
                        },
                        {
                            "id": "2292",
                            "name": "朝阳区"
                        },
                        {
                            "id": "2291",
                            "name": "宣武区"
                        },
                        {
                            "id": "2290",
                            "name": "崇文区"
                        },
                        {
                            "id": "2289",
                            "name": "西城区"
                        },
                    ]
                },
                {
                    name:'北京市',
                    value:'1',
                    child:[
                         {
                        "id": "2288",
                        "name": "东城区"
                        },
                        {
                            "id": "2301",
                            "name": "大兴区"
                        },
                        {
                            "id": "2300",
                            "name": "昌平区"
                        },
                        {
                            "id": "2299",
                            "name": "顺义区"
                        },
                        {
                            "id": "2298",
                            "name": "通州区"
                        },
                        {
                            "id": "2297",
                            "name": "房山区"
                        },
                        {
                            "id": "2296",
                            "name": "门头沟区"
                        },
                        {
                            "id": "2295",
                            "name": "海淀区"
                        },
                        {
                            "id": "2294",
                            "name": "石景山区"
                        },
                        {
                            "id": "2293",
                            "name": "丰台区"
                        },
                        {
                            "id": "2292",
                            "name": "朝阳区"
                        },
                        {
                            "id": "2291",
                            "name": "宣武区"
                        },
                        {
                            "id": "2290",
                            "name": "崇文区"
                        },
                        {
                            "id": "2289",
                            "name": "西城区"
                        },
                        {
                            "id": "2051",
                            "name": "延庆县",
                            "child": [
                                {
                                    "id": "2099",
                                    "name": "延庆镇"
                                },
                                {
                                    "id": "2100",
                                    "name": "永宁镇"
                                },
                                {
                                    "id": "2101",
                                    "name": "康庄镇"
                                },
                                {
                                    "id": "2102",
                                    "name": "大榆树镇"
                                },
                                {
                                    "id": "2103",
                                    "name": "井庄镇"
                                },
                                {
                                    "id": "2104",
                                    "name": "八达岭镇"
                                }
                            ]
                        },
                    ]
                }
                ]
            }
        },
        methods:{
            provinceOver(e){
                this.provinceVal = Math.abs(e/this.$el.querySelector('.scroll1').childNodes[0].offsetHeight);
                this.setCity()
                this.setDistrict()
                console.log(1);
            },
            cityOver(e){
                this.cityVal = Math.abs(e/this.$el.querySelector('.scroll2').childNodes[0].offsetHeight);
                this.setDistrict()
            },
            setCity(){
                this.city = this.pickData[this.provinceVal].child
                this.cityVal = 0
                this.$refs.city.setPosition(0)
            },
            setDistrict(){
                this.district = this.city[this.cityVal].child
                this.districtVal = 0
                this.$refs.district.setPosition(0)
            },
        },
        mounted(){
            this.setCity()
            this.setDistrict()
        },
    }
</script>
