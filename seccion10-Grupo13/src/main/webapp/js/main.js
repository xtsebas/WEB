$(document).ready(function(){
    mainSearch();
});

const universityArray = []

function runQuery() {
    const driver = neo4j.driver('bolt://44.203.107.46:7687', neo4j.auth.basic('neo4j', 'calculation-exception-contrasts'));
    const facultyName = document.getElementById('fac').value;
    const depName = document.getElementById('DEP').value;
    const query = `MATCH (u:University)-[:PERTENECE_A]->(f:Faculty {name: '${facultyName}'}) WHERE '${depName}' IN u.states RETURN u`;

    const session = driver.session();

    session.run(query)
        .then(result => {
            result.records.forEach(record => {
                const universityNode = record.get('u');
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
    showIfMatch();
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

function showIfMatch(){


}