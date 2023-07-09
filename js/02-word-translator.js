let lang = prompt('Register a language either: es (for Español) - de (for Deutsch) - en (for English) - fr (for Français)');
window.console.log(typeof lang);

if(lang === "es") {
    document.write("Hola mundo");
} else if(lang === "de"){
    document.write("Hallo welt");
} else if(lang === "en"){
    document.write("Hello world");
} else if(lang === "fr"){
    document.write("Bonjour le monde");
} else{
    document.write("Hello world");
}