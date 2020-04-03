<template>
    <div>
        <div v-if="!userAuthorized" class="wrapper-authorization">
            <ui-button
                class="btn"
                @click.native="handlerAuthorization"
                label="Авторизация"
                theme="flat"
            />
            <ui-button
                class="btn"
                @click.native="handlerRegistration"
                label="Регистрация"
                theme="flat"
            />
        </div>
        <strong v-else>Имя пользователя</strong>
    </div>
</template>

<script>
import { fetchUsers } from '../api/usersService'

export default {
    data() {
        return {
            userAuthorized: false,
            users: null,
        };
    },
    methods: {
        handlerAuthorization() {
            alert('handlerAuthorization');
        },
        handlerRegistration() {
            alert('handlerRegistration');
        },
    },
    created() {
        fetchUsers()
            .then(res => res.json())
            .then(data => this.users = data)
            .catch(error => console.log(error))
    }
}
</script>

<style scoped>
.wrapper-authorization {
    display: flex;
}
.btn {
    margin: 0 5px;
}
</style>
