<script lang="ts">
    //@ts-nocheck
    import { isLoggedIn } from "../routes/stores/authStore";
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

    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    } from 'sveltestrap';

    let isOpen = false;

    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }
  </script>

  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Home</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href='/blogs'>Blogs</NavLink>
        </NavItem>
      </Nav>
      {#if $isLoggedIn}
        <NavItem>
                <a href="/"
                    on:click|preventDefault={logout}
                    class="nav-link"
                >Logout</a>
        </NavItem>
      {/if}
    </Collapse>
  </Navbar>
