import { writable } from "svelte/store";

export let isActive = writable(0);
console.log(isActive);