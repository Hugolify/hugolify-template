/* eslint-disable no-undef */
module.exports = {
    plugins: {
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        },
        '@fullhuman/postcss-purgecss': {
            content: [
                './themes/**/*.html',
                'layouts/**/*.html'
            ],
            safelist: {
                standard: [
                    'show',
                    'fade',
                    /^is-/,
                    /^has-/,
                    /^js-/,
                    /-backdrop$/
                ],
                deep: [
                    /^page-/,
                    /^term-/,
                    /^section-/,
                    /-page$/
                ]
            }
        }
    }
};