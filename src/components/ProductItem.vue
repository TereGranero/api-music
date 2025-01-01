<template>
   <tr>
      <td>{{ product.id }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.family }}</td>
      <td>
         <button type="text" @click="this.$emit('delete')">Eliminar</button>
         <button type="text" @click="this.$emit('edit')">Modificar</button>
      </td>
   </tr>
</template>

<script>
export default {
   props:{
      product: Object,
   },
}
</script>

<style>
   h3 {
      margin: 40px 0 0;
   }
</style>