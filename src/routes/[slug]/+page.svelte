<script>
     import { page } from '$app/stores'

    console.log('The current route is: ' + $page.url.pathname)
</script>

<main>
    <h1>The Current router is {$page.url.pathname}</h1>
</main>

<style>

</style>
