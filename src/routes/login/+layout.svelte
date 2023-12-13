<script lang="ts">
    import { page } from "$app/stores";
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
</script>
<NavBar />
<div class="items-center text-center text-black">
    <ul class="steps p-5">
        <li class="step step-primary">Registrarse</li>
        <li class="step"
            class:step-primary={$page.route.id?.match(/username|tuki-foto/g)}>
            Username
        </li>
        <li class="step"
            class:step-primary={$page.route.id?.match(/tuki-foto/g)}>
            Sube tu foto
        </li>
    </ul>
</div>

<AnimatedRoute>
        <div class="flex flex-col items-center justify-center mt-5 ">
            <section class="card h-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/5 min-h-[35vw] bg-secondary text-accent mx-auto items-center text-center p-5 shadow-2xl ">
                <div class="card-body flex items-center justify-center">
                    <slot />
                </div>
                
            </section>
            <a href="/">
                <button class="btn btn-primary mt-5 hover:btn-secondary">Volver al Inicio</button>
            </a>
        </div>
</AnimatedRoute>


