<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">
</svelte:head>

<script>
    import { isLoggedIn } from "../routes/stores/authStore.js";
    import { goto } from "$app/navigation";
    import { getAuth, signOut } from "firebase/auth";
     const auth = getAuth();
    function logout() {
        signOut(auth)
            .then(() => {
            localStorage.removeItem("uid");
            goto("/login");
        })
        .catch((error) => {
            console.error(error);
        });
  }
</script>

<main>
    <nav>
        <ul>
          <li><strong class="text-3xl">Sveltekit</strong></li>
        </ul>
        <ul>
          <li><a href="/" role="button">Home</a></li>
          <li><a href="/about" role="button">About</a></li>
          <li><a href="/blogs" role="button">Blogs</a></li>
          <li><a href="/todos" role="button">Todos</a></li>
          {#if $isLoggedIn}
            <li>
                <a href="/"
                    on:click|preventDefault={logout}
                    class="nav-link"
                    role='button'
                >Logout</a>
            </li>
      {/if}
        </ul>
      </nav>
</main>
