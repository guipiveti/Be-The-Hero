const generateUniqueID = require ('../../src/utils/generateUniqueID');

describe('Generate Unique ID', ()=>{
    it('Should generate an unique ID',()=>{
        //expect(2+2).toBe(4);

        const id = generateUniqueID();
        expect(id).toHaveLength(8);



    });
})