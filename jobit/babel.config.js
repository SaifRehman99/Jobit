module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-reanimated/plugin",
            require.resolve("expo-router/babel"),
            [
                "module:react-native-dotenv",
                {
                    envName: "APP_ENV",
                    moduleName: "@env",
                    path: ".env",
                },
            ],
        ],
    };
};
