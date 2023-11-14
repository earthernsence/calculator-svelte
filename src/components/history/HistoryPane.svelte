<script lang="ts">
  import { equationHistory } from "globals";
  import EquationDisplay from "@/EquationDisplay.svelte";
</script>

<div class="l-history-pane">
  <div class="o-text__large l-history-pane__header">History</div>
  <div class="l-history-pane__history">
    {#key $equationHistory.length}
      {#each $equationHistory as equation}
        <div>
          <EquationDisplay 
            current={equation.evaluate()}
            previous={equation.toString()}
          />
        </div>
      {:else}
        <div class="o-text">No previous equations to display...</div>
      {/each}
    {/key}
  </div>
</div>
{@debug $equationHistory}

<style>
  .l-history-pane {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    height: 310px;
    border: 0.1rem solid var(--color-text);
  }

  .l-history-pane__header {
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }

  .l-history-pane__history {
    display: flex;
    overflow: scroll;
    flex-direction: column;
  }

  .l-history-pane__history:nth-child(2) {
    border-bottom: 0.1rem solid var(--color-text);
  }

  .l-history-pane__history:last-child {
    border: none;
  }
</style>