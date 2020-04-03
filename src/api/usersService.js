const URL_GET_USERS = 'https://web-notes.github.io/files/json-vue-app/get_users.json';

// Возвращаемые данные
// {
//     UserLogin: {         - логин
//         password: string - пароль
// 	},
//     ...
// }
export const fetchUsers = () => fetch(URL_GET_USERS);
