<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div class="search-container">
        <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Search',
    data() {
      return {
        keyWord: ''
      };
    },
    methods: {
      async searchUsers() {
        try {
          const res = await axios.get(`https://api.github.com/search/users?q=${this.keyWord}`);
          console.log('请求成功', res.data.items);
          this.$bus.$emit('getUsers', res.data.items);
        } catch (err) {
          console.log('请求失败', err.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .jumbotron {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  
  .jumbotron-heading {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }
  
  .search-container {
    display: flex;
    align-items: center;
  }
  
  input[type="text"] {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>