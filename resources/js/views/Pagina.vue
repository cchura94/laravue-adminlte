<template>
  <div>
    <router-link to="/">INICIO</router-link>
      <router-link to="/acerca">ACERCA DE NOSOTROS</router-link>
      <router-link to="/servicios">SERVICIOS</router-link>
      <router-link to="/admin">ADMIN</router-link>
      <router-link to="/login">Login</router-link>
     <router-view></router-view>
     
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>