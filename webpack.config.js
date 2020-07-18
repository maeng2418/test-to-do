const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    // entry 부분이 웹팩이 파일을 읽어들이기 시작하는 부분
    entry: {
        index: path.resolve(__dirname, 'client'), // 파일 결과물이 app.js
    },
    output: {
        path: path.resolve(__dirname, 'client/public'),
        filename: '[name].js', // entry에서 설정한 index.js 로 결과물이 생성
    },
    // 웹팩은 오직 JavaScript와 Json만 이해할 수 있다.
    module: {
        rules: [
            {
                test: /\.js$/, // '가지고올 파일 정규식'
                include: [path.resolve(__dirname, 'client')],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // '사용할 로더 이름'  로더는 다른 Type의 파일(img, font, stylesheet 등)을 웹팩이 이해하고 처리 가능한 모듈로 변환 시키는 작업을 한다.
                    options: { //  { 사용할 로더 옵션 }
                        presets: [
                            [
                                '@babel/preset-env', {
                                    corejs: 3,
                                    targets: '> 1%',
                                    useBuiltIns: 'usage',
                                },
                            ],
                        ],
                        // 로더가 파일단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다.
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'client/public'),
        port: 4000,
    },
    optimization: {},
    resolve: {},
};
