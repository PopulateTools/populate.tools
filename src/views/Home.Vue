<template>
    <div class="browser">
        <section class="browser-main">
            <article class="browser-main-columns browser-main-columns-left ">
                <index></index>
            </article>
            <words></words>
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
