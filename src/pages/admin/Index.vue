<template>
  <v-layout row wrap>
    <v-toolbar light flat dense>
      <v-toolbar-items class="align-center">
        <router-link to="/admin">
          <v-toolbar-title class="ml-0">
            <v-icon class="mb-1">list</v-icon>
            <span class="ml-1 title">Product List</span>
          </v-toolbar-title>
        </router-link>
        <router-link to="/admin/new">
          <v-toolbar-title class="ml-0 pl-2">
            <v-icon class="mb-1">control_point</v-icon>
            <span class="ml-1 title">Add New Product</span>
          </v-toolbar-title>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
    <v-slide-x-transition mode="out-in">
      <router-view></router-view>
    </v-slide-x-transition>
  </v-layout>
</template>
