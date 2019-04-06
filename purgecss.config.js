module.exports = {
    content: ['index.html'],
    css: ['tailwind_compiled.css'],
    extractors: [
        {
            extractor: class {
                static extract(content) {
                    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
                }
            },
            extensions: ['html']
        }
    ],
}
