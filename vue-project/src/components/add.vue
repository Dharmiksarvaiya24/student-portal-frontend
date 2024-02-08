<template>
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <img src="./login.png" height="50px" >
            <h3>Add details</h3>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="name" id="name" required/>
          <input type="text" placeholder="Email" id="email" required/>
          <input type="text" placeholder="City" id="city" required/>
          <button @click="getdata">LOGIN</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  methods: {
    getdata() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const city = document.getElementById('city').value;

      if (name && email && city) { 
        axios.post('http://localhost:8080/', {
          name: name,
          email: email,
          city: city
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
        this.$router.push('/userdata');
      } else {
        alert('Please Enter your all details');
      }
    }
  }
}
</script>

<style>

.login-page {
  width: 380px;
  height: 380px;
  padding: 8% 0 0;
  margin: auto;
}
.login-page .form .login{
  margin-top: -31px;
margin-bottom: 26px;
}
.form {
  background:  #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0px 0px 50px 0 rgba(0, 0, 0, 0.432), 0 50px 80px 0 rgba(0, 0, 0, 0.24);

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
 
  background-color: rgb(255, 69, 0);
  width: 100%;
  padding: 15px;
  color: black;
  font-size: 14px;
 
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: orangered;
  text-decoration: none;
}

.container {
  max-width: 300px;
  margin: 0 auto;
}

body {
  background-color: #f2f2f2;
}
</style>
