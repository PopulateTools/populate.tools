<template>
    <div>
        <h2 class="browser-title">La Constitución Española de 1978</h2>
        <span class="browser-chapter">Preámbulo</span>
        <span class="browser-chapter">Título preliminar</span>
        <div class="browser-chapter-group">
            <a <a v-scroll-to="{el: '#articulo_1', container: '#constitution-text' }" class="browser-chapter browser-chapter-left">Título I.</a >
            <div class="browser-chapter-titles">
                <span class="browser-chapter-text">De los derechos y deberes fundamentales</span>
                <span class="browser-chapter-text">Capítulo primero. De los españoles y extranjeros</span>
                <span class="browser-chapter-text">Capítulo segundo. Derechos y libertades</span>
                <span class="browser-chapter-text">Capítulo tercero. De los principios rectores de la política social  y económica</span>
                <span class="browser-chapter-text">Capítulo cuarto. De las garantías de las libertades y derechos fundamentales</span>
                <span class="browser-chapter-text">Capítulo quinto. De la suspensión de los derechos y libertades</span>
            </div>
        </div>
        <div class="browser-chapter-group">
            <a v-scroll-to="{el: '#articulo_10', container: '#constitution-text' }" class="browser-chapter browser-chapter-left">Título II.</a>
            <div class="browser-chapter-titles">
                <span class="browser-chapter-text">De la Corona.</span>
            </div>
        </div>
        <div class="browser-chapter-group">
            <a v-scroll-to="{el: '#articulo_20', container: '#constitution-text' }" class="browser-chapter browser-chapter-left">Título III.</a>
            <div class="browser-chapter-titles">
                <span class="browser-chapter-text">De las Cortes Generales</span>
            </div>
        </div>
        <div class="browser-chapter-group">
            <a v-scroll-to="{el: '#articulo_30', container: '#constitution-text' }" class="browser-chapter browser-chapter-left">Título IV.</a>
            <div class="browser-chapter-titles">
                <span class="browser-chapter-text">Del Gobierno y de la Administración</span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'index',

}
</script>
