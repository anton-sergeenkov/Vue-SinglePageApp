const URL_GET_ARTICLE = 'https://api.myjson.com/bins/10rgnw';
const URL_GET_COMMENT = 'https://api.myjson.com/bins/13qzvs';

// Возвращаемые данные
// {
//     header: string         - заголовок статьи
//     content: Array<string> - контент статьи. каждый элемент массива - абзац
// }
export const fetchArticle = () => fetch(URL_GET_ARTICLE);

// Возвращаемые данные
// [
//     {
//         user: string - имя пользователя
//         date: string - дата и время комментария
//         text: string - текст комментария
//     },
//     { ... }
// ]
export const fetchComment = () => fetch(URL_GET_COMMENT);
