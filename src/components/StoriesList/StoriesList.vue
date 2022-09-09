<template>
  <b-container>
    <b-row>
      <b-col lg="6">
        <b-form-group
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Pesquisar título"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      :busy="isBusy"
      class="mt-3"
      outlined
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
        </div>
      </template>

      <template #cell(favorite)="row">
        <span class="align-center" @click="handleFavorite(row)">
          <b-icon-star v-if="!row.item.favorite"></b-icon-star>
          <b-icon-star-fill v-else></b-icon-star-fill>
        </span>
      </template>

      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? "Esconder" : "Mostrar" }} Detalhes
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col class="text-sm-right"
              ><b>Conteúdo: </b>
              <a :href="row.item.url">{{ row.item.url }}</a></b-col
            >
          </b-row>
        </b-card>
      </template>
    </b-table>
  </b-container>
</template>

<script>
import HackerNewsApiService from "../../Store/HackerNewsApiService.js";
import { BIconStar, BIconStarFill } from "bootstrap-vue";

const service = new HackerNewsApiService();

export default {
  components: {
    BIconStar,
    BIconStarFill,
  },
  data() {
    return {
      fields: [
        { key: "id" },
        { key: "title", label: "Título", filterByFormatted: true },
        { key: "type", label: "Tipo" },
        { key: "by", label: "Criado por" },
        { key: "favorite", label: "Favoritar" },
        { key: "show_details", label: "Detalhes" },
      ],
      isBusy: true,
      items: [],
      filter: null,
      filterOn: [],
    };
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
    handleFavorite(row) {
      let newValue = {
        ...row.item,
        favorite: !row.item.favorite,
      };

      this.items[row.index].favorite = newValue.favorite;
    },
  },
  mounted() {
    service.getAllTopStories(100).then((items) => {
      this.items = items.map((item) => {
        return { ...item, favorite: false };
      });
      console.log(items);
      this.toggleBusy();
    });
  },
};
</script>

<style>
.align-center {
  display: flex;
  justify-content: center;
}
</style>
