# Seminario de MongoDB

Este archivo contiene los comandos de los ejercicios del seminario de MongoDB


# Ejercicio clase 1

1.  Instalar MongoDB en ambiente local.
    
2.  Conectarse a MongoDB vía CLI.
    
3.  Crear una nueva base de datos llamada futbolfifa.
    
4.  Crear una nueva collection llamada players.
    
5.  Insertar 5 documentos en la collection players con datos básicos (nombre, apellido, posición, fecha de nacimiento, etc).
    
6.  Listar todos los documentos de la collection players.
    
7.  Crear otras collections con documentos (ej. teams, games, etc).
## Comandos
 **mongod** 
 **show dbs;**  
admin       0.000GB
config      0.000GB
local       0.000GB
**use futbolista**
   switchet to  db futbolista
   **db.createCollection("players")**
   { "ok" : 1}
   **db.players.insert**({nombre : "juan", posicion : "delantero", nacimiento :new ISODate("1990-09-18T16:00:00Z")})
WriteResult({ "nInserted" : 1 })
  **db.players.insert**({nombre : "Agustin", posicion : "Lateral", nacimiento :new ISODate("1989-07-03T16:00:00Z")})  
**db.players.insert**({nombre : "Juan Pablo", posicion : "Defensor", nacimiento :new ISODate("1989-10-03T16:00:00Z")})
**db.players.insert**{nombre : "Manuel", posicion : "Defensor", nacimiento :new ISODate("1999-01-11T16:00:00Z")})
 **db.players.insert**({nombre : "Martin", posicion : "central", nacimiento :new ISODate("1991-02-20T16:00:00Z")})
 **db.players.find().pretty()**
{
        "_id" : ObjectId("5f95b670239066809c3946ac"),
        "nombre" : "Pablo",
        "posicion" : "arquero",
        "nacimiento" : ISODate("1995-09-18T16:00:00Z")
}
{
        "_id" : ObjectId("5f95b698239066809c3946ad"),
        "nombre" : "Martin",
        "posicion" : "central",
        "nacimiento" : ISODate("1991-02-20T16:00:00Z")
}
{
        "_id" : ObjectId("5f95b6c7239066809c3946ae"),
        "nombre" : "Manuel",
        "posicion" : "Defensor",
        "nacimiento" : ISODate("1999-01-11T16:00:00Z")
}
{
        "_id" : ObjectId("5f95b714239066809c3946af"),
        "nombre" : "Juan Pablo",
        "posicion" : "Defensor",
        "nacimiento" : ISODate("1989-10-03T16:00:00Z")
}
{
        "_id" : ObjectId("5f95b783239066809c3946b0"),
        "nombre" : "Agustin",
        "posicion" : "Lateral",
        "nacimiento" : ISODate("1989-07-03T16:00:00Z")
}

# Ejercicio clase 2

1.  Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.
    
2.  Para cada movie, se debería guardar información como título (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array<String>), country (String), income (Number), duration (Number).
    
3.  Agregar películas usando insert(), insertOne() & insertMany().
    
4.  Actualizar películas agregando el field highlighted=true a aquellas con rating > 4.5.

## Comandos

**use netflix**
switched to db netflix
**db.createCollection("movies")**
{ "ok" : 1 }
**db.movies.insert**({nombre: "Terminator",anio : 1999,rating: 1,genero: "Accion",pais: "USA",duracion: 120})
WriteResult({ "nInserted" : 1 })
**db.movies.insertOne**({nombre: "Terminator 2",anio : 2002,rating: 2,genero: "Accion",pais: "USA",duracion: 130})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f99dcce7122a36a6655045c")
}
**db.movies.insertMany**([
{nombre: "Gladiador",anio : 2002,rating: 4,genero: "Accion",pais: "USA",duracion: 150},
{nombre: "Frozen",anio : 2016,rating: 3,genero: "Animada",pais: "USA",duracion: 120},
{nombre: "Monsters Ink.",anio : 2006,rating: 4,genero: "Animada",pais: "USA",duracion: 130},
{nombre: "Piratas del caribe",anio : 2012,rating: 3,genero: "Aventura",pais: "USA",duracion: 130},{nombre: "Piratas del caribe 3",anio : 2014,rating: 2,genero: "Aventura",pais: "USA",duracion: 130},{nombre: "Piratas del caribe 2",anio : 2015,rating: 5,genero: "Aventura",pais: "USA",duracion: 130}
])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f99de257122a36a6655045d"),
                ObjectId("5f99de257122a36a6655045e"),
                ObjectId("5f99de257122a36a6655045f"),
                ObjectId("5f99de257122a36a66550460"),
                ObjectId("5f99de257122a36a66550461"),
                ObjectId("5f99de257122a36a66550462")
        ]
}
**db.movies.updateMany**({rating : {$ gt:3}},{$set: {destacada: true}},{ upsert: true })
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
//aca me habia olvidado de agregar a los actores asi que setee un array vacio a todas las peliculas
**db.movies.updateMany** ({},{set: {Actores:[]}},{ upsert: true })
{ "acknowledged" : true, "matchedCount" : 8, "modifiedCount" : 8 }
**db.movies.update**({ _id:ObjectId("5fac9effa7b9bdf5277d5fb0")},{ $ set: {genero:"drama"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
**db.movies.find**({pais:"USA"})
{ "_id" : ObjectId("5fac9effa7b9bdf5277d5fb0"), "nombre" : "Terminator", "anio" : 1999, "rating" : 1, "genero" : "drama", "pais" : "USA", "duracion" : 120, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f10a7b9bdf5277d5fb1"), "nombre" : "Terminator 2", "anio" : 2002, "rating" : 2, "genero" : "Accion", "pais" : "USA", "duracion" : 130, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb2"), "nombre" : "Gladiador", "anio" : 2002, "rating" : 4, "genero" : "Accion", "pais" : "USA", "duracion" : 150, "destacada" : true, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb3"), "nombre" : "Frozen", "anio" : 2016, "rating" : 3, "genero" : "Animada", "pais" : "USA", "duracion" : 120, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb4"), "nombre" : "Monsters Ink.", "anio" : 2006, "rating" : 4, "genero" : "Animada", "pais" : "USA", "duracion" : 130, "destacada" : true, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb5"), "nombre" : "Piratas del caribe", "anio" : 2012, "rating" : 3, "genero" : "Aventura", "pais" : "USA", "duracion" : 130, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb6"), "nombre" : "Piratas del caribe 3", "anio" : 2014, "rating" : 2, "genero" : "Aventura", "pais" : "USA", "duracion" : 130, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb7"), "nombre" : "Piratas del caribe 2", "anio" : 2015, "rating" : 5, "genero" : "Aventura", "pais" : "USA", "duracion" : 130, "destacada" : true, "Actores" : [ ] }
**db.movies.find**({genero:"Aventura", rating:{ $ gt:3.5}, anio:{ $ gt:2008}})
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb7"), "nombre" : "Piratas del caribe 2", "anio" : 2015, "rating" : 5, "genero" : "Aventura", "pais" : "USA", "duracion" : 130, "destacada" : true, "Actores" : [ ] }
**db.movies.deleteMany**({anio:{ $lt : 1990}})
{ "acknowledged" : true, "deletedCount" : 0 }

# Ejercicio clase 3
1.  Utilizar la misma base de datos de películas e insertar varias películas con distinto contenido.
    
2.  Listar todas las películas del año 2018.
    
3.  Listar las 10 primeras películas de Hollywood.
    
4.  Listar las 5 películas más taquilleras.
    
5.  Listar el 2do conjunto de 5 películas más taquilleras.
    
6.  Repetir query 3 y 4 pero retornando sólo el título y genre.
    
7.  Mostrar los distintos países que existen en la base de datos.

## Comandos
**db.movies.find**({pais: "USA"}).limit(2).sort({anio: 1})
{ "_id" : ObjectId("5fac9effa7b9bdf5277d5fb0"), "nombre" : "Terminator", "anio" : 1999, "rating" : 1, "genero" : "drama", "pais" : "USA", "duracion" : 120, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f10a7b9bdf5277d5fb1"), "nombre" : "Terminator 2", "anio" : 2002, "rating" : 2, "genero" : "Accion", "pais" : "USA", "duracion" : 130, "Actores" : [ ] }
**db.movies.find().limit(5).sort**({rating: -1})
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb7"), "nombre" : "Piratas del caribe 2", "anio" : 2015, "rating" : 5, "genero" : "Aventura", "pais" : "USA", "duracion" : 130, "destacada" : true, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb4"), "nombre" : "Monsters Ink.", "anio" : 2006, "rating" : 4, "genero" : "Animada", "pais" : "USA", "duracion" : 130, "destacada" : true, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb2"), "nombre" : "Gladiador", "anio" : 2002, "rating" : 4, "genero" : "Accion", "pais" : "USA", "duracion" : 150, "destacada" : true, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb5"), "nombre" : "Piratas del caribe", "anio" : 2012, "rating" : 3, "genero" : "Aventura", "pais" : "USA", "duracion" : 130, "Actores" : [ ] }
{ "_id" : ObjectId("5fac9f2aa7b9bdf5277d5fb3"), "nombre" : "Frozen", "anio" : 2016, "rating" : 3, "genero" : "Animada", "pais" : "USA", "duracion" : 120, "Actores" : [ ] }
**db.movies.find().limit(5).sort**({rating: -1})
{ "_id" : ObjectId("5f99de257122a36a66550462"), "nombre" : "Piratas del caribe 2", "anio" : 2015, "rating" : 5, "genero" : "Aventura", "pais" : "USA", "duracion" : 130, "destacada" : true, "Actores" : [ ] }
{ "_id" : ObjectId("5f99de257122a36a6655045f"), "nombre" : "Monsters Ink.", "anio" : 2006, "rating" : 4, "genero" : "Animada", "pais" : "USA", "duracion" : 130, "destacada" : true, "Actores" : [ ] }
{ "_id" : ObjectId("5f99de257122a36a6655045d"), "nombre" : "Gladiador", "anio" : 2002, "rating" : 4, "genero" : "Accion", "pais" : "USA", "duracion" : 150, "destacada" : true, "Actores" : [ ] }
{ "_id" : ObjectId("5f99de257122a36a66550460"), "nombre" : "Piratas del caribe", "anio" : 2012, "rating" : 3, "genero" : "Aventura", "pais" : "USA", "duracion" : 130, "Actores" : [ ] }
{ "_id" : ObjectId("5f99de257122a36a6655045e"), "nombre" : "Frozen", "anio" : 2016, "rating" : 3, "genero" : "Animada", "pais" : "USA", "duracion" : 120, "Actores" : [ ] }
**db.movies.find**({pais: "USA"}, {nombre: 1, genero:1, _id:0}).limit(10).sort({anio: 1})
{ "nombre" : "Terminator", "genero" : "Accion" }
{ "nombre" : "Terminator 2", "genero" : "Accion" }
{ "nombre" : "Gladiador", "genero" : "Accion" }
{ "nombre" : "Monsters Ink.", "genero" : "Animada" }
{ "nombre" : "Piratas del caribe", "genero" : "Aventura" }
{ "nombre" : "Piratas del caribe 3", "genero" : "Aventura" }
{ "nombre" : "Piratas del caribe 2", "genero" : "Aventura" }
{ "nombre" : "Frozen", "genero" : "Animada" }
**db.movies.find**({}, {nombre: 1, genero: 1, _id: 0}).limit(2).sort({rating: -1})
{ "nombre" : "Piratas del caribe 2", "genero" : "Aventura" }
{ "nombre" : "Monsters Ink.", "genero" : "Animada" }
**db.movies.distinct**("pais")
[ "USA" ]
**db.movies.distinct**("genero")
[ "Accion", "Animada", "Aventura" ]
