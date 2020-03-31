<template>
    <div>
        <div v-if="!authorized">
            <button>Авторизация</button>
            <button>Регистрация</button>
        </div>
        <strong v-else>Имя пользователя</strong>
    </div>
</template>

<script>
export default {
    data() {
        return {
            authorized: false,
        };
    },
}
</script>
