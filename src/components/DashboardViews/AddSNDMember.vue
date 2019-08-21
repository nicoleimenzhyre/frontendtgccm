<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex text-xs-center>
          Add SND Registration

            <form>
          <v-text-field
            v-model="first_name"
            :error-messages="firstNameErrors"
            :counter="10"
            label="First Name"
            required
            @input="$v.first_name.$touch()"
            @blur="$v.first_name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="last_name"
            :error-messages="lastNameErrors"
            label="Last Name"
            required
            @input="$v.last_name.$touch()"
            @blur="$v.last_name.$touch()"
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :error-messages="selectErrors"
            label="Item"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>
      
          <v-btn class="mr-4" @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>


export default {
  
};
</script>
