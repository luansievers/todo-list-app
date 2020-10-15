<template>
    <v-row>
        <v-col cols="12">
            <v-sheet min-height="70vh" rounded="lg" class="mt-10">
                <v-container>
                    <div class="text-h3 d-flex justify-center text--secondary">TODO List</div>
                    <v-row class="d-flex justify-center">
                        <v-col cols="10">
                            <v-text-field
                                    id="todo-input"
                                    color="success"
                                    label="What do you want to do?"
                                    clearable outlined
                                    @keydown.enter="addTodo"
                                    @click:append="addTodo"
                                    :append-icon="todo ? 'mdi-check': null"
                                    v-model="todo"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="10" v-if="todoList.length > 0">
                            <v-list rounded>
                                <v-subheader>{{ todoList.length }} left</v-subheader>
                                <v-divider></v-divider>
                                <template v-for="(item,i) in todoList">
                                    <v-todo-list-item :key="i"
                                                      :todo-item="item"
                                                      @update-message="item.message = $event"
                                                      @update-done="item.done = $event"/>
                                    <v-divider :key="`${i}-divider`"></v-divider>
                                </template>
                            </v-list>
                        </v-col>
                    </v-row>
                    <div v-if="todoList.length === 0" class="text-caption text--secondary d-flex justify-center"> Start by adding a new task </div>
                </v-container>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
    import VTodoListItem from "@/components/VTodoListItem";
    export default {
        name: 'VTodo',
        components: {VTodoListItem},
        data() {
            return {
                todo: '',
                todoList: [],
                editMode: false
            }
        },
        methods: {
            addTodo() {
                this.todo = this.todo.trim();
                if (this.todo) {
                    this.todoList.push({
                        message: this.todo,
                        date: new Date(),
                        done: false
                    });
                    this.todo = '';
                }
            }
        },
    };
</script>

<style scoped>

</style>
