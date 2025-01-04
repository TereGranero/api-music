<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Catàleg de productes</h2><br>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <button type="text" class="btn btn-success" @click="addProduct">Afegir producte</button><br><br><br>
      </div>
    </div>

    <div class="row" v-if="!products.length" >
      <div class="col-md-12">
        <div class="alert alert-info" role="alert">No hi ha cap producte. </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <ProductList 
          :products="products" 
          @delete="deleteProduct" 
          @edit="editProduct" />
      </div>
    </div>

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
      this.$router.push({name: 'AddProduct'})
    },
    editProduct(id){
      console.log("HomeView pasa a EditProduct el id: ", id)
      this.$router.push({name: 'EditProduct', params: { id } })
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
