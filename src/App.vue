<template>
  <div id="app">
    <Forms />
    <TotalBalance />
    <BudgetList />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Forms from "@/components/Forms";

export default {
  name: "app",
  components: {
    BudgetList,
    TotalBalance,
    Forms
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  opacity: 0.8;
}
body {
  background-image: url("./images/background.jpg");
}
</style>
