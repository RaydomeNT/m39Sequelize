const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie, readMovie, updateMovie, deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    // await sequelize.sync({alter: true});
    if (yargsObj.create) {
        await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
        //create movie to db
    } else if (yargsObj.read) {
        await readMovie({ title: yargsObj.title, actor: yargsObj.actor });
        //lists movie from db when you search by title
    } else if (yargsObj.update) {
        await updateMovie({ newTitle: yargsObj.title, title: yargsObj.title, newActor: yargsObj.newActor, actor: yargsObj.actor });
        //update movies from db
    } else if (yargsObj.delete) {
        await deleteMovie({ title: yargsObj.title });
        //delete movies from db
    } else {
        console.log("Incorrect command")
    }
};

app(yargs.argv);