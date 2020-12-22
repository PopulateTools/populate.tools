<template>
    <div class="browser">
        <section class="browser-main">
            <article class="browser-main-columns-left ">
                <index :text="text"></index>
            </article>
            <words :term-selected="null" :text="text"></words>
        </section>
    </div>
</template>

<script>
import text from './../data/constitution/text'

import Index from './../components/Index'
import Browser from './../components/Browser'
import Words from './../components/Words'
export default {
    components: {
        Index,
        Browser,
        Words
    },
    data() {
        return {
            text: text
        }
    }
}
</script>
