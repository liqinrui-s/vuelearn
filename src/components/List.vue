<template>
        <div class="row">

        <div class="card" v-for="user in users" :key="user.login">
          <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px' />
          </a>
          <p class="card-text">{{user.login}}</p>
        </div>
      </div>
</template>

<script>
export default {
 name: 'List',
 data() {
   return {
    users: []
   }
 },
 mounted() {
    this.$bus.$on('getUsers', (users) => {
      console.log('我是List组件，收到数据：', users);
      this.users = users;
    });
  },
  beforeDestroy() {
    // 在组件销毁前移除事件监听器
    this.$bus.$off('getUsers');
  }
}
</script>

<style>

</style>