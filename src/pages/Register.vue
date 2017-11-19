<!-- ./src/pages/Admin.vue -->
<template>
  <v-layout>
    <v-flex xs12 lg6 offset-lg3>
      <v-card primary>
        <v-card-title primary-title>
          <div class="headline">Create An Account</div>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-text-field
                  v-model="firstname"
                  placeholder="John"
                  label="First Name"
                  :rules="nameRules"
                  data-vv-name="firstname"
                  required></v-text-field>
              </v-flex>
              <v-flex xs12 md6>
                <v-text-field
                  v-model="lastname"
                  label="Last Name"
                  placeholder="Doe"
                  :rules="nameRules"
                  data-vv-name="lastname"
                  required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Email Address"
                  placeholder="john.doe123@example.com"
                  v-model="email"
                  :rules="emailRules"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Username"
                  placeholder="john.doe123"
                  v-model="username"
                  :rules="usernameRules"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Password"
                  v-model="password"
                  :rules="passwordRules"
                  :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (hidePassword = !hidePassword)"
                  :type="hidePassword ? 'password' : 'text'"
                  required>
                </v-text-field>
              </v-flex xs12>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Confirm Password"
                  v-model="confirmpassword"
                  :rules="passwordConfirmRules"
                  :append-icon="hideConfirmPassword ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (hideConfirmPassword = !hideConfirmPassword)"
                  :type="hideConfirmPassword ? 'password' : 'text'"
                  required>
                </v-text-field>
              </v-flex xs12>
            </v-layout>
            <v-layout row>
              <v-spacer></v-spacer>
              <v-btn @click="backButton" primary>
                Register
              </v-btn>
            </v-layout>
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
        hideConfirmPassword: true,
        firstname: null,
        lastname: null,
        nameRules: [
          (v) => !!v || 'Field is required',
          (v) => v.length <= 16 || 'Name must be no greater than 16 characters'
        ],
        email: null,
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        username: null,
        usernameRules: [
          (v) => !!v || 'Name is required'
        ],
        password: null,
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => /(?=.*[A-Z])/.test(v) || 'Must contain at least one uppercase letter',
          (v) => /(?=.*[a-z])/.test(v) || 'Must contain at least one lowercase letter',
          (v) => /(?=.*[0-9])/.test(v) || 'Must contain at least one digit',
          (v) => /(?=.*[@#$%^&*()_+\-=[\]{};':"\\|,.<>?])/.test(v) || 'Must contain at least one special character',
          (v) => v.length >= 8 || 'Must be at least 8 characters long'
        ],
        confirmpassword: null,
        passwordConfirmRules: [
          (v) => v === this.password || 'Passwords must match'
        ]
      }
    }
  }
</script>
