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