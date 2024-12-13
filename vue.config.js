// vue.config.js
module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule("vue")
            .use("vue-loader")
            .tap((options) => {
                options.compilerOptions = {
                    isCustomElement: (tag) => tag === "custom-element",
                };
                return options;
            });
    },
};
