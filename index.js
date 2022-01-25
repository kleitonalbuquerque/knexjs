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

console.log("*********************************************");

// INSERT e SELECT (NESTED QUERIES)

// database
//   .insert({ nome: "Trine", preco: 49.9 })
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

console.log("*********************************************");

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

console.log("*********************************************");

// Query crua (pura) - RAW

// database
//   .raw("SELECT * FROM games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("*********************************************");

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

console.log("*********************************************");

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

console.log("*********************************************");

// ORDER BY

database
  .select()
  .table("games")
  .orderBy("preco", "asc")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); // desc // asc
