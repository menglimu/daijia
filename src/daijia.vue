<style lang="scss">
#home{
	text-align: center;
	h2{padding-top: .3rem};
	p{font-size: .12rem;padding-top: .05rem;}
	.input-group{
		font-size: 14px;
		border-radius: 4px;
		width: 80%;margin: .50rem auto 0;
		.input{border: none;background: none;border-radius: 0;border-bottom: 1px solid #C0C0C0;margin-left: .05rem;font-size: 14px;}
	}
	.btn{width: 80%;margin:.5rem auto 0;background-color: #F98919;border: none;color: #EFEFF4;}
}
</style>
<template>
  <div id="home">
    <h2>欢迎使用代驾</h2>
    <p>附件有<span v-show="this.position=='localing'">*</span><span v-show="this.position!='localing'">0</span>位司机</p>
    <div class="input-group">
    	<inpt class="input" placeholder="请输入起点" :list="startlist" :value="start" @input="inputstart"></inpt>
    	<inpt class="input" placeholder="请输入终点" :list="endlist" :value="end" @input="inputend"></inpt>
    </div>
    <btn @click.native="going" class="btn" size="block">呼叫代驾</btn>
  </div>
</template>
<script>
	import btn from "components/btn"
	import inpt from "components/input1"
	import map from "./searchmap"
	export default {
	  components: {
			btn,inpt
	  },
	  data(){
	  	return{
	  		start:"",
	  		end:"",
	  		startlist:[],
	  		endlist:[],
	  		value:"123",
	  		position:"localing"
	  	}
	  },
	  mounted(){
	  	map.location((address)=>{
	  		this.position=address
	  		this.start=address||this.start
	  	})
	  },
	  methods: {
	    going(){
	    	this.$router.push('/Going')
	    },
	    inputstart(value){
	    	this.start=value;
	    	map.search(value,(data)=>{
	    		var list=[]
	    		for (var i = 0; i < data.poiList.pois.length; i++) {
		    		list.push(data.poiList.pois[i].name+"  ("+data.poiList.pois[i].address+")")
		    	}
	    		this.startlist=list;
	    	});
	    },
	    inputend(value){
	    	this.end=value;
	    	map.search(value,(data)=>{
	    		var list=[]
	    		for (var i = 0; i < data.poiList.pois.length; i++) {
		    		list.push(data.poiList.pois[i].name+"  ("+data.poiList.pois[i].address+")")
		    	}
	    		this.endlist=list;
	    	});
	    },
	    
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
h1 {
  color: #42b983;
}
</style>-->
