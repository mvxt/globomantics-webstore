<!-- ./src/pages/Admin.vue -->
<template>
  <v-layout>
    <v-flex xs12 lg6 offset-lg3>
      <v-card primary>
        <v-card-title primary-title>
          <div class="headline">Sign In</div>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              label="Username"
              v-model="username"
              :rules="usernameRules"
              required>
            </v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              :rules="passwordRules"
              :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (hidePassword = !hidePassword)"
              :type="hidePassword ? 'password' : 'text'"
              required>
            </v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        hidePassword: true,
        username: '',
        usernameRules: [
          (v) => !!v || 'Name is required'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Password is required'
        ]
      }
    }
  }
</script>
