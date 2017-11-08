<template>
  <v-app>
    <v-toolbar dark color="grey--darken-3">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">
        <router-link to="/">Awesomest Shop Ever</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <router-link to="/cart">
        <v-btn icon>
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <div id="app">
      <img src="./assets/logo.png" />

      <!-- Route outlet -->
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }

</script>
