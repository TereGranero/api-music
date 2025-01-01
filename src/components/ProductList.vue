<template>
   <table class="table">
      <thead>
         <tr>
            <th>Ref.</th>
            <th>Descripció</th>
            <th>Família</th>
            <th>Accions</th>
         </tr>
      </thead>
      <tbody>
         <ProductItem 
            v-for="product in products" 
            :key="product.id"
            :product="product"
            @delete="this.$emit('delete',product.id)"
            @edit="this.$emit('edit',product.id, product)"/>
      </tbody>
   </table>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
   components: { ProductItem },
   props: {
      products: Array,
   },
}
</script>

<style>
</style>