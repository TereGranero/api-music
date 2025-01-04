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
            @delete="deleteProduct"
            @edit="editProduct"/>
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
   methods:{
      deleteProduct(id){
         this.$emit('delete', id)
      },
      editProduct(id){
         this.$emit('edit',id)
      }
   },
}
</script>

<style>
</style>