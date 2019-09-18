<template>
    <div id="app">
        <nav class="nav-constitution">
            <router-link class="nav-constitution-element" tag="li" exact to="/">
                <a class="nav-constitution-link">La Constitución</a>
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
