<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs4>
          <img :src="product.image" alt="" style="height: 100%; width: 100%;" />
        </v-flex>
        <v-flex xs8 class="pl-4">
          <v-layout row>
            <span class="body-2">Globomantics</span>
          </v-layout>
          <v-layout row>
            <h6>{{ product.name }}</h6>
          </v-layout>
          <v-layout row>
            {{ product.description }}
          </v-layout>
          <v-layout row>
            <v-spacer></v-spacer>
            <product-cart-button :product="product"></product-cart-button>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
  import ProductCartButton from '@/components/product/ProductCartButton'
  export default {
    name: 'product-details',
    props: ['product'],
    components: {
      'product-cart-button': ProductCartButton
    }
  }
</script>
