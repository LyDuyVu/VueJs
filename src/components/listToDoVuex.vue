<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9">
        <input
          type="text"
          class="form-control"
          v-model="taskContent"
          placeholder="new task"
        />
      </div>
      <div class="col-lg-3 d-flex justify-content-end pb-5">
        <button @click="handleCreateTask" class="btn btn-outline-primary ">
          Add New Task
        </button>
      </div>
    </div>
    <div class="row">
      <div v-for="(item, index) in tasks" :key="index" class="listTask">
        <div class="listTask__content">
          <div class="listTask__content-check">
            <input type="checkbox" name="" id="" />
          </div>
          <div class="listTask__content-title">
            {{ item.title }}
          </div>
        </div>
        <div class="listTask__action pt-2">
          <b-button
            v-b-modal="`modal-prevent-closing-${item.id}`"
            class="btn btn-warning mx-2"
            @click="type = 'modify'"
            >Modify
          </b-button>
          <Modal :title="item.title" :id="item.id" :type="type" />

          <b-button
            v-b-modal="`modal-prevent-closing-${item.id}`"
            class="btn btn-danger"
            @click="type = 'delete'"
            >Delete</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "./modal.vue";
export default {
  props: {},
  components: {
    Modal,
  },
  data() {
    return {
      taskContent: "",
      type: "",
    };
  },
  created() {
    this.getTask();
  },
  computed: {
    ...mapGetters({
      tasks: "tasks",
    }),
  },
  methods: {
    ...mapActions(["getTask", "createTask"]),
    handleCreateTask() {
      this.taskContent &&
        this.createTask({
          completed: false,
          title: this.taskContent,
        });
    },
  },
};
</script>

<style lang="scss">
.listTask {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  &__content {
    @extend .listTask;
  }

  &__action {
    display: flex;
  }
}
</style>
