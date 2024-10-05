export default {
    name: "heroImages",
    type: "document",
    title: "Hero Images",
    fields: [
        {
            name: "images",
            type: "array",
            title: "Images",
            of: [{ type: "image" }]
        }
    ]
}