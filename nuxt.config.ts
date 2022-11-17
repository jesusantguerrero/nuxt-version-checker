// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@/assets/styles/main.css'],
    nitro: {
        preset: "firebase"
    },
    runtimeConfig: {
        googleApplicationCredentials: '/path/to/google-credentials'
    },
    postcss:{
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
