<template>
    <b-container class="home">
        <b-row>
            <b-col>
                <b-alert variant="success" show>Nuxt Vuex Template</b-alert>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-btn variant="success" v-on:click="handleLoadList">Load List</b-btn>
                <b-btn variant="warning" v-on:click="apiCallReset('todos')">Reset</b-btn>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="todo-list">
                <b-list-group>
                    <b-list-group-item v-for="todo in todos.data" :key="todo.id" variant="success">
                        {{todo.title}}
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapActions, mapState } from 'vuex'; 
    export default {
        computed: {
            ...mapState('apiCalls', [
                'todos'
            ])
        },
        methods: {
            ...mapActions('apiCalls', [
                'apiCall',
                'apiCallReset'
            ]),

            handleLoadList() {
                this.apiCall({stateKey: 'todos'});
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
