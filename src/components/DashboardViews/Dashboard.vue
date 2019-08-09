<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex text-xs-center>
          <v-data-table :headers="headers" :items="results" item-key="name">
            <template slot="items" slot-scope="props">
              <tr>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.amount }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    drawer: null,
    link: "",
    headers: [
      {
        text: "Display Name",
        value: "name",
        width: "500px",
        fixed: true
      },
      {
        text: "Amount",
        value: "amount",
        width: "500px",
        fixed: true
      }
    ],
    results: [{}],
    responsive: false,
    dialog: false,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:8000/api/dashboard", {
          headers: {
            Authorization: `Bearer ` + localStorage.token
          }
        })
        .then(response => {
          console.log(response.data);
          this.results = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  }
};
</script>

<style>
  /*@import url('https://fonts.googleapis.com/css?family=Lato:300,400,600,700');*/

* {
    font-family: Arial;
}

body {
    height: 100vh;
    background: #f9f9f9;
}

#chart, .chart-box {
    padding-top: 20px;
    padding-left: 10px;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 22px 35px -16px rgba(0,0,0, 0.1);
}

select.flat-select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: #008FFB url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'60px\' height=\'60px\'><polyline fill=\'white\' points=\'46.139,15.518 25.166,36.49 4.193,15.519\'/></svg>") no-repeat scroll right 2px top 9px / 16px 16px;
    border: 0 none;
    border-radius: 3px;
    color: #fff;
    font-family: arial,tahoma;
    font-size: 16px;
    font-weight: bold;
    outline: 0 none;
    height: 33px;
    padding: 5px 20px 5px 10px;
    text-align: center;
    text-indent: 0.01px;
    text-overflow: "";
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease 0s;
    width: auto;
    -webkit-transition: 0.3s ease all;
    -moz-transition: 0.3s ease all;
    -ms-transition: 0.3s ease all;
    -o-transition: 0.3s ease all;
    transition: 0.3s ease all;
  }
  select.flat-select:focus, select.flat-select:hover {
    border: 0;
    outline: 0;
  }
  

.apexcharts-canvas {
    margin: 0 auto;
}

#html {
    display: none;
}
</style>
