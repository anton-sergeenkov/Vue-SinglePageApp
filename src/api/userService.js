const URL_GET_USER = '';

export const fetchUser = () => fetch(URL_GET_USER);

// Возвращаемые данные
// {
//     login: string    - логин
//     password: string - пароль
// }
