<template>
  <v-toolbar app flat color="primary" style="flex: 0 0 auto;">
    <v-layout row>
      <v-flex xs8 offset-xs2>
        <v-toolbar-items>
          <router-link to="/home">
            <span class="ml-0" style="height: 100%">
              <v-icon dark class="mb-2">home</v-icon>
              <span class="ml-1 title white--text">Home</span>
            </span>
          </router-link>
          <router-link to="/admin">
            <span class="ml-0 pl-2">
              <v-icon dark class="mb-2">supervisor_account</v-icon>
              <span class="ml-1 title white--text">Admin</span>
            </span>
          </router-link>
          <v-spacer></v-spacer>
          <router-link to="/cart">
            <span>
              <v-badge left color="grey">
                <span slot="badge">{{ numItems }}</span>
                <v-icon dark class="mb-2">shopping_cart</v-icon>
              </v-badge>
              <span class="ml-1 title white--text">Cart</span>
            </span>
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
        return this.cart.length
      }
    }
  }
</script>
