<template>
  <div class="budget-list-wrap">
    <div class="contain">
      <button class="showIncome" @click="showIncome">Show Income</button>
      <button class="showOutcome" @click="showOutcome">Show Outcome</button>
      <button class="showAll" @click="showAll">Show All</button>
    </div>
    <el-card :header="header">
      <template v-if="!isEmpty">
        <div
          ref="carda"
          class="list-item"
          v-for="(item, prop) in list"
          :key="prop"
        >
          <span class="budget-comment">{{ item.comments }}</span>

          <span v-if="item.value > 0" class="el-icon-top budget-value">{{
            item.value
          }}</span>
          <span v-else class="el-icon-bottom budget-value">{{
            item.value
          }}</span>
          <el-button
            class="btn"
            type="danger"
            size="mini"
            @click="onDeleteItem(item.id)"
            >delete</el-button
          >
        </div>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </el-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BudgetList",
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty list, sorry",
    visible: true
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
    ...mapGetters(["list"])
  },
  methods: {
    ...mapActions(["deleteList"]),
    onDeleteItem(id) {
      return this.deleteList(id);
    },
    showIncome() {
      this.$refs.carda.forEach(el => {
        if (el.children[1].innerText < 0) {
          el.setAttribute("style", "display: none");
        } else el.removeAttribute("style");
      });
    },
    showOutcome() {
      this.$refs.carda.forEach(el => {
        if (el.children[1].innerText > 0) {
          el.setAttribute("style", "display: none");
        } else el.removeAttribute("style");
      });
    },
    showAll() {
      this.$refs.carda.forEach(el => {
        el.removeAttribute("style");
      });
    }
  }
};
</script>

<style scoped>
.el-button--mini {
  height: 3em;
}
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
  font-size: 20px;
}
.budget-comment {
  margin-top: 3px;
  font-size: 16px;
  word-break: break-word;
}
.list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
  font-size: 20px;
  margin-top: 3px;
}
.el-icon-bottom {
  color: red;
  font-size: 20px;
  font-weight: bold;
  margin-top: 3px;
}
.el-icon-top {
  color: green;
  font-size: 20px;
  font-weight: bold;
  margin-top: 3px;
}
.contain {
  margin: auto;
  width: 500px;
  display: flex;
  justify-content: flex-end;
}
.showIncome {
  cursor: pointer;
  background: rgb(187, 246, 190);
  border: 1px solid #dcdfe6;
  color: hsl(220, 3%, 39%);
  transition: 0.9s;
  font-weight: 500;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
}
.showIncome:hover {
  background: rgb(53, 167, 110);
  color: white;
}
.showOutcome {
  cursor: pointer;
  background: rgb(246, 199, 187);
  border: 1px solid #dcdfe6;
  color: #606266;
  transition: 0.9s;
  font-weight: 500;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
}
.showOutcome:hover {
  background: rgb(200, 46, 59);
  color: white;
}
.showAll {
  line-height: 1;
  cursor: pointer;
  background: rgb(187, 188, 246);
  color: #606266;
  border: 1px solid #dcdfe6;
  transition: 0.9s;
  font-weight: 500;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
}
.showAll:hover {
  background: rgb(65, 104, 233);
  color: white;
}
</style>
