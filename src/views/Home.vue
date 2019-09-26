<template>
    <div class="browser">
        <section class="browser-main">
            <article class="browser-main-columns-left ">
                <index @resetFilteredData="resetToWords($event)"></index>
            </article>
            <words :newData="newData" :term-selected="null"></words>
        </section>
    </div>
</template>

<script>
import Index from './../components/Index'
import Browser from './../components/Browser'
import Words from './../components/Words'
export default {
    components: {
        Index,
        Browser,
        Words
    },
    methods: {
        resetToWords() {
            console.log('emit from index')
        }
    }
}
</script>
