<script lang="ts"?>
  // Components
  import Calculator from "@/Calculator.svelte";
  import Welcome from "@/Welcome.svelte";
  import HistoryPane from "@/history/HistoryPane.svelte";

  // CSS
  import "../styles/styles.css";
</script>

<body>
  <div>
    <Welcome />
  </div>
  <div>
    <Calculator />
  </div>
  <div>
    <HistoryPane />
  </div>
</body>