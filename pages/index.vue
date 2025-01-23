<template>
    <h1>{{ $t('views.dashboard') }}</h1>

    <p>
        <nuxt-link :to="localePath('/login')">{{ $t('views.login') }}</nuxt-link>
    </p>

    <ul>
        <li>
            <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
        </li>

        <li>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        </li>
    </ul>
</template>

<script setup>
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>
