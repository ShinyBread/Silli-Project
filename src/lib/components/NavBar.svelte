<script lang="ts">
  import { onMount } from 'svelte';
  let opacity: number = 1;

  onMount(() => {
    const navbar: HTMLElement | null = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      const scrollHeight: number = window.pageYOffset;
      const navbarHeight: number = navbar ? navbar.offsetHeight : 0;
      opacity = 1 - scrollHeight / navbarHeight;

      if (opacity < 0) {
        opacity = 0.85;
      }

      if (navbar) {
        navbar.style.opacity = opacity.toString();
      }
    });
  });
</script>


<nav id="navbar" class="navbar bg-secondary sticky top-0 z-10">
  <div class="flex-1">
    <p class="btn btn-ghost normal-case text-xl">Tuki</p>
  </div>
  <div class="relative">
    <ul class="menu menu-horizontal">
      <li>
        <details>
          <summary>
            Menu
          </summary>
          <ul class="p-2 bg-accent top-10">
            <li><a href="/.">Inicio</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</nav>
