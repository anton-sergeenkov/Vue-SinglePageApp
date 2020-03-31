const URL_GET_COMMENT = '';

export const fetchComment = () => fetch(URL_GET_COMMENT);

// Возвращаемые данные
// [
//     {
//         user: string - имя пользователя
//         date: string - дата и время комментария
//         text: string - текст комментария
//     },
//     { ... }
// ]
