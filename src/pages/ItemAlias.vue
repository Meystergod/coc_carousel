<template>
    <div class="wrapper-person">
        <div v-if="item">
            <img :src="item.img" :alt="item.description">
            <h1 style="color: #ffffff;" class="title">{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <CardStats :stats="item.info"></CardStats>
            <div>
                <router-link to="/" class="btn btnWhite">Back to home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/seeders/items.js'
import CardStats from '@/components/ui/CardStats'
export default {
    data() {
        return {
            item: null
        }
    },
    created() {
        const alias = this.$route.params.itemAlias
        const item = items.find(el => el.alias === alias)
        this.item = item
    },
    components: {
        CardStats
    }
}
</script>

<style lang="scss">
.wrapper-person {
    text-align: center;
    .card-stats {
        margin: 30px 0;
        border-radius: 14px;
    }
}
</style>
