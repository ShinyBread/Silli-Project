<script lang="ts">
    import { auth, user } from "$lib/firebase";
    import { GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
    
    async function signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user)
    }

</script>

<main>
    {#if $user}
        <p class="text-3xl p-2">Hola</p>
        <p class="text-4xl text-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.0.8)]">{$user.displayName} !</p>
        <div class="flex alert alert-success mt-4 text-black text-center justify-center text-xl">
            <p>Has iniciado sesion !</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        <button class="btn btn-base mt-5 hover:btn-secondary"on:click={()=> signOut(auth)}>Cerrar sesion</button>
        <button class="btn btn-primary mt-5 hover:btn-accent"><a href="login/username">Continuar ></a></button>
    {:else}
        <button class="btn btn-info mt-4" on:click={signInWithGoogle}>Inicia sesion con Google</button>
    {/if}
</main>

