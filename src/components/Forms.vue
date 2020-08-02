<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules">
      <ElFormItem label="Type" prop="type">
        <ElSelect
          value=""
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type"
        >
          <ElOption label="Income" value="income" />
          <ElOption label="Outcome" value="outcome" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comments">
        <ElInput v-model="formData.comments" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput ref="number" v-model.number="formData.value" />
      </ElFormItem>
      <ElButton type="primary" @click="onSubmit">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Forms",
  data: () => ({
    formData: {
      type: "income",
      comments: "",
      value: 0
    },
    rules: {
      type: [
        { required: true, message: "Please select a type", trigger: "blur" }
      ],
      comments: [
        {
          required: true,
          message: "Please input a comments",
          trigger: "change"
        }
      ],
      value: [
        { required: true, message: "Please input a value", trigger: "change" },
        {
          type: "number",
          message: "Value must be a number!",
          trigger: "change"
        },
        {
          validator: (rule, value, callback) => {
            if (value !== 0) {
              callback();
            } else {
              callback("Zero is not acceptable");
            }
          },
          trigger: "blur"
        }
      ]
    }
  }),
  methods: {
    ...mapActions(["onFormSubmit"]),
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (this.formData.type === "outcome" && this.formData.value > 0) {
          return alert("The outcome cannot be equal to 0 or more");
        }
        if (this.formData.type === "income" && this.formData.value < 0) {
          return alert("The income cannot be equal to 0 or smaller");
        }
        if (valid) {
          console.dir(this.formData.type);

          this.onFormSubmit(this.formData);
          this.$refs.addItemForm.resetFields();
        }
      });
    }
  }
};
</script>

<style scoped>
.form-card {
  margin: auto;
  max-width: 500px;
}
.type-select {
  width: 100%;
}
</style>
