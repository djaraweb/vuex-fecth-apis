<template>
  <b-navbar toggleable="lg" variant="faded" type="light">
    <b-navbar-brand href="#">
      <img alt="Vue logo" src="@/assets/logo.png" height="30px" />
      <i class="fa fa-users" aria-hidden="true"></i>
      Vuex - Consumir Datos API [JSONPlaceholder]
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact>Lista de Usuarios</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Nabvar"
};
</script>
