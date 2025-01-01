<template>
  <div>
    <ProductForm 
      :id="id"
      @edit-product="editProduct"/>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'
import { updateProduct } from '@/api/productsService'
export default {
  components: { ProductForm },
  props:{
    id: {
      type: String,
      required: true,
    },
  },
  data(){
    return{
      product:{
        "id": '',
        "description": '',
        "family": '',
      }
    }
  },
  methods: {
    async editProduct(id, product){
      try{
        await updateProduct(id, product)
        console.log(`Producte ref: ${id} actualitzat correctament`)
        this.$router.push('/')
      }catch(err){
        console.error('Updating Product Error: ', err)
        alert('Error... El producte no s\'ha actualitzat')
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