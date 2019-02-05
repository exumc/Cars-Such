import java.io.*;
import java.lang.reflect.Type;
import java.net.*;
import java.util.*;
import javax.net.ssl.HttpsURLConnection;

public class CreateKirBKB {

    // Replace this with a valid subscription key.
    static String subscriptionKey = "ec36da77b9e34c28a86da22cda485072";

    // Components used to create HTTP request URIs for QnA Maker operations.
    static String host = "https://westus.api.cognitive.microsoft.com";
    static String service = "/qnamaker/v4.0";
    static String method = "/knowledgebases/create";


    public static class KB {
    String name;
    Question[] qnaList;
    String[] urls;
    File[] files;
}

public static class Question {
    Integer id;
    String answer;
    String source;
    String[] questions;
    Metadata[] metadata;
}

public static class Metadata {
    String name;
    String value;
}

public static class File {
    String fileName;
    String fileUri;
}

public static KB GetKB () {
    KB kb = new KB ();
    kb.name = "Example Knowledge Base";

    Question q = new Question();
    q.id = 0;
    q.answer = "You can use our REST APIs to manage your Knowledge Base. See here for details: https://westus.dev.cognitive.microsoft.com/docs/services/58994a073d9e04097c7ba6fe/operations/58994a073d9e041ad42d9baa";
    q.source = "Custom Editorial";
    q.questions = new String[]{"How do I programmatically update my Knowledge Base?"};

    Metadata md = new Metadata();
    md.name = "category";
    md.value = "api";
    q.metadata = new Metadata[]{md};

    kb.qnaList = new Question[]{q};
    kb.urls = new String[]{"https://docs.microsoft.com/en-in/azure/cognitive-services/qnamaker/faqs",     "https://docs.microsoft.com/en-us/bot-framework/resources-bot-framework-faq"};

    return kb;
}

// Print JSON in readable format

public static String PrettyPrint (String json_text) {
    JsonParser parser = new JsonParser();
    JsonElement json = parser.parse(json_text);
    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    return gson.toJson(json);
}

// manage HTTP response

public static class Response {
    Map<String, List<String>> Headers;
    String Response;

    public Response(Map<String, List<String>> headers, String response) {
        this.Headers = headers;
        this.Response = response;
    }
}

// POST method to make API repquest to QnA maker API

public static Response Post (URL url, String content) throws Exception{
    HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
    connection.setRequestMethod("POST");
    connection.setRequestProperty("Content-Type", "application/json");
    connection.setRequestProperty("Content-Length", content.length() + "");
    connection.setRequestProperty("ec36da77b9e34c28a86da22cda485072", subscriptionKey);
    connection.setDoOutput(true);

    DataOutputStream wr = new DataOutputStream(connection.getOutputStream());
    byte[] encoded_content = content.getBytes("UTF-8");
    wr.write(encoded_content, 0, encoded_content.length);
    wr.flush();
    wr.close();

    StringBuilder response = new StringBuilder ();
    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
    String line;
    while ((line = in.readLine()) != null) {
        response.append(line);
    }
    in.close();
    return new Response (connection.getHeaderFields(), response.toString());
}

// Get request to QnA API

public static Response Get (URL url) throws Exception{
    HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("ec36da77b9e34c28a86da22cda485072", subscriptionKey);
        connection.setDoOutput(true);
    StringBuilder response = new StringBuilder ();
    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));

    String line;
    while ((line = in.readLine()) != null) {
        response.append(line);
    }
    in.close();
    return new Response (connection.getHeaderFields(), response.toString());
}

// Method to create Knowledge Base (KB)

public static Response CreateKB (KB kb) throws Exception {
    URL url = new URL (host + service + method);
    System.out.println ("Calling " + url.toString() + ".");
    String content = new Gson().toJson(kb);
    return Post(url, content);
}

// using returned operationId to determine if KB successfully created
{
  "operationState": "NotStarted",
  "createdTimestamp": "2018-09-26T05:19:01Z",
  "lastActionTimestamp": "2018-09-26T05:19:01Z",
  "userId": "XXX9549466094e1cb4fd063b646e1ad6",
  "operationId": "8dfb6a82-ae58-4bcb-95b7-d1239ae25681"
}

// Method to get status

public static Response GetStatus (String operation) throws Exception {
    URL url = new URL (host + service + operation);
    System.out.println ("Calling " + url.toString() + ".");
    return Get(url);
}

{
  "operationState": "Succeeded",
  "createdTimestamp": "2018-09-26T05:22:53Z",
  "lastActionTimestamp": "2018-09-26T05:23:08Z",
  "resourceLocation": "/knowledgebases/XXX7892b-10cf-47e2-a3ae-e40683adb714",
  "userId": "XXX9549466094e1cb4fd063b646e1ad6",
  "operationId": "6b98262d-2fec-47d1-a2e7-40191bd8c15a"
  
}

public static void main(String[] args) {
        try {
            // Send the request to create the knowledge base.
            Response response = CreateKB (GetKB ());

            // Get operation ID
            String operation = response.Headers.get("Location").get(0);

            System.out.println (PrettyPrint (response.Response));

            // Loop until the request is completed.
            Boolean done = false;
            while (!done) {
                // Check on the status of the request.
                response = GetStatus (operation);
                System.out.println (PrettyPrint (response.Response));
                
                Type type = new TypeToken<Map<String, String>>(){}.getType();

                Map<String, String> fields = new Gson().fromJson(response.Response, type);

                String state = fields.get ("operationState");

                // If the request is still running, the server tells us how
                // long to wait before checking the status again.
                if (state.equals("Running") || state.equals("NotStarted")) {
                    String wait = response.Headers.get ("Retry-After").get(0);
                    System.out.println ("Waiting " + wait + " seconds...");
                    Thread.sleep (Integer.parseInt(wait) * 1000);
                }
                else {
                    done = true;
                }
            }
        } catch (Exception e) {
            System.out.println (e);
        }
    }

}