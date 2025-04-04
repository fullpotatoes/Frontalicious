<template>
  <div class="app-container">
    <h1>{{ message }}</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Appdalicious',
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    fetch('http://localhost:8000/api/test/')
        .then(res => res.json())
        .then(data => {
          this.message = data.message;
        })
        .catch(err => console.error('Erreur de connexion au backend:', err));
  }
}
</script>