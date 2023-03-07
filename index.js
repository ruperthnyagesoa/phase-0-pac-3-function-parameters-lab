function introduction(name = "Aki") {
    return(`Hi, my name is ${name}.`);
} 
introduction();
function introductionWithLanguage(name="Aki", language="Ember.js"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage();
function introductionWithLanguageOptional(name="Aki", language="JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguageOptional();