$(document).ready(function(){
    mainSearch();
});

function runQuery() {
    const driver = neo4j.driver('bolt://44.203.107.46:7687', neo4j.auth.basic('neo4j', 'calculation-exception-contrasts'));
    const session = driver.session();

    const query = 'use universities MATCH (n) RETURN (n)';

    session.run(query)
        .then(result => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
        result.records.forEach(record => {
            var node = record.get('n');
            var prop = node.properties;
            console.log(prop)


        });
        })
        .catch(error => {
        console.error('Error executing Cypher query', error);
        })
    .finally(() => {
        session.close();
        driver.close();
    });
}

function mainSearch(){
    
};

function searchUniversity(){
    

}

function filter(){

};