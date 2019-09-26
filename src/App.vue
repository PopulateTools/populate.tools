<template>
    <div id="app">
        <nav class="nav-constitution">
            <router-link class="nav-constitution-element nav-center" tag="div" exact to="/">
                <a class="browser-title">La Constitución Española de 1978</a>
            </router-link class="nav-constitution-element">
            <router-link class="nav-constitution-element nav-center" tag="div" exact to="/about">
                <a class="nav-constitution-link">Acerca de</a>
            </router-link class="nav-constitution-element">
            <div class="nav-constitution-element nav-constitution-logo">
                <span class="nav-logo-text">un proyecto de</span>
                <a href="/" class="nav-logo-link">
                    <img src="/assets/logo-a63e7b42098ac85419bc0de08506d68cc1ee0a4830bea8ae85f349483924f5c7.png" class="nav-logo-image" alt="Populate">
                </a>
            </div>
        </nav>
        <router-view/>
    </div>
</template>


<script>
export default {
    name: 'app'
}
</script>
