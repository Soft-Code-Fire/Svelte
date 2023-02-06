<script lang='ts'>
     import { page } from '$app/stores'

    console.log('The current route is: ' + $page.url.pathname)
</script>

<main>
    <h1>The Current Page is <h2>{$page.url.pathname}</h2></h1>
</main>

<style>

</style>
