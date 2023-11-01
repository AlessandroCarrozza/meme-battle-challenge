<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }" href="#">GIOCA</router-link>
            </li>

            <li id="logo">
                <img src="../../public/logo.png" alt="Logo">
            </li>

            <li>
                <router-link :to="{ name: 'leaderboard' }" href="#">LEADERBOARD</router-link>
            </li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

header{
    background-color: $header-color;
    height: $header-height;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    #logo img{
        height: 50px;
    }
    
    ul{      
        width: 400px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: auto;
        list-style: none;

        a{
            text-decoration: none;
            color: black;
            padding: 0.5rem;
            font-weight: 600;
        }
    }
}

@media (max-width: 400px) {
    #logo{
        display: none;
    }
}
</style>