<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte"
    import {db, user } from "$lib/firebase"
    import { doc, getDoc, writeBatch } from "firebase/firestore";
    
    let username = ""
    let loading = false;
    let isAvailable = false;
    
    async function checkAvailability(){}
    
    async function confirmUsername(){}
</script>
<AuthCheck>
    <main>
        <h1 class="text-xl p-5">Escribe tu nick</h1>
        <form on:submit|preventDefault={confirmUsername}>
            <input 
            type="text" 
            placeholder="Tuki ejemplo..." 
            class="input input-success hover:input-bordered w-full max-w-xs mt-10"
            bind:value={username}
            on:input={checkAvailability}
            />
            <p>Disponible? {isAvailable}</p>
            <button class="btn btn-success text-sm text-black">Estas segur@ que quieres {username} como nick?</button>
        </form>
    </main>
</AuthCheck>