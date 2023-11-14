<script lang="ts">
  export let buttonValue: string;
  export let clickFn: Function;
</script>

<!--on:click={() => clickFn()}-->

<button class="o-primary-btn o-calculator-buttons-grid__cell" on:click={() => clickFn()}>
  { buttonValue }
</button>

<style>
  .o-calculator-buttons-grid__cell {
    margin: 0.5rem 0.8rem;
  }
</style>