// @flow

/* import YAML from "yamljs";
import * as fs from 'fs'; */

class Littera {
  /**
   * @constructor
   * @param {object} translations
   */
  constructor(translations = {}) {
    this.translations = translations;
    this.language = null;
  }

  /**
   * @name getTranslations
   * @description Returns loaded translations.
   * @param {string} language Return translations for a specific language.
   * @returns {object}
   */
  getTranslations = (language = null) => {
    if (language !== null && !(language instanceof String))
      throw Error("Language is not a string.");

    if (language) return this.translations[language];
    return this.translations;
  };

  /**
   * @name importTranslations
   * @description Loads translations.
   * @param {object} translations
   */
  importTranslations = translations => {
    if (!translations || !(translations instanceof Object))
      throw Error("Translations is undefined or not an Object.");

    if (this.language === null) this.language = Object.keys(translations)[0];
    this.translations = translations;
  };

  /**
   * @name importJSON
   * @description Imports translations from a JSON file.
   * @param {string} path Path to the JSON file.
   * @param {function} callback
   * {@link importTranslations}
   * @callback
   * @deprecated beacause of the "fs not found" problem in React environment.
   */
  importJSON = (path, callback) => {
    const fs = undefined; // Should be imported. [Not importing since its deprecated]

    fs.readFile(require.resolve(path), (err, data) => {
      if (err) {
        if (callback) callback(null, err);
        throw Error(err);
      } else {
        const result = JSON.parse(data);
        this.importTranslations(result);
        if (callback) callback(result, null);
      }
    });
  };
  
  /**
   * @name importYAML
   * @description Imports translations from a YAML file.
   * @param {string} path Path to the YAML file.
   * @param {function} callback
   * {@link importTranslations}
   * @callback
   * @deprecated beacause of the "fs not found" problem in React environment.
   */
  importYAML = (path, callback) => {
    const YAML = undefined; // Should be imported. [Not importing since its deprecated]

    YAML.load(path, (result, err) => {
      if (err) {
        if (callback) callback(null, err);
        throw Error(err);
      } else {
        this.importTranslations(result);
        if (callback) callback(result, null);
      }
    });
  };


  /**
   * @name setLanguage
   * @description Sets the active language
   * @param {string} language
   */
  setLanguage = language => {
    if (!language) throw Error("Language is undefined or not a String.");

    this.language = language;
  };

  /**
   * @name activeLanguage
   * @description Returns the active language.
   * @returns {string}
   */
  activeLanguage = () => {
    if (!this.language) throw "Language is not set.";
    return this.language;
  };

  /**
   * @name getLanguages
   * @description Returns a list of imported languages.
   * @returns {array}
   */
  getLanguages = () => Object.keys(this.language);

  /**
   * @name translate
   * @description Returns the right translation for the adequate language.
   * @param {string} key The translation key.
   * @param {string} language (optional)
   */
  translate = (key, language = this.language) => {
    if (language === null) throw Error("Language is not set.");
    if (
      this.translations === undefined ||
      !(this.translations[language] instanceof Object)
    )
      throw Error(`Translations for ${this.language} not found.`);

    return this.translations[language][key];
  };
}

export default Littera;
