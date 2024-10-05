export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "images",
            type: "array",
            title: "Images of the product",
            of: [{ type: "image" }]
        },
        {
            name: "description",
            type: "text",
            title: "Description"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "name"
            }
        },
        {
            name: "price",
            type: "number",
            title: "Price"
        },
        {
            name: "category",
            type: "reference",
            title: "Category",
            to: [{ type: "category" }]
        }
    ]
}