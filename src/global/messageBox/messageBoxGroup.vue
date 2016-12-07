<template>
  <div class="message-box-group">
    <msg v-for="(val, index) in msgData" :config=val></msg>
  </div>
</template>

<script>
import msg from "./messageBox.vue"
export default {
  components: {
    msg
  },
  // props:["msgData"],
  data () {
    return {
      msgData:[],
    }
  }
}
</script>
