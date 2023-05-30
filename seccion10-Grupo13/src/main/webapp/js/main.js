$(document).ready(function(){
    mainSearch();
});

function runQuery() {
    const arrayObjetos = [
        { nombre: 'Juan', edad: 25 },
        { nombre: 'María', edad: 30 },
        { nombre: 'Pedro', edad: 28 },
        { nombre: 'Ana', edad: 32 },
        { nombre: 'Luis', edad: 27 }
    ];
    let universityArray = []
    const driver = neo4j.driver('bolt://44.203.107.46:7687', neo4j.auth.basic('neo4j', 'calculation-exception-contrasts'));
    const facultyName = document.getElementById('fac').value;
    const depName = document.getElementById('DEP').value;
    const query = `use universities MATCH (u:University)-[:PERTENECE_A]->(f:Faculty {name: '${facultyName}'}) WHERE '${depName}' IN u.states RETURN u`;

    const session = driver.session();

    session.run(query)
        .then(result => {
            result.records.forEach(record => {
                let universityNode = record.get('u');
                universityArray.push(universityNode);
            });
        })
        .catch(error => {
            console.error('Error executing Cypher query', error);
        })
        .finally(() => {
            session.close();
            driver.close();
        });
    console.log(universityArray);
    showCorrectCards(universityArray);

}

//asi se llaman a las universidades solo que se hace por cada una xd
//const universidadTitle = document.getElementById('id').innerHTML;
//const departamentos = document.getElementById('id').innerText;
//const beca = document.getElementById('id').innerText;
//const admision = document.getElementById('id').innerText;
//const mensualidad = document.getElementById('id').innerText;


function mainSearch(){

};

function searchUniversity(){


}

function filter(){

};

function showCorrectCards(value) {
    const arrayU = ['USAC', 'URL', 'MARRO', 'GALILEO', 'MARIANO', 'UVG', 'UNIS', 'UDO', 'PANA', 'VINCI', 'MESO', 'INTER'];
    const arrayu = ['usac', 'url', 'marro', 'galileo', 'mariano', 'uvg', 'unis', 'udo', 'pana', 'vinci', 'meso', 'inter'];

    value.forEach((element) => {
        console.log(element.name);
        for (let i = 0; i < arrayu.length; i++) {
            if (document.getElementById(arrayU[i]).innerText === element.name) {
                document.getElementById(arrayu[i]).style.display = "block";
            }
        }
    });
}

