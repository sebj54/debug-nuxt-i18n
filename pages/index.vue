<template>
    <h1>{{ $t('views.dashboard') }}</h1>

    <p>
        <nuxt-link :to="localePath('/login')">{{ $t('views.login') }}</nuxt-link>
    </p>

    <h2><pre>switchLocalePath</pre></h2>

    <ul>
        <li>
            <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
        </li>

        <li>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        </li>
    </ul>

    <h2><pre>setLocale</pre></h2>

    <ul>
        <li>
            <a href="#" @click.prevent="setLocale('fr')">Français</a>
        </li>

        <li>
            <a href="#" @click.prevent="setLocale('en')">English</a>
        </li>
    </ul>
</template>

<script setup>
const { setLocale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>
