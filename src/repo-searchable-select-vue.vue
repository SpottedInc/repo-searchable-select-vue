<template>
  <div class="repo-searchable-select-vue">
    <input 
      type="text"
      autocomplete="off"
      v-bind:list="`repo--results-${componentInternalID}`"
      v-bind:id="`repo--search-${componentInternalID}`" 
      v-bind:value="selectedValue"
      v-bind="$attrs"
      v-bind:class="[{error: hasError}, {success: !hasError}]"
      v-on:focus="onInputFocus"
      v-on:change="(evt) => onInputChange(evt.currentTarget.value)"
    />

    <datalist v-bind:id="`repo--results-${componentInternalID}`" >
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
    },

    additionalclass: {
      type: String,
      required: false,
      default: ""
    }
  },

  data() {
    return {
      componentInternalID: Math.random().toString(36).substring(2,9),
      selectedID: null,
      selectedValue: null,
      hasError: false
    };
  },

  computed: {
    classes() {
      console.log('aa', this.additionalclass.split(' '));
      return this.additionalclass.split(' ');
    }
  },

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
        ? { id: this.selectedID, value: this.selectedValue, refer: `#${this.id}` }
        : null
    );
  }
};
</script>

<style >
</style>