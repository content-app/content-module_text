module.exports = async function ({ client, space, environment }) {
    const fields = [
        {
            "id": "title",
            "name": "title",
            "type": "Symbol",
            "localized": false,
            "required": true,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "text",
            "name": "text",
            "type": "RichText",
            "localized": false,
            "required": true,
            "validations": [
                {
                    "enabledMarks": [
                        "bold",
                        "italic",
                        "underline",
                        "subscript",
                        "superscript"
                    ],
                    "message": "Only bold, italic, underline, subscript, and superscript marks are allowed"
                },
                {
                    "enabledNodeTypes": [
                        "heading-1",
                        "heading-2",
                        "heading-3",
                        "heading-4",
                        "heading-5",
                        "heading-6",
                        "hyperlink",
                        "unordered-list",
                        "ordered-list"
                    ],
                    "message": "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, link to Url, unordered list, and ordered list nodes are allowed"
                },
                {
                    "nodes": {}
                }
            ],
            "disabled": false,
            "omitted": false
        }
    ];

    const module = {
        name: 'Module: Text',
        description: '',
        displayField: 'title',
        fields,
        sys: {
            id: 'ModuleText',
        }
    }

    const contentType = await environment.createContentTypeWithId('ModuleText', module);
    await contentType.publish();
};
