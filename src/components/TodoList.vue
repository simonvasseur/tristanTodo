<template>
 <div id="todoCreationForm">
    <div class="row header">
        <div class="col-md-12">
            {{ headerMessage }}
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-12">
            <div v-for="(todo, index) in allTodos">
                <div v-if="todo.selected">
                    <h4 v-on:click="changeSelected(index)" style="color:red"><small>{{ index }} - </small> {{ todo.name }}</h4>
                </div>
                <div v-else>
                    <h4 v-on:click="changeSelected(index)"><small>{{ index }} - </small> {{ todo.name }}</h4>
                </div>
            </div>
        </div>
    </div>
    
 </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: [ //Parametres passés au composant
      'todos',
      'newTodoToAdd'
  ],
  methods: {
      changeSelected: function(index) {
          let clickedTodo = this.$data.allTodos[index]; 
          clickedTodo.selected = !clickedTodo.selected;
      }
  },
  watch: {  //Permet de surveiller l'évolution d'une variable
            //Quand la variable de TodoPage est modifiée, ça modifie aussi le paramètre qu'on passe à TodoList, et tu peux faire un traitement sur cet événement
      todos: function(newVal, oldVal) {
          this.$data.allTodos = newVal //Ici par exemple, on ajoute les todos, et on surveille un changement (en cas de nouvel appel DB par exemple)
      },
      newTodoToAdd: function(newVal, oldVal) {
          this.$data.allTodos.push(newVal); //Ici, on regarde si l'utilisateur à créer un TODO. Quand il clique sur créer, tu le récupère dans newVal et peut l'ajouter au tableau
      }
  },
  data () {
    return {
      headerMessage: "Clique sur un Todo pour changer son attribut selected",
      allTodos: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    font-size: 20px;
}

h4:hover {
    cursor: pointer;
}
</style>
