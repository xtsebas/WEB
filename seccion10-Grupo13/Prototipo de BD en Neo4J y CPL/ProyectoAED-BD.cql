//Extensión utilizada para la escritura de este archivo: "Cypher Query Language" by Jake Boone
//y "Cypher Query Language Tools for Neoj" by Anthony J. Gatlin, usando VS Code.


// Se crea una base de datos llamada "universities"
CREATE DATABASE universities  


//Crea un nodo con la etiqueta University y asigna las propiedades name, states, 
//provides_becas, admission_exam y monthly_payment a los valores correspondientes.
//12 Universidades de Guatemala
CREATE (u:University {name: 'Universidad de San Carlos de Guatemala', states: ['Ciudad de Guatemala', 'San Marcos', 'Quetzaltenango', 'Huehuetenango', 'Suchitepequez', 'Solola', 'Alta Verapaz', 'Izabal', 'Zacapa', 'Chiquimula', 'Jutiapa', 'Jalapa', 'El Progreso', 'Chimaltenango', 'Baja Verapaz', 'Quiche'], provides_becas: true, admission_exam: true, monthly_payment: 0})
CREATE (u:University {name: 'Universidad Rafael Landivar', states: ['Ciudad de Guatemala', 'Quetzaltenango', 'Quiche'], provides_becas: false, admission_exam: true, monthly_payment: 4000})
CREATE (u:University {name: 'Universidad Francisco Marroquin', states: ['Ciudad de Guatemala'], provides_becas: true, admission_exam: true, monthly_payment: 5500})
CREATE (u:University {name: 'Universidad Galileo', states: ['Ciudad de Guatemala'], provides_becas: true, admission_exam: false, monthly_payment: 3500})
CREATE (u:University {name: 'Universidad Mariano Galvez de Guatemala', states: ['Ciudad de Guatemala', 'San Marcos', 'Quetzaltenango', 'Huehuetenango', 'Solola', 'Alta Verapaz', 'Zacapa', 'Jutiapa', 'Jalapa', 'Santa Rosa'], provides_becas: true, admission_exam: false, monthly_payment: 4200})
CREATE (u:University {name: 'Universidad del Valle de Guatemala', states: ['Ciudad de Guatemala', 'Solola', 'Escuintla'], provides_becas: true, admission_exam: true, monthly_payment: 5600})
CREATE (u:University {name: 'Universidad del Istmo', states: ['Guatemala, Quetzaltenango'], provides_becas: true, admission_exam: true, monthly_payment: 4600})
CREATE (u:University {name: 'Universidad de Occidente', states: ['Quetzaltenango', 'San Marcos', 'Totonicapan'], provides_becas: true, admission_exam: true, monthly_payment: 3000})
CREATE (u:University {name: 'Universidad Panamericana', states: ['Ciudad de Guatemala'], provides_becas: true, admission_exam: true, monthly_payment: 3600})
CREATE (u:University {name: 'Universidad Da Vinci de Guatemala', states: ['Ciudad de Guatemala'], provides_becas: false, admission_exam: true, monthly_payment: 3100})
CREATE (u:University {name: 'Universidad Mesoamericana', states: ['Ciudad de Guatemala', 'Quetzaltenango', 'Huehuetenango', 'Chimaltenango', 'San Marcos'], provides_becas: true, admission_exam: true, monthly_payment: 2900})
CREATE (u:University {name: 'Universidad InterNaciones', states: ['Ciudad de Guatemala'], provides_becas: true, admission_exam: true, monthly_payment: 3100})


//Crea un nodo con la etiqueta Faculty y asigna la propiedad name al valor correspondiente.
//Facultades más comúnes a lo largo de las universidades elegidas.
CREATE (f:Faculty {name: 'Facultad de Ciencias Sociales, Juridicas y Economicas'})
CREATE (f:Faculty {name: 'Facultad de Ingenieria'})
CREATE (f:Faculty {name: 'Facultad de Medicina'})
CREATE (f:Faculty {name: 'Facultad de Humanidades'})
CREATE (f:Faculty {name: 'Facultad de Ciencias y Tecnologia'})
CREATE (f:Faculty {name: 'Facultad de Ciencias de la Salud'})
CREATE (f:Faculty {name: 'Facultad de Arquitectura'})
CREATE (f:Faculty {name: 'Facultad de Ciencias Empresariales'})
CREATE (f:Faculty {name: 'Facultad de Educacion'})
CREATE (f:Faculty {name: 'Facultad de Diseño y Comunicacion'})
CREATE (f:Faculty {name: 'Facultad de Ciencias Agricolas y Ambientales'})
CREATE (f:Faculty {name: 'Facultad de Ciencias de la Comunicacion'})

//Se crean relaciones PERTENECE_A entre un nodos University con la propiedad name y un nodo 
//Faculty con la propiedad name para indicar que la universidad cuenta con esa facultad.
//Relaciones únicamente creadas para prototipado y pruebas del algoritmo.
MATCH (u:University {name: 'Universidad de San Carlos de Guatemala'}), (f:Faculty {name: 'Facultad de Ingenieria'})
CREATE (u)-[:PERTENECE_A]->(f)
MATCH (u:University {name: 'Universidad de San Carlos de Guatemala'}), (f:Faculty {name: 'Facultad de Medicina'})
CREATE (u)-[:PERTENECE_A]->(f)
MATCH (u:University {name: 'Universidad de San Carlos de Guatemala'}), (f:Faculty {name: 'Facultad de Ciencias Agricolas y Ambientales'})
CREATE (u)-[:PERTENECE_A]->(f)
MATCH (u:University {name: 'Universidad del Valle de Guatemala'}), (f:Faculty {name: 'Facultad de Ingenieria'})
CREATE (u)-[:PERTENECE_A]->(f)
MATCH (u:University {name: 'Universidad del Valle de Guatemala'}), (f:Faculty {name: 'Facultad de Educacion'})
CREATE (u)-[:PERTENECE_A]->(f)
MATCH (u:University {name: 'Universidad Panamericana'}), (f:Faculty {name: 'Facultad de Ingenieria'})
CREATE (u)-[:PERTENECE_A]->(f)
MATCH (u:University {name: 'Universidad InterNaciones'}), (f:Faculty {name: 'Facultad de Ingenieria'})
CREATE (u)-[:PERTENECE_A]->(f)
MATCH (u:University {name: 'Universidad Galileo'}), (f:Faculty {name: 'Facultad de Ingenieria'})
CREATE (u)-[:PERTENECE_A]->(f)

//Se crean índices en las propiedades de las universidades y las facultades para mejorar el rendimiento de las consultas.
CREATE INDEX states_index FOR (u:University) ON (u.state)
CREATE INDEX pb_index FOR (u:University) ON (u.provides_becas)
CREATE INDEX ae_index FOR (u:University) ON (u.admission_exam)
CREATE INDEX mp_index FOR (u:University) ON (u.monthly_payment)
CREATE INDEX faculty_index FOR (f:Faculty) ON (f.name)


//Caso de prueba para funcionamiento del algoritmo
//se realiza una consulta utilizando la sentencia MATCH, la cual devuelve todas las 
//universidades que cumplen con las condiciones establecidas en la cláusula WHERE: que 
//pertenezcan a la facultad de ingeniería, que se encuentren en la ciudad de Guatemala, 
//que ofrezcan becas, que tengan un examen de admisión y que el pago mensual sea menor a 5000.
MATCH (u:University)-[:PERTENECE_A]->(f:Faculty {name: 'Facultad de Ingenieria'})
WHERE 'Ciudad de Guatemala' IN u.states AND u.provides_becas = true AND u.admission_exam = true AND u.monthly_payment < 5000
RETURN u