/**
 * 
 */
package main.java.dataAccessLayer;

import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.neo4j.driver.Record;
import org.neo4j.driver.Result;
import org.neo4j.driver.Session;
import org.neo4j.driver.Transaction;
import org.neo4j.driver.TransactionWork;

import static org.neo4j.driver.Values.parameters;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.neo4j.driver.types.Node;

/**
 * @author Administrator
 *
 */
public class EmbeddedNeo4j implements AutoCloseable{

    private final Driver driver;
    

    public EmbeddedNeo4j( String uri, String user, String password )
    {
        driver = GraphDatabase.driver( uri, AuthTokens.basic( user, password ) );
    }

    @Override
    public void close() throws Exception
    {
        driver.close();
    }

    public void printGreeting( final String message )
    {
        try ( Session session = driver.session() )
        {
            String greeting = session.writeTransaction( new TransactionWork<String>()
            {
                @Override
                public String execute( Transaction tx )
                {
                    Result result = tx.run( "CREATE (a:Greeting) " +
                                                     "SET a.message = $message " +
                                                     "RETURN a.message + ', from node ' + id(a)",
                            parameters( "message", message ) );
                    return result.single().get( 0 ).asString();
                }
            } );
            System.out.println( greeting );
        }
    }
    
    public LinkedList<University> getUniversities(String department, String faculty)
    {
   	 try ( Session session = driver.session() )
        {
   		 
   		 LinkedList<University> Universities = session.readTransaction( new TransactionWork<LinkedList<University>>()
            {
                @Override
                public LinkedList<University> execute( Transaction tx )
                {
                    Result result = tx.run( "MATCH (u:University)-[:PERTENECE_A]->(f:Faculty {name: \\\"\" + faculty + \"\\\"}) WHERE \\\"\" + department + \"\\\" IN u.states AND u.provides_becas = true AND u.admission_exam = true AND u.monthly_payment < 5000 RETURN u");
                    LinkedList<Node> myUnis = new LinkedList<Node>();
                    List<Record> registros = result.list();
                    for (Record registro : registros) {
                        myUnis.add(registro.get("u").asNode());
                    }
                    LinkedList<University> resultUniversities = new LinkedList<>();
                    for (Node node : myUnis) {
                        String name = node.get("name").asString();
                        List<Object> statesList = node.get("states").asList();
                        List<String> states = new ArrayList<>();
                        for (Object state : statesList) {
                            states.add(state.toString());
                        }
                        boolean providesBecas = node.get("provides_becas").asBoolean();
                        boolean admissionExam = node.get("admission_exam").asBoolean();
                        int monthlyPayment = node.get("monthly_payment").asInt();

                        University university = new University(name, (ArrayList<String>) states, providesBecas, admissionExam, monthlyPayment);
                        resultUniversities.add(university);
                    }
                    
                    return resultUniversities;
                }
            } );
            
            return Universities;
        }
   }

}
