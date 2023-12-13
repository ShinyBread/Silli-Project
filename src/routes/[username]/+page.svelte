<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<svelte:head>
    <title>{data.username} Links</title>
    <meta name="description" content="{data.bio}">
</svelte:head>

<main class="card h-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/5 min-h-[35vw] bg-secondary text-accent mx-auto mt-10 items-center text-center p-5 shadow-info shadow-2xl ">

    <h1 class="text-5xl text-black mt-5">
      {data.username}
    </h1>
  
    <img
      src={data.photoURL ?? "/user.png"}
      alt="photoURL"
      width="256"
      class="mx-auto rounded-full mt-10"
    />
  
    <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
    <ul class="list-none">
      {#each data.links as item}
        {@debug item}
      {/each}
    </ul>
  
  </main>