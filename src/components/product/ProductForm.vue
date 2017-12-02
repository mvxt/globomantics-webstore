<template>
  <v-layout>
    <v-flex xs12>
      <v-card primary flat>
        <v-card-title primary-title>
          <div class="headline">
            <span v-if="isEditing">Edit Product</span>
            <span v-else>Add New Product</span>
          </div>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid" @submit.prevent="saveProduct">
            <v-layout row wrap>
            <v-flex xs6 class="pr-4 pl-2">
              <v-layout column>
                <v-text-field
                  label="Product Name"
                  v-model="product.name"
                  :value="product.name"
                  :rules="nameRules"
                  required>
                </v-text-field>
                <v-text-field
                  label="Price"
                  v-model="product.price"
                  :value="product.price"
                  :rules="priceRules"
                  prefix="$"
                  required>
                </v-text-field>
                <v-text-field
                  label="UPC Code"
                  v-model="product.upc"
                  :value="product.upc"
                  :rules="upcRules"
                  required>
                </v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6 class="pr-4 pl-2">
              <v-layout column>
                <v-text-field
                  label="Image"
                  v-model="product.image"
                  :value="product.image"
                  :rules="imageRules"
                  required>
                </v-text-field>
                <v-text-field
                  label="Description"
                  v-model="product.description"
                  :value="product.description"
                  :rules="descriptionRules"
                  multi-line
                  required>
                </v-text-field>
              </v-layout>
            </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
        <v-layout row class="text-xs-right">
          <v-flex xs12>
            <v-btn class="mb-2" @click="saveProduct">
              <span v-if="isEditing">Update Product</span>
              <span v-else>Add Product</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        valid: false,
        nameRules: [
          (v) => !!v || 'Product title is required',
          (v) => v.length <= 32 || 'Product title must be no greater than 32 characters'
        ],
        priceRules: [
          (v) => !!v || 'Price is required',
          (v) => /^([0-9]+\.[0-9]{2})$/.test(v) || 'Price must be a valid dollar amount in #.## format'
        ],
        upcRules: [
          (v) => !!v || 'UPC code is required',
          (v) => v.length === 12 || 'UPC code must have 12 digits',
          (v) => /^[0-9]+$/.test(v) || 'UPC code must be valid'
        ],
        imageRules: [
          (v) => !!v || 'Image is required',
          (v) => /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(v) || 'Image must be a valid URL'
        ],
        descriptionRules: [
          (v) => !!v || 'Description is required'
        ]
      }
    },
    methods: {
      saveProduct () {
        this.$emit('save-product', this.product)
      }
    },
    props: ['product', 'isEditing']
  }
</script>
