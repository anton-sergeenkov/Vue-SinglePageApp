<template>
    <div>
        <ui-button
            class="btn-comment-new"
            @click.native="handlerCommentAdd"
            label="Новый комментарий"
            theme="primary"
        />

        <div v-if="showForm">
            <ui-input
                class="input-comment"
                v-model="inputName"
                label="Имя пользователя*"
            />
            <ui-input
                class="input-comment"
                v-model="inputComment"
                label="Текст комментария*"
                multiline
            />
            <ui-button
                class="btn-comment-add"
                @click.native="handlerCommentSubmit"
                label="Добавить комментарий"
                theme="primary"
            />
        </div>

        <ui-toast v-if="showWarning" theme="warning" @close="closeWarning">
            Заполните все обязательные поля
        </ui-toast>
    </div>
</template>

<script>
import { getCurrentDate } from '../utils/getCurrentDate';

export default {
    data() {
        return {
            inputName: '',
            inputComment: '',
            showForm: false,
            showWarning: false
        }
    },
    methods: {
        closeWarning() {
            this.showWarning = false;
        },
        handlerCommentAdd() {
            this.showForm = true;
        },
        handlerCommentSubmit() {
            if (this.inputName && this.inputComment) {
                this.showForm = false;
            } else {
                this.showWarning = true;
            }
        },
    }
}
</script>

<style scoped>
.btn-comment-new {
    margin: auto;
    margin-top: 30px;
}
.input-comment {
    margin-top: 30px;
}
.btn-comment-add {
    margin: auto;
    margin-top: 30px;
}
</style>
