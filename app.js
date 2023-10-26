const express = require("express");
const mysql = require("mysql2");

const app = express();
const portapi = 3300;

// connexion à la base de données
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Salma33270",
  database: "restaurant_api",
  port: 3306,
});

app.use(express.json());

// Démarrage du serveur Express
app.listen(portapi, () => {
  console.log(`Le serveur écoute sur le port ${portapi}`);
  connection.connect(function (err) {
    if (err) throw err; //affiche lerreur directement
    console.log("Connecté à MySQL");
  });
});

//-------------------------     ITEMS

// route 1 : GET All ITEMS
app.get("/items", (req, res) => {
  connection.query("SELECT * FROM items", (err, results) => {
    if (err) {
      console.error("Erreur lors de la requête : " + err);
      return res
        .status(500)
        .send("Erreur lors de la requête à la base de données.");
    }
    res.json(results);
  });
});


// route 2 and 3 : ADD A NEW ITEM
app.post("/items", (req, res) => {
   var name = req.body.items_name;
   var description = req.body.items_description;
   var price = req.body.items_price;
   var category = req.body.category_id;
  connection.query(
    "INSERT INTO items(items_name, items_description, items_price, category_id) VALUES(?,?,?,?)",
    [name, description, price, category],
    (err, result) => {
      if (err) throw err;
      res.send(result)
    }
  );
});
//http://localhost:3300/items/:items_name

// route 4 : GET AN ITEM with id
app.get("/items/:id", (req, res) => {
  const fetchid = req.params.id
  connection.query("SELECT * FROM items WHERE items_id=?", fetchid, (err, results)=> {
    if (err) {
      console.error("Erreur lors de la requête : " + err);
      return res
        .status(500)
        .send("Erreur lors de la requête à la base de données.");
    }
    res.json(results);
  });
});

// route 5 : UPDATE AN ITEM 
app.put("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const { items_name, items_description, items_price, category_id } = req.body;
  if (!items_name || !items_description || !items_price || !category_id) {
    return res.status(400).json({ error: "Toutes les données requises doivent être fournies." });
  }
  // maj dans bdd
  connection.query(
    "UPDATE items SET items_name = ?, items_description = ?, items_price = ?, category_id = ? WHERE items_id = ?",
    [items_name, items_description, items_price, category_id, itemId],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de la requête : " + err);
        return res.status(500).send("Erreur lors de la mise à jour de l'item.");
      }
      res.json({ message: "Item mis à jour avec succès." });
    }
  );
});
 // pour l'ex: http://localhost:3300/items/16

 // route 6 : DELET AN ITEM
app.delete("/items/:id", (req, res) => {
  const itemId = req.params.id;

  // Supprimer l'élément de la base de données
  connection.query(
    "DELETE FROM items WHERE items_id = ?",
    [itemId],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de la requête : " + err);
        return res.status(500).send("Erreur lors de la suppression de l'élément.");
      }
      res.json({ message: "Élément supprimé avec succès." });
    }
  );
});

// 
// -------------------------       CATEGORY
// 

// route 1 : GET All CATEGORYS
app.get("/category", (req, res) => {
  connection.query("SELECT * FROM category", (err, results) => {
    if (err) {
      console.error("Erreur lors de la requête : " + err);
      return res
        .status(500)
        .send("Erreur lors de la requête à la base de données.");
    }
    res.json(results);
  });
});

// route 3 : ADD A NEW CATEGORY
app.post("/category", (req, res) => {

  var category = req.body.category_id;
  var name = req.body.category_name;
  var description = req.body.category_description;
 connection.query(
   "INSERT INTO category(category_id, category_name, category_description) VALUES(?,?,?)",
   [category, name, description],
   (err, result) => {
     if (err) throw err;
     res.send(result)
   }
 );
});

// route 4 : GET A CATEGORY with id
app.get("/category/:id", (req, res) => {
  const fetchid = req.params.id
  connection.query("SELECT * FROM category WHERE category_id=?", fetchid, (err, results)=> {
    if (err) {
      console.error("Erreur lors de la requête : " + err);
      return res
        .status(500)
        .send("Erreur lors de la requête à la base de données.");
    }
    res.json(results);
  });
});

// route 5 : UPDATE A CATEGORY
app.put("/category/:id", (req, res) => {
  const categoryId = req.params.id;
  const { category_name, category_description } = req.body;
  if (!category_name || !category_description) {
    return res.status(400).json({ error: "Toutes les données requises doivent être fournies." });
  }
  // Mise à jour dans la base de données
  connection.query(
    "UPDATE category SET category_name = ?, category_description = ? WHERE category_id = ?",
    [category_name, category_description, categoryId],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de la requête : " + err);
        return res.status(500).send("Erreur lors de la mise à jour de la catégorie.");
      }
      res.json({ message: "Catégorie mise à jour avec succès." });
    }
  );
});

//route 6 : DELET A CATEGORY
app.delete("/category/:id", (req, res) => {
  const categoryId = req.params.id;

  // Supprimer la catégorie de la base de données
  connection.query(
    "DELETE FROM category WHERE category_id = ?",
    [categoryId],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de la requête : " + err);
        return res.status(500).send("Erreur lors de la suppression de la catégorie.");
      }
      res.json({ message: "Catégorie supprimée avec succès." });
    }
  );
});
// 
//-------------------------       FORMULA
// 

// route 1 : GET ALL FORMULA
app.get("/formula", (req, res) => {
  connection.query("SELECT * FROM formula", (err, results) => {
    if (err) {
      console.error("Erreur lors de la requête : " + err);
      return res
        .status(500)
        .send("Erreur lors de la requête à la base de données.");
    }
    res.json(results);
  });
});

// //route 2 : GET A ELEMENT PARAMETER
// // Route pour obtenir une formule en fonction de critères multiples
// app.get("/formula", (req, res) => {
//   const { formula_id, name, category, price } = req.query;

//   // Construisez la requête SQL en fonction des paramètres de filtre
//   let sql = "SELECT * FROM formula WHERE 1=1";

//   if (formula_id) {
//     sql += ` AND formula_id = ${formula_id}`;
//   }
//   if (name) {
//     sql += ` AND formula_name = '${name}'`;
//   }
//   if (category) {
//     sql += ` AND formula_category = '${category}'`;
//   }
//   if (price) {
//     sql += ` AND formula_price = ${price}`;
//   }

//   connection.query(sql, (err, results) => {
//     if (err) {
//       console.error("Erreur lors de la requête : " + err);
//       return res.status(500).send("Erreur lors de la requête à la base de données.");
//     }
//     res.json(results);
//   });
// });

// route 3 : ADD A NEW FORMULA
app.post("/formula", (req, res) => {
  var id = req.body.formula_id;
  var name = req.body.formula_name;
  var category = req.body.formula_category;
  var price = req.body.formula_price;
 connection.query(
   "INSERT INTO formula(formula_id, formula_name, formula_category, formula_price) VALUES(?,?,?,?)",
   [id, name, category, price],
   (err, result) => {
     if (err) throw err;
     res.send(result)
   }
 );
});

// route 4 : GET A FORMULA with id
app.get("/formula/:id", (req, res) => {
  const fetchid = req.params.id
  connection.query("SELECT * FROM formula WHERE formula_id=?", fetchid, (err, results)=> {
    if (err) {
      console.error("Erreur lors de la requête : " + err);
      return res
        .status(500)
        .send("Erreur lors de la requête à la base de données.");
    }
    res.json(results);
  });
});

// route 5 : UPDATE A FORMULA

app.put("/formula/:id", (req, res) => {
  const formulaId = req.params.id;
  const { formula_name, formula_category, formula_price } = req.body;
  if (!formula_name || !formula_category || !formula_price) {
    return res.status(400).json({ error: "Toutes les données requises doivent être fournies." });
  }

  // Mise à jour dans la base de données
  connection.query(
    "UPDATE formula SET formula_name = ?, formula_category = ?, formula_price = ? WHERE formula_id = ?",
    [formula_name, formula_category, formula_price, formulaId],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de la requête : " + err);
        return res.status(500).send("Erreur lors de la mise à jour de la formule.");
      }
      res.json({ message: "Formule mise à jour avec succès." });
    }
  );
});

// route 6 : DELET A FORMULA
app.delete("/formula/:id", (req, res) => {
  const formulaId = req.params.id;

  // Supprimer la formule de la base de données
  connection.query(
    "DELETE FROM formula WHERE formula_id = ?",
    [formulaId],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de la requête : " + err);
        return res.status(500).send("Erreur lors de la suppression de la formule.");
      }
      res.json({ message: "Formule supprimée avec succès." });
    }
  );
});



//  pour postman : http://localhost:3300/items