export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;

    constructor(id, name, description = '', price= 0, imageUrl= 'https://4.imimg.com/data4/NS/RT/MY-28174815/sony-vaio-laptop-500x500.jpg'){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;

    }

}
