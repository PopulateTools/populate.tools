<template>
    <div class="browser">
        <section class="browser-main">
            <article class="browser-main-columns browser-main-columns-left ">
                <index></index>
            </article>
            <article class="browser-main-columns browser-main-columns-center">
                <browser></browser>
            </article>
            <article class="browser-main-columns browser-main-columns-right">
                <words></words>
            </article>
        </section>
    </div>
</template>
<script>
import Index from './../components/Index'
import Browser from './../components/Browser'
import Words from './../components/Words'
export default {
    name: 'Constitucion',
    components: {
        Index,
        Browser,
        Words
    }
}
</script>
