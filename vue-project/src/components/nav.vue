<template>
  <div class="nav">
      <nav>
          <ul>
          <router-link to="/" class="home">Home</router-link>
          <li class="center">User Data Management</li>
          </ul>
      </nav>
  </div>
  </template>
  
  <script>
  
  export default{
      name: 'nav'
  }
  
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
  
  }
  
  nav { 
      background-color: black;
  }
  
  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  li {
    margin-right: 50px;
    color: orangered;
    
  }
  .center {
    text-align: center;
    font-size: 24px; 
    color: orangered; 
    padding: 20px; 
    margin-left: 450px;
    list-style-type: none;
  }
  
  .home {
    display: block;
    color: white;
    text-decoration: none;
    padding: 20px 50px;
    font-size: 24px;
    
  }
  
  .home:hover {
    background-color: orangered;
  }
  </style>
