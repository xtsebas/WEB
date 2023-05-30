$(document).ready(function(){
    mainSearch();
});

function runQuery() {
   
    let universityArray = []
    
    const driver = neo4j.driver('bolt://44.203.107.46:7687', neo4j.auth.basic('neo4j', 'calculation-exception-contrasts'));
    const facultyName = document.getElementById('fac').value;
    const depName = document.getElementById('DEP').value;
    const query = `use universities MATCH (u:University)-[:PERTENECE_A]->(f:Faculty {name: '${facultyName}'}) WHERE '${depName}' IN u.states RETURN u.name`;

    const session = driver.session();

    session.run(query)
    .then(result => {
        result.records.forEach(record => {
            let universityName = record.get('u.name'); // Acceder a 'u.name' en lugar de 'u'
            universityArray.push(universityName);
            console.log("si");
            console.log(universityName);
            console.log("si");
        });
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
    console.log(universityArray);
    showCorrectCards(universityArrayI);

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

    for (let i = value.length - 1; i >= 0; i--) {
        const element = value[i];
        console.log(element.name);
        for (let j = 0; j < arrayu.length; j++) {
            if (document.getElementById(arrayU[j]).innerText === element) {
                document.getElementById(arrayu[j]).style.display = "block";
            }
        }
    }
}

