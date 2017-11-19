<template>
  <v-toolbar app dark flat color="grey--darken-3">
    <v-layout row>
      <v-flex xs8 offset-xs2>
        <v-toolbar-items>
          <router-link to="/home">
            <v-toolbar-title class="ml-0">
              <v-icon dark class="mb-2">home</v-icon>
              <span class="ml-1 title">Home</span>
            </v-toolbar-title>
          </router-link>
          <router-link to="/admin">
            <v-toolbar-title class="ml-0 pl-2">
              <v-icon dark class="mb-2">supervisor_account</v-icon>
              <span class="ml-1 title">Admin</span>
            </v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
          <router-link to="/cart">
            <v-toolbar-title class="mr-0">
              <v-icon dark class="mb-2">shopping_cart</v-icon>
              <span class="ml-1 title">Cart</span>
            </v-toolbar-title>
          </router-link>
        </v-toolbar-items>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>
