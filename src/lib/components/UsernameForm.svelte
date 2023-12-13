<script lang="ts">
    import {db, user, userData } from "$lib/firebase"
    import { doc, getDoc, writeBatch } from "firebase/firestore";
    
    let username = "";
    let loading = false;
    let isAvailable = false;
    let debounceTimer: NodeJS.Timeout;

    const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    $: isValid = username?.length > 2 && username.length < 16 && re.test(username);
    $: isTouched = username.length > 0;
    $: isTaken = isValid && !isAvailable && !loading

    async function checkAvailability(){
        isAvailable = false;
        clearTimeout(debounceTimer);
        loading = true;

        debounceTimer = setTimeout(async()=>{
            console.log("revisando disponibilidad de:", username);
            const ref = doc(db, "usernames", username);
            const exists = await getDoc(ref).then((doc) =>doc.exists());

            isAvailable = !exists;
            loading = false;
        
        }, 1500);
        
    }
    
    async function confirmUsername(){
        console.log("revisando disponibilidad de:", username);
        const batch = writeBatch(db);
        batch.set(doc(db, "usernames", username), {uid : $user?.uid});
        batch.set(doc(db,"users" , $user!.uid), {
            username,
            photoURL : $user?.photoURL ?? null,
            published : true,
            bio: ' tuki bio ejemplo',
            links:[
                {
                    title: 'Link Ejemplo',
                    url: 'https://miau.com',
                    icon: 'custom'
                }
            ]
        });
        await batch.commit();
        username = '';
        isAvailable = false;
    }
</script>

{#if $userData?.username}
  <p class="text-3xl mt-20">
    Tu nick es <span class="text-success"> {$userData.username}</span>
  </p>
  <a class="mt-20" href="/login/tuki-foto">
    <button class="btn btn-primary hover:btn-info">Continuar></button>
</a>      
{:else}
  <form on:submit|preventDefault={confirmUsername}>
      <h1 class="text-xl p-5">Escribe tu nick</h1>
      <input 
      type="text" 
      placeholder="Tuki ejemplo..." 
      class="input input-success hover:input-bordered w-full max-w-xs mt-10 text-info"
      bind:value={username}
      on:input={checkAvailability} 
      class:input-error={(!isValid && isTouched)}
      class:input-warning={isTaken}
      class:input-success={isAvailable && isValid && !loading}
      />
      
      <div class="my-4 min-h-16 px-8 w-full">
          {#if loading}
            <div class="flex alert alert-info mt-4 text-black text-center justify-center text-sm">
              <p>Verificando nick {username}</p>
              <span class="loading loading-spinner text-black"></span>
            </div>
          {/if}
      
          {#if !isValid && isTouched}
            <p class="text-sm">
              Asegurate que tenga entre 3-16 caracteres y sea alfanumerico!
            </p>
          {/if}
      
          {#if isValid && !isAvailable && !loading}
            <p class="text-sm">
              {username} no esta disponible :c
            </p>
          {/if}
      
          {#if isAvailable && isValid}
          <div class="flex alert alert-success mt-4 text-black text-center justify-center text-sm">
              <p>" {username} " disponible!</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <button class="btn btn-warning text-lm text-black mt-4">Confirmar</button>
          {/if}
        </div>
  </form>
{/if}