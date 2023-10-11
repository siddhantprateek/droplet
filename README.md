# Maven Java Dependency Retrieval System with Python and Express.js

This system allows users to retrieve specific Maven Java dependencies through a REST API built with Express.js. The API should accept requests with Maven coordinates and return the corresponding Java JAR files as downloadable assets.

## Checklist 

- [ ] Express.js REST API Setup:
    - [ ]  Create an Express.js application with appropriate routes and middleware.
    - [ ] Implement a route that accepts GET requests with parameters for Group ID, Artifact ID, and Version.
- [ ] Python Script for Dependency Resolution:
    - [ ] Develop a Python script that communicates with the Express.js API to request Maven dependencies.
    - [ ] Use Python's requests library to make HTTP requests to the API and handle responses.
- [ ] Maven Dependency Resolution (Java):
    - [ ] Write a Java program that handles the resolution of Maven dependencies using Maven's dependency resolution APIs or libraries like Aether.
    - [ ] The Java program should take Maven coordinates (Group ID, Artifact ID, and Version) as input and download the corresponding JAR file from a Maven repository (e.g., Maven Central).
- [ ] Python-Java Integration:
    - [ ] Set up a communication channel between your Python script and the Java program.
    - [ ] Ensure that Python can trigger the Java program to resolve dependencies based on the user's request.
- [ ] File Download Handling:
    - [ ] Once the Java program has resolved the Maven dependency and obtained the JAR file, send it to the Python script.
    - [ ] In your Python script, create a downloadable file response in the Express.js API and send the JAR file back to the user.
- [ ] Error Handling and Validation:
    - [ ] Implement robust error handling in both your Express.js API, Python script, and Java program.
    - [ ] Handle cases where the API request is invalid, dependencies cannot be found, or there are network errors.
    - [ ] Validate user input to ensure it adheres to Maven coordinate format.
- [ ] Testing:
    - [ ] Develop a comprehensive test plan that includes unit tests for the Python script and Java program, as well as integration tests for the Express.js API.
    - [ ] Write test cases that cover various scenarios, including successful resolution and error cases.
    - [ ] Ensure that the API returns the correct JAR files and handles errors gracefully.
- [ ] Documentation:
    - [ ] Provide detailed documentation for setting up and using the system, including instructions on running the Express.js API, Python script, and Java program.
    - [ ] Create a high-level architecture diagram explaining how the components interact.


## Author

- [Siddhant Prateek Mahanayak](https://github.com/siddhantprateek)
