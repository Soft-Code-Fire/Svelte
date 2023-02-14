<script>
    import {supabase} from "../supabase.js";

    const logout = () => {
        console.log("logging out")
        supabase.auth.signOut();
    }
</script>

<main class="my-4 flex justify-end">
    <header>
        <nav>
            <ul>
                <li><a href="/" role="button">Home</a></li>
                <li><a href="/about" role="button">About</a></li>
                <li><a href="/blogs" role="button">Blogs</a></li>
                <li><a href="/todo" role="button">Todo</a></li>
                <li><a href="/" type="submit" role="button"
                    class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
                    on:click={logout}
                >
                    Log Out ></a></li>

            </ul>
        </nav>
    </header>
</main>
