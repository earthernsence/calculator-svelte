<script lang="ts">
  import EquationDisplay from "@/EquationDisplay.svelte";
  import { displayValue, previousEquation } from "globals";
</script>

<div class="o-calculator__display-pane">
  <EquationDisplay
    current={$displayValue}
    previous={$previousEquation}
  />
</div>