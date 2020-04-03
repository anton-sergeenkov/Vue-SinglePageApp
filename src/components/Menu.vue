<template>
    <div class="wrapper">
        <ul class="menu">
            <li><router-link :to="{name: 'index'}" class="menu-link">Главная</router-link></li>
            <li><router-link :to="{name: 'article'}" class="menu-link">Статья</router-link></li>
        </ul>
        <app-user></app-user>
    </div>
</template>

<script>
import User from './User/User.vue';

export default {
    components: {
        'app-user': User
    },
}
</script>

<style scoped>
.wrapper {
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-light);
}
.menu {
    display: flex;
    margin: 0;
    margin-left: var(--margin-menu);
    padding: 0;
    list-style-type: none;
}
.menu .router-link-exact-active {
    background-color: var(--color-accent);
}
.menu-link {
    margin: 5px;
    padding: 10px 15px;
    border-radius: 3px;
    color: black;
    text-decoration: none;
    user-select: none;
}
</style>
