<template>
    <div id="app">
        <ul class="nav navbar-nav">
            <router-link tag="li" to="/" exact>
                <a>Home</a>
            </router-link>
            <router-link tag="li" to="/article">
                <a>Articulo</a>
            </router-link>
            <router-link tag="li" to="/browser">
                <a>Explorador</a>
            </router-link>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'app'
}
</script>
