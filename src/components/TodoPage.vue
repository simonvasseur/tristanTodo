<template>
<!-- Template HTML du composant -->
<div id="todoPage">
    <div class="row">
        <div class="col-md-12">
            {{ welcomeMessage }} {{ prenom }} <!-- Les deux acolades permettent d'acceder aux attributs contenus dans data -->
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-6">
            <label for="createTodo">
                Nom du TODO
            </label> <br>
            <input type="text" name="createTodo" id="createTodo" v-model="modelTodoName">
            <button class="btn" v-on:click="creerLeTodo">Créer</button>
        </div>
        <div class="col-md-6">
            <TodoList :todos="allTodosParameter" :newTodoToAdd="newTodo" /> <!-- Instancie le composant importé avec un paramètre -->
        </div>
    </div>
</div>
</template>

<script>
import TodoList from '@/components/TodoList';

export default {
    name: 'TodoPage', //nom du composant, facultatif mais peut servir
    //je m'en sers par exemple pour simplifier les appels au backend : la route node porte le nom du composant
    //donc : get("localhost:8080 + this.$options.name")

    components: { //Liste les composants importés, que tu peux donc utiliser dans ton template HTML
        TodoList
    },

    mounted: function () { //Fonction qui s'éxecute une fois à l'initialisation du composant (pre-traitements, appels database...)
        this.ajouterDesTodos()
    },

    methods: { //Toutes les méthodes qui seront accessibles à partir de ce composant uniquement, via this.methode()

        ajouterDesTodos: function () { //Imagine que c'est ton appel à la base de données qui rempli ce tableau
            let todo1 = {
                name: "Acheter du pain",
                selected: false
            };
            let todo2 = {
                name: "Aller mettre de l'essence",
                selected: true
            }
            let todo3 = {
                name: "Sortir le chien",
                selected: false
            }
            this.$data.allTodosParameter.push(todo1);
            this.$data.allTodosParameter.push(todo2);
            this.$data.allTodosParameter.push(todo3);
        },

        creerLeTodo: function() {
            this.$data.newTodo = {
              name: this.$data.modelTodoName,
              selected: false
            }
        }
    },
    data() { //Tous les attributs de ton composant, accessibles depuis this.$data.attribut
        return {
            welcomeMessage: "Bienvenue sur l'application, ",
            prenom: "Tristan",
            allTodosParameter: [],
            modelTodoName: null,
            newTodo: null
        }
    }
}
</script>

<style scoped>
 /* CSS - ajoute scoped pour que le CSS ne s'applique que sur le composant courant */
</style>
