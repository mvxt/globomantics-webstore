<template>
  <v-data-table v-bind:headers="headers"
                :items="products"
                hide-actions
                class="elevation-1">
    <template slot="items" slot-scope="props">
      <td width="400px">
        <img :src="props.item.image" alt="" style="height: 200%; width: 50%;" />
      </td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.description }}</td>
      <td class="text-xs-right">{{ props.item.upc }}</td>
      <td class="text-xs-right">{{ props.item.price }}</td>
      <td class="text-xs-right">
        <router-link :to="'/edit/' + props.item._id">
          <v-icon>mode_edit</v-icon>
        </router-link>
      </td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    name: 'admin-product-list',
    data () {
      return {
        headers: [
          {
            text: 'Image',
            align: 'left',
            sortable: false,
            value: 'image'
          },
          { text: 'Name', value: 'name' },
          { text: 'Description', value: 'description' },
          { text: 'UPC Code', value: 'upc' },
          { text: 'Price ($)', value: 'price' },
          { text: '', value: '' }
        ]
      }
    },
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    }
  }
</script>
