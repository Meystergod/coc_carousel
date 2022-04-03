<template>
    <carousel :settings="settings">
        <slide class="card_wrapper" v-for="item in items" :key="item.id">
            <Card :name="`${item.level} lvl`" :title="item.title" :imgUrl="item.img" :link="`/${item.alias}`">
                <template v-slot:body>
                    {{ item.description }}
                </template>
                <template v-slot:footer>
                    <CardStats :stats="item.info"></CardStats>
                </template>
            </Card>
        </slide>
        <template #addons>
            <navigation />
        </template>
    </carousel>
</template>

<script>
import Card from '@/components/ui/Card'
import CardStats from '@/components/ui/CardStats'
import items from '@/seeders/items.js'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
    components: {
        Card,
        CardStats,
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            items: items,
            settings: {
                itemsToShow: 2,
                wrapAround: true,
                snapAlign: 'center'
            }
        }
    }
}
</script>
