import Realm from 'realm';

class GenaralData extends Realm.Object {};
GenaralData.schema = {
    name: 'GenaralData',
    properties: {
        firstTime: {
            type: 'bool',
            optional: true
        }
    }
};

export default new Realm({
    schema: [GenaralData]
});
