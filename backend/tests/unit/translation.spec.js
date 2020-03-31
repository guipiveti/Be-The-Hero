const Watson = require ('../../src/services/ibmWatson');

describe('Translate text', ()=>{
    it('Should be able to make a translation',async ()=>{
        const traducao = await Watson.translate("Olá, meu nome é Guilherme.", "en");
        expect(traducao).not.toBeNull();
    });
})