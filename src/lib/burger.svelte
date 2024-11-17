<script lang="ts">
    import discussion from "$lib/assets/burger-images/discussion-svgrepo-com.svg";
    import bug from "$lib/assets/burger-images/bug-svgrepo-com.svg";
    import github from "$lib/assets/burger-images/github-142-svgrepo-com.svg";
    import info from "$lib/assets/burger-images/information-svgrepo-com.svg";
    import news from "$lib/assets/burger-images/news-svgrepo-com(1).svg";
    import { isActive } from "$lib/store";
    import { slide } from "svelte/transition";

    let listen: any;

    isActive.subscribe((value) => listen = value);
 
    export let lists: any = [
        { inner: "News", image: news, alt: "news" },
        { inner: "Forum", image: discussion, alt: "discussion" },
        { inner: "Wiki", image: info, alt: "wiki" },
        { inner: "Dev", image: github, alt: "github" },
        { inner: "Bugs", image: bug, alt: "bugs" }
    ];
</script>

{#if listen == 1}
        <div in:slide={{duration: 500}} out:slide={{duration: 300}} class="font-Inter text-[1.25rem] bg-black shadow-light rounded-lg max-w-56 w-48 p-3 text-white fixed z-10 right-4 top-24">
            <ul class="flex flex-col gap-6">
                <!-- Using forEach loop to make lists from the data in the array -->
                {#each lists as {inner, image, alt}}
                    <li class="flex gap-3 items-center"><img src="{image}" alt="{alt}" class="w-10">{inner}</li>
                {/each}
            </ul>
        </div>
{/if}
