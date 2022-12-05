const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@home': path.resolve(__dirname, 'src/home'),
            '@create_note_page': path.resolve(__dirname, 'src/create_note_page'),
            '@edit_note_page': path.resolve(__dirname, 'src/edit_note_page'),
            '@page_layout': path.resolve(__dirname, 'src/page_layout'),
            '@page_not_found': path.resolve(__dirname, 'src/page_not_found'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
    };

    return config;
};
