export default {
    name: "category",
    type: "document",
    title: "Categories",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "description",
            type: "text",
            title: "Description"
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true // Reframe the image
            }
        }
    ]
}