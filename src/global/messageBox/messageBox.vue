<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .message-box{
    width: 85%;
    background: #fff;
    border-radius: 5px;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    z-index: 1000;
    left: 7.5%;
    padding: 0.2rem;
    top: 1.4rem;
    h3{
      font-size: 20px;color: #333;margin-bottom: 0.1rem;
    }
    .msg{word-break:break-all;}
    .line{
      display: block;
      height: 1px;
      background-color: #999;
      margin: 0.1rem 0;
    }
    .message-alert{
      .btn{
        background: #EF544F;
        color: #FFFFFF;
      }
    }
    .message-confirm,.message-prompt{
      .btn-row{
        display: flex;
        .btn{
          height: 39px;font-size: 15px;width: 43%;border-radius: 2px;
        }
      }
      .message-disagree{background-color: #FFFFFF;color: #666666;border: 1px solid #b7b7b7;}
      .message-agree{border-radius: 2px;background-color: #EF544F;color: #FFFFFF;}
    }
  }
</style>
<template>
<transition
        enter-active-class="animated bounceIn"
        leave-active-class="animated bounceOutRight"
      >
  <div class="message-box" v-if="config.show">
    <h3>消息提示</h3>
    <div class="message-alert" v-if="config.type=='alert'">
      <div class="msg">{{config.msg}}</div>
      <span class="line"></span>
      <btn class="btn" @click="sure(true)">确定</btn>
    </div>
    <div class="message-confirm" v-if="config.type=='confirm'">
      <div class="msg">{{config.msg}}</div>
      <span class="line"></span>
      <div class="btn-row">
        <btn class="btn message-disagree" @click="sure(false)">取消</btn>
        <btn class="btn message-agree" @click="sure(true)">确定</btn>
      </div>
    </div>
    <div class="message-prompt" v-if="config.type=='prompt'">
      <inpt v-model="inputVal"></inpt>
      <span class="line"></span>
      <div class="btn-row">
        <btn class="btn message-disagree" @click="sure(false)">取消</btn>
        <btn class="btn message-agree" @click="sure(true,inputVal)">确定</btn>
      </div>
    </div>
    </div>
  </div>
</transition>  
</template>

<script>
import btn from "./../../components/btn1"
import inpt from "./../../components/input1"
export default {
  components: {
    btn,inpt
  },
  // props:["config"],
  data () {
    return {
      config:{},
      inputVal:'',
    }
  },
  methods:{
    sure(result,data=null){
      this.config.show=false
      this.callback&&this.callback(result,data)
    },
  }
}
</script>


