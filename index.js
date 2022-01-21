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
database
  .insert({ nome: "Trine", preco: 49.9 })
  .into("games")
  .then((data) => {
    database
      .select()
      .table("games")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
