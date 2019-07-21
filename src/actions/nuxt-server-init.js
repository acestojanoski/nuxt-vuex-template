/* eslint-disable */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uiSchema = new Schema({
    any: Schema.Types.Mixed
}, { collection: 'ui' });

let connection = null;
let model = null;

export const nuxtServerInit = async function ({ dispatch }) {
    if (connection === null) {
        connection = await mongoose.createConnection(
            process.env.UI_CONNECTION_STRING,
            {
                bufferCommands: false,
                bufferMaxEntries: 0,
                useNewUrlParser: true
            }
        );

        connection.model('ui', uiSchema);
    }

    if (model === null && connection !== null) {
        model = connection.model('ui');
        dispatch(
            'loadContent',
            await model.find({})
        );
    }
};
/* eslint-enable */
