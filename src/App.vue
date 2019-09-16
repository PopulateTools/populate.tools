<template>
    <div id="app">
        <ul>
            <router-link tag="li" exact to="/">
                <a>Home</a>
            </router-link>
            <router-link tag="li" exact to="/article">
                <a>Articulo</a>
            </router-link>
            <router-link tag="li" exact to="/browser">
                <a>Explorador</a>
            </router-link>

        </ul>
        <router-view/>
    </div>
</template>


<script>
export default {
    name: 'app'
}
</script>
