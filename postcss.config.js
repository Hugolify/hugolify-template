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
                    'alert-light',
                    'alert-warning',
                    'alert-danger',
                    /-backdrop$/,
                    /^is-/,
                    /^has-/,
                    /^js-/
                ],
                deep: [
                    /^page-/,
                    /^term-/,
                    /^section-/,
                    /-page$/,
                    /^block-/
                ]
            }
        }
    }
};