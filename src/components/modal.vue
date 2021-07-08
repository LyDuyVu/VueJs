<template>
  <div class="model-action">
    <b-modal
      :id="`modal-prevent-closing-${id}`"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      v-if="type === 'modify'"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <b-modal
      :id="`modal-prevent-closing-${id}`"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleDelete(id)"
      v-else
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :label="`do you want delete ${title} ?`"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    type: String,
    id: Number,
    title: String,
  },
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
    };
  },

  methods: {
    ...mapActions(["deleteTask"]),
    handleDelete(id) {
      console.log("🚀 ~ file: modal.vue ~ line 70 ~ handleDelete ~ id", id);
      this.deleteTask({ id: id });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      console.log("hehe");
      // Trigger submit handler
      this.handleSubmit();
    },

    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      console.log("error");

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>

<style lang="scss">
.modal-action {
}
</style>
