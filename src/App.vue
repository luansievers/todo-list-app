<template>
  <v-app>
    <v-main class="grey lighten-3">
      <v-container>
        <v-todo></v-todo>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import VTodo from "@/components/VTodo";
  export default {
    components: {VTodo}
  }
</script>
