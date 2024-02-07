<template>
    <div>
      <h1>UserData List<br><br></h1>
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "UserData",
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://localhost:8080/')
        .then(res =>{
            const data = res.data;
            console.log(data);

            const userid = document.getElementById('tbody');
            userid.innerHTML=data.map(user =>
            `<tr>
                    <td>${user._id}</td>
                    <td>${user.name}</td>
                    <td>${user.city}</td>
                    <td>${user.email}</td>
                </tr>`
            ).join('');                                       
        })
        .catch(err =>{
            console.log(err);
        })
      }
    }
  }
  </script>
  
  <style>
  .user-table {
    border-collapse: collapse;
    width: 60%;
    font-size: 20px;
  }
  
  .user-table th,
  .user-table td {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
  }
  </style>
  