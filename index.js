const database = require("./db");

// Insert
// var dados = [
//   {
//     nome: "COD",
//     preco: 59.9,
//   },
//   {
//     nome: "COD 2",
//     preco: 89.9,
//   },
//   {
//     nome: "GTA V",
//     preco: 129.9,
//   },
// ];

// // Teste insert
// // var query = database.insert(dados).into("games");
// // console.log(query.toQuery());

// database
//   .insert(dados)
//   .into("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("*********************************************");

// SELECT

// database
//   .select(["nome", "preco"])
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// INSERT e SELECT (NESTED QUERIES)

// database
//   .insert({ nome: "WOW", preco: 39.9 })
//   .into("games")
//   .then((data) => {
//     database
//       .select()
//       .table("games")
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// WHERE

// var query = database
//   .select(["id", "preco"])
//   // .where({ nome: "Trine" })
//   .whereRaw("nome = 'GTA V' OR preco > 70")
//   .table("games");
// console.log(query.toQuery());

// database
//   .select()
//   .whereRaw("nome = 'GTA V' OR preco > 120")
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Query crua (pura) - RAW

// database
//   .raw("SELECT * FROM games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DELETE

// database
//   .where({ id: 2 })
//   .delete()
//   .table("games")
//   .then((data) => {
//     console.log("Game excluído com sucesso! " + data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// UPDATE

// database
//   .where({ id: 3 })
//   .update({ nome: "COD Modern Warfare" })
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ORDER BY

// database
//   .select()
//   .table("games")
//   .orderBy("preco", "asc")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   }); // desc // asc

// Inserts associados

// database
//   .insert({
//     nome: "blizzard",
//     game_id: 7,
//   })
//   .into("estudios")
//   .then((data) => {
//     database
//       .select()
//       .table("estudios")
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// JOIN 1 p 1

// database
//   .select([
//     "games.*",
//     "estudios.id as estudio_id",
//     "estudios.nome as estudio_nome",
//   ])
//   .table("games")
//   .innerJoin("estudios", "estudios.game_id", "games.id")
//   .where("games.id", 7)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// database
//   .select(["games.*", "estudios.nome as estudio_nome"])
//   .table("games")
//   .innerJoin("estudios", "estudios.game_id", "games.id")
//   .orderBy("estudios.game_id")
//   .then((data) => {
//     var game = {
//       id: 0,
//       nome: "",
//       estudios: [],
//     };

//     game.id = data[0].id;
//     game.nome = data[0].nome;

//     data.forEach((estudio) => {
//       game.estudios.push({ nome: estudio.estudio_nome });
//     });
//     console.log(game);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Relacionamento many to many

database
  .select(["nome"])
  .table("games_estudios")
  .innerJoin("games", "games.id", "games_estudios.game_id")
  .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
  .where("games_estudios.estudio_id", 3)
  .orderBy("games.id", "asc")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
