module.exports = {
    "react-native-vector-icons": {

        project: {
            ios: {},
            android:{},
        },

        platforms: {
            iso: null
        }
    },
    assets: ['./src/assets/fonts/'],
    getTransformModulePath() {
        return require.resolve("react-native-typescript-transformer")
    },
    getSourceExts() {
        return ["ts", "tsx"];
    },

};