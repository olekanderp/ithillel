<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-row>
        <el-col :span="8">
          <todo-form :localStorageName=localStorageName @setTodoItems="handleSetTodoItems"/>
        </el-col>

        <el-col :span="8">
          <ul>
            <li v-for="item in todoItems" :key="item.id">
              <el-row style="margin-bottom: 10px">
                {{ item.title }}
                <el-button
                    style="margin-left: 20px"
                    type="danger"
                    circle
                    @click="removeTodoItem(item.id)">
                  X
                </el-button>
              </el-row>


            </li>
          </ul>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {ElButton, ElHeader, ElMain, ElContainer, ElRow, ElCol} from "element-plus";
import TodoForm from "./components/TodoForm.vue";

export default {
  components: {
    ElButton,
    ElHeader,
    ElMain,
    ElContainer,
    ElRow, ElCol,
    TodoForm
  },
  data() {
    return {
      todoItems: [],
      localStorageName: 'todoList'
    }
  },
  created() {
    this.loadFormsFromLocalStorage()
  },

  methods: {
    handleSetTodoItems() {
      this.loadFormsFromLocalStorage()
    },
    loadFormsFromLocalStorage() {
      const forms = JSON.parse(localStorage.getItem(this.localStorageName)) || [];
      this.todoItems = forms;
    },
    removeTodoItem(id) {
      const existingForms = JSON.parse(localStorage.getItem(this.localStorageName)) || [];
      const updatedForms = existingForms.filter(form => form.id !== id);
      localStorage.setItem(this.localStorageName, JSON.stringify(updatedForms));
      this.loadFormsFromLocalStorage();
    }
  }

}
</script>