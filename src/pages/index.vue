<template>
    <b-container class="home">
        <b-row>
            <b-col>
                <b-alert
                    variant="success"
                    show
                >
                    Nuxt Vuex Template
                </b-alert>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-btn
                    variant="success"
                    @click="handleLoadList"
                >
                    Load List
                </b-btn>
                <b-btn
                    variant="warning"
                    @click="apiCallReset('todos')"
                >
                    Reset
                </b-btn>
            </b-col>
            <b-col>
                <b-input
                    placeholder="Enter something"
                    :value="form.inputField"
                    @keyup="handleChange($event)"
                />
            </b-col>
        </b-row>
        <b-row style="margin-top:2%">
            <b-col>
                <b-alert
                    variant="info"
                    :show="form.inputField === '' ? false : true"
                >
                    {{ form.inputField }}
                </b-alert>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="todo-list">
                <b-list-group>
                    <b-list-group-item
                        v-for="todo in todos.data"
                        :key="todo.id"
                        variant="success"
                    >
                        {{ todo.title }}
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
                'form'
            ])
        },
        methods: {
            ...mapActions('apiCalls', [
                'apiCall',
                'apiCallReset'
            ]),

            ...mapActions([
                'setValue',
            ]),

            handleLoadList() {
                this.apiCall({stateKey: 'todos'});
            },

            handleChange(event) {
                this.setValue({
                    stateKey: 'form.inputField',
                    value: event.target.value
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
