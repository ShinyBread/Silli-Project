<script lang="ts">
    import { page } from "$app/stores";
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<div class="items-center text-center mt-10">
    <ul class="steps">
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
        <div class="flex flex-col items-center justify-center mt-20">
            <section class="card w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/5 min-h-[40rem] min-w-[40rem] bg-accent text-neutral-content mx-auto items-center text-center p-5">
                <div class="card-body flex items-center justify-center">
                    <slot />
                </div>
                
            </section>
                <button class="btn btn-secondary mt-10"><a href="/login">Volver al Inicio</a></button>   
        </div>
</AnimatedRoute>


