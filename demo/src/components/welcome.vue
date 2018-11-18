<template>
  <div class="welcome">
    <h1>{{ title }}</h1>
    <div>
      <span>请输入查询码:</span>
      <input type="text" v-model="code" @change="checkCode">
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      title: '欢迎',
      code: ''
    }
  },
  methods: {
    checkCode () {
      let self = this
      if (self.code === '123456') {
        self.$router.push('/message')
      } else {
        alert('抱歉暂无相关信息')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  text-align: center;
}
h1 {
  font-weight: normal;
}
input {
  border: none;
  border-bottom: 1px solid #333; /*no*/
  font-size: 20px;
  width: 200px;
  height: 50px;
  outline:none;
}
</style>
