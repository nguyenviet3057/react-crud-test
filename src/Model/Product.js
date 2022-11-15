export default class Product {
    constructor(id, category, description, name) {
        this.id = id;
        this.category = category;
        this.description = description;
        this.name = name;
    }
    setCategory(category) {
        this.category = category;
    }
    setDescription(description) {
        this.description = description;
    }
    setName(name) {
        this.name = name;
    }
}