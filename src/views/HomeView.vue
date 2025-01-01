<template>
  <div class="home">
    <h2>Catàleg de productes</h2>
    <button type="text" @click="addProduct">Afegir producte</button><br>
    <ProductList :products="products" 
      @delete="deleteProduct" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import { getAllProducts, deleteProduct } from '@/api/productsService'

export default {
  name: 'HomeView',
  components: { ProductList },
  data() {
    return{
      products: [],
    }
  },
  async created(){
    this.products = await getAllProducts()
  },
  methods:{
    addProduct(){

    },
    async deleteProduct(id){
      try{
        await deleteProduct(id)
        this.products = this.products.filter(
          product => product.id != id
        )
        console.log(`Producte ref: ${id} eliminat correctament`)
        await getAllProducts()

      }catch(err){
        console.error('Delete Error: ', err)
      }
    },
  }
}
</script>
