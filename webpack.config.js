module.exports =  {
    entry : "./src/main.js",
    output : {
        filename : "dist/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude : /(node_component|bower_components)/,
                query : {
                    presets:['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
				exclude : /(node_component|bower_components)/,
            }
        ]
    }
};
