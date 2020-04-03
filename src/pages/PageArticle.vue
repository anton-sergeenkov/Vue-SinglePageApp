<template>
    <div class="wrapper">
        <h2>{{articleHeader}}</h2>
        <p class="text" v-for="(item, i) in articleContent" :key="i">{{item}}</p>
        <app-error-api v-if="articleError" />
        <app-comments />
    </div>
</template>

<script>
import { fetchArticle } from '../api/articleService';

import Comments from '../components/Comments/Comments.vue';
import ErrorApi from '../components/ErrorApi.vue';

export default {
    components: {
        'app-comments': Comments,
        'app-error-api': ErrorApi
    },
    data() {
        return {
            articleHeader: null,
            articleContent: [],
            articleError: false,
        };
    },
    created() {
        fetchArticle()
            .then(res => res.json())
            .then(({ header, content }) => {
                this.articleHeader = header;
                this.articleContent = content;
            })
            .catch(error => this.articleError = true)
    },
}
</script>

<style scoped>
.text::first-letter {
    font-size: var(--font-h2);
    font-weight: bold;
    color: var(--color-accent-dark);
}
</style>
