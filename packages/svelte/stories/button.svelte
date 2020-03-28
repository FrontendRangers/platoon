<script>
    import { createEventDispatcher } from 'svelte';
    import { ButtonStyles } from '@frontendrangers/platoon-core';
    import { css } from 'emotion';

    const theme = {};

    export let text = '';

    const dispatch = createEventDispatcher();

    export const handleClick = (event) => dispatch('click', event);

    export const styles = {
        root: css(ButtonStyles, {
            backgroundColor: 'red',
        }),
        text: css`
            color: blue;
        `,
    };
</script>

<button class={styles.root} on:click={handleClick}>
    <span class={styles.text}>{text}</span>
</button>
