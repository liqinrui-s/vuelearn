<template>
        <div class="row">

        <div v-show=true class="card" v-for="user in info.users" :key="user.login">
          <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px' />
          </a>
          <p class="card-text">{{user.login}}</p>
        </div>
        <h1 v-show="info.isFirst">欢迎使用</h1>
        <div v-show="info.isLoading">加载中...</div>
        <div v-show="info.errMessage">{{info.errMessage}}</div>
      </div>
</template>

<script>
export default {
 name: 'List',
 data() {
   return {
    info:{
      isFirst: true,
    isLoading:false,
    errMessage:'',
    users: []
    }

   }
 },
 mounted() {
    this.$bus.$on('updateListData', (dataObj) => {
      console.log(dataObj);
      this.info={...this.info,...dataObj}
     
    });
  },
  beforeDestroy() {
    // 在组件销毁前移除事件监听器
    this.$bus.$off('updateListData');
  }
}
</script>

<style>

</style>