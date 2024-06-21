// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

interface Config4 {
    readonly endpoint: string;
    readonly apiKey: string;
}

            // OR

// interface Config {
//     endpoint: string;
//     apiKey: string;
// }

const config4: Readonly<Config4> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
  
// config4.apiKey = "123asd"        // TS will complaint.