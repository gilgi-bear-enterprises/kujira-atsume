import {Injectable} from 'angular2/core';

export class Resource {
    constructor(
        public id: number,
        public type: string,
        public name: string,
        public quantity: number,
        public description: string,
        public image: string
    ) { }
}

@Injectable()
export class InventoryService {
    getIngredients() {
        return inventoryPromise
            .then(resources => resources.filter(r => r.type === 'ingredient'));
    }
    
    getMaterials() {
        return inventoryPromise
            .then(resources => resources.filter(r => r.type === 'material'));
    }
    
    getResource(id: number | string) {
        return inventoryPromise
            .then(resources => resources.filter(r => r.id === +id)[0]);
    }
}

var resources = [
    new Resource(0, 'ingredient', 'Tomato', 4, 'It\'s a tomato. Deal with it.', 'http://images.all-free-download.com/images/graphicthumb/tomato_310436.jpg'),
    new Resource(1, 'ingredient', 'Potato', 2, 'Pot8to. PotAHto. Jagaimo.', 'http://images.all-free-download.com/images/graphicthumb/potatoes_clip_art_11374.jpg'),
    new Resource(2, 'ingredient', 'Cabbage', 5, 'Cabbage is the staple food in Poland. Delicious.' 'http://clipartfreefor.com/cliparts/cabbage-clip-art/cliparti1_cabbage-clip-art_08.jpg'),
    new Resource(3, 'material', 'Glue', 1, 'A dab here, a dab there.', 'http://images.all-free-download.com/images/graphicthumb/glue_clip_art_23224.jpg'),
    new Resource(4, 'material', 'Blue Paint', 1, 'It\'s not red paint. It\'s blue paint.', 'http://images.all-free-download.com/images/graphiclarge/bucket_of_paint_and_paintbrush_312403.jpg')
];

var inventoryPromise = Promise.resolve(resources);
