<script lang="ts">
    import { auth } from "$lib/firebase";
    import { GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
    
    async function signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user)
    }

</script>
<main>
    <h1>Registro</h1>
    <button class="btn btn-info mt-4" on:click={signInWithGoogle}>Inicia sesion con Google</button>
</main>

