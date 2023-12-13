<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import ViewTransition from "$lib/components/ViewTransition.svelte"
    import { user, userData } from "$lib/firebase";

    $user;
    $userData
</script>


<svelte:head>
    <title>Silli</title>
</svelte:head>

<div class=app>
    <ViewTransition />
    <main class="min-h-screen ">
        <slot />
    </main>
    <Footer />
</div>

