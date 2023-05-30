$(document).ready(function(){
    mainSearch();
});

function runQuery() {
   
    let universityArray = []
    const universityNodesAsObj = []; //Array de nodos en forma de objetos.

    
    const driver = neo4j.driver('bolt://44.203.107.46:7687', neo4j.auth.basic('neo4j', 'calculation-exception-contrasts'));
    const facultyName = document.getElementById('fac').value;
    const depName = document.getElementById('DEP').value;
    const query = `use universities MATCH (u:University)-[:PERTENECE_A]->(f:Faculty {name: '${facultyName}'}) WHERE '${depName}' IN u.states RETURN u.name, u.provides_becas, u.admission_exam, u.monthly_payment`;

    const session = driver.session();
    session.run(query)
    .then(result => {
        result.records.forEach(record => {
            let universityName = record.get('u.name'); // Acceder a 'u.name' en lugar de 'u'
            let universityScholarShip = record.get('u.provides_becas');
            let universityExam = record.get('u.admission_exam');
            let universityMP = record.get('u.monthly_payment'); //Variable que es usada para verificar si es un objeto y extraer el valor entero en la variable monthlyPayment
            let monthlyPayment;

            if (typeof universityMP === 'object' && 'low' in universityMP && 'high' in universityMP) {
            // Si es una representación de Integer
            monthlyPayment = universityMP.low || universityMP.high;
            } else {
            // Si es un número regular
            monthlyPayment = universityMP;
            }

            let universityObj = [{name: universityName, scholarship: universityScholarShip, admission_exam: universityExam, monthly_payment: monthlyPayment }]
            universityNodesAsObj.push(universityObj);
            universityArray.push(universityName); //Array para aparición de las cards

        });
        console.log(universityNodesAsObj);
        console.log(universityArray);
        showCorrectCards(universityArray);
    })
    .catch(error => {
        console.error('Error executing Cypher query', error);
    })
    .finally(() => {
        session.close();
        driver.close();
    });

    const universityArrayI = universityArray.reverse();
    console.log(universityArrayI);
    showCorrectCards(universityArrayI);

}

//asi se llaman a las universidades solo que se hace por cada una xd
//const universidadTitle = document.getElementById('id').innerHTML;
//const departamentos = document.getElementById('id').innerText;
//const beca = document.getElementById('id').innerText;
//const admision = document.getElementById('id').innerText;
//const mensualidad = document.getElementById('id').innerText;

function filter(){

};

function showCorrectCards(value) {
    const arrayU = ['USAC', 'URL', 'MARRO', 'GALILEO', "MARIANO", 'UVG', 'UNIS', 'UDO', 'PANA', 'VINCI', 'MESO', 'INTER'];
    const arrayu = ['usac', 'url', 'marro', 'galileo', "mariano", 'uvg', 'unis', 'udo', 'pana', 'vinci', 'meso', 'inter'];

    for (let i = value.length - 1; i >= 0; i--) {
        const element = value[i];
        for (let j = 0; j < arrayu.length; j++) {
            if (document.getElementById(arrayU[j]).innerText === element) {
                document.getElementById(arrayu[j]).style.display = "block";
            }
        }
    }
}

