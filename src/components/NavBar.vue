<template>
    <div class="row navbar">
        <div class="col-md-6">
            <router-link :to="{ name: 'TodoPage' }">
                Todo Page
            </router-link>
        </div>
        <div class="col-md-6">
            <router-link :to="{ name: 'AutrePage' }">
                Autre Page
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navbar {
        padding-top:50px;
        padding-:50px;
    }
</style>