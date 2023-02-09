<script>
    import Nav from '../components/Nav.svelte'
    import { page } from '$app/stores'
    import '../app.css'

    console.log('The current route is: ' + $page.url.pathname)

    import app from '../main'
    import { onMount } from 'svelte'
    import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth'
    import { goto } from '$app/navigation'
    import { isLoggedIn } from './stores/authStore.js'

    onMount(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log('Welcome')
                isLoggedIn.update(() => true)
            } else {
                isLoggedIn.update(() => false)
                goto('/login')
            }
        })
    })


	const loginWithGoogle = () => {
		const auth = getAuth(app);
		signInWithPopup(auth, new GoogleAuthProvider());
	};
	const loginWithGithub = () => {
		const auth = getAuth(app);
		signInWithPopup(auth, new GithubAuthProvider());
	}
</script>

<main>
    <Nav />
    <slot />
</main>

<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</svelte:head>
