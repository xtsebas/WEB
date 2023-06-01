$(document).ready(function(){

});

const arrayU = ['USAC', 'URL', 'MARRO', 'GALILEO', "MARIANO", 'UVG', 'UNIS', 'UDO', 'PANA', 'VINCI', 'MESO', 'INTER'];
const arrayu = ['usac', 'url', 'marro', 'galileo', "mariano", 'uvg', 'unis', 'udo', 'pana', 'vinci', 'meso', 'inter'];
const universityNodesAsObj = []; //Array de nodos en forma de objetos.
let universityArray = []

function runQuery() {
    hideAgain(universityArray)
    universityArray.length = 0
    const driver = neo4j.driver('bolt+s://2dbb53ee02934126d1c7f197927b3059.neo4jsandbox.com:7687', neo4j.auth.basic('neo4j', 'calculation-exception-contrasts'));
    const facultyName = document.getElementById('fac').value;
    const depName = document.getElementById('DEP').value;
    const query = `use universities MATCH (u:University)-[:PERTENECE_A]->(f:Faculty {name: '${facultyName}'}) WHERE '${depName}' IN u.states RETURN u.name`;

    const session = driver.session();
    session.run(query)
    .then(result => {
        result.records.forEach(record => {
            let universityName = record.get('u.name'); // Acceder a 'u.name' en lugar de 'u'
            universityArray.push(universityName); //Array para aparición de las cards

        });
        showCorrectCards(universityArray);
    })
    .catch(error => {
        console.error('Error executing Cypher query', error);
    })
    .finally(() => {
        session.close();
        driver.close();
    });


}

function filter(){
    hideAgain(universityArray)
    let universityArrayFilter = []
    const facultyName = document.getElementById('fac').value;
    const depName = document.getElementById('DEP').value;
    const query = `use universities MATCH (u:University)-[:PERTENECE_A]->(f:Faculty {name: '${facultyName}'}) WHERE '${depName}' IN u.states`;
    let newQuery = ``;
    let referencePrice = parseInt(document.getElementById('valorRango').innerHTML)
    let referenceScholar = document.querySelector('input[name="btn"]:checked').value;
    let referenceAdmission = document.querySelector('input[name="btnradio"]:checked').value;

    console.log(referenceAdmission)
    console.log(referenceScholar)

    let BrefeScholar = booleanGetter(referenceScholar)
    let BrefAdmission = booleanGetter(referenceAdmission)

    console.log(BrefeScholar)
    console.log(BrefAdmission)


    if(referenceAdmission == '-1' && referenceScholar == '-1'){
        newQuery = query + ` AND u.monthly_payment < `+referencePrice+` RETURN u.name`;
    }else{
        if(referenceAdmission != '-1' && referenceScholar != '-1'){
            newQuery = query + ` AND u.monthly_payment < `+referencePrice+` AND u.admission_exam = `+BrefAdmission+` AND u.provides_becas = `+BrefeScholar+` RETURN u.name`;
        }else if(referenceScholar != '-1'){
            newQuery = query + ` AND u.monthly_payment < `+referencePrice+` AND u.provides_becas = `+BrefeScholar+` RETURN u.name`;
        }else if(referenceAdmission != '-1'){
            newQuery = query + ` AND u.monthly_payment < `+referencePrice+` AND u.admission_exam = `+BrefAdmission+` RETURN u.name`;
        }
    }

    const driver = neo4j.driver('bolt+s://2dbb53ee02934126d1c7f197927b3059.neo4jsandbox.com:7687', neo4j.auth.basic('neo4j', 'calculation-exception-contrasts'));
    console.log(newQuery)
    const session = driver.session();
    session.run(newQuery)
        .then(result => {
            result.records.forEach(record => {
                let universityName = record.get('u.name'); // Acceder a 'u.name' en lugar de 'u'
                universityArrayFilter.push(universityName); //Array para aparición de las cards

            });
            console.log(universityArrayFilter)
            showCorrectCards(universityArrayFilter);
        })
        .catch(error => {
            console.error('Error executing Cypher query', error);
        })
        .finally(() => {
            session.close();
            driver.close();
        });
};

function showCorrectCards(value) {
    for (let i = value.length - 1; i >= 0; i--) {
        const element = value[i];
        for (let j = 0; j < arrayu.length; j++) {
            if (document.getElementById(arrayU[j]).innerText === element) {
                document.getElementById(arrayu[j]).style.display = "block";
            }
        }
    }
}

function hideAgain(value){
    for (let i = value.length - 1; i >= 0; i--) {
        const element = value[i];
        for (let j = 0; j < arrayu.length; j++) {
            if (document.getElementById(arrayU[j]).innerText === element) {
                document.getElementById(arrayu[j]).style.display = "none";
            }
        }
    }
}

booleanGetter = (cadena) => {
    let answer = true
    if(cadena === '0'){
        answer = false
    }

    return answer
}

