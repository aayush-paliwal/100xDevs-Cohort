"use strict";
// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.
// OR
// interface Config {
//     endpoint: string;
//     apiKey: string;
// }
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
// config.apiKey = "123asd"        // TS will complaint.
