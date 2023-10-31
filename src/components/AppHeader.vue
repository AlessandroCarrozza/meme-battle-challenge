<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <ul>
            <li><a href="#">GIOCA</a></li>
            <li>LOGO</li>
            <li><a href="#">LEADERBOARD</a></li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
header{
    background-color: lightblue;
    height: 70px;
    
    ul{      
        width: 400px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: auto;

        list-style: none;
    }
}
</style>