<template>
  <v-toolbar app flat color="primary">
    <v-layout row>
      <v-flex xs8 offset-xs2>
        <v-toolbar-items>
          <router-link to="/home">
            <v-toolbar-title class="ml-0">
              <v-icon dark class="mb-1">home</v-icon>
              <span class="ml-1 title white--text">Home</span>
            </v-toolbar-title>
          </router-link>
          <router-link to="/admin">
            <v-toolbar-title class="ml-0 pl-2">
              <v-icon dark class="mb-1">supervisor_account</v-icon>
              <span class="ml-1 title white--text">Admin</span>
            </v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
          <router-link to="/cart">
            <v-toolbar-title class="mr-0">
              <v-badge left>
                <span slot="badge">{{ numItems }}</span>
                <v-icon dark class="mb-1">shopping_cart</v-icon>
              </v-badge>
              <span class="ml-1 title white--text">Cart</span>
              <span class="ml-1 title white--text">{{ numItems }}</span>
            </v-toolbar-title>
          </router-link>
        </v-toolbar-items>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
      numItems () {
        this.cart.length
      }
    }
  }
</script>
