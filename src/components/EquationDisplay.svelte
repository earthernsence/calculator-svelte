<script lang="ts">
  export let previous: string;
  export let current: string;
</script>

<div class="o-equation-display">
  <div class="o-text o-text__right-align l-calculator__previous-equation">{ previous ?? "3 + 4" }</div>
  <div class="o-text__large o-text__right-align l-calculator__main-equation">{ current }</div>
</div>
