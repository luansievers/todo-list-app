<template>
    <v-list-item>
        <v-list-item-action v-if="!editMode">
            <v-checkbox v-model="newDone" @change="$emit('update-done', newDone)"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title
                    v-if="!editMode"
                    v-text="todoItem.message"
                    :class="{'text-decoration-line-through': todoItem.done}"></v-list-item-title>
            <v-list-item-subtitle v-if="!editMode" v-text="todoItem.date.toLocaleString()"></v-list-item-subtitle>
            <v-text-field prepend-icon="mdi-pencil" v-if="editMode" flat v-model="newMessage" @keydown.enter="editTodo"></v-text-field>
        </v-list-item-content>
        <v-list-item-action>
            <v-btn v-if="!editMode" icon @click="editMode = true">
                <v-icon color="secondary lighten-1">mdi-pencil</v-icon>
            </v-btn>
            <v-btn v-if="editMode" icon @click="editTodo">
                <v-icon color="success lighten-1">mdi-check</v-icon>
            </v-btn>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
    export default {
        name: "VTodoListItem",
        props: ["todoItem"],
        data() {
            return {
                editMode: false,
                newMessage: this.todoItem.message,
                newDone: this.todoItem.done
            }
        },
        methods: {
            editTodo() {
                this.$emit('update-message', this.newMessage);
                this.editMode = false
            }
        },
    }
</script>

<style scoped>

</style>
