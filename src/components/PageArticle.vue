<template>
    <div class="wrapper">
        <h2>{{articleHeader}}</h2>
        <p>{{articleContent}}</p>
    </div>
</template>

<script>
import { fetchArticle } from '../api/articleService';

export default {
    data() {
        return {
            articleHeader: null,
            articleContent: null,
        };
    },
    created() {
        fetchArticle()
            .then(res => res.json())
            .then(({ header, content }) => {
                this.articleHeader = header;
                this.articleContent = content;
            });
    }
}
</script>

<style scoped>

</style>
