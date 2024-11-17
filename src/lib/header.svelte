<script lang="ts">
    import logo from "$lib/assets/New_qBittorrent_Logo.svg.png";
    import bMenu from "$lib/assets/burger-images/burger-menu-svgrepo-com(1).svg";
    import cross from "$lib/assets/burger-images/cross-svgrepo-com(1).svg";
    import Burger from "$lib/burger.svelte";
    import discussion from "$lib/assets/burger-images/discussion-svgrepo-com black.svg";
    import bug from "$lib/assets/burger-images/bug-svgrepo-com black.svg";
    import github from "$lib/assets/burger-images/github-142-svgrepo-com black.svg";
    import info from "$lib/assets/burger-images/information-svgrepo-com black.svg";
    import news from "$lib/assets/burger-images/news-svgrepo-com(1) black.svg";
    import { isActive } from "$lib/store";

    //import lists from "$lib/burger.svelte";

    let isToggled = $state(0);

    function toggle()
    {
        switch(isToggled)
        {
            case 0:
                isToggled = 1;
                isActive.update(() => isToggled);
                break;
            case 1:
                isToggled = 0;
                isActive.update(() => isToggled);
                break;
        }
    }
    function reload()
    {
        location.reload();
    }

    let outerWidth = $state(0);

    let lists: any = [
        { inner: "News", image: news, alt: "news" },
        { inner: "Forum", image: discussion, alt: "discussion", link: "https://forum.qbittorrent.org/" },
        { inner: "Wiki", image: info, alt: "wiki", link: "https://github.com/qbittorrent/qBittorrent/wiki/" },
        { inner: "Dev", image: github, alt: "github", link: "https://github.com/qbittorrent/qBittorrent/" },
        { inner: "Bugs", image: bug, alt: "bugs", link: "https://github.com/qbittorrent/qBittorrent/issues/" }
    ];
</script>

<svelte:window bind:outerWidth/>

<header class="w-screen p-5 font-Telex font-Inter md:pl-[5%] md:pr-[5%]">
    <nav>
        <ul class="flex justify-between">
            <button onclick="{() => reload()}"><li class="drop-shadow"><img src="{logo}" alt="qBittorrent Logo" class="w-20 h-20"></li></button>

            {#if outerWidth < 1024}
                {#if isToggled == 0}
                    <li><button onclick={() => toggle()}><img src="{bMenu}" alt="burger menu" class="w-14 h-20"></button></li>
                    {:else}
                        <li><button onclick={() => toggle()}><img src="{cross}" alt="burger menu" class="w-14 h-20"></button></li>
                {/if}
                {:else}
                    <div class="flex gap-7 items-center">
                        {#each lists as {inner, image, alt, link}}
                            <a href="{link}" target="_blank"><li class="flex gap-2 items-center text-xl font-medium text-black shadow rounded-lg p-2 hover:shadow-light"><img src="{image}" alt="{alt}" class="w-10">{inner}</li></a>
                        {/each}
                    </div>
            {/if}
        </ul>
        
        <Burger />
    </nav>
</header>