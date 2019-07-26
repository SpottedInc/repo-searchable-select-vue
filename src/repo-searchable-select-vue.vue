<template>
  <div class="repo-searchable-select-vue">
    <input 
      type="text"
      list="repo--results"
      id="repo--search" 
      autocomplete="off"
      v-bind:value="selectedValue"
      v-on:focus="onInputFocus"
      v-on:change="(evt) => onInputChange(evt.currentTarget.value)"
      v-bind="$attrs"
      v-bind:class="{error: hasError, success: !hasError}"
    />

    <datalist id="repo--results" >
      <option
        v-for="option in options"
        v-bind:selected="option.id == selected"
        v-bind:key="`option-${option.id}`"
        v-bind:data-value="option.id"
      >{{ option.value }}</option>
    </datalist>

    <input type="hidden" v-bind:name="name" v-bind:id="id || name" v-bind:value="selectedID" />
  </div>
</template>

<script>
export default {
  name: "RepoSearchableSelect",

  inheritAttrs: false,

  props: {
    name: {
      type: String,
      required: true
    },

    id: {
      type: String,
      required: false
    },

    options: {
      type: Array,
      required: true
    },

    value: {
      type: String,
      required: false,
      default: ""
    }
  },

  data() {
    return {
      selectedID: null,
      selectedValue: null,
      hasError: false
    };
  },

  computed: {},

  methods: {
    onInputFocus(evt) {
      evt.currentTarget.select();
    },

    onInputChange(givenValue = "") {
      this.selectedID =
        this.options
          .filter(
            ({ value }) =>
              value.toString().toLowerCase() ==
              givenValue.toString().toLowerCase()
          )
          .map(({ id }) => id)[0] || null;

      this.getSelectedName(this.selectedID);

      this.hasError =
        typeof this.$attrs.required !== "undefined" &&
        this.$attrs.required != "false" &&
        !this.selectedID;

      return this.selectedID;
    },

    getSelectedName(givenID = null) {
      this.selectedValue =
        this.options
          .filter(({ id }) => id == givenID)
          .map(({ value }) => value)[0] || null;

      return this.selectedValue;
    }
  },

  created() {
    if (this.options.length && this.value) {
      this.onInputChange(this.value);
    }
  },

  updated() {
    // Send the data on change
    this.$emit(
      "change",
      this.selectedID
        ? { id: this.selectedID, value: this.selectedValue }
        : null
    );
  }
};
</script>

<style >
</style>