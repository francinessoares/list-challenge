import HackerNewsApiService from '../../Store/HackerNewsApiService.js';

const service = new HackerNewsApiService();
export default (await import('vue')).defineComponent({
components: {
BIconStar,
BIconStarFill
},
data() {
return {
fields: [
{ key: 'id', sortable: true },
{ key: 'title', label: 'Título' },
{ key: 'type', label: 'Tipo' },
{ key: 'by', label: 'Criado por' },
{ key: 'favorite', label: 'Favoritar' },
{ key: 'show_details', label: 'Conteúdo' }
],
isBusy: true,
items: []
};
},
methods: {
toggleBusy() {
this.isBusy = !this.isBusy;
},
handleFavorite(row) {
let newValue = {
...row.item,
favorite: !row.item.favorite
};

this.items[row.index].favorite = newValue.favorite;
}
},
mounted() {
service.getAllTopStories(100).then(items => {
this.items = items.map((item) => { return { ...item, favorite: false }; });
this.toggleBusy();
});

}
});
function __VLS_template() {
// @ts-ignore
[items, fields, isBusy, handleModal, handleFavorite];
return {};
}
