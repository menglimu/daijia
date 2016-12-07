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
    <div class="lm-pick-box" v-if="visible">
        <div class="title">
            <btn @click.native="cancel">
                取消
            </btn>
            <span></span>
            <btn @click.native="sure">
                确定
            </btn>
        </div>
        <div class="lm-pick-roll">
            <div class="lm-pick-roll-linear">
                <scroll v-for=" n in rank" ref="refScroll" class="wrapper" @scrollOver="scrollOver(n-1,arguments[0])">
                    <ul class="scroll1">
                        <li v-for="(val , index) in pickData[n-1]">
                            {{val.name}}
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
        props: ["value","rankNum",'data'],
        components: {
            btn,scroll
        },
        data(){
            return{
                pickData : [this.data],
                pickValue : [],
                rank : this.rankNum,
                visible : true,
            }
        },
        created(){
            for (var i = 0; i < this.rank; i++) {
                this.pickValue[i] = 0
                if (i != 0) {
                    this.pickData[i] = this.pickData[i-1][0].child
                }       
            }
        },
        methods:{
            sure () {
                this.$emit("change",this.valueC)
                this.cancel()
            },
            cancel () {
                this.visible = false
            },
            scrollOver(index,e){
                //性能问题在执行回调时。可能元素还未到
                console.log(e);
                let value = parseInt(Math.abs(e/this.$refs.refScroll[index].$el.childNodes[0].childNodes[0].offsetHeight));
                if (this.pickValue[index] != value) {
                    this.setScroll(index,value)
                }
            },
            //递归将滑动第index后面的data进行设置
            setScroll(index,value){
                this.pickValue[index] = value
                if (index == this.rank-1) {
                    // this.$emit("change",this.valueC)
                } else {
                    this.$set(this.pickData,index+1,this.pickData[index][this.pickValue[index]].child || [])
                    this.pickValue[index+1] = 0
                    this.$refs.refScroll[index+1].setPosition(0)
                    this.setScroll(index+1,0)
                }
            }
        },
        mounted(){
            this.setScroll(0,0)
        },
        computed: {
          valueC () {
            let value = ''
            for (var i = 0; i < this.rank; i++) {
                if(this.pickData[i][this.pickValue[i]])
                value += this.pickData[i][this.pickValue[i]].name
            }    
            return value;
          }
        }
    }
</script>
