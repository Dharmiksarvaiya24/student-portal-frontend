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
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user._id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.city }}</td>
          <td>{{ user.email }}</td> 
          <td>
            <img 
              src="https://w7.pngwing.com/pngs/953/119/png-transparent-computer-icons-delete-icon-cdr-angle-text-thumbnail.png" 
              alt="Delete" 
              class="delete-icon" 
              @click="deleteUser(user._id)">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "UserData",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('http://localhost:8080/')
        .then(res => {
          this.users = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteUser(userId) {
      window.location.reload();
      alert("User deleted !");
    axios.delete(`http://localhost:8080/${userId}`)
    .then(response => {
      console.log('User deleted successfully:'); 
    })
    .catch(err => {
      console.error(err); 
    });
    window.location.reload();
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
  padding: 5px;
}

img.delete-icon {
  width: 30px;
}
</style>
