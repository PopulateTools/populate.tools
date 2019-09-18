<template>
    <div id="app">
        <nav class="nav-constitution">
            <router-link class="nav-constitution-element" tag="li" exact to="/">
                <a class="nav-constitution-link">La Constitución</a>
            </router-link class="nav-constitution-element">
            <router-link class="nav-constitution-element" tag="li" exact to="/terms">
                <a class="nav-constitution-link">Términos</a>
            </router-link class="nav-constitution-element">
            <router-link class="nav-constitution-element" tag="li" exact to="/words">
                <a class="nav-constitution-link">Palabras</a>
            </router-link class="nav-constitution-element">

        </nav>
        <router-view/>
    </div>
</template>


<script>
export default {
    name: 'app'
}
</script>
