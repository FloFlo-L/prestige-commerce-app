export default {
    name: "heroImages",
    type: "document",
    title: "Hero Images",
    fields: [
        {
            name: "images",
            type: "array",
            title: "Images",
            of: [
                { 
                    type: "object" ,
                    fields: [
                        {
                            name: "image",
                            type: "image",
                            title: "Image"
                        },
                        {
                            name: "name",
                            type: "string",
                            title: "Name"
                        }
                    ]
                }
            ]
        }
    ]
}