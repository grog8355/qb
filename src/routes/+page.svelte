<script lang="ts">
    import Header from "$lib/header.svelte";

    import mainWindow from "$lib/assets/example-images/qb-downloads.jpg";
    import mainWindowExpanded from "$lib/assets/example-images/menu-expanded.jpg";
    import optionsWindow from "$lib/assets/example-images/preferences.jpg";
    import searchWindow from "$lib/assets/example-images/search-engine.jpg";
    import lArrow from "$lib/assets/arrow-sm-left-svgrepo-com.svg";
    import rArrow from "$lib/assets/arrow-sm-right-svgrepo-com.svg";

    let images: any = [
        { image: mainWindow, alt: "main window" },
        { image: mainWindowExpanded, alt: "main window expanded" },
        { image: optionsWindow, alt: "options window" }, 
        { image: searchWindow, alt: "search window" }   
    ];

    let index = 0;
    function changeImg(direction: number)
    {
        switch (direction)
        {
            case 1:
                index--;
                console.log(index);
                break;
            case 2:
                index++;
                console.log(index);
                break;
        }
        if(index > (images.length - 1))
        {
            index = 0;
        }
        else if (index < 0)
        {
            index = (images.length - 1);
        }
    }
</script>

<Header />

<main class="bg-gradient-to-b from-white from-30% via-blue-300 to-blue-500 w-screen h-screen font-Inter lg:mt-10">
    <section>
        <article class="flex flex-col justify-center m-7 text-3xl sm:text-6xl lg:8xl font-semibold text-center gap-10">
            <h1 class="drop-shadow">Free and reliable P2P <span class="text-blue-500">Bittorrent</span> client</h1>

            <div class="flex flex-col items-center w-[100%]">
                <div class="flex flex-col gap-2 items-center p-2 md:p-3 shadow-light bg-black bg-opacity-15 rounded max-w-[60rem]">
                    {#each images as {image, alt}, i}
                        {#if i == index}
                            <a href="{image}" target="_blank"><img class="max-h-[35rem] lg:max-w-[56rem]" src="{image}" alt="{alt}"></a>
                        {/if}
                    {/each}
                    <div class="flex justify-between w-[100%] gap-1">
                        <button class="flex justify-center rounded bg-white shadow-md w-36 sm:w-56 hover:shadow-med active:bg-opacity-55" onclick={() => changeImg(1)}><img class="max-w-10 sm:max-w-16" src="{lArrow}" alt="left arrow"></button>
                        <button class="flex justify-center rounded bg-white shadow-md w-36 sm:w-56 hover:shadow-med active:bg-opacity-55" onclick={() => changeImg(2)}><img class="max-w-10 sm:max-w-16" src="{rArrow}" alt="right arrow"></button>               
                    </div>
                </div>
            </div>
        </article>
    </section>
</main>