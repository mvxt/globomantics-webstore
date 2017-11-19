<template>
  <v-app>
    <app-header></app-header>
    <!-- <app-header></app-header>-->
    <main>
      <v-content>
        <v-flex xs8 offset-xs2>
          <v-slide-x-transition mode="out-in">
            <!-- Route outlet -->
            <router-view></router-view>
          </v-slide-x-transition>
        </v-flex>
      </v-content>
    </main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
