const Movie = require("./table");

exports.createMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);
    } catch (error) {
        console.log(error)
    }
}; //node src/app.js --create --title "" --actor ""

exports.readMovie = async (yargsObj) => {
    try {
        const readMovie = await Movie.findAll({ where: { title: yargsObj.title }});
        console.log(readMovie);
    } catch (error) {
        console.log(error);
    }
}; //use node src/app --read --title ""

exports.updateMovie = async (yargsObj) => {
    try {
        const updateMovie = await Movie.update ({ title: yargsObj.title, newTitle: yargsObj.newTitle, actor: yargsObj.actor, newActor: yargsObj.newActor });
        console.log(updateMovie);
    } catch (error) {
        console.log(error);
    }
}; //use node src/app --update --title "" --actor ""

exports.deleteMovie = async (yargsObj) => {
    try {
      await Movie.destroy({ where: { title: yargsObj.title }});
      console.log("deleted")
    } catch (error) {
      console.log(error);
    }
  }; //use node src/app --delete --title ""