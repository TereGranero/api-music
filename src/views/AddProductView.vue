<template>
  <div>
    <ProductForm @add-product="addProduct"/>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import {createProduct} from '@/api/productsService'
export default {
  components: { ProductForm },
  methods: {
    async addProduct(product){
      try{
        await createProduct(product)
        console.log(`Producte ref: ${product.id} afegit correctament`)
        this.$router.push('/')
      }catch(err){
        console.error('Adding Product Error: ', err)
        alert('Error... El producte no s\'ha afegit')
      }
    }
  }
}
</script>

<style>
  form {
    margin-bottom: 2rem;
  }
</style>