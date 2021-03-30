<script lang="ts">
  import { createEventDispatcher } from "svelte";

  type EventMap = {
    carouselEnd: void;
  };

  // Const
  const dispatch = createEventDispatcher<EventMap>();
  const textColorByItemColor = {
    light: "#FFFFFF",
    dark: "#000000",
  };

  // Props
  export let items: CarouselItem[];

  // State
  let currentIndex: number = 0;

  // Callbacks
  function goToNextPicture() {
    if (currentIndex < items.length - 1) {
      currentIndex += 1;
    } else {
      dispatch("carouselEnd");
    }
  }

  function goToPreviousPicture() {
    if (currentIndex > 0) {
      currentIndex -= 1;
    }
  }
</script>

<section>
  <button class="left" on:click={goToPreviousPicture} type="button" />
  <button class="right" on:click={goToNextPicture} type="button" />
  <ul style="transform: translateX({-1 * currentIndex * 100}vw);">
    {#each items as item}
      <li style="background-image: url('{item.image}');">
        <span style="color: {textColorByItemColor[item.color]}"
          >{item.title}</span
        >
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  @import "theme.scss";

  section {
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  ul {
    @include reset-list-style;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;

    min-width: 100%;
    height: 100%;
    overflow: visible;

    transition: transform 200ms linear;
  }

  li {
    display: block;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }

  span {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 3.5rem;
  }

  button {
    @include reset-button-style;
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 10;

    &.left {
      left: 0;
      cursor: url("/images/prev.png"), auto;
    }

    &.right {
      left: 50%;
      cursor: url("/images/next.png"), auto;
    }
  }
</style>
