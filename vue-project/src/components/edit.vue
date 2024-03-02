<template>
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h1>Edit User</h1>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="Name" v-model="editedUser.name" required/>
          <input type="email" placeholder="Email" v-model="editedUser.email" required/>
          <input type="text" placeholder="City" v-model="editedUser.city" required/>
          <button @click="editdata">Edit</button>
          <button @click="cancel" id="cnl-btn">Cancel Edit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EditUser',
    data() {
      return {
        editedUser: {
          name: '',
          email: '',
          city: ''
        }
      };
    },
    mounted() {
      this.getUserData();
    },
    methods: {
      getUserData() {
        const userId = this.$route.params.userId;
        axios.get(`http://35.175.228.206:8080/${userId}`)
          .then(res => {
            this.editedUser = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      },
      editdata() {
        const userId = this.$route.params.userId;
        axios.put(`http://35.175.228.206:8080/${userId}`, this.editedUser)
          .then(response => {
            console.log('User updated successfully');
          })
          .catch(err => {
            console.error(err);
          });
          this.$router.push('/userdata');
      },
      cancel() {
        this.$router.push('/userdata');
      }
    }
  };
  </script>
  
  <style>
  .login-page {
    width: 380px;
    height: 380px;
    padding: 8% 0 0;
    margin: auto;
  }
  
  .form {
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
  }
  
  .form input {
    background: #f2f2f2;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  
  .form button {
    width: 50%;
    padding: 15px;
    color: black;   
    font-size: 14px;
    margin-top: 20px; 
  }
  
  #cnl-btn {
    background-color: black;
    color: white; 
  }
  
  .container {
    max-width: 300px;
    margin: 0 auto;
  }
  
  body {
    background-color: #f2f2f2;
  }
  </style>
    