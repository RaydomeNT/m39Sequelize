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
        await updateMovie({  actor: yargsObj.actor }, { title: yargsObj.title });
        //update movies from db, add updated actor to the title
    } else if (yargsObj.delete) {
        await deleteMovie({ title: yargsObj.title })
        //delete movies from db
    } else {
        console.log("Incorrect command")
    }
};

app(yargs.argv);