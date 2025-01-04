<template>
   <tr>
      <td>{{ product.id }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.family }}</td>
      <td>
         <button type="text" class="btn btn-danger" @click="$emit('delete', product.id)">Eliminar</button>
         <button type="text" class="btn btn-info ml-2" @click="$emit('edit', product.id)">Modificar</button>
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
