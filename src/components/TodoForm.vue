<template>
  <el-form :model="form">


    <h2 class="text-large font-600 mr-3"> Create Todo Item </h2>
    <el-form-item>
      <el-input v-model="form.title" placeholder="Title" size="large"/>
    </el-form-item>

    <el-form-item>
      <el-input type="textarea" v-model="form.description" placeholder="Description" size="large"/>
    </el-form-item>

    <el-form-item>
      <el-select
          v-model="form.status"
          placeholder="Select"
          size="large"
      >
        <el-option
            v-for="item in todoStatuses"
            :key="item.id"
            :label="item.title"
            :value="item.value"

        />
      </el-select>
    </el-form-item>
    <el-button @click.stop="handleSubmit" type="primary">Save</el-button>
  </el-form>
</template>

<script>
import {ElForm, ElFormItem, ElInput, ElSelect, ElOption} from "element-plus";
import {todoStatuses} from "../common/options.js";
import * as yup from 'yup';


const schema = yup.object().shape({
  title: yup.string().required('Title is required').min(2, 'Title must be at least 2 characters'),
  description: yup.string().required('Description email').min(10, 'Description must be at least 2 characters'),
});

export default {
  name: 'TodoForm',
  props:{
    localStorageName:{
      type:String,
      require: true
    }
  },
  components: {
    ElForm, ElFormItem, ElInput, ElSelect, ElOption
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
        status: 'not-completed'
      }
    }
  },
  computed: {
    todoStatuses() {
      return todoStatuses;
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await schema.validate(this.form, { abortEarly: false });
        const formWithId = { ...this.form, id: Date.now() };
        this.saveFormToLocalStorage(formWithId)
        this.$emit('setTodoItems');
        this.resetForm()
      } catch (err) {
        console.log(err)
      }

    },
    resetForm() {
      this.form = {
        title: '',
        description: '',
        status: 'not-completed'
      };
    },
    saveFormToLocalStorage(form) {
      const existingForms = JSON.parse(localStorage.getItem(this.localStorageName)) || [];
      existingForms.push(form);
      localStorage.setItem(this.localStorageName, JSON.stringify(existingForms));
    }
  }
}
</script>