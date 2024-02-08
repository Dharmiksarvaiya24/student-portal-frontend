<template>
  <div>
    <h1><center>UserData List</center><br></h1>
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Email</th>
          <th>Delete</th>
          <th>Edit</th>
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
          <td>
            <img 
              src="https://w7.pngwing.com/pngs/65/893/png-transparent-edit-edit-document-edit-file-edited-editing-set-app-incredibles-icon-thumbnail.png" 
              alt="Edit" 
              class="edit-icon" 
              @click="editUser(user)">
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
      alert("User deleted !");
      window.location.reload();
      axios.delete(`http://localhost:8080/${userId}`)
        .then(response => {
          console.log('User deleted successfully');
        })
        .catch(err => {
          console.error(err);
        });
    },
    editUser(user) {
      alert("You wnt to edit user !");
      this.$router.push({ name: 'edit', params: { userId: user._id } });
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

img.delete-icon{
  width: 30px;
}
img.edit-icon{
  width: 40px;
}
</style>
