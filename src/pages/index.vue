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
            <b-col>
                <b-input v-on:keyup="handleChange($event)" placeholder="Enter something"></b-input>
            </b-col>
        </b-row>
        <b-row style="margin-top:2%">
            <b-col>
                <b-alert
                    variant="info"
                    :show="something === '' ? false : true"
                >
                    {{something}}
                </b-alert>
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
            ]),
            ...mapState([
                'something'
            ])
        },
        methods: {
            ...mapActions('apiCalls', [
                'apiCall',
                'apiCallReset'
            ]),

            ...mapActions([
                'setSomething',
            ]),

            handleLoadList() {
                this.apiCall({stateKey: 'todos'});
            },

            handleChange(event) {
                this.setSomething(event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
