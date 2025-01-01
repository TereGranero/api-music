<template>
  <div>
    <h2>{{ editing ? 'Modificar producte' : 'Afegir producte' }}</h2>
    <form @submit.prevent="sendForm">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
              <label>Referència: </label>
              <input 
                ref="reference"
                type="text" 
                class="form-control"
                :class="{'is-invalid': processing && invalidRef}"
                @focus="resetState"
                @keypress="resetState"
                v-model="product.id">
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
              <label>Descripció: </label>
              <input 
                type="text" 
                class="form-control"
                :class="{'is-invalid': processing && invalidDescription}"
                @focus="resetState"
                v-model="product.description">
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
              <label>Família: </label>
              <input 
                type="text" 
                class="form-control"
                :class="{'is-invalid': processing && invalidFamily}"
                @focus="resetState"
                v-model="product.family">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Aceptar</button>
              <button type="submit" class="btn btn-secondary ml-2" @click="cancelar">Cancelar</button>
            </div>
          </div>
        </div>

      </div>
    </form>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div v-if="processing && error" class="alert alert-danger" role="alert">
            És obligatori omplir tots els camps!
          </div>
        </div>
      </div>
    </div>
   </div>
</template>
 
<script>
  import { getProductById } from '@/api/productsService'

  export default {
    props: {
      id: {
        type: String,
        default: null,
      },
    },
    data(){
      return{
        product: {
          "id": '',
          "description": '',
          "family": '',
        },
        processing: false,
        error: false,
      }
    },
    computed:{
        editing() {
          return this.id !== null
        },
        invalidRef(){
          return this.product.id.length < 1
        },
        invalidDescription(){
          return this.product.description.length < 1
        },
        invalidFamily(){
          return this.product.family.length < 1
        },
    },
    async created(){
        if (this.editing){
          this.product = await getProductById(this.id)
        }
    },
    methods: {
        sendForm(){
          this.processing = true
          this.resetState()

          if(this.invalidRef || this.invalidDescription || this.invalidFamily){
              this.error = true
              return
          }

          if (this.editing){
              this.$emit('edit-product', this.product.id, this.product)
          } else{
              this.$emit('add-product', this.product)
          }

          this.processing = false
          this.error = false
          this.product = {
            "id": '',
            "description": '',
            "family": '',
          }
        },
        resetState(){
          this.error = false
        },
        cancelar(){
          this.$router.push('/')
        }
  }
}
</script>

<style>
  form {
    margin-bottom: 2rem;
  }
</style>