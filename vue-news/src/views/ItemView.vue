<template>
    <div>
        <!-- 질문 상세 정보 -->
        <section>
            <div class="user-container">
                <div class="user-icon">
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link v-bind:to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
                    <div class="time">{{fetchedItem.time_ago}}</div>
                </div>
            </div>
            <h2 class="">{{fetchedItem.title}}</h2>
        </section> 

        <!-- 질문에 대한 댓글 -->
        <section>
            <div v-html="fetchedItem.content">
            </div>
        </section>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters(['fetchedItem'])
    },
    created(){
        const itemID = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemID);
    }
}
</script>


<style scoped>
    .user-container{
        display: flex;
        align-items: center;
        padding: 0,5rem;
    }
    .fa-user {
        font-size: 2.5rem;
    }
    .user-description{
        padding-left: 8px;
    }
    .time{
        font-size: 0.7rem;
    }
</style>