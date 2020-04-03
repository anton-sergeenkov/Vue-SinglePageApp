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

        <ui-dialog v-if="openModal" @close="closeModal">
            <template v-slot:header>Вход на сайт</template>
            <template v-slot:form>
                <form @submit.prevent="checkForm" class="wrapper-form">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Expedita architecto impedit a quam ad recusandae repellendus 
                        voluptatem amet quo, dolore sunt id incidunt asperiores omnis 
                        alias doloribus inventore. Iusto, laborum
                    </p>
                    <div class="wrapper-form-btn">
                        <ui-button class="form-btn" label="Отмена" @click.native.prevent="closeModal" />
                        <ui-button class="form-btn" label="Ок" theme="primary" />
                    </div>
                </form>
            </template>
        </ui-dialog>

    </div>
</template>

<script>
import { fetchUsers } from '../api/usersService'

export default {
    data() {
        return {
            userAuthorized: false,
            users: null,
            openModal: false
        };
    },
    methods: {
        closeModal() {
            this.openModal = false;
        },
        checkForm() {
			alert('ok');
        },
        handlerAuthorization() {
            this.openModal = true;
        },
        handlerRegistration() {
            alert('handlerRegistration');
        }
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
.wrapper-form {
    width: 400px;
    line-height: 1.5;
    padding: 20px;
}
.wrapper-form p {
    margin-bottom: 30px;
}

.wrapper-form-btn {
    display: flex;
    justify-content: center;
    margin-top: 45px;
}
.form-btn {
    margin: 0 5px;
    min-width: 150px;
}
</style>
