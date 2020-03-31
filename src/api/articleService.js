const URL_GET_ARTICLE = 'https://api.myjson.com/bins/10rgnw';

export const fetchArticle = () => fetch(URL_GET_ARTICLE);

// Возвращаемые данные
// {
//     header: string         - заголовок статьи
//     content: Array<string> - контент статьи. каждый элемент массива - абзац
// }
