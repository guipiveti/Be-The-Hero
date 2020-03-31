const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config();

module.exports = {

    async translate(frase, idioma) {
        const languageTranslator = new LanguageTranslatorV3({
            authenticator: new IamAuthenticator({ apikey: process.env.LANGUAGE_TRANSLATOR_APIKEY }),
            url: 'https://gateway.watsonplatform.net/language-translator/api/',
            version: '2020-03-28',
        });

        return new Promise((resolve, reject) => {
            try {
                const response = languageTranslator.translate({
                    text: frase,
                    source: 'pt',
                    target: idioma
                }).then(response => {
                    if (response.status = 200) {
                        //console.log(response.result.translations);
                        //const translation_array = [];
                        //response.result.translations.forEach((translation) => { translation_array.push(translation.translation) });
                        //console.log(translation_array);
    
                        //return (translation_array);
                        return (response.result.translations);
                    }
                    return (["erro"]);
                })
                .catch(err => {
                    console.log('error: ', err);
                    return (["erro"]);
                });
                resolve(response); // Return the translations
            } catch (error) {
                reject(error); // If there's an error, return the error
            }
        });

            
   
   
    }
}