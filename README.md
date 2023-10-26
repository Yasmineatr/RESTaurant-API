# Guide d'Installation de l'API RESTaurant

Avant de commencer à utiliser cette API, assurez-vous d'installer les outils nécessaires. Voici les trois composants clés et leurs utilités :

- **Express** : Un framework web pour simplifier la création d'applications web en Node.js.
- **mysql2** : Un module pour se connecter et interagir avec une base de données MySQL.
- **MySQL Workbench** : Un outil de gestion de base de données.

## Installation

1. **Node.js** : Assurez-vous d'avoir Node.js installé sur votre ordinateur. Vous pouvez le télécharger sur [nodejs.org](https://nodejs.org/).

2. **Base de données MySQL** : Assurez-vous d'avoir une base de données MySQL en cours d'exécution. Configurez vos informations de connexion dans le fichier `server.js` de votre projet.

3. **Express** : Installez Express en utilisant la commande suivante dans le terminal :

    ```bash
    npm install express
    ```

4. **mysql2** : Installez mysql2 en utilisant la commande suivante dans le terminal :

    ```bash
    npm install mysql2
    ```
## Configuration de l'Application

Avant de commencer à utiliser cette API, il est essentiel de comprendre la configuration de l'application. Le fichier `server.js` est le point de départ de votre serveur et contient les configurations nécessaires pour le faire fonctionner.

### Express : Framework Web

```javascript
const express = require("express");
const app = express();
app.use(express.json());

// Connexion à la Base de Données MySQL
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "VotreMotDePasse",
  database: "restaurant_api",
  port: 3306,
});

// Vos routes Express et autres configurations ici
```
# Guide d'Utilisation

Cette API RESTaurant vous permet de gérer les éléments d'un restaurant, y compris les articles, les catégories et les formules. V

# Méthodes 
## Items 

| Méthode | URL                  | Action sur Postman                       |
| ------- | -------------------- | ---------------------------------------- |
| GET     | /items               | [http://localhost:3300/items](http://localhost:3300/items) |
| POST    | /items               | [http://localhost:3300/items](http://localhost:3300/items) |
| GET     | /items/:id           | [http://localhost:3300/items/{id}](http://localhost:3300/items/{id}) |
| PUT     | /items/:id           | [http://localhost:3300/items/{id}](http://localhost:3300/items/{id}) |
| DELETE  | /items/:id           | [http://localhost:3300/items/{id}](http://localhost:3300/items/{id}) |

## Category


| Méthode | URL                  | Action sur Postman                       |
| ------- | -------------------- | ---------------------------------------- |
| GET     | /category            | [http://localhost:3300/category](http://localhost:3300/category) |
| POST    | /category            | [http://localhost:3300/category](http://localhost:3300/category) |
| GET     | /category/:id        | [http://localhost:3300/category/{id}](http://localhost:3300/category/{id}) |
| PUT     | /category/:id        | [http://localhost:3300/category/{id}](http://localhost:3300/category/{id}) |
| DELETE  | /category/:id        | [http://localhost:3300/category/{id}](http://localhost:3300/category/{id}) |

## Formula


| Méthode | URL                  | Action sur Postman                       |
| ------- | -------------------- | ---------------------------------------- |
| GET     | /formula             | [http://localhost:3300/formula](http://localhost:3300/formula) |
| POST    | /formula             | [http://localhost:3300/formula](http://localhost:3300/formula) |
| GET     | /formula/:id         | [http://localhost:3300/formula/{id}](http://localhost:3300/formula/{id}) |
| PUT     | /formula/:id         | [http://localhost:3300/formula/{id}](http://localhost:3300/formula/{id}) |
| DELETE  | /formula/:id         | [http://localhost:3300/formula/{id}](http://localhost:3300/formula/{id}) |

Avant de commencer, assurez-vous d'avoir installé les outils nécessaires, les bonnes routes et de fournir les données nécessaires lors de l'envoi de requêtes.





