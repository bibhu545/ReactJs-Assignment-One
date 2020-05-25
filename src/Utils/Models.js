export class ProductModel {
    id= Math.floor((Math.random() * 9999) + 1);
    name = "";
    category = "";
    description = "";
    price = 0;
}

export const Categories = [
    { id: 1, value: "Samsung" },
    { id: 2, value: "One Plus" },
    { id: 3, value: "Nokia" },
    { id: 4, value: "Apple" },
    { id: 5, value: "Microsoft" }
]

export const initialData = [
    { id: 1, name: "Galaxy S", category: "Samsung", description: "A good phone", price: 20000 },
    { id: 2, name: "Eight", category: "Nokia", description: "Very nice", price: 15000 },
    { id: 3, name: "Honor", category: "Apple", description: "Camera is good", price: 40000 },
    { id: 4, name: "Redmi", category: "Microsoft", description: "No comments", price: 50000 },
]