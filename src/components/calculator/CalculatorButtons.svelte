<script lang="ts">
  import CalculatorButton from "@/calculator/CalculatorButton.svelte";
  import { currentEquation, currentLeft, currentOperator, currentRight, displayValue, equationHistory, previousEquation } from "globals";
import { Equation } from "../../classes/Equation";
  const buttons = [
    ["C", "\u221A", "%", "/"],
    ["7", "8",      "9", "*"],
    ["4", "5",      "6", "-"],
    ["1", "2",      "3", "+"],
    ["0", ".",      "=", "R"]
  ];

  function getClickFn(value: string) {
    switch (value) {
      case "C":
        return () => $displayValue = "0";
      case "/":
      case "*":
      case "-":
      case "+":
        return () => {
          $currentLeft = parseFloat($displayValue);
          $currentOperator = value;
          $displayValue = `${$displayValue} ${value} `
        }

      case "=":
        return () => {
          $currentRight = parseFloat($displayValue.split($currentOperator)[1]);
          $currentEquation = new Equation($currentLeft, $currentRight, $currentOperator);
          $displayValue = $currentEquation.evaluate();
          $previousEquation = $currentEquation.toString();
          $equationHistory.push($currentEquation);
          console.log($equationHistory);
        }
      default:
        return () => $displayValue = `${$displayValue}${value}`;
    }
  }
</script>

<div class="o-calculator-buttons-grid">
  {#each buttons as buttonRow}
    <div class="o-calculator-buttons-grid__row">
      {#each buttonRow as button}
        <CalculatorButton
            buttonValue={button}
            clickFn={getClickFn(button)}
          />
      {/each}
    </div>
  {/each}
</div>

<style>
  .o-calculator-buttons-grid {
    display: flex;
    flex-flow: column wrap;
    align-content: space-around;
    margin-top: 1rem;
  }

  .o-calculator-buttons-grid__row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
</style>