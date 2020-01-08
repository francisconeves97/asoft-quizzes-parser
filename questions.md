### Question 1256
The microservices impact on the team organization
* Enforces a focus on the specialization of the specific competences, like testing.
* Allows teams to be focused on the product.
* Does not have any relation with the Conway's Law.
* Does not reduce the amount of communication between the developers.


### Question 1257
When migrating a monolith to a microservice architecture
* May impact on the application's functionality.
* Does not require the relaxing of the ACID properties of monolith transactions.
* The latency of the application will decrease.
* The throughput of the application will decrease. 


### Question 1258
The microservices architecture can be used when the system requires the quality of
* Vertical scalability.
* Horizontal scalability.
* Usability.
* Testability.


### Question 1259
The microservices architecture fosters rapid cycles of continuous delivery because
* It is possible to independently evolve only a small part of the functionality.
* Continuous delivery is like continuous integration.
* Facilitate automated testing.
* The automation pipeline cannot be applied to the monolith.


### Question 1260
The decision on the programming language to implement the system is hard to change, which, makes it an architectural decision. In the context of microservices architecture
* It is still hard to change.
* It is less hard to change because microservices communicate through smart endpoints and dumb pipes.
* It is less hard to change because the functionalities do not share the same database.
* It is less hard to change because each microservice can be implemented using a different programming language.


### Question 1276
What is an architectural significant requirement?
* A requirement that refers to a quality of the system that is relevant to one or more of its stakeholders.
* A requirement that refers to a quality of the system that is relevant to the developers.
* A requirement that refers to a quality of the system that is relevant to the business people.
* A requirement that refers to a quality of the system that is relevant to the architect.


### Question 1277
Consider the concepts of software architecture and software design
* The concepts do not differ.
* Software design is related with the implementation.
* Software architecture is related with requirements.
* Software design is a subconcept of software architecture.


### Question 1278
Which stakeholder may require the quality of time to market?
* End user stakeholder.
* Maintenance organization stakeholder.
* Marketing stakeholder.
* All the stakeholders referred in the other options. 


### Question 1279
What is the context of the Architecture Influence Cycle associate with the budget available for the development of a system?
* Technical Context
* Project Context
* Business Context
* Professional Context


### Question 1280
With which context of the Architecture Influence Cycle is the Conway's Law is related?
* Technical Context.
* Project Context.
* Business Context.
* Professional Context.


### Question 1289
Consider the following representation of the interaction between two services in the Uber system.

![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1251.png)

Which quality can we reason about this representation of the software elements, their relations and properties?
* Performance, in terms of latency.
* Performance, in terms of throughput.
* Horizontal scalability.
* Vertical scalability.


### Question 1290
What is an availability solution in the Uber system when total datacenter failure occurs.
* The drivers' app contains all the information about the current ride.
* All the information is on memory.
* There is replication of the databases.
* The Uber system cannot recover from such type of failures.


### Question 1291
Why does the Uber system need to use consistent hashing in its software architecture?
* To deal with the remotion of servers without requiring a rehashing.
* To deal with the add of new servers without requiring a rehashing.
* To deal with the dynamic change of demand.
* All options are correct.


### Question 1292
What is the solution in the Uber system to support one million of writes in the geospatial index per second? 
* To do sharding by city.
* To do sharding by cells using the Google S2 library.
* To have several server replicas where writes occur.
* To sequence all the writes in a single server which is optimized in terms of CPU and no synchronization overheads.


### Question 1293
Which quality of the Uber system is related with the ability to support different types of demand and supply relationships?
* Scalability.
* Availability.
* Performance.
* Variability.


### Question 1308
The set of structures referred in the definition of software architecture fulfil a need to
* Present the architecture according to different perspectives, because the description of the architecture is too large to be comprised by a single representation.
* Present the architecture according to different perspectives, where each perspective addresses the fulfilment of one and only one quality.
* Present the architecture according to different perspectives, where each perspective may focus on the area of interest of one or more of the system stackeholders.
* Present the architecture according to different perspectives, because each of the perspectives describes a solution for each one of the conflicting architectural significant requirements.


### Question 1309
An example of module in a software architecture is
* A process.
* A library.
* A component.
* A database.


### Question 1310
The component-and-connector viewtype of the software architecture description
* Addresses the aspects of the assignment of people to the implementation of the units of code.
* Addresses the aspects of the assignment of processes to the hardware where the system is going to execute.
* Addresses the aspects of the runtime properties of the system.
* Addresses the aspects of the implementation of the system.


### Question 1311
The architectural styles are categorized, and grouped, in terms of
* The views where they are applied.
* The three SEI viewtypes.
* The qualities they provide.
* The effort required to implement them.


### Question 1312
The cohesion of a module of the architecture allows to reason about
* Confidentiality of some data
* Cost of extending a functionality
* Cost in production
* Time to execute a batch of requests


### Question 1332
How does the software architecture allow the incorporation of independently developed modules?
* Because modules are part of the component-and-connector viewtype.
* Because the software architect cannot implement all modules.
* Because the identification of the main modules, and their responsibilities, allow the definition of interfaces for the modules that can be outsourced from third party venders.
* Because the software architecture of the system has impact on the organizational structure of third party vendors.


### Question 1333
How does the software architecture allows the restriction of the vocabulary?
* Because the architectural views are designed using a small set of architectural styles.
* Because the architectural views are designed using a small set of viewtypes.
* Because the architecture is the shared understanding between all stakeholders.
* Because it is easier to reason about the architecture qualities if it uses a restricted vocabulary.


### Question 1334
What is the main impact of the functionalities of a system on its software architecture?
* They are used to describe what cannot be changed in the software architecture.
* They are used to assign responsibilities to the modules of the system.
* They have no impact because the software architecture only addresses the non-functional aspects of the system.
* They are used to define the structure of the system that provides performance.


### Question 1335
What is the impact of the business goals on the software architecture?
* They may have impact on the identification of the requirements for a system to be designed and implemented.
* They always have impact on the system architecture, because any problem requires a software architecture solution.
* The business goals of a system only have impact on the system functionalities.
* They do not have any impact.


### Question 1336
Why it is important that the software architectures provides a basis for training?
* To allow that new developers can learn about the system most relevant qualities without the details of the code. 
* Because the architecture is the shared understanding about the system which is relevant to foster the communication with new developers.
* Because the software architectures contains the most important decisions about the system that should be followed when implementing it.
* All options are true.


### Question 1363
The modifiability quality of a software system is associated with 
* The cost of changing the system.
* The cost of developing the system.
* The cost of implementing the system.
* All the options are true.


### Question 1364
The mobility quality of a system includes
* How efficiently manages its battery.
* The number of different user interfaces to support multiple platforms.
* Its variability, due to the deployment on multiple platforms.
* All options are true.


### Question 1365
Consider the following scenario:

"A request arrives to add support for a new browser to a Web-based system, and the change must be made within two weeks."
* It is an interoperability scenario.
* The scenario includes the environment.
* The scenario does not include the stimulus.
* The scenario includes the response measure.


### Question 1366
The stimulus of an availability scenario
* Can be a failure.
* Should be a fault.
* Can be an error.
* Should be a crash.


### Question 1367
To describe how easy is it to find faults with tests in a system it is necessary to
* Define how the system is executed.
* Define how the system can be tested.
* Implement the system without bugs.
* Show how the code is easy to read.


### Question 1368
What quality we cannot reason about from this Image hosting application view?

![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1273.png)
* Availability.
* Scalability.
* Interoperability.
* Performance.


### Question 1369
Using queues to manage client requests, as represented in the figure, has the following impact.

![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1274.png)
* Decreases throughput, because the management of queues add an overhead.
* Increases availability in the case of the crash of a server, because the queues can be persistent.
* Does not allow clients to work asynchronously with the server. 
* Does not allow the differentiation between request and reply.


### Question 1370
Load balancers
* Decouple clients from servers, such that it is possible to add and remove servers, transparently to the client.
* May not require the synchronization of user sessions, if the requests of a particular client are always redirected to the same server.
* All options are true.
* Improve performance because they can redirect the requests to the server that is less loaded.


### Question 1371
Proxy servers
* Can reduce the amount of required processing, or disk accesses, associated with a set of requests.
* Reduce the latency for all requests.
* Cannot be combined with caches.
* All options are false.


### Question 1372
Which quality a global cache, where request nodes are responsible for retrieval, does not provide?
* Availability.
* Scalability.
* Performance.
* Application-specific eviction.


### Question 1373
Consider the following performance scenario:

"During the normal period, all periods except the enrolment period, a student accessing the Fénix system should finish a write transaction in less than 2 seconds."
* The stimulus is stochastic.
* The response measure is jitter.
* The environment is specified.
* The source of the stimulus is not specified.


### Question 1374
Consider the following performance scenario.

"During the enrolment period the Fénix system be able to completely enrol 5.000 students in less than 30 minutes."
* The stimulus is not specified.
* The environment is overload.
* The response measure is miss rate.
* All options are false.


### Question 1375
Consider a situation where the stream of a movie is being done trough a slow network. Which performance tactic should be applied?
* Manage sampling rate.
* Limit event response.
* Introduce concurrency.
* Reduce overhead.


### Question 1376
Twitter process millions of tweets per second. Considering that the processing of each tweet can be done independently of the other tweets, which performance tactic should be applied?
* Maintain multiple copies of computation.
* Maintain multiple copies of data.
* Increase resources.
* Introduce concurrency.


### Question 1377
Which of the following performance tactics address the problem of resources contention?
* Bound execution times.
* Prioritize events.
* Introduce concurrency.
* Increase resource efficiency.


### Question 1728
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"Microservice teams would expect to see (...) for each individual service such as dashboards showing up/down status and a variety of operational and business relevant metrics. Details on circuit breaker status, current throughput and latency are other examples we often encounter in the wild."  
  
Which quality is being referred?
* Performance
* Availability
* Usability
* Monitorability


### Question 1729
The definition of software architecture, on the course book, is  
>"*The software architecture of a system is the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both.*"  
  
According to this definition
* The set of structures is needed to support different levels of performance for the system.
* The hardware is an example of a software element.
* There isn't any relation between the properties of the software elements and the ability to reason about the system.
* To reason about a system is to verify whether the architecturally significant requirements are considered by the architecture.


### Question 1730
Consider a scenario for performance where the arrival of events is stochastic with a distribution where there are peeks of events but the arrival of events over a long period is uniform. The best tactic to apply is
* Manage sampling rate
* Prioritize events
* Bound execution time
* Limit event response


### Question 1731
The set of structures referred in the definition of software architecture fulfil a need to
* Present the architecture according to different perspectives, because the description of the architecture is too large to be comprised by a single representation.
* Present the architecture according to different perspectives, where each perspective addresses the fulfilment of one and only one quality.
* Present the architecture according to different perspectives, where each perspective may focus on the area of interest of one or more of the system stackeholders.
* Present the architecture according to different perspectives, because each of the perspectives describes a solution for each one of the conflicting architectural significant requirements.


### Question 1732
Web servers typically receive requests from different users concurrently (that is, either different users make requests simultaneously or they make them fast enough that it is not possible for the web server to answer one request from one user before receiving another request from another user). To process all the requests, web servers may use different implementation strategies. Assuming that we want to develop a web server to serve only static pages with more or less the same size to a set of clients on the same LAN network as the server, which of the following strategies would be better?
* Launch a new process for processing each request
* Spawn a new thread for processing each request
* Buy a server with high processing power
* Put the requests into a queue and schedule their processing


### Question 4913
The software architecture of a system
* Depends mostly on the system's functional requirements.
* Depends more on the architect's experience than on anything else.
* Should not depend on the skills of the developing team.
* Is driven by a trade-off among the stakeholders needs.


### Question 4914
Which of the following performance tactics address the problem of resources contention?
* Bound execution times.
* Prioritize events.
* Introduce concurrency.
* Increase resource efficiency.


### Question 4915
Consider the following figure that presents an architectural view of an *Image Hosting Application*.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/967.png)  
 The replication between the Image File Storage *n* and Image File Storage *nb*
* Provides the quality of performance
* Provides the quality of modifiability
* Does not provide any additional quality
* Provides the quality of availability


### Question 4916
In his article, *Who Needs and Architect?*, Martin Fowler cites Ralph Johnson definition:  
>"Architecture is the set of decisions that must be made early in a project."  
  
In his opinion:
* This is right because if you don't the project fails
* This is wrong because you can easily change these decisions during the project lifetime
* This is wrong because it is against the agile way of thinking the software development process
* This is right but you cannot be completely sure whether the decisions are the right ones


### Question 4917
General scenarios play an important role in the development of a software architecture because
* They describe general requirements that all systems should try to satisfy
* They allow us to build a more robust architecture that satisfies less specific requirements, which address a wider range of situations that may happen in the system
* They identify the most important requirements that the system should satisfy
* They guide us in the requirement elicitation process with the system's stakeholders


### Question 5288
The component-and-connector viewtype of the software architecture description
* Addresses the aspects of the assignment of people to the implementation of the units of code.
* Addresses the aspects of the assignment of processes to the hardware where the system is going to execute.
* Addresses the aspects of the runtime properties of the system.
* Addresses the aspects of the implementation of the system.


### Question 5289
Suppose that after designing a successful architecture for a particular client the software house management decides to create a cross-functional internal department to start providing products for this particular segment of the market.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the business.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the project.
* This is a case of an architectural influence cycle without feedback.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the business and project.


### Question 5290
Consider that a software development team uses an agile methodology such as XP (Extreme Programming), where no documentation is produced. Then, the systems developed by that team
* Do not have a software architecture, because in agile methodologies there is no architectural design phase
* Do not have a software architecture, because the practice of refactoring allows changing every part of the system easily
* May have a software architecture, but that architecture is not known because it was neither designed nor documented
* Typically have a software architecture that results from the common knowledge about the system that is shared among the team members


### Question 5291
Consider the following figure that presents an architectural view of an *Image Hosting Application*.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/967.png)  
 The replication between the Image File Storage *n* and Image File Storage *nb*
* Provides the quality of performance
* Provides the quality of modifiability
* Does not provide any additional quality
* Provides the quality of availability


### Question 5292
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"Decentralizing responsibility for data across microservices has implications for managing updates. The common approach to dealing with updates has been to use transactions to guarantee consistency when updating multiple resources. This approach is often used within monoliths."  
  
What is the impact of decentralizing responsibility for data across microservices?
* The need to use a two-phase commit protocol
* The need to have a tight integration of the development teams
* The need to deploy all the microservices simultaneously
* The need to have eventual consistency and compensating operations


### Question 5303
Consider the following figure depicting two different architectures for web applications   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/517.png)  

* The main quality of the system in the left part of the figure is scalability
* The main quality of the system in the right part of the figure is ease of development
* The main quality of the system in the left part of the figure is to promote cross-functional teams
* The main quality of the system in the right part of the figure is scalability


### Question 5304
Which of the following performance tactics address the problem of resources contention?
* Bound execution times.
* Prioritize events.
* Introduce concurrency.
* Increase resource efficiency.


### Question 5305
In his article, *Who Needs and Architect?*, Martin Fowler cites Ralph Johnson definition:  
>"Architecture is the set of decisions that must be made early in a project."  
  
In his opinion:
* This is right because if you don't the project fails
* This is wrong because you can easily change these decisions during the project lifetime
* This is wrong because it is against the agile way of thinking the software development process
* This is right but you cannot be completely sure whether the decisions are the right ones


### Question 5306
Assuming that you were asked to document the software architecture of an existing (and already developed) system, the best thing for you to do would be
* To analyse the source code of the system to see how it is built
* To analyse the system's functional requirements to see what is the system supposed to do
* To analyse the implemented set of features to see what is it that the system actually does
* To talk with the people that developed the system to know what they did and why they did it


### Question 5307
What is an availability solution in the Uber system when total datacenter failure occurs.
* The drivers' app contains all the information about the current ride.
* All the information is on memory.
* There is replication of the databases.
* The Uber system cannot recover from such type of failures.


### Question 5333
Suppose that after designing a successful architecture for a particular client the software house management decides to create a cross-functional internal department to start providing products for this particular segment of the market.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the business.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the project.
* This is a case of an architectural influence cycle without feedback.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the business and project.


### Question 5334
Which quality of the Uber system is related with the ability to support different types of demand and supply relationships?
* Scalability.
* Availability.
* Performance.
* Variability.


### Question 5335
Which stakeholder may require the quality of time to market?
* End user stakeholder.
* Maintenance organization stakeholder.
* Marketing stakeholder.
* All the stakeholders referred in the other options. 


### Question 5336
The cohesion of a module of the architecture allows to reason about
* Confidentiality of some data
* Cost of extending a functionality
* Cost in production
* Time to execute a batch of requests


### Question 5337
The microservices impact on the team organization
* Enforces a focus on the specialization of the specific competences, like testing.
* Allows teams to be focused on the product.
* Does not have any relation with the Conway's Law.
* Does not reduce the amount of communication between the developers.


### Question 5358
Consider the following representation of the interaction between two services in the Uber system.

![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1251.png)

Which quality can we reason about this representation of the software elements, their relations and properties?
* Performance, in terms of latency.
* Performance, in terms of throughput.
* Horizontal scalability.
* Vertical scalability.


### Question 5359
Consider the following excerpt about the Scalable web architecture and distributed systems case study about two different possible implementations of a global cache  
>"There are two common forms of global caches (...), when a cached response is not found in the cache, the cache itself becomes responsible for retrieving the missing piece of data from the underlying store. (...) it is the responsibility of request nodes to retrieve any data that is not found in the cache."  
  

* The solution where the cache is responsible for retrieving the missing piece of data from the underlying store has better availability
* The solution where the application is responsible for retrieving the missing piece of data from the underlying store has better modifiability
* The solution where the cache is responsible for retrieving the missing piece of data from the underlying store has better performance
* The solution where the application is responsible for retrieving the missing piece of data from the underlying store has better availability


### Question 5360
In which performance tactic it can occur that the inputs are not completely processed, even though they always start being processed
* Manage sampling rate
* Limit event response
* Reduce overhead
* Bound execution times


### Question 5361
A performance tactic to control resource demand is
* Increase resources.
* Bound queue sizes.
* Introduce concurrency.
* Reduce overhead.


### Question 5362
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"As well as the fact that services are independently deployable and scalable, each service also provides a firm module boundary, even allowing for different services to be written in different programming languages. They can also be managed by different teams."  
  
For this description it is relevant to consider the software architecture concept(s) of
* Component
* Module
* None of the above
* Component and Module


### Question 5383
Consider the following excerpt about the Scalable web architecture and distributed systems case study about two different possible implementations of a global cache  
>"There are two common forms of global caches (...), when a cached response is not found in the cache, the cache itself becomes responsible for retrieving the missing piece of data from the underlying store. (...) it is the responsibility of request nodes to retrieve any data that is not found in the cache."  
  

* The solution where the cache is responsible for retrieving the missing piece of data from the underlying store has better availability
* The solution where the application is responsible for retrieving the missing piece of data from the underlying store has better modifiability
* The solution where the cache is responsible for retrieving the missing piece of data from the underlying store has better performance
* The solution where the application is responsible for retrieving the missing piece of data from the underlying store has better availability


### Question 5384
The mobility quality of a system includes
* How efficiently manages its battery.
* The number of different user interfaces to support multiple platforms.
* Its variability, due to the deployment on multiple platforms.
* All options are true.


### Question 5385
Designing the software architecture for a complex system
* Is useful only if done (even if only partially) before the system's implementation is concluded, given that the architecture is used for restricting the implementation
* Is useful only if done (even if only partially) before the system's implementation is concluded, because if the system is already implemented, its implementation uniquely determines the architecture
* Is useful only if done (even if only partially) before the system passes all of the acceptance tests by the client, given that no more requirements changes will take place after that time
* Is useful even if the implementation is concluded and the system has entered the maintenance phase


### Question 5386
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"Microservice teams would expect to see (...) for each individual service such as dashboards showing up/down status and a variety of operational and business relevant metrics. Details on circuit breaker status, current throughput and latency are other examples we often encounter in the wild."  
  
Which quality is being referred?
* Performance
* Availability
* Usability
* Monitorability


### Question 5387
As part of the process of creating an architecture, we talked about a framework for capturing some of the requirements for a system. In this context, **concrete scenarios** are used for
* Describing a set of steps that a user of the system must perform to accomplish some task
* Describing a use case for the system that makes clear what should be the system's responses to each of the user's inputs
* Describing the system's features by way of different usage scenarios for it, in which users play the role of actors
* Describing what are the qualities that the system should possess


### Question 5398
What is an availability solution in the Uber system when total datacenter failure occurs.
* The drivers' app contains all the information about the current ride.
* All the information is on memory.
* There is replication of the databases.
* The Uber system cannot recover from such type of failures.


### Question 5399
Web servers typically receive requests from different users concurrently (that is, either different users make requests simultaneously or they make them fast enough that it is not possible for the web server to answer one request from one user before receiving another request from another user). To process all the requests, web servers may use different implementation strategies. Assuming that we want to develop a web server to serve only static pages with more or less the same size to a set of clients on the same LAN network as the server, which of the following strategies would be better?
* Launch a new process for processing each request
* Spawn a new thread for processing each request
* Buy a server with high processing power
* Put the requests into a queue and schedule their processing


### Question 5400
The cohesion of a module of the architecture allows to reason about
* Confidentiality of some data
* Cost of extending a functionality
* Cost in production
* Time to execute a batch of requests


### Question 5401
Suppose that after designing a successful architecture for a particular client the software house management decides to create a cross-functional internal department to start providing products for this particular segment of the market.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the business.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the project.
* This is a case of an architectural influence cycle without feedback.
* This is a case of an architectural influence cycle where the feedback cycle resulted in changes on the business and project.


### Question 5402
As part of the process of creating an architecture, we talked about a framework for capturing some of the requirements for a system. In this context, **concrete scenarios** are used for
* Describing a set of steps that a user of the system must perform to accomplish some task
* Describing a use case for the system that makes clear what should be the system's responses to each of the user's inputs
* Describing the system's features by way of different usage scenarios for it, in which users play the role of actors
* Describing what are the qualities that the system should possess


### Question 5423
Using queues to manage client requests, as represented in the figure, has the following impact.

![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1274.png)
* Decreases throughput, because the management of queues add an overhead.
* Increases availability in the case of the crash of a server, because the queues can be persistent.
* Does not allow clients to work asynchronously with the server. 
* Does not allow the differentiation between request and reply.


### Question 5424
Consider the change in the architecture associated with the use of caches in web services shown in the figure   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/462.png)  
 That change has the goal and the consequence of, respectively
* Increasing performance and availability
* Increasing availability and decreasing performance
* Increasing performance and decreasing availability
* Increasing performance, scalability and availability


### Question 5425
The two basic contributors for the response time are the processing time and the contention time. Which tactic for performance may reduce the contention time
* Manage sampling rate.
* Limit event response.
* Prioritize events.
* Maintain multiple copies of computation.


### Question 5426
The software architecture of a system
* Depends mostly on the system's functional requirements
* Depends more on the architect's experience than on anything else
* Should not depend on the skills of the developing team
* None of the above


### Question 5427
Jeff Atwood wrote an article in its blog about performance of software systems that is entitled, *Hardware is Cheap, Programmers are Expensive*. Which performance tactic(s) is he suggesting
* Increase resource efficiency.
* Increase resource efficiency and Increase resources.
* Increase resources.
* Increase resources and Maintain multiple copies of computation.


### Question 5553
The definition of software architecture, on the course book, is  
>"*The software architecture of a system is the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both.*"  
  
According to this definition
* The set of structures is needed to support different levels of performance for the system.
* The hardware is an example of a software element.
* There isn't any relation between the properties of the software elements and the ability to reason about the system.
* To reason about a system is to verify whether the architecturally significant requirements are considered by the architecture.


### Question 5554
Consider the Microservice architectural style. Which of the following sentences **does not** describe an advantage of microservices?
* Each service can be developed and deployed independently
* Easier to scale development
* Eliminates any long-term commitment to a technology stack
* Testing is easier


### Question 5555
Consider the following performance scenario:

"During the normal period, all periods except the enrolment period, a student accessing the Fénix system should finish a write transaction in less than 2 seconds."
* The stimulus is stochastic.
* The response measure is jitter.
* The environment is specified.
* The source of the stimulus is not specified.


### Question 5556
Web servers typically receive requests from different users concurrently (that is, either different users make requests simultaneously or they make them fast enough that it is not possible for the web server to answer one request from one user before receiving another request from another user). To process all the requests, web servers may use different implementation strategies. Assuming that we want to develop a web server to serve only static pages with more or less the same size to a set of clients on the same LAN network as the server, which of the following strategies would be better?
* Launch a new process for processing each request
* Spawn a new thread for processing each request
* Buy a server with high processing power
* Put the requests into a queue and schedule their processing


### Question 5557
The software architecture of a system
* Is a high-level view of the system with the purpose of understanding what are the system's goals and features
* Is a set of guidelines that the developing team should follow in the development of the system
* Is a set of diagrams that show the runtime elements of the system and their relationships
* Is composed of things such as code units, runtime elements, hardware, and people, together with the relationships among them


### Question 5603
What is the main impact of the functionalities of a system on its software architecture?
* They are used to describe what cannot be changed in the software architecture.
* They are used to assign responsibilities to the modules of the system.
* They have no impact because the software architecture only addresses the non-functional aspects of the system.
* They are used to define the structure of the system that provides performance.


### Question 5604
The software architecture of a system
* Is a high-level view of the system with the purpose of understanding what are the system's goals and features
* Is a set of guidelines that the developing team should follow in the development of the system
* Is a set of diagrams that show the runtime elements of the system and their relationships
* Is composed of things such as code units, runtime elements, hardware, and people, together with the relationships among them


### Question 5605
A performance tactic to control resource demand is
* Increase resources.
* Bound queue sizes.
* Introduce concurrency.
* Reduce overhead.


### Question 5606
Consider the following figure depicting two different architectures for web applications   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/517.png)  

* The main quality of the system in the left part of the figure is scalability
* The main quality of the system in the right part of the figure is ease of development
* The main quality of the system in the left part of the figure is to promote cross-functional teams
* The main quality of the system in the right part of the figure is scalability


### Question 5607
The software architecture of a system
* Depends mostly on the system's functional requirements.
* Depends more on the architect's experience than on anything else.
* Should not depend on the skills of the developing team.
* Is driven by a trade-off among the stakeholders needs.


### Question 5613
Consider the following informal view of an Image Hosting System   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/550.png)  

* This view highlights the availability of the system.
* This view highlights the performance of the `Image File Storage`.
* This view highlights the scalability of `upload` and `dowload` operations.
* This view highlights the different performance levels for `upload` and `dowload` operations.


### Question 5614
What is an architectural significant requirement?
* A requirement that refers to a quality of the system that is relevant to one or more of its stakeholders.
* A requirement that refers to a quality of the system that is relevant to the developers.
* A requirement that refers to a quality of the system that is relevant to the business people.
* A requirement that refers to a quality of the system that is relevant to the architect.


### Question 5615
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"Microservice teams would expect to see (...) for each individual service such as dashboards showing up/down status and a variety of operational and business relevant metrics. Details on circuit breaker status, current throughput and latency are other examples we often encounter in the wild."  
  
Which quality is being referred?
* Performance
* Availability
* Usability
* Monitorability


### Question 5616
What is an availability solution in the Uber system when total datacenter failure occurs.
* The drivers' app contains all the information about the current ride.
* All the information is on memory.
* There is replication of the databases.
* The Uber system cannot recover from such type of failures.


### Question 5617
The mobility quality of a system includes
* How efficiently manages its battery.
* The number of different user interfaces to support multiple platforms.
* Its variability, due to the deployment on multiple platforms.
* All options are true.


### Question 5638
A response measure of a performance scenario is
* Stochastic event.
* Overload.
* Change level of service.
* Throughput.


### Question 5639
Consider that a software development team uses an agile methodology such as XP (Extreme Programming), where no documentation is produced. Then, the systems developed by that team
* Do not have a software architecture, because in agile methodologies there is no architectural design phase
* Do not have a software architecture, because the practice of refactoring allows changing every part of the system easily
* May have a software architecture, but that architecture is not known because it was neither designed nor documented
* Typically have a software architecture that results from the common knowledge about the system that is shared among the team members


### Question 5640
Several of the cases studied in this course had scalability requirements. That means that those systems should be designed in such a way that they
* Have high throughput
* Have low latency
* Allow many simultaneous users
* May be easily changed to increase their performance


### Question 5641
The definition of software architecture, on the course book, is  
>"*The software architecture of a system is the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both.*"  
  
According to this definition
* The set of structures is needed to support different levels of performance for the system.
* The hardware is an example of a software element.
* There isn't any relation between the properties of the software elements and the ability to reason about the system.
* To reason about a system is to verify whether the architecturally significant requirements are considered by the architecture.


### Question 5642
The two basic contributors for the response time are the processing time and the contention time. Which tactic for performance may reduce the contention time
* Manage sampling rate.
* Limit event response.
* Prioritize events.
* Maintain multiple copies of computation.


### Question 6628
What is an architectural significant requirement?
* A requirement that refers to a quality of the system that is relevant to one or more of its stakeholders.
* A requirement that refers to a quality of the system that is relevant to the developers.
* A requirement that refers to a quality of the system that is relevant to the business people.
* A requirement that refers to a quality of the system that is relevant to the architect.


### Question 6629
The stimulus of an availability scenario
* Can be a failure.
* Should be a fault.
* Can be an error.
* Should be a crash.


### Question 6630
Consider the following figure that presents a Queue where client applications write their requests to be processed by a server.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/950.png)  
 This solution **does not** provide the following quality:
* Availability whenever the server running the tasks crashes, the tasks are restarted and eventually finished
* Performance of the tasks execution, scheduling of tasks can be optimized for the particular context of the system
* Performance of the services being executed by the clients, they can execute other actions while waiting for the response
* Simple programming model, the clients only need to concern about the business logic of the application, the remote services are transparent


### Question 6631
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"Microservice teams would expect to see (...) for each individual service such as dashboards showing up/down status and a variety of operational and business relevant metrics. Details on circuit breaker status, current throughput and latency are other examples we often encounter in the wild."  
  
Which quality is being referred?
* Performance
* Availability
* Usability
* Monitorability


### Question 6632
Consider the Microservice architectural style. Which of the following sentences **does not** describe an advantage of microservices?
* Each service can be developed and deployed independently
* Easier to scale development
* Eliminates any long-term commitment to a technology stack
* Testing is easier


### Question 6638
Consider the following performance scenario.

"During the enrolment period the Fénix system be able to completely enrol 5.000 students in less than 30 minutes."
* The stimulus is not specified.
* The environment is overload.
* The response measure is miss rate.
* All options are false.


### Question 6639
Which quality a global cache, where request nodes are responsible for retrieval, does not provide?
* Availability.
* Scalability.
* Performance.
* Application-specific eviction.


### Question 6640
In his article *Who Needs an Architect?* Martin Fowler refers to the following architecture definition  
>"*the expert developers working on that project have a shared understanding of the system design*"  
  

* This shared understanding can be represented by a set of architectural views.
* The system algorithms should be part of the shared understanding.
* The shared understanding describes the system from a high-level perspective.
* This shared understanding includes the architecturally significant requirements.


### Question 6641
The architectural styles are categorized, and grouped, in terms of
* The views where they are applied.
* The three SEI viewtypes.
* The qualities they provide.
* The effort required to implement them.


### Question 6642
How does the software architecture allow the incorporation of independently developed modules?
* Because modules are part of the component-and-connector viewtype.
* Because the software architect cannot implement all modules.
* Because the identification of the main modules, and their responsibilities, allow the definition of interfaces for the modules that can be outsourced from third party venders.
* Because the software architecture of the system has impact on the organizational structure of third party vendors.


### Question 6648
An example of module in a software architecture is
* A process.
* A library.
* A component.
* A database.


### Question 6649
How does the software architecture allows the restriction of the vocabulary?
* Because the architectural views are designed using a small set of architectural styles.
* Because the architectural views are designed using a small set of viewtypes.
* Because the architecture is the shared understanding between all stakeholders.
* Because it is easier to reason about the architecture qualities if it uses a restricted vocabulary.


### Question 6650
Consider the following scenario:

"A request arrives to add support for a new browser to a Web-based system, and the change must be made within two weeks."
* It is an interoperability scenario.
* The scenario includes the environment.
* The scenario does not include the stimulus.
* The scenario includes the response measure.


### Question 6651
Consider the following excerpt about the Scalable web architecture and distributed systems case study  
>"Employing such a strategy maximizes data locality for the requests, which can result in decreased request latency. For example, let's say a bunch of nodes request parts of B: partB1, partB2, etc. We can set up our proxy to recognize the spatial locality of the individual requests, collapsing them into a single request and returning only bigB, greatly minimizing the reads from the data origin."  
  
The quality that is achieved with this tactic is
* Performance because all requests will be processed faster
* Availability because even if PartB1 is not available partB2 can be provided
* Reliability because a single correct read is used to responde to several requests
* Performance because it allows the processing of more requests per unit of time


### Question 6652
The stimulus of an availability scenario
* Can be a failure.
* Should be a fault.
* Can be an error.
* Should be a crash.


### Question 6653
Consider the following figure that presents a Proxy Server that collapses requests from different users.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/884.png)  

* This solution optimizes the performance in terms of the latency of each request.
* This solution allows an "infinite"increase of the number clients by allowing the inclusion of more Request Nodes.
* This solution continues to provide service even if a crash occurs in the Data server.
* This solution optimizes the performance in terms of the throughput of processed requests.


### Question 6654
What quality we cannot reason about from this Image hosting application view?

![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1273.png)
* Availability.
* Scalability.
* Interoperability.
* Performance.


### Question 6655
Consider the Microservice architectural style. Which of the following sentences **does not** describe an advantage of microservices?
* Each service can be developed and deployed independently
* Easier to scale development
* Eliminates any long-term commitment to a technology stack
* Testing is easier


### Question 6656
In which performance tactic it may occur that not all the inputs are processed
* Limit event response
* Reduce overhead
* Bound execution times
* Manage sampling rate


### Question 6657
Consider the concepts of software architecture and software design
* The concepts do not differ.
* Software design is related with the implementation.
* Software architecture is related with requirements.
* Software design is a subconcept of software architecture.


### Question 6668
Assuming that you were asked to document the software architecture of an existing (and already developed) system, the best thing for you to do would be
* To analyse the source code of the system to see how it is built
* To analyse the system's functional requirements to see what is the system supposed to do
* To analyse the implemented set of features to see what is it that the system actually does
* To talk with the people that developed the system to know what they did and why they did it


### Question 6669
Consider a scenario for performance where the arrival of events is stochastic with a distribution where there are peeks of events but the arrival of events over a long period is uniform. The best tactic to apply is
* Manage sampling rate
* Prioritize events
* Bound execution time
* Limit event response


### Question 6670
Consider the following scenario:

"A request arrives to add support for a new browser to a Web-based system, and the change must be made within two weeks."
* It is an interoperability scenario.
* The scenario includes the environment.
* The scenario does not include the stimulus.
* The scenario includes the response measure.


### Question 6671
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"The microservice approach to division ..., splitting up into services organized around business capability. Such services take a broad-stack implementation of software for that business area, including user-interface, persistent storage, and any external collaborations. Consequently the teams are cross-functional, including the full range of skills required for the development: user-experience, database, and project management."  
  
Considering the architecture influence cycle, which influence factor it is being considered?
* Commercial
* Technical
* Professional
* Project


### Question 6672
What is an availability solution in the Uber system when total datacenter failure occurs.
* The drivers' app contains all the information about the current ride.
* All the information is on memory.
* There is replication of the databases.
* The Uber system cannot recover from such type of failures.


### Question 6683
What is an architectural significant requirement?
* A requirement that refers to a quality of the system that is relevant to one or more of its stakeholders.
* A requirement that refers to a quality of the system that is relevant to the developers.
* A requirement that refers to a quality of the system that is relevant to the business people.
* A requirement that refers to a quality of the system that is relevant to the architect.


### Question 6684
The documentation of the software architecture for a system is often composed of several views, because
* Different stakeholders are interested in different views of the system
* A single view would be too simplistic
* The views describe different aspects of the system
* All of the above


### Question 6685
Consider the following excerpt about the Scalable web architecture and distributed systems case study  
>"Employing such a strategy maximizes data locality for the requests, which can result in decreased request latency. For example, let's say a bunch of nodes request parts of B: partB1, partB2, etc. We can set up our proxy to recognize the spatial locality of the individual requests, collapsing them into a single request and returning only bigB, greatly minimizing the reads from the data origin."  
  
The quality that is achieved with this tactic is
* Performance because all requests will be processed faster
* Availability because even if PartB1 is not available partB2 can be provided
* Reliability because a single correct read is used to responde to several requests
* Performance because it allows the processing of more requests per unit of time


### Question 6686
An example of module in a software architecture is
* A process.
* A library.
* A component.
* A database.


### Question 6687
Consider the following excerpt about the Scalable web architecture and distributed systems case study about two different possible implementations of a global cache  
>"There are two common forms of global caches (...), when a cached response is not found in the cache, the cache itself becomes responsible for retrieving the missing piece of data from the underlying store. (...) it is the responsibility of request nodes to retrieve any data that is not found in the cache."  
  

* The solution where the cache is responsible for retrieving the missing piece of data from the underlying store has better availability
* The solution where the application is responsible for retrieving the missing piece of data from the underlying store has better modifiability
* The solution where the cache is responsible for retrieving the missing piece of data from the underlying store has better performance
* The solution where the application is responsible for retrieving the missing piece of data from the underlying store has better availability


### Question 6828
What is the type of stimulus when a component responds with an incorrect value?
* Omission.
* Crash.
* Timing.
* Response.


### Question 6829
Consider the following availability scenario:

"If the application server fails to respond to a request every 5 minutes when the system is in its normal operation, this request fails, the application server is switched to degraded mode and the failure is logged."

What is the type of stimulus?
* Omission.
* Crash.
* Timing.
* Response.


### Question 6830
The availability quality depends on
* The mean time before failure.
* The mean time to repair.
* Both, the mean time before failure and the mean time to repair.
* All options are false.


### Question 6831
When writing the availability scenarios of a system
* The availability scenarios should describe what is the expected behavior of the system, from the end user point of view, without being necessary to identify the concrete faults that can occur in the components.
* The definition of a solution for a particular fault does not bring the possibility of the occurrence of new faults.
* It is possible to write all scenarios without designing any part of the architecture.
* The identification of which faults can occur is an iterative process that is applied at different phases of the architectural design.


### Question 6832
What could be the cause of the failures, when an application server shows some omissions to requests from the clients.
* A fault in the application code.
* A fault in the application server hardware memory.
* A fault in a library being used by the application
* All options are true.


### Question 6848
Which availability detection tactic is most adequate to deal with the dynamic scalability of a cluster of servers, like the crash and restart of servers?
* Ping/echo.
* Heartbeat.
* Sanity checking.
* Exception detection.


### Question 6849
Considering the voting tactic for fault detection, which form of the tactic is more suitable to detect implementation faults?
* Replication.
* Functional redundancy.
* Analytic redundancy.
* Whatever redundancy.


### Question 6850
Which of the following recover from fault tactics is more suitable to deal with a server crash, without requiring too much resources and providing a short time to repair, in the order of seconds?
* Active redundancy.
* Passive redundancy.
* Spare.
* Retry.


### Question 6851
Consider the state resynchronization reintroduction availability tactic. With which recover from fault availability tactic the state resynchronization occurs faster?
* Active redundancy.
* Passive redundancy.
* Spare.
* Rollback.


### Question 6852
Which reintroduction availability tactic allows the system to recover from faults while minimizing the level of service affected?
* Shadow.
* State resynchronization.
* Escalating restart.
* Non-stop forwarding.


### Question 6961
Consider the following Graphite scenario:

"The Client applications request to Carbon the write of 600.000 datapoints per minute and all writes are successfully written to the File system in less than one minute."

Which performance tactic *cannot* be used to fulfil this scenario?
* Mange sampling rate.
* Limit event response.
* Increase resources.
* Maintain multiple copies of computation.


### Question 6962
Consider an availability scenario for the Graphite case study where the fault is that the metrics stored in the database do not have the most recent values, which result in outdated graphs. Which is the source of the fault of this availability scenario?
* It is the Webapp component.
* Are the Client applications.
* It is the filesystem.
* It is the implementation of a manage sampling rate tactic to fulfil a write performance scenario.


### Question 6963
Consider the following fragment in the description of the Graphite system:  
>"Imagine that you have 60,000 metrics that you send to your Graphite server, and each of these metrics has one data point per minute. Remember that each metric has its own whisper file on the filesystem. This means carbon must do one write operation to 60,000 different files each minute. As long as carbon can write to one file each millisecond, it should be able to keep up. This isn't too far fetched, but let's say you have 600,000 metrics updating each minute, or your metrics are updating every second, or perhaps you simply cannot afford fast enough storage. Whatever the case, assume the rate of incoming data points exceeds the rate of write operations that your storage can keep up with. How should this situation be handled?"  
  

* It describes a reliability scenario because the data points for each metric will be split between a buffer and disk.
* It describes a performance scenario for the execution of reads.
* The tactic used to solve the problem is not manage sampling rate because there isn't any loss of data points.
* The tactic used to solve the problem is based in the fact that data points are appended to the end of the metric file.


### Question 6964
In the Graphite case study, which architectural solutions can be implemented to guarantee that the ComposerUI has good performance, e.g. <1 second, when the end user experiments with different combinations of functions to generate a graph.
* The datapoints that are being used to draw the graph can be located in a cache in the Webapp, removing the cost of retrieving them from the disk.
* The datapoints that are being used to draw the graph can be located in a cache in the ComposerUI, removing the cost of getting them from the  Webapp, but it is necessary to define a module in the ComposerUI responsible for the generating graphs.
* The ComposerUI is a completely independent component, closer to a simulator of the definition of URL graph expressions, but is it necessary that is contains metrics and datapoints values to be used in the simulations, though not corresponding to real data. 
* All options present possible solutions but with different implementation costs and variations on the ComposerUI functionality.


### Question 6965
In the Graphite system description can be read:  
>"Making multiple Graphite servers appear to be a single system from a user perspective isn't terribly difficult, at least for a naive implementation."  
  

* The quality addressed is availability.
* The quality addressed is availability and an active redundancy design tactic is required to solve the problem.
* The quality addressed is modifiability and an increase cohesion design tactic is required to solve the problem.
* The quality addressed is modifiability.


### Question 6976
Consider a situation where a product family is being developed, which means that different products can be built through different compositions of the product family modules, and that a request comes for the creation of a new product, which only requires a particular composition of some of the existing modules. When is it expected that this change can occur, considering that the executable image of the product only contains the required modules and that the modules in the product family are already compiled?
* During design time.
* During compile time.
* During build time.
* During initialization time.


### Question 6977
Consider a system where the end user can change the look and feel of the user interface she is using by setting a few configuration parameters. 
* The cost of change is higher than the cost of installing the mechanism.
* The cost of installing the mechanism is higher than the cost of change.
* Both costs are high, of change and of installing the mechanism.
* Both costs are low, of change and of installing the mechanism.


### Question 6978
What type of change has as source of stimulus a system administrator?
* A change to increase the availability of a set of application servers.
* A change to support a new type of browser.
* Change to the functionality of the system.
* A change to improve the usability of an end user interface.


### Question 6979
Consider a situation where the domain logic of a business application should be kept persistently in a store. Which modifiability tactic should be applied to reduce the cost of changing the domain logic.
* Split module.
* Increase semantic coherence.
* Use an intermediary.
* Refactor.


### Question 6980
In a system where the code implementing a particular functionality is scattered through several modules, which tactic can we apply to reduce the cost of changing this functionality?
* Split module.
* Increase semantic coherence.
* Encapsulate.
* Use an intermediary.


### Question 6996
In the context of classifying the business goals during the process of designing a software architecture, what is the value of a business goal?
* It is defined by the impact the goal can have in the environment.
* It is its volatility.
* It is how much the its owner is willing to spend to achieve it.
* It is the level of confidence the person who stated the goal has in it.


### Question 6997
A utility tree for the design of a system
* Addresses several quality attributes.
* All options are true.
* Associates with each architecturally significant requirement its business value and architectural impact.
* Is a technique to assess what are the most relevant requirements that architecture should address.


### Question 6998
What is the architectural impact of an Architecturally Significant Requirement (ASR)?
* Means that including this requirement will very likely results in a different architecture.
* Is a value the stakeholders assign to the ASR.
* It is the cost associated with the implementation of the ASR.
* Defines the number of software elements of the software architecture that are related with the ASR.


### Question 6999
In the generate-and-test process of architecture design, which techniques may be applied to test the hypothesis?
* Prototyping of the user interface, for the usability quality.
* Testing the behavior of the key software elements of the architecture under a heavy load, for the performance quality.
* Simulating faults in a prototype implementation the architecture to analyse how it behaves, for the availability quality.
* All option are correct.


### Question 7000
The attribute-driven design method for the design of an architecture is
* A process model where the design is completely isolated from the identification of new requirements.
* A process model which emphazise, first implementation of code and then its refactoring.
* Is an iterative method that, at each iteration, helps the architect to choose a part of the system to design, marshal all significant architectural requirements for that part, and create and test a design for that part.
* It excludes the possibility of undoing decompositions previously done.


### Question 7012
In the Chrome system the following tactic is used the Render Processes to improve performance
* Increase resources.
* Reduce overhead.
* Introduce concurrency.
* Manage sampling rate.


### Question 7013
Consider the following excerpt of the description of Chrome

> Chrome has two different implementations of the internal cache: one backed by local disk, and second which stores everything in memory. The in-memory implementation is used for the Incognito browsing mode and is wiped clean whenever you close the window. Both implement the same internal interface (`disk_cache::Backend`, and `disk_cache::Entry`), which greatly simplifies the architecture and–if you are so inclined–allows you to easily experiment with your own experimental cache implementations.

which refers to a modifiability quality. Which tactic is being applied?
* Encapsulation.
* Use an intermediary.
* Refactor.
* Restrict dependencies.


### Question 7014
In Chrome prefetching is used as a technique to improve the latency. This technique belongs to which group of performance tactics?
* Increase resources.
* Introduce concurrency.
* Limit event resources.
* Schedule resources.


### Question 7015
In the description of the Chrome we can read

> What about network performance? First off, Chrome uses the same network stack on Android and iOS as it does on all other versions. This enables all of the same network optimizations across all platforms, which gives Chrome a significant performance advantage. However, what is different, and is often adjusted based on the capabilities of the device and the network in use, are variables such as priority of speculative optimization techniques, socket timeouts and management logic, cache sizes, and more.

Which modifiability tactic is being used?
* Increase semantic coherence.
* Use an intermediary.
* Restrict dependencies.
* Abstract common services.


### Question 7016
Consider the following excerpt from the Chrome description

> Typing in the Omnibox (URL) bar triggers high-likelihood suggestions, which may similarly kick off a DNS lookup, TCP pre-connect, and even prerender the page in a hidden tab.

Which quality(ies) is(are) being addressed?
* Performance.
* Usability.
* Performance and usability.
* Modifiability and performance.


### Question 7017
In the HDFS system, in the stakeholders perspective, the use of low cost servers to build the clusters is:
* Essential to ensure the system scalability
* Essential to ensure the system portability
* Essential to facilitate the integration with legacy systems
* Essential to reduce costs whenever there is a fault in a hardware element


### Question 7018
In the HDFS system the fault recovery tactics are:
* Active replication and passive replication
* Active replication, passive replication, and spare
* Quorum, active replication, and passive replication
* Passive replication and spare


### Question 7019
The architecture of the HDFS system only allows the existence of one NameNode. Given the responsibilities of this component and the current architecture of HDFS, what would be the consequences of adding the possibility of having replicas of the NameNode in the system?
* The system would respond faster to all the clients' requests
* The performance of the system would not change
* The system would respond faster to requests made by DataNodes to update the metadata
* The system would respond faster to requests about file locations


### Question 7020
In HDFS, during normal operation DataNodes use the heartbeat tactic
* But they could have used the ping tactic instead without adding any overhead to the NameNode
* But the exceptions tactic could have been used as well
* To inform other DataNodes about their availability
* Because this tactic simplifies the addition and removal of DataNodes


### Question 7021
In the HDFS system when the *CheckpointNode* and the *NameNode* are deployed in different nodes, the *CheckpointNode* provides:
* Performance qualities only
* Availability qualities only
* Performance and security qualities
* Performance and availability qualities


### Question 8887
What type of change has as source of stimulus a system administrator?
* A change to increase the availability of a set of application servers.
* A change to support a new type of browser.
* Change to the functionality of the system.
* A change to improve the usability of an end user interface.


### Question 8888
To reduce the backend load (writes) the Graphite system uses
* A Maintain Multiple Copies of Computation design tactic in the WebApp such that reads do not compete with writes.
* A Maintain Multiple Copies of Data design tactic in Carbon.
* A Maintain Multiple Copies of Data design tactic in the WebApp such that reads do not compete with writes.
* A Maintain Multiple Copies of Computation design tactic in Carbon.


### Question 8889
The attribute-driven design method for the design of an architecture is
* A process model where the design is completely isolated from the identification of new requirements.
* A process model which emphazise, first implementation of code and then its refactoring.
* Is an iterative method that, at each iteration, helps the architect to choose a part of the system to design, marshal all significant architectural requirements for that part, and create and test a design for that part.
* It excludes the possibility of undoing decompositions previously done.


### Question 8890
Human-editable URL API for creating graphs is a usability design tactic used in the Graphite system. This tactic
* Is an aggregate design tactic.
* Is a maintain user model design tactic.
* Is a design tactic for a scenario where the source of stimulus is the graph owner user.
* Is a design tactic for a scenario where the source of stimulus are technical users.


### Question 8891
Which quality, or qualities, of the Graphite system are described by the sentence: *Graphite's Composer UI provides a point-and-click method to create a graph from which you can simply copy and paste the URL.*
* Usability and Performance.
* Performance.
* Modifiability.
* Usability.


### Question 8892
In the Graphite system the component *carbon* provides to *webapp* components an access interface to the *buffers* in order to improve the quality(ies) of
* Performance
* Reliability and Performance
* Security
* Reliability


### Question 8893
Ping-and-echo and Heartbeat are two availability tactics to detect faults.
* Heartbeat requires the availability monitor to confirm the reception of the signal
* In Ping-and-echo the availability monitor should always send the same request
* In Heartbeat, the monitored components can change the message rate
* Ping-and-echo requires the availability monitor to know the addresses of the components it is monitoring


### Question 8894
In wikipedia you can find the following definition:  
>"The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program."  
  
The garbage collector is a component that implements an availability tactic of
* Ignore faulty behavior.
* Transactions.
* Rollback.
* Exception prevention.


### Question 8895
In the Hadoop system the tactics used to reintroduce a DataNode after its failure are:
* Shadow operation
* Checkpoint/Rollback
* All of the above
* State Resynchronization


### Question 8896
In the description of the Chrome case study you can read:  
*Typing in the Omnibox (URL) bar triggers high-likelihood suggestions, which may similarly kick off a DNS lookup, TCP pre-connect, and even prerender the page in a hidden tab.*  
This description refers to the qualities of
* Usability e Modifiability
* Availability e Usability
* Availability e Performance
* Performance e Usability


### Question 9472
A utility tree
* Only contains business qualities.
* Cannot be defined for the security quality.
* Contains the architectural tactics associated with architecturally significant requirements.
* Contains the business value and the architectural impact of architecturally significant requirements.


### Question 9473
A heartbeat monitor
* Implements a tactic to recover from faults.
* Implements a tactic to prevent faults.
* Can be used in a non-concurrent system.
* Can be used as the source of a stimulus in a scenario.


### Question 9474
Chrome, as described in the case study, was designed to support the accomplish the following architectural qualities:
* Security and Mobility
* Performance, Security and Interoperability
* Security, Performance, Usability, Interoperability and Mobility
* Security, Performance, Usability and Mobility


### Question 9475
Which quality, or qualities, of the Graphite system are described by the sentence: *Graphite's Composer UI provides a point-and-click method to create a graph from which you can simply copy and paste the URL.*
* Usability and Performance
* Performance
* Testability
* Usability


### Question 9476
What could be the cause of the failures, when an application server shows some omissions to requests from the clients.
* A fault in the application code.
* A fault in the application server hardware memory.
* A fault in a library being used by the application
* All options are true.


### Question 9522
In Chrome, to accomplish the security quality, the Browser Process implements a tactic
* Data Encryption
* Intrusion Detection
* Authorize Actors
* Limit Access


### Question 9523
In the description of the Chrome case study you can read:  
*Typing in the Omnibox (URL) bar triggers high-likelihood suggestions, which may similarly kick off a DNS lookup, TCP pre-connect, and even prerender the page in a hidden tab.*  
This description refers to
* Maintain Task Model tactic
* Maintain System Model tactic
* Support User Initiative tactics
* Maintain User Model tactic


### Question 9524
Consider a situation where a product family is being developed, which means that different products can be built through different compositions of the product family modules, and that a request comes for the creation of a new product, which only requires a particular composition of some of the existing modules. When is it expected that this change can occur, considering that the executable image of the product only contains the required modules and that the modules in the product family are already compiled?
* During design time.
* During compile time.
* During build time.
* During initialization time.


### Question 9525
An availability tactic to prevent faults is
* Shadow.
* Voting.
* Ignore faulty behavior.
* Increase competence set.


### Question 9526
When applying Attribute-Driven Design (ADD) to the FenixEdu system the creation of a view where there are redundant web servers, load balancers and database servers
* Results from a utility tree for performance.
* Results from a single availability scenario.
* Results from the application of a single ADD iteration.
* Results from the application of several ADD iterations.


### Question 9547
In the description of Chrome case study we can read:  
*Chrome maintains a single instance of the resource dispatcher, which is shared across all render processes, and runs within the browser kernel process.*  
The *Resource Dispatcher* contributes to the performance quality because it implements a tactic of
* Increase Resources
* Introduce Concurrency
* Maintain Multiple Copies of Computation
* Schedule Resources


### Question 9548
In the Graphite system the component *carbon-relay* implements a tactic
* Maintain Multiple Copies of Data
* Passive Redundancy
* Active Redundancy
* Maintain Multiple Copies of Computation


### Question 9549
Consider an availability scenario for the Graphite case study where the fault is that the metrics stored in the database do not have the most recent values, which result in outdated graphs. Which is the source of the fault of this availability scenario?
* It is the Webapp component.
* Are the Client applications.
* It is the filesystem.
* It is the implementation of a manage sampling rate tactic to fulfil a write performance scenario.


### Question 9550
The *Composer UI* component of Graphite system, described as - *Graphite's Composer UI provides a point-and-click method to create a graph from which you can simply copy and paste the URL* - to be effective needs to show to the user the changes she performs in the graph such that she has immediate feedback about the result of the changes. To do so, the system needs to implement the tactics of
* Task Model
* System Model
* User Model
* Performance


### Question 9551
In some situations Chrome prerenders a page. To do it
* The page is in cache
* Uses the Maintain Multiple Copies of Computation tactic
* Uses the Maintain Multiple Copies of Data tactic
* Uses the Introduce Concurrency tactic


### Question 9552
The Hadoop system support of different block placement policies:
* Allows *DataNodes* to decide which replicas they have
* Increases the system modifiability whenever it is necessary to change the the deployment structure
* Allow several replicas to be located in different *DataNodes*
* Increases the system modifiability whenever it is necessary to change the placement policy


### Question 9553
According to the attribute-driven design process, we should design the software architecture for a system based on a selected list of requirements, which are called the *architecturally significant requirements*. These architecturally significant requirements should be sorted according to their importance for the system's stakeholders because
* We should always satisfy in the first place the requirements of the more important stakeholders (such as the client)
* If no order was established among them, we would not know from where should we start the design process
* If one of the stakeholders complains that her requirement is not satisfied, we may explain to her that there were other more important requirements first
* When it is not possible to satisfy all of the requirements optimally, we should be aware of their relative importance so that we may find a solution that corresponds to a satisfactory trade-off


### Question 9554
Consider the modifiability quality and the cost of change.
* A low cost of change implies a low cost of development, because changing the code is part of development.
* There is no relation between the cost of change and the cost of development.
* The cost of change is higher if it occurs at runtime.
* A low cost of change may imply a high cost of development.


### Question 9555
The availability quality depends on
* The mean time before failure.
* The mean time to repair.
* Both, the mean time before failure and the mean time to repair.
* All options are false.


### Question 9556
Consider the following modifiability scenario  
>"The effort necessary to successfully port the system to execute in a new browser should not be higher than 5 person/month."  
  

* The environment is build time
* The response is 5 person/month
* To implement the above scenario it is necessary to apply a runtime defer binding tactic
* The stimulus is to port the system to a new browser


### Question 9577
There are several tactics to satisfy availability requirements, which may be applied depending on the concrete requirement that we want to satisfy. Assuming that you want to detect faults of type *response* in your system, which tactic is more adequate?
* The Ping/Echo tactic
* The Heartbeat tactic
* The Removal from Service tactic
* The Voting tactic


### Question 9578
What could be the cause of the failures, when an application server shows some omissions to requests from the clients.
* A fault in the application code.
* A fault in the application server hardware memory.
* A fault in a library being used by the application
* All options are true.


### Question 9579
Consider that a module, that contains a complex business logic, needs to invoke a remote entity using a particular communication protocol and it is needs to manage the invocation, like deal with the possible errors, delays and omissions in the invocation, transform the data before sending it, etc. Which tactic should be applied for a scenario where there will be changes in the communication protocol. Note that the business logic comprises a set of functionalities that is independent of the remote invocation technological aspects.
* Encapsulate the module such that the clients of the module should not be aware of the remote invocations
* Refactor the common parts between the business logic and the remote invocation
* Increase the semantic coherence between the business logic code and the remote invocation code
* Use an intermediary that contains all the code associated with the remote invocation separating it from the modules' business logic


### Question 9580
In the Graphite system the component *carbon* provides to *webapp* components an access interface to the *buffers* in order to improve the quality of
* Performance
* Interoperability
* Security
* Availability (Reliability)


### Question 9581
In the description of Hadoop we can red.  
>"The CheckpointNode periodically combines the existing checkpoint and journal to create a new checkpoint and an empty journal. The CheckpointNode usually runs on a different host from the NameNode since it has the same memory requirements as the NameNode."  
  

* The periodic rebuild of the checkpoint is done to increase the availability of the NameNode
* The advantage of running the CheckpointNode in a different host is to not degrade the availability of the NameNode during checkpoint construction
* The periodic rebuild of the checkpoint improves the performance of the NameNode during normal operation
* The periodic rebuild of the checkpoint improves the performance of the NameNode during its initialization


### Question 9582
Considering the availability architectural quality and the tactics of active redundancy, passive redundancy, and spare
* These tactics are used to prevent the occurence of a fault.
* Spare guarantees immediate recover.
* Passive redundancy does not work with non-deterministic behavior of request's execution.
* Active redundancy can be used together with a voting tactic to detect and recover from faults.


### Question 9583
In the Graphite system the component *carbon* provides to *webapp* components an access interface to the *buffers* in order to improve the quality of
* Performance.
* Interoperability.
* Security.
* Availability.


### Question 9584
In the Graphite system description can be read:  
>"We've got 600,000 metrics that update every minute and we're assuming our storage can only keep up with 60,000 write operations per minute. This means we will have approximately 10 minutes worth of data sitting in carbon's queues at any given time. To a user this means that the graphs they request from the Graphite webapp will be missing the most recent 10 minutes of data."  
  

* The quality addressed is performance.
* The quality addressed is availability and a voting design tactic is required to solve the problem.
* The quality addressed is performance and a maintain multiple copies of data design tactic is required to solve the problem.
* The quality addressed is availability.


### Question 9585
The Attribute-Driven Design method is characterized by
* The architect cannot backtrack the decomposition decisions she made.
* During the design process the number of architecturally significant requirements cannot change.
* Contraints cannot be used as requirements for the decomposition process.
* In each iteration one or more architecturally significant requirements are used to decompose a software element of the system design.


### Question 9586
In the Chrome system the following tactic is used the Render Processes to improve performance
* Increase resources.
* Reduce overhead.
* Introduce concurrency.
* Manage sampling rate.


### Question 9587
A voting tactic can be used to
* Prevent a fault in hardware.
* Prevent a fault in software.
* Prevent a fault in a process.
* Detect a fault.


### Question 9588
The scalability quality is achieved in the Hadoop system only because
* Stakeholders requirements do not emphasize performance as the most important issue
* The Hadoop small development team is highly competent and skilled
* The Hadoop system implementation uses complex distributed algorithms for scalability
* Stakeholders do not mind if two simultaneous reads on the same file by two different applications may return different values


### Question 9589
The stimulus of an availability scenario is
* A failure.
* An error.
* An input.
* A fault.


### Question 9590
Consider the modifiability quality and the cost of change.
* A low cost of change implies a low cost of development, because changing the code is part of development.
* A high cost of change occurs if it is necessary to defer the binding of what needs to be changed.
* There is no relation between the cost of change and the cost of development.
* A low cost of change may imply a high cost of development.


### Question 9591
In the description of the Chrome case study you can read:  
*Typing in the Omnibox (URL) bar triggers high-likelihood suggestions, which may similarly kick off a DNS lookup, TCP pre-connect, and even prerender the page in a hidden tab.*  
This description refers to the qualities of
* Usability e Modifiability
* Availability e Usability
* Availability e Performance
* Performance e Usability


### Question 9592
Considering the availability architectural quality, the tactic of retry
* Can be applied to any kind of availability scenario.
* Guarantees that the system will not become unavailable.
* Reduces the availability scenario response time because the request occurs twice.
* Is useful to support scenarios where the stimulus is an omission.


### Question 9593
Consider the following scenario:

"A request arrives to add support for a new browser to a Web-based system, and the change must be made within two weeks."
* It is an interoperability scenario.
* The scenario includes the environment.
* The scenario does not include the stimulus.
* The scenario includes the response measure.


### Question 9594
In the description of the Chrome system can be read  
>"The goal of the predictor is to evaluate the likelihood of its success, and then to trigger the activity if resources are available."  
  
The above sentence refer to
* Maintain multiple copies of data tactic.
* Introduce concurrence tactic.
* Increase resource efficiency tactic.
* Schedule resources tactic.


### Question 9595
Consider an architecturally significant requirement (ASR) that has a high impact on the architecture but a low business value
* This ASR can easily be supported by the architecture.
* This ASR should be supported by the architecture because of its high impact.
* The architect should support this ASR after designing an architecture that supports all the ASRs with high business value.
* The architect have to decide on the cost/benefit of designing an architecture that supports this ASR.


### Question 9596
The modifiability tactic Use an Intermediary between two modules
* Has as main goal the reduction of the modules' size.
* Results in the creation of a third module that makes the original modules independent.
* Increases the cohesion between the two modules.
* May conflict with the Reduce Overhead performance tactic.


### Question 9867
In Chrome it is possible to associate a Renderer Process to each Tab, which results in the increase of performance due to a tactic of
* Maintain Multiple Copies of Computation
* Limit Exposition
* Active Redundancy
* Introduce Concurrency


### Question 9868
There are several tactics to satisfy availability requirements, which may be applied depending on the concrete requirement that we want to satisfy. Assuming that you want to detect faults of type *response* in your system, which tactic is more adequate?
* Ping/Echo
* Heartbeat
* Removal from Service
* Voting


### Question 9869
There are several tactics to satisfy availability requirements, which may be applied depending on the concrete requirement that we want to satisfy. Assuming that you want to detect faults of type *response* in your system, which tactic is more adequate?
* Ping/Echo.
* Retry.
* Passive Redundancy.
* Voting.


### Question 9870
The architecture of the HDFS system only allows the existence of one NameNode. Given the responsibilities of this component and the current architecture of HDFS, what would be the consequences of adding the possibility of having replicas of the NameNode in the system?
* The system would respond faster to all the clients' requests
* The performance of the system would not change
* The system would respond faster to requests made by DataNodes to update the metadata
* The system would respond faster to requests about file locations


### Question 9871
One of the qualities of Chrome is the execution of the JavaScript code inside a process, which allows the isolation against possible interferences between the execution of JavaScript programs that are loaded from different sites. The isolation level
* It is always the same for all instances of Chrome
* It is defined compile-time of Chrome code
* It is defined during the initialization of each instance of Chrome
* It can change during the execution of each instance of Chrome


### Question 9892
In the Graphite system, in order to improve performance the component *carbon* do not write directly on disk, it uses a buffer instead:
* but this reduces reliability because de webapp components do not access the most recent data
* but it reduces performance, anyway, because the buffer components easily overflow
* and it improves security because the buffer is protected agains attacks
* and it does not penalize reliability because it also provides an interface that the webapp components can use to access the most recent data


### Question 9893
Which quality, or qualities, of the Graphite system are described by the sentence: *Graphite's Composer UI provides a point-and-click method to create a graph from which you can simply copy and paste the URL.*
* Usability and Performance
* Performance
* Testability
* Usability


### Question 9894
In the Graphite system description can be read:  
>"We've got 600,000 metrics that update every minute and we're assuming our storage can only keep up with 60,000 write operations per minute. This means we will have approximately 10 minutes worth of data sitting in carbon's queues at any given time. To a user this means that the graphs they request from the Graphite webapp will be missing the most recent 10 minutes of data."  
  

* The quality addressed is performance and a limit event response is required to solve the problem.
* The quality addressed is availability and a voting design tactic is required to solve the problem.
* The quality addressed is performance and a maintain multiple copies of data design tactic is required to solve the problem.
* The quality addressed is availability and transactions tactic is required to solve the problem.


### Question 9895
The security tactics used in The Hadoop system deployed at Yahoo! are:
* Authenticate users, authorize users, and limit exposure
* Authenticate users, authorize users, and limit access
* Authenticate users, authorize users, limit access, and maintain integrity
* Authenticate users and authorize users


### Question 9896
In the Hadoop system the fault recovery tactics are:
* Active replication and passive replication
* Active replication, passive replication, and spare
* Quorum, active replication, and passive replication
* Passive replication and spare


### Question 9897
The *Composer UI* component of Graphite system, described as - *Graphite's Composer UI provides a point-and-click method to create a graph from which you can simply copy and paste the URL* - to be effective needs to show to the user the changes she performs in the graph such that she has immediate feedback about the result of the changes. To do so, the system needs to implement the tactics of
* Task Model
* System Model
* User Model
* Performance


### Question 9898
In the Hadoop system when the *CheckpointNode* and the *NameNode* are deployed in different nodes, the *CheckpointNode* provides:
* Performance qualities only
* Availability qualities only
* Performance and security qualities
* Performance and availability qualities


### Question 9899
During the different steps on how to create an architecture, the precise specification of architecture quality attributes is initially relevant to
* Make a business case for the system
* The system design
* Documenting and communicating the architecture
* Understand the architecturally significant requirements


### Question 9900
In the Graphite system the component *carbon* provides to *webapp* components an access interface to the *buffers* in order to improve the quality of
* Performance
* Interoperability
* Security
* Reliability


### Question 9901
Consider the following scenario  
>"If one of the application servers fails to respond when the system is in its normal operation state, the load balancer should redirect requests to another application server."  
  

* The stimulus is incorrect response
* The artefact is the load balancer
* The quality it addresses is interoperability
* The response is not correctly stated


### Question 9902
In defensive programming the programmer checks that the conditions under which modules are invoked comply with their specification, and if they don't an exception is raised to avoid failure propagation. When defensive programming is followed, in the context of availability quality, we are using a tactic of
* Exception Handling
* Increase Competence Set
* Exception Prevention
* Exception Detection


### Question 9903
A response measure of a modifiability scenario is
* When the modification should occur.
* The features that will be implemented.
* Defer binding.
* The new defects introduced.


### Question 9904
The modifiability tactic Use an Intermediary between two modules
* Has as main goal the reduction of the modules' size.
* Results in the creation of a third module that does not have to change when any of the original modules are changed.
* Increases the cohesion between the two modules.
* Cannot be used together with the Reduce Overhead performance tactic.


### Question 9905
In the Hadoop system, during normal operation, *NameNode* could use a ping tactic to know whether *DataNodes* are available
* Because this tactic does not overload the *NameNode*
* But an exceptions tactic could be used as well
* To notify other *DataNodes* that they are available
* But it would imply an *overhead* in the *NameNode*


### Question 9906
According to the attribute-driven design process, we should design the software architecture for a system based on a selected list of requirements, which are called the *architecturally significant requirements*. These architecturally significant requirements should be sorted according to their importance for the system's stakeholders because
* We should always satisfy in the first place the requirements of the more important stakeholders (such as the client)
* If no order was established among them, we would not know from where should we start the design process
* If one of the stakeholders complains that her requirement is not satisfied, we may explain to her that there were other more important requirements first
* When it is not possible to satisfy all of the requirements optimally, we should be aware of their relative importance so that we may find a solution that corresponds to a satisfactory trade-off


### Question 9907
Consider an architecturally significant requirement (ASR) that has a high impact on the architecture but a low business value
* This ASR can easily be supported by the architecture.
* This ASR should be supported by the architecture because of its high impact.
* The architect should support this ASR after designing an architecture that supports all the ASRs with high business value.
* The architect have to decide on the cost/benefit of designing an architecture that supports this ASR.


### Question 9908
According to the attribute-driven design process, we should design the software architecture for a system based on a selected list of requirements, which are called the *architecture significant requirements*. These requirements should be sorted according to their importance for the system's stakeholders because
* We should always satisfy in the first place the requirements of more important stakeholders (such as the client)
* If no order was established among them, we would not know from where should we start the design process
* If one of the stakeholders complains that his requirement is not satisfied, we may explain to him that there were other more important requirements first
* When it is not possible to satisfy all of the requirements optimally, we should be aware of their relative importance so that we may find a solution that corresponds to a satisfactory trade-off


### Question 9909
Considering the availability architectural quality, the tactic of retry
* Can be applied to any kind stimulus in availability scenarios
* Can guarantee that the system will not become unavailable
* When applied it increases the latency of the availability scenario's response time
* Is useful to support scenarios where the stimulus is an omission


### Question 9910
Which quality(ies) of Chrome can be inferred from the sentence below?  
>"By contrast, Chrome works on a multi-process model, which provides process and memory isolation, and a tight security sandbox for each tab. In an increasingly multi-core world, the ability to isolate the processes as well as shield each open tab from other misbehaving pages alone proves that Chrome has a significant performance edge over the competition. In fact, it is important to note that most other browsers have followed suit, or are in the process of migrating to similar architecture."  
  

* Performance
* Security
* Security and modifiability
* Performance and security


### Question 9911
Consider the following figure that presents the Hadoop cluster topology.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/786.png)  

* When a new block is created, the first replica is written in the node where the writer is located, to improve availability
* When a new block is created, the second replica is not stored in the same rack than the first replica to increase the availability when a Data Node fails
* When a new block is created, the third replica is stored in the same rack than the second replica to improve the performance of reads
* When a read occurs, the client, if it is located in the cluster, receives a list of the DataNodes where the replicas are, ordered by its closeness to the client, to improve performance of reads


### Question 11772
Consider the following scenario: *A system administrator adds more copies of computation of the system, each one using a different database, and is able to do it in less than 10 minutes.*
* This is a performance scenario and the measure of the response is 10 minutes latency.
* This is not a modifiability scenario because the source of the stimulus cannot be a system administrator.
* This is a modifiability scenario and its environment design time.
* This is a modifiability scenario which has a defer binding tactic.


### Question 11773
In the Chrome system the use of a process per tab results form the application of a tactic of
* Increase resources.
* Increase resource efficiency.
* Maintain multiple copies of data.
* Limit access.


### Question 11774
Consider the following modifiability scenario  
>"The effort necessary to successfully port the system to execute in a new browser should not be higher than 5 person/month."  
  

* The environment is build time
* The response is 5 person/month
* To implement the above scenario it is necessary to apply a runtime defer binding tactic
* The stimulus is to port the system to a new browser


### Question 11775
The availability quality can be supported by a voting tactic in order to identify faults of
* Programming, if the components execute modules developed by different teams.
* Hardware, if there is hardware redundancy.
* Operating Systems, if redundant components execute on top of different operating systems..
* All the previous options.


### Question 11776
Consider the following fragment in the description of the Graphite system:  
>"To avoid this kind of catastrophe, I added several features to carbon including configurable limits on how many data points can be queued and rate-limits on how quickly various whisper operations can be performed. These features can protect carbon from spiraling out of control and instead impose less harsh effects like dropping some data points or refusing to accept more data points. However, proper values for those settings are system-specific and require a fair amount of testing to tune. They are useful but they do not fundamentally solve the problem. For that, we'll need more hardware."  
  
The performance tactics referred in the above description are:
* Bound execution times, and increase resources.
* Manage sampling rate, bound queue sizes, and increase resources.
* Bound queue sizes, and increase resources.
* Bound execution times, bound queue sizes, and increase resources.


### Question 11832
Consider the following fragment in the description of the Graphite system:  
>"The Graphite webapp allows users to request custom graphs with a simple URL-based API. Graphing parameters are specified in the query-string of an HTTP GET request, and a PNG image is returned in response."  
  

* It describes a performance scenario where the stimulus is the request of a custom graph.
* The scenario is supported by a manage sampling rate tactic because several requests to the same graph return the same result.
* It describes a usability scenario where the source of stimulus is a non-technical user.
* A support user initiative tactic based on the definition of a language is used to achieve this scenario.


### Question 11833
In a modifiability scenario the environment can be characterized as design time, compile time, build time, initiation time, and runtime.
* When the environment is design time it means that the change should be done before the system enters into production
* When the environment is build time it means that it is necessary to codify a new module that is added by rebuilding the system
* When the environment is runtime the cost of doing the change is higher than in the other environments
* When the environment is initiation time it means that it is necessary to restart the system for the change to take effect


### Question 11834
Consider an architecturally significant requirement (ASR) that has a high impact on the architecture but a low business value
* This ASR can easily be supported by the architecture.
* This ASR should be supported by the architecture because of its high impact.
* The architect should support this ASR after designing an architecture that supports all the ASRs with high business value.
* The architect have to decide on the cost/benefit of designing an architecture that supports this ASR.


### Question 11835
Which performance tactic is referred in the following description of Chrome?  
>"The ability of the browser to optimize the order, priority, and latency of each network resource is one of the most critical contributors to the overall user experience. You may not be aware of it, but Chrome's network stack is, quite literally, getting smarter every day, trying to hide or decrease the latency cost of each resource: it learns likely DNS lookups, it remembers the topology of the web, it pre-connects to likely destination targets, and more. From the outside, it presents itself as a simple resource fetching mechanism, but from the inside it is an elaborate and a fascinating case study for how to optimize web performance and deliver the best experience to the user."  
  

* Limit event response
* Maintain multiple copies of computation
* Maintain multiple copies of data
* Schedule resources


### Question 11836
In the description of the Chrome system can be read  
>"As the user types, the Omnibox automatically proposes an action, which is either a URL based on your navigation history, or a search query."  
  
The above sentence refers to
* Introduce concurrence tactic.
* Increase resource efficiency tactic.
* Maintain task model tactic.
* Maintain user model tactic.


### Question 11962
Consider the following scenario:

"A request arrives to add support for a new browser to a Web-based system, and the change must be made within two weeks."
* It is an interoperability scenario.
* The scenario includes the environment.
* The scenario does not include the stimulus.
* The scenario includes the response measure.


### Question 11963
Consider a situation where the domain logic of a business application should be kept persistently in a store. Which modifiability tactic should be applied to reduce the cost of changing the domain logic.
* Split module.
* Increase semantic coherence.
* Use an intermediary.
* Refactor.


### Question 11964
Consider the following scenario: *A system administrator simultaneously launches several instances of the system, each one using a different database, and is able to do it in less than 10 minutes.*
* This is a performance scenario because the stimulus is an input, *launches several instances of the system*.
* This is not a modifiability scenario because the source of the stimulus cannot be a system administrator.
* This is a modifiability scenario and its environment design time.
* This is a modifiability scenario which has a defer binding tactic.


### Question 11965
Consider the following availability scenario  
>"If one of the application servers fails to respond to a request when the system is in its normal operation state, the system should notify the operator and continue to operate normally."  
  

* The scenario is not correct
* The scenario is correct but it is not clear what is the artefact
* The scenario is not completely correct because it contains two responses
* The scenario is correct but it does not describe whether the request the servers fails to respond to succeeds or fails


### Question 11966
Considering the availability architectural quality and the tactics of ping/echo and heartbeat
* These tactics cannot be applied in conjunction with the self-test tactic.
* These tactics are used to prevent the occurrence of a fault.
* In ping/echo the components have the initiative to start the interaction.
* Heartbeat is more scalable than ping/echo because the monitor does not need to know in advance the addresses of the components.


### Question 11982
In the HDFS system when the *CheckpointNode* and the *NameNode* are deployed in different nodes, the *CheckpointNode* provides:
* Performance qualities only
* Availability qualities only
* Performance and security qualities
* Performance and availability qualities


### Question 11983
Chrome, as described in the case study, was designed to support the accomplish the following architectural qualities:
* Security and Mobility
* Performance, Security and Interoperability
* Security, Performance, Usability, Interoperability and Mobility
* Security, Performance, Usability and Mobility


### Question 11984
In Chrome it is possible to associate a Renderer Process to each Tab, which results in the increase of performance due to a tactic of
* Maintain Multiple Copies of Computation
* Limit Exposition
* Active Redundancy
* Introduce Concurrency


### Question 11985
In the Graphite system the component *carbon* provides to *webapp* components an access interface to the *buffers* in order to improve the quality(ies) of
* Performance
* Reliability and Performance
* Security
* Reliability


### Question 11986
Consider the following modifiability scenario  
>"The effort necessary to successfully port the system to execute in a new browser should not be higher than 5 person/month."  
  

* The environment is build time
* The response is 5 person/month
* To implement the above scenario it is necessary to apply a runtime defer binding tactic
* The stimulus is to port the system to a new browser


### Question 11992
In a system where the code implementing a particular functionality is scattered through several modules, which tactic can we apply to reduce the cost of changing this functionality?
* Split module.
* Increase semantic coherence.
* Encapsulate.
* Use an intermediary.


### Question 11993
Consider an availability scenario for the Graphite case study where the fault is that the metrics stored in the database do not have the most recent values, which result in outdated graphs. Which is the source of the fault of this availability scenario?
* It is the Webapp component.
* Are the Client applications.
* It is the filesystem.
* It is the implementation of a manage sampling rate tactic to fulfil a write performance scenario.


### Question 11994
In HDFS, during normal operation DataNodes use the heartbeat tactic
* But they could have used the ping tactic instead without adding any overhead to the NameNode
* But the exceptions tactic could have been used as well
* To inform other DataNodes about their availability
* Because this tactic simplifies the addition and removal of DataNodes


### Question 11995
The stimulus of an availability scenario
* Can be a failure.
* Should be a fault.
* Can be an error.
* Should be a crash.


### Question 11996
Consider the following scenario:

"A request arrives to add support for a new browser to a Web-based system, and the change must be made within two weeks."
* It is an interoperability scenario.
* The scenario includes the environment.
* The scenario does not include the stimulus.
* The scenario includes the response measure.


### Question 13127
A criteria for the the application of the Decomposition architectural style of the Module viewtype is Build-vs-Buy decisions. The application of the criteria
* Results in a similar decomposition as if the criteria was not applied but some modules are identified to be outsourced.
* Results in a decomposition where each module may be implemented by a single developer.
* Allows to increase the overall calendar development time of the project because there is a communication overhead with external teams.
* Allows to identify modules for which the development team does not have the required implementation competences.


### Question 13128
Consider the following excerpt from the Wikipedia page on *black-box testing*:  
>"Black-box testing is a method of software testing that tests the functionality of an application as opposed to its internal structures or workings. Specific knowledge of the application's code/internal structure and programming knowledge in general is not required. Test cases are built around specifications and requirements, i.e., what the application is supposed to do."  
  
Assuming that you belong to the team testing a complex system and that you are responsible for performing black box tests on the system, which of the following architectural views of the system would be most useful to you?
* *Decomposition* and *Implementation* views
* *Component-and-connector* views
*  None, given that to perform black-box testing you do not need to know the code or the internal structure of the application to be tested
* *Decomposition* and *Uses* views


### Question 13129
The Generalization architectural style of the module viewtype can be use to support the evolution of a system
* By changing the commonalities that are in the children.
* Because the *is-a* relation does not allow reuse of implementation.
* By adding, removing, or changing children.
* By changing a parent, which will automatically change all the children that inherit from it.


### Question 13130
According to the definition of the Layered architectural style, each layer represents a grouping of modules that offers a cohesive set of services.
* This means that the modules inside a layer cannot be loosely coupled.
* This means that this architectural style emphasizes the quality of performance.
* This means that each module cannot use other modules inside the same layer.
* This means that the modules inside a layer are likely to be ported to a new application together.


### Question 13131
The Aspects style was introduced recently as a new style of the module viewtype. Using this style in the software architecture of a system
* Does not change the existing modules of the system, because they are determined by the system's Decomposition, which is not changed
* Adds restrictions to the dependency relationships that exist between modules and that are represented using other styles, as with the layers style
* Introduces only a new type of relation among the existing modules of the system, which resulted from other styles of the module viewtype
* Typically gives rise to more modules than what we would have if not using this style


### Question 14917
The uses architectural style allows to assess the impact of changes in modules
* Because it is a natural extension of the use cases concept
* But it requires additional information on the modules internal structure
* And contains all the information required to assess effectively the impact
* But it needs to be complemented, for each uses relationship, with the level of coupling


### Question 14918
A CRUD matrix, which indicates whether each module creates, reads, updates, or deletes data (CRUD, for short) from each data entity. The CRUD matrix
* Is an extension of a view of the Data Model style.
* Allows to avoid redundancy and inconsistency.
* Describes the structure of the data used by the system.
* Relates a view of the Uses style with a view of the Data Model style.


### Question 14919
According to the definition of the Layered architectural style, each layer represents a grouping of modules that offers a cohesive set of services.
* This means that the modules inside a layer cannot be loosely coupled.
* This means that this architectural style emphasizes the quality of performance.
* This means that each module cannot use other modules inside the same layer.
* This means that the modules inside a layer are likely to be ported to a new application together.


### Question 14920
A view of the *Uses* style that contains a loop in the uses relationships
* Means that it is possible to implement the system according to an incremental development process
* Means that the modules that are part of the loop should be implemented first
* Gives a hint to replace the uses relations by is-a relations
* Means that it may be difficult to design incremental testing


### Question 14921
The Uses architectural style of the Module viewtype
* Allows the analysis of the impact of changes because if a module uses another it will necessarily have to change whenever the used module changes.
* Improves testability because if a module uses another then it is only possible to test them together.
* Improves testability because it informs the tester about which modules involved in circular use dependencies.
* Allows incremental development because the possible increments of functionally can be inferred from use dependencies.


### Question 14942
Consider a view of the module viewtype where there is a uses loop, a cycle of uses dependences between several modules. It may be possible to break the dependence cycle by
* Applying the generalization style to identify child modules of a module in the loop chain.
* Identifying which of the *uses* dependencies are actually generalization dependencies.
* Decomposing a *uses* relation into different interfaces.
* Applying the decomposition style to some of the modules in the loop chain.


### Question 14943
Consider the Uses architectural style of the Module viewtype
* Cycles in the uses relation between modules are a good sign, because it indicates that several modules should be tested together.
* The uses relation should be applied to the coarse-grained modules, because it allows to identify circular dependences.
* There isn't any relation with the layered architectural style because the allowed-to-use relation is more generic.
* The project manager uses this view to get advice on the incremental development of the system.


### Question 14944
The Generalization architectural style of the module viewtype can be use to support the evolution of a system
* By changing the commonalities that are in the children.
* Because the *is-a* relation does not allow reuse of implementation.
* By adding, removing, or changing children.
* By changing a parent, which will automatically change all the children that inherit from it.


### Question 14945
A layer, in the layers architectural style, is a module:
* Because it has a well-defined interface
* That aggregates modules according to the uses relationship
* Because it has a well-defined interface and hides the internal behaviour
* That provides a set of complete and cohesive services


### Question 14946
The quality that is more relevant to views of the module viewtype is:
* Usability.
* Security.
* Availability.
* Modifiability.


### Question 15512
In Facebook it is not possible to have the information about more that one bilion users in a single disk. Therefore, a sharding technique is applied, where the persistent information is split between several database servers, and applications are routed to the right servers for queries and updates. To describe this architecture
* It is necessary design a CRUD matrix to show the dependencies between the persistent information.
* It is enough to design a view of the Data Model architectural style at the conceptual level because Facebook information has a very simple structure.
* It is not necessary to have any view of the Data Model architectural style because Facebook information has a very simple structure.
* It is necessary to design a view of the Data Model architectural style at the physical level to deal with performance issues of the access to data.


### Question 15513
Views of the module viewtype can be used to support requirements traceability analysis, determine how the functional requirements of a system are supported. This is represented by
* Data model view
* Generalization view
* Layered view
* Decomposition view


### Question 15514
An architect is decomposing a system into a set of responsibilities using a view of the Decomposition style. However, she had already to backtrack several times and try new decompositions because she always end up with some responsibility that cannot fit within a single module.
* This means that in this software system it is not possible to modularize each responsibility in a cohesive module
* She should define finer-grained modules where she splits the unassigned responsibility
* She should try to use a view of the Layered style and assign this responsibility to a module in the bottom layer that can be used by all the other modules
* She should try to use a view of the Aspects style, assign this responsibility to a single module and define where it crosscuts the other modules


### Question 15515
In Facebook it is not possible to have the information about more that one bilion users in a single disk. Therefore, a sharding technique is applied, where the persistent information is split between several database servers, and requests are routed to the right servers for queries and updates. Additionally, due to performance requirements, the information needs to be replicated in several servers. To describe this architecture
* It is not necessary to have any view of the Data Model architectural style because Facebook information has a very simple structure.
* It is enough to design a view of the Data Model architectural style at the conceptual level because Facebook information has a very simple structure.
* It is enough to design a view of the Data Model architectural style at the logical level because the information will be stored in a relational database.
* It is necessary to design a view of the Data Model architectural style at the physical level to deal with performance and consistency issues of the access to data.


### Question 15516
The Generalization architectural style of the module viewtype can be use to support the evolution of a system
* By changing the commonalities that are in the children.
* Because the *is-a* relation does not allow reuse of implementation.
* By adding, removing, or changing children.
* By changing a parent, which will automatically change all the children that inherit from it.


### Question 15527
Consider the Decomposition architectural style of the Module viewtype
* Its main goal is to establish the reusability qualities of the architecture.
* Project managers are not interested in views that use this style because it lacks the necessary level of detail.
* Views of this type are mostly useful to guide the testing of the system.
* There should be at least one view of the system using this architectural style.


### Question 15528
Views of the module viewtype can be used to support requirements traceability analysis, determine how the functional requirements of a system are supported. This is represented by
* Data model view
* Generalization view
* Layered view
* Decomposition view


### Question 15529
In the Fénix first architecture it was common programmers forget to lock objects in the context of transactions. A solution for this problem can be architecturally described using a view of the architectural style
* Decomposition
* Uses
* Data Model
* Aspects


### Question 15530
Consider the Uses and Layered architectural styles.
* The Uses views are designed first
* The Layered view are designed first
* Whenever there is at least one Uses view then a Layered view needs to be designed as well
* There isn't any predefined order to design Uses and Layered views


### Question 15531
The Uses architectural style
* Can only be applied after the Decomposition view is finished
* Can be applied before a Decomposition view is designed
* Should be applied in at least a view of the system
* Once applied in a view may be necessary to change the Decomposition view


### Question 15542
Consider the following availability scenario for the Adventure Builder system  
>"The Consumer Web site is available to the user 24x7. If an instance of OPC application fails, the fault is detected and the system administrator is notified in 30 seconds; the system continues taking order requests; another OPC instance is created; and data remains in consistent state."  
  
and the following architectural view   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1028.png)  

* The view addresses the scenario because the uses relation between the `Consumer Website` module and the `OpcApp` module has the require properties.
* The view addresses the scenario because it separates the modules that represent the interfaces a new business partner has to implement.
* The view addresses the scenario because the `Consumer Website` module uses the `gwt` and `waf` modules.
* The view does not address the scenario


### Question 15543
Consider the Uses architectural style of the Module viewtype
* Cycles in the uses relation between modules are a good sign, because it indicates that several modules should be tested together.
* The uses relation should be applied to the coarse-grained modules, because it allows to identify circular dependences.
* There isn't any relation with the layered architectural style because the allowed-to-use relation is more generic.
* The project manager uses this view to get advice on the incremental development of the system.


### Question 15544
Consider the following view of the Adventure Builder case study   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/934.png)  

* This view shows that the processing of orders is done synchronously.
* This view shows that bank debits are done asynchronously.
* This view shows that the responses from the providers are processed synchronously.
* This view shows that the processing of tracking requests is done synchronously.


### Question 15545
In a layered architecture composed by four layers, where the topmost layer is the layer number 1 and the bottommost layer is the layer number 4, which of the layers is more modifiable?
* Layer 4.
* In a layered architecture all layers are equally modifiable.
* Modifiability is not made easier by a layered architecture.
* Layer 1.


### Question 15546
Which architectural style is adequate for planning incremental releases?
* The Decomposition style.
* The Generalisation style.
* The Aspects style.
* The Uses style.


### Question 15567
The detail that can be used in a view of the Data Model viewtype can be conceptual, logical or physical.
* It should always consider the physical detail level
* The logical detail level should only be used when the target of implementation is a relational database
* Only the conceptual level is required, the other two levels of detail are optional
* If there are performance requirements concerning the access to data, then the level of detail should be physical


### Question 15568
A function call is not necessarily a uses relation of the Uses architectural style of the Module viewtype because
* The invoked function may not have any input parameter.
* The invoked function may not have any output parameter.
* The invoked function may not have both any input parameter nor any output parameter.
* The correctness of the caller module may not depend on the correct implementation of the invoked function in the called module.


### Question 15569
The Decomposition architectural style of the Module viewtype
* Is applied only once at the beginning of the architectural design process.
* Is mostly driven by the security attribute quality.
* Follows a bottom-up decomposition process of the system.
* Is applied at the begin of the architectural design process but may be necessary to redo it later.


### Question 15570
According to the definition of the Layered architectural style, each layer represents a grouping of modules that offers a cohesive set of services.
* This means that the modules inside a layer cannot be loosely coupled.
* This means that this architectural style emphasizes the quality of performance.
* This means that each module cannot use other modules inside the same layer.
* This means that the modules inside a layer are likely to be ported to a new application together.


### Question 15571
Suppose that you are implementing a module in a system that has a two layered architecture. Knowing that your module belongs to the upper layer (assuming the usual notation for the layer style), this means that you
* Can use the operations defined in the lower layer, but not the ones defined inthe upper layer
* Can use the operations defined in the upper layer, but not the ones defined inthe lower layer
* Should use some operation defined in the lower layer
* Can use the operations defined in any of the system's modules


### Question 15577
A view of the *Uses* style that contains a loop in the uses relationships
* Means that it is possible to implement the system according to an incremental development process
* Means that the modules that are part of the loop should be implemented first
* Gives a hint to replace the uses relations by is-a relations
* Means that it may be difficult to design incremental testing


### Question 15578
Using the Aspects architectural style promotes the modifiability of a system because
* It imposes restrictions on which uses relationships may exist between the system's modules
* It makes it easier to create generalization relationships between the system's modules
* It allows the decomposition of each of the system's modules into finer grained modules
* It separates in new modules responsibilities that were spread over various of the system's modules


### Question 15579
Consider the Layered architectural style of the Module viewtype
* The modules inside a layer cannot use other modules in the same layer
* A layer cannot call the layer above
* It is possible to have a circular allowed-to-use relationship between several layers
* Each layer defines a virtual machine because it provides a set of cohesive functionalities to the upper layer


### Question 15580
The main difference between the *Uses* relation of the Uses style and the *Allowed to Use* relation of the Layers style
* Is that the *Uses* relation can happen only among modules belonging to the same layer
* Is that the *Allowed to Use* relation does not imply that the correctness of the upper layer depends on the correct implementation of its nearest lower layer
* Is that the *Allowed to Use* relation is a *Uses* relation between layers
* Is that the *Allowed to Use* relation defines a restriction for the possible *Uses* relations between modules belonging to different layers


### Question 15581
To achieve a faster time-to-market, software companies are increasingly using a strategy of incremental releases of their software, where each new release has a set of new features. Which architectural style is better to analyse whether the system's software architecture is adequate for the planned incremental releases?
* The Decomposition style
* The Generalization style
* The SOA style
* The Uses style


### Question 15612
In the uses architectural style a call does not necessarily correspond to a uses relationship because:
* The call's results may not have impact on the correct execution of the callee module
* The call may not transfer data between the modules
* The uses relationship requires calls to return control to the caller module
* The call's results may not have impact on the correct execution of the caller module


### Question 15613
One of the advantages of having views of the module viewtype is that they allow to do an impact analysis to predict the effect of modifying the system. The architectural style of the module viewtype which provides richer information for this impact analysis is
* Decomposition style.
* Generalization style.
* Layered style.
* Uses style.


### Question 15614
Consider that a chess game should provide an automatic and intelligent chess player, and that to implement that player we will use some of the many chess engines already available in the market. Moreover, the system should allow the user to choose which engine to use for each new game. Given these requirements, which of the architectural styles from the module viewtype are best suited to satisfy them?
* The Decomposition style.
* The Decomposition and Uses styles.
* The Layered style.
* The Generalization and Decomposition styles.


### Question 15615
Suppose that in the process of designing a system's software architecture you come to the conclusion that there are uses relations in both directions in almost all of the system's modules. This means that
* There is a high level of communication between the several modules, and this will cause the system to have a low performance
* It is not possible to install the system in more than one machine
* It is very hard to explain what the system does, because we need to understand all the execution fluxes
* It is not possible to develop and to test the system incrementally


### Question 15616
The main difference between the *Uses* relation of the Uses style and the *Allowed to Use* relation of the Layers style
* Is that the *Uses* relation can happen only among modules belonging to the same layer
* Is that the *Allowed to Use* relation does not imply that the correctness of the upper layer depends on the correct implementation of its nearest lower layer
* Is that the *Allowed to Use* relation is a *Uses* relation between layers
* Is that the *Allowed to Use* relation defines a restriction for the possible *Uses* relations between modules belonging to different layers


### Question 15617
Consider the Decomposition architectural style of the Module viewtype
* Its main goal is to establish the reusability qualities of the architecture.
* Project managers are not interested in views that use this style because it lacks the necessary level of detail.
* Incremental development is a criteria that drives the design of views of this type.
* There should be at least one view of the system using this architectural style.


### Question 15618
One of the advantages of having views of the module viewtype is that they allow to do an impact analysis to predict the effect of modifying the system. The architectural style of the module viewtype which provides richer information for this impact analysis is
* Decomposition style.
* Generalization style.
* Layered style.
* Uses style.


### Question 15619
Consider the following description of *Memcached*, which is adapted from its Wiki:  
>"Memcached is an in-memory key-value store for small chunks of arbitrary data from results of database calls, API calls, or page rendering. It is made up of:  
-  Client software, which is given a list of available memcached servers.  
-  A client-based hashing algorithm, which chooses a server based on the "key" input.  
-  Server software, which stores your values with their keys into an internal hash table.  
-  Server algorithms, which determine when to throw out old data (if out of memory), or reuse memory.  
"  
  
Suppose that you want to present an architectural view for *Memcached* that represents the above information. Which view is more adequate?
* A view of the Data Model style
* A view of the Layers style
* A view of the Uses style
* A view of the Decomposition style


### Question 15620
In the Observer design pattern, where the model invokes a notification method on all its observers whenever it is changed, can be said, in what concerns the Uses relation of the Uses architectural style, that
* The Model module uses the Observer module
* The Model module uses the Observer module if data is sent in the notification
* The Model module uses the Observer module if complex data is sent in the notification
* In what concerns the notification, the Model module does not use the Observer module


### Question 15621
Consider the following modifiability scenario for the Adventure Builder system  
>"A new business partner (airline, lodging, or activity provider) that uses its own web services interface is added to the system in no more than 10 person-days of effort for the implementation. The business goal is easy integration with new business partners."  
  
and the following architectural view   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1010.png)  

* The view does not address the scenario
* The view addresses the scenario because it separates the `Consumer Website` module from the `OpcApp` module.
* The view addresses the scenario because the `Consumer Website` module does not use the interfaces a new business partner has to implement.
* The view addresses the scenario because it separates the modules that represent the interfaces a new business partner has to implement.


### Question 17537
Consider the Component-and-Connector viewtype
* A component cannot be decomposed into a set of components and connectors.
* A connector cannot be decomposed into a set of components and connectors.
* A component can only have a single type of port.
* A connector embodies a communication protocol.


### Question 17538
The Service-Oriented Architecture style improves modifiability because
* It encapsulates applications through well-defined interfaces.
* It decouples the coordination of the interaction among applications from the applications themselves.
* It improves transparency of location of service providers.
* It encapsulates applications through well-defined interfaces, decouples the coordination of the interaction among applications from the applications themselves, and improves transparency of location of service providers.


### Question 17539
Typically, Instant Messaging clients have a window to list the contacts of the user, and show in that window the status of each contact (whether it is available, unavailable, busy, etc). Given that the status of a contact may be changed at any time, and that the contact's status is given by the Instant Messaging application of that contact, which architectural style represents best the interaction pattern between these components?
* The Shared Data style
* The Pipes-and-filters style
* The Client-Server style
* The Publish-subscribe style


### Question 17540
The Peer-to-Peer architectural style provides high scalability and availability. In the context of a file sharing system
* The file transfers follows the same path of nodes used to identify where the file was located
* The peer initiating the request for a file needs to know where the file is located
* If a peer providing a file crashes it is necessary to restart downloading the file from the begin
* The price for high scalability and availability is the need to have several replicas of the files to be shared


### Question 17541
Consider the following view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/856.png)  
 In this view the following architectural styles are used
* Tiers
* Tiers, and Shared-data
* Tiers, Shared-data, and Service-oriented architecture
* Tiers, Shared-data, Service-oriented architecture, and Client-server


### Question 17542
An important stage of the development of any system is its build into the set of executable files. A suitable architectural style which helps on the definition of the build process is
* Deployment style.
* Implementation style.
* Work assignment style.
* Install style.


### Question 17543
The Work-assignment is an architectural style of the allocation viewtype, where
* Components are allocated to persons and teams.
* Components and modules are allocated to persons and teams.
* None of the above.
* Modules are allocated to persons and teams.


### Question 17544
Consider a stakeholder that is particularly concerned about the total cost of the project. When it comes to describing the system using allocation viewtypes she is interested in
* A deployment view.
* A work assignment view.
* A install view.
* A deployment and a work assignment view.


### Question 17545
In the software architecture of a system, the Deployment architectural style of the allocation viewtype is best suited for
* Planning incremental releases of the system.
* Estimating the effort needed to implement the system.
* Analysing the system's portability and reusability.
* Analysing the performance of the system.


### Question 17546
An architecture can also be represented by the set of files which contains its modules code. A suitable architectural style to represent this set of files is
* Deployment style.
* Install style.
* Work assignment style.
* Implementation style.


### Question 18257
Imagine that you are developing an architectural view where you are using the Shared Data style and that a member of your team proposes that two of Data Accessors communicate directly between them. In your opinion
* That should not be allowed because all interactions among components must be made through the Repository
* That is an acceptable solution if we want to reduce the dependencies among the various components of the system
* That interaction cannot be represented in this view, but it may in another view of the system's architecture
* That is the recommended solution if there is a control flow that involves the choreography of both components


### Question 18258
Suppose that you are designing the software architecture for an enterprise application that has requirements about the maximum response time for a certain type of requests. Moreover, assume that those requests arrive at the system periodically, whereas the remaining requests have an unpredictable frequency. Finally, assume that your system will have a single server that will be executing on a predefined machine with a 12-core AMD processor. To show to the stakeholders that your system satisfies the performance requirements you have to use views of which architectural style?
* The Work Assignment style
* The Client-Server style
* The Deployment style
* The Communicating Processes style


### Question 18259
The Service-Oriented Architecture style
* Is a Client-Server style because consumers are clients and providers are servers.
* Is a Peer-to-Peer style because consumers and providers are peers.
* Is a Publish-subscriber style because consumers use an enterprise service bus.
* Can use a Service Registry to improve transparency of location of service providers.


### Question 18260
The repository architectural style provides modifiability because
* It is possible to change the repository schema without changing the data accessors.
* The integration of a new data accessor only implies changes in the data accessors that access the same type of data.
* The communication between data accessors does not occur through the repository.
* It is possible to integrate a new data accessor without changing the other data accessors.


### Question 18261
An architecture can also be represented by the set of files which contains its modules code. A suitable architectural style to represent this set of files is
* Deployment style.
* Install style.
* Work assignment style.
* Implementation style.


### Question 18262
Consider the shared-data style. Which of the following qualities does it support?
* Modifiability, because the Data Accessors do not depend on the data model.
* Scalability of write requests, because a transactional system will synchronize the writes among the several repositories.
* Confidentially of data, because it can be replicated in several repositories.
* Scalability of read requests, because it is easy add more repositories to where reads are distributed, though there may be some level of inconsistency.


### Question 18263
The quality(ies) that is(are) more relevant to views of the component-and-connector viewtype is(are):
* Modifiability.
* Testability.
* Availability.
* Availability and Performance.


### Question 18264
Which of the following sentences best captures the restrictions regarding which components may execute in which machines in the Deployment style?
* A machine may execute only one component, but a component may execute in more than one machine
* A component may execute in only one machine, but a machine may execute more than one component
* Each component executes in only one machine and each machine executes only one component
* All components may execute in all machines


### Question 18265
When describing their system people refer to a part of it as containing a database server. Applying the component-and-connector styles learned in the course we can say that this system uses
* A client-server style.
* A shared-data style.
* A blackboard style.
* Both, client-server and shared-data styles.


### Question 18266
Consider the following view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/856.png)  
 In this view the following architectural styles are used
* Tiers
* Tiers, and Shared-data
* Tiers, Shared-data, and Service-oriented architecture
* Tiers, Shared-data, Service-oriented architecture, and Client-server


### Question 18542
In the description of the Chrome case you can read:  
*On Android devices, Chrome leverages the same multi-process architecture as the desktop version - there is a browser process, and one or more renderer processes. The one difference is that due to memory constraints of the mobile device, Chrome may not be able to run a dedicated renderer for each open tab. Instead, Chrome determines the optimal number of renderer processes based on available memory, and other constraints of the device, and shares the renderer process between the multiple tabs.*  
This description can be represented by a view of viewtype Component-and-Connector using the architectural style
* Publication-Subscription
* Pipes-and-Filters
* Client-server
* Dynamic Creation and Destruction


### Question 18543
The quality(ies) that is(are) more relevant to views of the component-and-connector viewtype is(are):
* Modifiability.
* Testability.
* Availability.
* Availability and Performance.


### Question 18544
In the interview Werner Vogels from Amazon gives to Jim Gray, Werner Vogels says that  
>"The stored data formats are decoupled from the format in which you communicate data items. If there is no need for sharing schemas of the actual storage layout, you can focus on making sure that the service interfaces can evolve in a way that allows you to handle variations of data formats."  
  
Which means that in the software architecture of Amazon's systems
* The data-shared architectural style is not applied because data is encapsulated inside services.
* Modifiability is not a concern of their architecture.
* The decouple of data formats does not support scalability because of the transactional properties.
* The sharing of data is done using a service-oriented architecture.


### Question 18545
Consider the following architectural view of the Adventure Builder system, designed around the Order Processing Center   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/705.png)  
 The views **does not** use the architectural style
* Per-to-peer
* Shared-data
* Communicating processes
* Publish-subscribe


### Question 18546
Consider the deployment architectural style of the allocation viewtype.
* It assigns modules to the hardware.
* It cannot assign software elements to virtual servers because they are not hardware.
* For each set of software elements there is a single possible assignment to hardwre.
* It is useful for system administrators.


### Question 18577
Consider the following view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1006.png)  
 In this view the following architectural styles are used
* Service-oriented architecture, and Client-server.
* Service-oriented architecture, and Shared-data.
* Service-oriented architecture, Shared-data, and Client-server.
* Service-oriented architecture, Shared-data, Client-server and Peer-to-peer.


### Question 18578
Consider the following view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1026.png)  
 This view **does not** apply the architectural style
* Client-server.
* Shared-data.
* Peer-to-peer.
* Publish-subscribe.


### Question 18579
The Peer-to-Peer architectural style provides high scalability and availability. In the context of a file sharing system
* The file transfer has to follow the same path of nodes used to identify where the file was located.
* The peer initiating the request for a file needs to know where the file is located.
* If a peer providing a file crashes the file will not be downloaded.
* The price for high scalability and availability is the need to have several replicas of the files to be shared.


### Question 18580
In the component-and-connector viewtype connectors can be complex, which means that they provide a rich set of qualities to the interaction between the components that they connect. These complex connectors can be documented in another view using a set of components interacting through simpler connectors.
* Whenever complex connectors are used in architectural views it is necessary to also document their decomposition.
* It is preferable to only design views that do not use complex connectors to increase understandability.
* Whenever possible it should be avoided to use complex connectors because developers have difficult to know how to implement them.
* If there is some technology available that implements the complex connectors it is not necessary to document their decomposition.


### Question 18581
An architecture can also be represented by the set of files which contains its modules code. A suitable architectural style to represent this set of files is
* Deployment style.
* Install style.
* Work assignment style.
* Implementation style.


### Question 18682
An architecture can also be represented by the set of files which contains its modules code. A suitable architectural style to represent this set of files is
* Deployment style.
* Install style.
* Work assignment style.
* Implementation style.


### Question 18683
In the Service Oriented Architecture style it is common to have a specialized component, named *Enterprise Service Bus* (ESB). The goal of using of an ESB in a system is
* To promote the use of a common communication protocol for all the remaining components of the system
* To increase the performance of the interaction between the components of the system
* To create a strong coupling between the various services provided by the organization
* To facilitate the interaction among heterogeneous components that use distinct communication protocols


### Question 18684
Consider the Component-and-Connector viewtype
* A component type is made of a single architectural style.
* Only components can be associated with application-specific types.
* A component-and-connector view can only use a single architectural style.
* A component is an instance and a view can have several instances of the same component type.


### Question 18685
In the interview Werner Vogels from Amazon gives to Jim Gray, Werner Vogels says that  
>"The stored data formats are decoupled from the format in which you communicate data items. If there is no need for sharing schemas of the actual storage layout, you can focus on making sure that the service interfaces can evolve in a way that allows you to handle variations of data formats."  
  
Which means that in the software architecture of Amazon's systems
* The shared-data architectural style is not applied because data is encapsulated inside services
* Modifiability is not a concern of their architecture
* The decouple of data formats does not support scalability because of the transactional properties
* The sharing of data is done using a service-oriented architecture


### Question 18686
In the component-and-connector viewtype connectors can be complex, which means that they provide a rich set of qualities to the interaction between the components that they connect. These complex connectors can be documented in another view using a set of components interacting through simpler connectors.
* Whenever complex connectors are used in architectural views it is necessary to also document their decomposition.
* It is preferable to only design views that do not use complex connectors to increase understandability.
* Whenever possible it should be avoided to use complex connectors because developers have difficult to know how to implement them.
* If there is some technology available that implements the complex connectors, according to its expected qualities, it is not necessary to document their decomposition.


### Question 18762
Consider a web application that supports several types of user interface, e.g., web, mobile, etc. If it has to process a high volume of requests, which depend on the type of user interface, and a multi-tier architecture is followed. How many tiers should be used?
* One.
* Two.
* Three.
* Four.


### Question 18763
The email system is composed of various types of components playing different roles. For example, to send an email, a user uses a *mail user agent* (MUA), to compose his message and send it. To send the message, the MUA typically connects to a *mail transfer agent* (MTA) that receives the message, analyzes the message's headers to determine the recipients and, after querying the DNS system to determine the MTA responsible for each recipient, it connects to the MTAs responsible for the destination addresses to deliver the message. Each of these MTAs receives the message and stores it locally or forwards it to others MTAs until the message reaches its destination MTA. The recipient user of the message will then use his MUA to see the messages that were sent to him. To do it, the MUA connects to an IMAP or POP server to obtain the user's messages. Those IMAP and POP servers obtain the messages for a user by reading the messages stored by the MTA. Given this simplified description of the operation of the email system, which of the following architectural styles is more appropriate to represent the pattern of interaction between the MTA and the servers IMAP and POP?
* The Peer-to-Peer style
* The Client-Server style
* The Publish-subscribe style
* The Shared-Data style


### Question 18764
Imagine that you want to develop a system that is to be used in email servers, whose goal is to allow changing the emails that are received by the server (for example, to remove potential viruses or URLs linking to phishing sites). The goal is that the server feeds each received email through this system before processing it (e.g., forward it to another server, or store it locally). The system is supposed to be easily modifiable, to support new types of email transformations. Which architectural style is the most adequate to satisfy these requirements?
* The Peer-to-Peer style
* The Client-Server style
* The Publish-subscribe style
* The Pipes-and-filters style


### Question 18765
Considering yet the example of the email system, MUAs are used not only to compose and to send messages, but also for users to read the email messages sent to them. For this, the MUAs have to get those messages from the component that stores them to show them to the user. Two different ways of doing this is by using the POP and IMAP protocols. In the first case, messages are moved from the POP server to the user's computer. In second case, the messages are always stored on the IMAP server, allowing the user to access email from different computers, as long as they are able to connect to the same IMAP server. Which of the following architectural styles is more appropriate to represent the pattern of interaction between the MUAs and a IMAP server?
* The *Communicating Processes* style
* The *Pipes-and-filters* style
* The *Peer-to-Peer* style
* The *Shared data* style


### Question 18766
The Peer-to-Peer architectural style provides high scalability and availability. In the context of a file sharing system
* The file transfers follows the same path of nodes used to identify where the file was located
* The peer initiating the request for a file needs to know where the file is located
* If a peer providing a file crashes it is necessary to restart downloading the file from the begin
* The price for high scalability and availability is the need to have several replicas of the files to be shared


### Question 18772
In the interview Werner Vogels from Amazon gives to Jim Gray, Werner Vogels says that  
>"The stored data formats are decoupled from the format in which you communicate data items. If there is no need for sharing schemas of the actual storage layout, you can focus on making sure that the service interfaces can evolve in a way that allows you to handle variations of data formats."  
  
Which means that in the software architecture of Amazon's systems
* The data-shared architectural style is not applied because data is encapsulated inside services.
* Modifiability is not a concern of their architecture.
* The decouple of data formats does not support scalability because of the transactional properties.
* The sharing of data is done using a service-oriented architecture.


### Question 18773
The email system is composed of various types of components playing different roles. For example, to send an email, a user uses a *mail user agent* (MUA), to compose his message and send it. To send the message, the MUA typically connects to a *mail transfer agent* (MTA) that receives the message, analyzes the message's headers to determine the recipients and, after querying the DNS system to determine the MTA responsible for each recipient, it connects to the MTAs responsible for the destination addresses to deliver the message. Each of these MTAs receives the message and stores it locally or forwards it to others MTAs until the message reaches its destination MTA. The recipient user of the message will then use his MUA to see the messages that were sent to him. To do it, the MUA connects to an IMAP or POP server to obtain the user's messages. Those IMAP and POP servers obtain the messages for a user by reading the messages stored by the MTA. Given this simplified description of the operation of the email system, which of the following architectural styles is more appropriate to represent the pattern of interaction between the MUA and the MTA?
* The Peer-to-Peer style
* The Shared-Data style
* The Publish-subscribe style
* The Client-Server style


### Question 18774
In the client-server architectural style the request/reply connector is synchronous. Consider an architect that wants to describe an asynchronous interaction between clients and servers.
* She has to use another architectural style to describe asynchronous communication.
* She can use the request/reply connector but the server should not return results to the client.
* She can define a variant of this style with asynchronous communication by allowing the server to have the initiative to initiate the interaction.
* She can define a variant of this style with asynchronous communication by allowing the client to register callbacks that the server calls at specific times.


### Question 18775
Consider that you intend to develop a system where it is necessary to change the emails received by the server (for instance, to remove potential virus or URLs for phishing sites). The goal is that each email is processed by this system before it is sent to other servers or it is stored locally. Additionally, the system should be easily modified to support new kinds of transformations. Which style is more suitable to satisfy these requirements?
* Publish-Subscribe.
* Peer-to-Peer.
* Client-Server.
* Pipe-and-Filter.


### Question 18776
Consider an architect that is designing a component-and-connector view. In some point the architect decides that she does not need to decompose a connector with a demanding quality level. This may occur because
* She encapsulates the connector qualities inside a higher level component.
* She delays the complete specification of the connector for development time to have human resources to prototype and measure different implementations.
* She does not want to clutter the view with details and trusts the development team to implement the connector according to the required quality level.
* The required quality associated with the connector is supported by existing and well-know technology.


### Question 18777
The Tiers architectural style
* It applies layers to tiers.
* Is an extension of the Client-Server architectural style.
* Defines tiers as components.
* Restrict the communication between components because, for instance, a group of components should be located in the same hardware.


### Question 18778
The email system is composed of various types of components playing different roles. For example, to send an email, a user can use a program such as Microsoft Outlook or Mozilla Thunderbird, generically designed a *mail user agent* (MUA), to compose his message and send it. To send the message, the MUA typically connects to a *mail transfer agent* (MTA) that receives the message, analyzes the message's headers to determine the recipients and, after querying the DNS system to determine the MTA responsible for each recipient, it connects to the MTAs responsible for the destination addresses to deliver the message. Each of these MTAs receives the message and stores it locally or forwards it to others MTAs (for example, when there are forwards or aliases configured, or when the MTA that receives the message is not the ultimately responsible for the email address of the recipient). Given this simplified description of the operation of the email system, which of the following architectural styles is more appropriate to represent the pattern of interaction between the MTAs?
* The *Shared data* style
* The *Client-Server* style
* The *Publish-subscribe* style
* The *Peer-to-Peer* style


### Question 18779
Consider the following representation of Amazon's architecture   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/650.png)  
 What is the most relevant architecture style that is used in this figure?
* Client-server to represent performance.
* Service-oriented architecture to represent interoperability.
* Shared-data to represent modifiability.
* Tiers to represent scalability.


### Question 18780
Currently, the most popular architecture for an enterprise application is composed of 3 tiers. The three tiers are
* The presentation logic layer, domain logic layer, and data access layer
* The traditional web applications, the mashups, and the rich internet applications (RIAs)
* The web services layer, the domain logic layer, and the data access layer
* The web browser, o web server, and the data base


### Question 18781
An architecture can also be represented by the set of files which contains its modules code. A suitable architectural style to represent this set of files is
* Deployment style.
* Install style.
* Work assignment style.
* Implementation style.


### Question 20822
In the Publish-Subscribe architectural style
* It is always guaranteed that all the published events are received by their subscribing components
* The events should be delivered by the same order they are sent
* The set of events types are predefined at initialization time
* A component can subscribe to events


### Question 20823
The connectors on component-and-connector view
* Represent the hardware infrastructure that allows components to communicate with each other
* Represent the dependency relations that exist among the various components
* Represent the control flow during an execution of the system
* May, on another view of the system, be represented by a set of components and connectors


### Question 20824
The quality(ies) that is(are) more relevant to views of the component-and-connector viewtype is(are):
* Modifiability.
* Testability and Modifiability.
* Maintainability and Availability.
* Availability and Performance.


### Question 20825
In the component-and-connector viewtype connectors can be complex, which means that they provide a rich set of qualities to the interaction between the components that they connect. These complex connectors can be documented in another view using a set of components interacting through simpler connectors.
* Whenever complex connectors are used in architectural views it is necessary to also document their decomposition.
* It is preferable to only design views that do not use complex connectors to increase understandability.
* Whenever possible it should be avoided to use complex connectors because developers have difficult to know how to implement them.
* If there is some technology available that implements the complex connectors, according to its expected qualities, it is not necessary to document their decomposition.


### Question 20826
Consider the install architectural style of the allocation viewtype.
* The development team is the main stakeholder interesting in these views.
* It assigns modules to files.
* It is completely independent of the deployment architectural style.
* It helps on the configuration of systems.


### Question 22017
Consider the module viewtype views of the DVDCatalog application. The architect knows about a new requirement  
>"To support multi-platform (Mac, Windows, Linux)"  
  
This requirement requires a change of
* The uses view to show the coupling between the different platforms.
* The uses view to show the uses relationships between the different platforms.
* The data model view to represent each one of the platforms.
* The layered view to deal with the aspects of portability.


### Question 22018
In the description of the Chrome case you can read:  
*On Android devices, Chrome leverages the same multi-process architecture as the desktop version - there is a browser process, and one or more renderer processes. The one difference is that due to memory constraints of the mobile device, Chrome may not be able to run a dedicated renderer for each open tab. Instead, Chrome determines the optimal number of renderer processes based on available memory, and other constraints of the device, and shares the renderer process between the multiple tabs.*  
This description can be represented by a view of viewtype Component-and-Connector using the architectural style
* Publication-Subscription
* Pipes-and-Filters
* Client-server
* Dynamic Creation and Destruction


### Question 22019
When comparing Amazon Silk with Google Chrome in the context of mobile devices
* Google Chrome is more convenient for mobile devices because it has an optimized network stack that runs in any kind device.
* Amazon Silk is more convenient for mobile devices because it customizes the number of threads that run in the device.
* Google Chrome is more convenient for mobile devices because content delivery is optimized.
* Amazon Silk is more convenient for mobile devices because it does most of the computation in the cloud.


### Question 22020
Consider the following fragment in the description of the Graphite system.  
>"The Graphite webapp allows users to request custom graphs with a simple URL-based API. Graphing parameters are specified in the query-string of an HTTP GET request, and a PNG image is returned in response."  
  
To describe this scenario it should be designed a view that applies the following architectural style
* Aspects.
* Layered.
* Data model.
* Decomposition.


### Question 22021
Consider the following excerpt from the tutorial on the Hadoop MapReduce:  
>"Hadoop MapReduce is a software framework for easily writing applications which process vast amounts of data (multi-terabyte data-sets) in-parallel on large clusters (thousands of nodes) of commodity hardware in a reliable, fault-tolerant manner. A MapReduce job usually splits the input data-set into independent chunks which are processed by the map tasks in a completely parallel manner. The framework sorts the outputs of the maps, which are then input to the reduce tasks. Typically both the input and the output of the job are stored in a file-system. The framework takes care of scheduling tasks, monitoring them and re-executes the failed tasks."  
  
Which architectural style of the component-and-connector viewtype is more adequate to describe how the MapReduce works, taking into account its main advantages in solving a problem?
* The Shared data style
* The Pipes-and-filters style
* The Peer-to-Peer style
* The Communicating Processes style


### Question 22052
Consider the following decomposition view of the Graphite system where module Store Graphs is responsible for managing the storage of datapoints and graphs and module Present Graphs for graphs generation and presentation. Memcache is a library that maintains datapoints in memory to reduce the overhead of obtaining them from the file system.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/395.png)  

* Memcached can be considered a sub-module of the Present Graphs module.
* Memcached can be considered a direct sub-module of the top Graphite module.
* Memcached is not a module.
* Memcached can be considered a sub-module of the Store Graphs module.


### Question 22053
One of the key requirements for the HDFS system is that the data stored in the system remains available, even in the presence of various types of failures (non simultaneous) in the hardware in which the system executes. To show that the system satisfies this requirement
* We just have to show, through component-and-connector views, that the system maintains replicas of the data in different components
* We just have to show, through Deployment views, that the *DataNode* component executes in more than one machine of the cluster
* We just have to show, through Decomposition views, that there are modules responsible for the replication of file blocks
* We must use various different views, both of the component-and-connector and the allocation viewtypes


### Question 22054
In Chrome system, to show that it provides availability when the javascript code executing in a tab crashes, and security when the javascript code executing in a tab tries to access the information in another tab, it is necessary to design
* One view of the component-and-connector viewtype and another of the deployment style.
* Two views of the communicating processes style.
* A view of the aspects style.
* A single view of the communicating processes style.


### Question 22055
Consider the module viewtype views of the DVDCatalog application. The architect knows about a new requirement  
>"To support multi-platform (Mac, Windows, Linux)"  
  
This requirement requires a change of
* The uses view to show the coupling between the different platforms.
* The uses view to show the uses relationships between the different platforms.
* The data model view to represent each one of the platforms.
* The layered view to deal with the aspects of portability.


### Question 22056
Consider the following representation of a system following a microservices architecture,   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/712.png)  
 After an invocation through the REST API
* an ACID transaction occurs in all the involved applications
* a two-phase commit protocol takes place between the involved applications
* a ACID transaction occurs in each of the involved applications, but we can not infer which transaction occurs first
* an ACID transaction occurs in the invoked application and ACID transactions in the other involved applications will eventually occur later


### Question 23382
Consider the following scenario:

"A request arrives to add support for a new browser to a Web-based system, and the change must be made within two weeks."
* It is an interoperability scenario.
* The scenario includes the environment.
* The scenario does not include the stimulus.
* The scenario includes the response measure.


### Question 23383
Consider the following figure depicting two different architectures for web applications   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/454.png)  

* The left part of the figure represents a three-layered architecture
* The most relevant architectural style in the right part of the figure is shared-data
* The system represented in the left part of the figure tends to be non-transactional
* The system represented in the right part of the figure tends to have good modifiability


### Question 23384
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"As well as the fact that services are independently deployable and scalable, each service also provides a firm module boundary, even allowing for different services to be written in different programming languages. They can also be managed by different teams."  
  
Which is not necessarily an advantage of being independently deployable and scalable?
* Performance
* Availability
* Time to market
* Modifiability


### Question 23385
Consider the following scenario for performance  
>"During the enrollment period the FenixEDU system should be able to completely enroll 5.000 students in less than 30 minutes."  
  

* The source of stimulus is the FenixEDU system
* The stimulus is periodic
* The environment is overloaded
* The measure of the response is throughput


### Question 23386
One of the evolutions in the development of web applications was the appearance of *mashups*, which are described in Wikipedia as follows:  
>"In web development, a mashup is a web page or application that uses and combines data, presentation or functionality from two or more sources to create new services."  
  
Knowing that the sources used by *mashups* do not know about the existence of the *mashups* and that they change frequently, forcing the adaptation of the *mashups* to accommodate those changes, what is the best architecture to minimize the effects of those changes?
* A *web services* architecture
* A Client-Server architecture, where the *mashup* is the client and the various sources are the servers
* A Publish-Subscribe architecture, where the various sources publish events with the changes made and the *mashup* subscribes those events
* A layered architecture, where the access to the various sources is the responsibility of the bottommost layer


### Question 23387
What is an availability solution in the Uber system when total datacenter failure occurs.
* The drivers' app contains all the information about the current ride.
* All the information is on memory.
* There is replication of the databases.
* The Uber system cannot recover from such type of failures.


### Question 23388
The first architecture of the Fénix system, corresponding to its first years of development, could be described as a three-layered architecture, typical of an enterprise application. One of those layers was the *domain logic* layer. Which of the following sentences best describes the Fénix architecture in what concerns that layer?
* The domain logic layer was implemented with the Domain Model pattern
* The domain logic layer was implemented with the Service Layer pattern
* The domain logic layer was implemented with a rich domain model, on top of which there was a thin service layer
* The domain logic layer was implemented with the Transaction Script pattern


### Question 23389
In the context of the *Graphite* case study, consider the following view that represents the internal behavior of the *Carbon* component, where the components `r1,... , rn, w` are threads and `q1, ..., qn` are buffers. The port *read*, which provides an interface to read the data points stored in the queue, can be used, in an enrichment of the view, to illustrate   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1046.png)  

* A modifiability scenario the *Graphite* system.
* A usability scenario of the *Graphite* system.
* A performance scenario of the *Graphite* system.
* An availability scenario of the *Graphite* system.


### Question 23390
Suppose that an architect needs to decide whether to follow a modular monolith architecture or a microservices architecture for a new large system. The system to be developed has a complex logic and high volume of requests.
* She should decide to use a microservices architecture to improve the scalability of the system.
* She should decide to use a modular monolith architecture to reduce the cost of development, because developers will not need to define intermediate states for the transactional execution of the business logic.
* She should give up because it is not possible to have the two approaches in a singe architecture.
* She should try to split the system in parts in order to isolate the complex business logic and use the two architectural approaches accordingly.


### Question 23391
In the context of the *Graphite* case study, consider the following application-specific types that are used in a view to represent the internal behavior of the *Webapp* component.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1059.png)  
 This view can show that the architecture fulfills
* A modifiability scenario the *Graphite* system.
* A usability scenario of the *Graphite* system.
* A single performance scenario of the *Graphite* system.
* At least two performance scenarios of the *Graphite* system.


### Question 25762
In the context of the FenixEdu case study the following scenario was identified.  
>"The school management pretends that all the members of the school, students, administrative staff, faculty and management should be able to use the system to perform their activities efficiently without requiring the installation of any client software or a long learning process."  
  
This is a
* Availability scenario.
* Modifiability scenario.
* Usability scenario.
* Business scenario.


### Question 25763
How does the software architecture allow the incorporation of independently developed modules?
* Because modules are part of the component-and-connector viewtype.
* Because the software architect cannot implement all modules.
* Because the identification of the main modules, and their responsibilities, allow the definition of interfaces for the modules that can be outsourced from third party venders.
* Because the software architecture of the system has impact on the organizational structure of third party vendors.


### Question 25764
In a quality scenario
* The stimulus is a system input.
* The response can be omitted.
* The artefact can be outside the system.
* The stimulus and the response should be always present.


### Question 25765
A general scenario for a quality attribute
* Should be avoided because scenarios should describe very concrete situations.
* Can omit some of the elements like, for instance, the environment, if they are not relevant for the general scenario.
* Is a very reusable scenario that can be used in many different concrete situations.
* Enumerates, for each kind of quality attribute, all the possible types of source of stimulus, stimulus, etc.


### Question 25766
The requirements impact on how an architecture is designed
* However, functional requirements do not have any impact on the architecture because the systemic qualities of an architecture are non-functional
* The functional requirements have a large impact on the definition of views of the component-and-connector viewtype because each component executes a functionality
* The functional requirements can be considered as constraints on the software architecture design
* The functional requirements have a large impact on the definition of views of the module viewtype because they are used to define the high cohesion and low coupling of modules


### Question 25767
A response measure of a performance scenario is
* Stochastic event.
* Overload.
* Change level of service.
* Throughput.


### Question 25768
Ralph Johnson says that  
>"Architecture is the decisions that you wish you could get right early in a project."  
  
This sentence reflects the fact that
* The architecture of a system cannot change
* The main goal of an architect is to identify the quality attributes of system
* The main goal of an architect is to design a detailed structure of the system that supports most of the requirements
* Architecture is the design that gets harder to change as development progresses


### Question 25769
The two basic contributors for the response time are the processing time and the contention time. Which tactic for performance may reduce the contention time
* Manage sampling rate.
* Limit event response.
* Prioritize events.
* Maintain multiple copies of computation.


### Question 25770
In the description of the *How Netflix works* can be read:  
>"What CDNs basically do is, they take the original website and the media content it contains, and copy it across hundreds of servers spread all over the world. So when, say, you log in from Budapest, instead of connecting to the main Netflix server in the United States it will load a ditto copy of it from a CDN server that is the closest to Budapest."  
  
Which corresponds to the application of the following tactic
* Manage sampling rate
* Limit event response
* Maintain multiple copies of computation
* Maintain multiple copies of data


### Question 25771
The two basic contributors for the response time are the processing time and the blocking time. Which tactic for performance may reduce the blocking time
* Manage sampling rate.
* Limit event response.
* Prioritize events.
* Maintain multiple copies of computation.


### Question 25772
Consider the Microservice architectural style. Which of the following sentences **does not** describe an advantage of microservices?
* Each service can be developed and deployed independently
* Easier to scale development
* Eliminates any long-term commitment to a technology stack
* Testing is easier


### Question 25773
Consider the following informal view of an Image Hosting System   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/558.png)  

* This view highlights the security of the system.
* This view highlights the scalability of `upload` and `dowload` operations.
* This view highlights the scalability of storage.
* This view highlights the scalability of `upload` and `dowload` operations, and of storage.


### Question 25774
An architectural tactic
* Is an architectural pattern.
* Is a system decomposition.
* Is a mediator, an application of the mediator pattern, between the input stimulus and the output response.
* May be associated to other tactics to deal with a single stimulus.


### Question 25775
Consider the use of a proxy to collapse requests. This corresponds to a tactic of
* Limit event response
* Prioritize events
* Bound execution times
* Manage sampling rate


### Question 25776
Consider the following description of the behavior of Twitter  
>"Solution is a write based fanout approach. Do a lot of processing when tweets arrive to figure out where tweets should go. This makes read time access fast and easy. Don't do any computation on reads. With all the work being performed on the write path ingest rates are slower than the read path, on the order of 4000 QPS."  
  
To describe this behavior we need to
* Write a single scenario on performance
* Write a scenario on performance and a scenario on interoperability
* Write a single scenario on interoperability
* Write two scenarios on performance


### Question 25777
Consider the following figure that presents an architectural view of an *Image Hosting Application*.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/959.png)  

* The number of Image Write Service components should be the same of the number Image Retrieval Service components
* The hardware where of Image Write Service components execute should have the same capabilities of the hardware where Image Retrieval Service components run
* Both components, the Image Write Service and the Image Retrieval Service, should be designed using an synchronous model of interactions, where a thread is associated with each request
* The separation of write and retrieval services allows them do scale independently


### Question 25778
The elasticity of a system, defined as its capability to easily adapt to load changes, is often represented as a required property of the scalability quality. For this level of easiness contribute the architectural solutions associated with the following tactic(s)
* Passive Redundancy
* Active Redundancy
* Passive Redundancy and Active Redundancy
* Defer Binding


### Question 25779
In his article *Who Needs an Architect?* Martin Fowler refers to the following architecture definition  
>"*architecture is the set of design decisions that must be made early in a project*"  
  

* Martin Fowler disagrees with this definition because we should delay the design decisions and focus on features first.
* Martin Fowler complains about this definition because architecture should stress flexibility which can only be necessary later.
* Martin Fowler disagrees with this definition because to design an architecture it is not necessary to make any decision.
* Martin Fowler complains about this definition because the early decisions are not necessarily the right ones.


### Question 25780
Consider the change in the architecture associated with the use of caches in web services shown in the figure   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/537.png)  
 Taking into consideration that this change involves adding a server, which has a larger storage capacity than the request Nodes, that change has the impact of
* Increasing performance and availability
* Increasing availability and decreasing performance
* Increasing scalability and availability
* Increasing performance and decreasing availability


### Question 25781
Martin Fowler, *Who Needs and Architect?*, cites Ralph Johnson sentence:  
>"In most successful software projects, the expert developers working on that project have a shared understanding of the system design. This shared understanding is called architecture."  
  

* This shared understanding is necessary to define precise requirements.
* This shared understanding does not allow to define the architecture trade-offs because some of the stakeholders have their own goals.
* This shared understanding does not allow to have a global perspective of the system, because stakeholders have different interests.
* This shared understanding is what distinguishes architecture from design.


### Question 26047
Suppose that you are implementing a module in a system that has a two layered architecture. Knowing that your module belongs to the upper layer (assuming the usual notation for the layer style), this means that you
* Can use the operations defined in the lower layer, but not the ones defined inthe upper layer
* Can use the operations defined in the upper layer, but not the ones defined inthe lower layer
* Should use some operation defined in the lower layer
* Can use the operations defined in any of the system's modules


### Question 26048
The Generalization architectural style of the module viewtype can be use to support the evolution of a system
* By changing the commonalities that are in the children.
* Because the *is-a* relation does not allow reuse of implementation.
* By adding, removing, or changing children.
* By changing a parent, which will automatically change all the children that inherit from it.


### Question 26049
The main tactic associated with the aspects architectural style is:
* Split module
* Restrict dependencies
* Defer binding
* Increase semantic coherence


### Question 26050
In Facebook it is not possible to have the information about more that one bilion users in a single disk. Therefore, a sharding technique is applied, where the persistent information is split between several database servers, and requests are routed to the right servers for queries and updates. Additionally, due to performance requirements, the information needs to be replicated in several servers. To describe this architecture
* It is not necessary to have any view of the Data Model architectural style because Facebook information has a very simple structure.
* It is enough to design a view of the Data Model architectural style at the conceptual level because Facebook information has a very simple structure.
* It is enough to design a view of the Data Model architectural style at the logical level because the information will be stored in a relational database.
* It is necessary to design a view of the Data Model architectural style at the physical level to deal with performance and consistency issues of the access to data.


### Question 26051
Views of the module viewtype can be used to support requirements traceability analysis, determine how the functional requirements of a system are supported. This is represented by
* Data model view
* Generalization view
* Layered view
* Decomposition view


### Question 26052
A layer, in the layers architectural style, is a module:
* Because it has a well-defined interface
* That aggregates modules according to the uses relationship
* Because it has a well-defined interface and hides the internal behaviour
* That provides a set of complete and cohesive services


### Question 26053
Consider the following availability scenario for the Adventure Builder system  
>"The Consumer Web site is available to the user 24x7. If an instance of OPC application fails, the fault is detected and the system administrator is notified in 30 seconds; the system continues taking order requests; another OPC instance is created; and data remains in consistent state."  
  
and the following architectural view   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1028.png)  

* The view addresses the scenario because the uses relation between the `Consumer Website` module and the `OpcApp` module has the require properties.
* The view addresses the scenario because it separates the modules that represent the interfaces a new business partner has to implement.
* The view addresses the scenario because the `Consumer Website` module uses the `gwt` and `waf` modules.
* The view does not address the scenario


### Question 26054
In Facebook it is not possible to have the information about more that one bilion users in a single disk. Therefore, a sharding technique is applied, where the persistent information is split between several database servers, and applications are routed to the right servers for queries and updates. To describe this architecture
* It is not necessary to have any view of the Data Model architectural style because Facebook information has a very simple structure
* It is enough to design a view of the Data Model architectural style at the conceptual level because Facebook information has a very simple structure
* It is enough to design a view of the Data Model architectural style at the logical level because the information will be stored in a relational database
* It is necessary to design a view of the Data Model architectural style at the physical level to deal with performance and consistency issues of the access to data


### Question 26055
A function call is not necessarily a uses relation of the Uses architectural style of the Module viewtype because
* The invoked function may not have any input parameter.
* The invoked function may not have any output parameter.
* The invoked function may not have both any input parameter nor any output parameter.
* The correctness of the caller module may not depend on the correct implementation of the invoked function in the called module.


### Question 26056
Consider the Uses and Layered architectural styles.
* The Uses views are designed first
* The Layered view are designed first
* Whenever there is at least one Uses view then a Layered view needs to be designed as well
* There isn't any predefined order to design Uses and Layered views


### Question 26057
The detail that can be used in a view of the Data Model viewtype can be conceptual, logical or physical.
* It should always consider the physical detail level
* The logical detail level should only be used when the target of implementation is a relational database
* Only the conceptual level is required, the other two levels of detail are optional
* If there are performance requirements concerning the access to data, then the level of detail should be physical


### Question 26058
Consider the following view of the Adventure Builder case study   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/934.png)  

* This view shows that the processing of orders is done synchronously.
* This view shows that bank debits are done asynchronously.
* This view shows that the responses from the providers are processed synchronously.
* This view shows that the processing of tracking requests is done synchronously.


### Question 26059
According to the definition of the Layered architectural style, each layer represents a grouping of modules that offers a cohesive set of services.
* This means that the modules inside a layer cannot be loosely coupled.
* This means that this architectural style emphasizes the quality of performance.
* This means that each module cannot use other modules inside the same layer.
* This means that the modules inside a layer are likely to be ported to a new application together.


### Question 26060
The main difference between the *Uses* relation of the Uses style and the *Allowed to Use* relation of the Layers style
* Is that the *Uses* relation can happen only among modules belonging to the same layer
* Is that the *Allowed to Use* relation does not imply that the correctness of the upper layer depends on the correct implementation of its nearest lower layer
* Is that the *Allowed to Use* relation is a *Uses* relation between layers
* Is that the *Allowed to Use* relation defines a restriction for the possible *Uses* relations between modules belonging to different layers


### Question 26061
A criteria for the the application of the Decomposition architectural style of the Module viewtype is Build-vs-Buy decisions. The application of the criteria
* Results in a similar decomposition as if the criteria was not applied but some modules are identified to be outsourced.
* Results in a decomposition where each module may be implemented by a single developer.
* Allows to increase the overall calendar development time of the project because there is a communication overhead with external teams.
* Allows to identify modules for which the development team does not have the required implementation competences.


### Question 26062
The Uses architectural style
* Can only be applied after the Decomposition view is finished
* Can be applied before a Decomposition view is designed
* Should be applied in at least a view of the system
* Once applied in a view may be necessary to change the Decomposition view


### Question 26063
Using the Aspects architectural style promotes the modifiability of a system because
* It imposes restrictions on which uses relationships may exist between the system's modules
* It makes it easier to create generalization relationships between the system's modules
* It allows the decomposition of each of the system's modules into finer grained modules
* It separates in new modules responsibilities that were spread over various of the system's modules


### Question 26064
One of the advantages of having views of the module viewtype is that they allow to do an impact analysis to predict the effect of modifying the system. The architectural style of the module viewtype which provides richer information for this impact analysis is
* Decomposition style.
* Generalization style.
* Layered style.
* Uses style.


### Question 26065
To achieve a faster time-to-market, software companies are increasingly using a strategy of incremental releases of their software, where each new release has a set of new features. Which architectural style is better to analyse whether the system's software architecture is adequate for the planned incremental releases?
* The Decomposition style
* The Generalization style
* The SOA style
* The Uses style


### Question 26066
Suppose that in the process of designing a system's software architecture you come to the conclusion that there are uses relations in both directions in almost all of the system's modules. This means that
* There is a high level of communication between the several modules, and this will cause the system to have a low performance
* It is not possible to install the system in more than one machine
* It is very hard to explain what the system does, because we need to understand all the execution fluxes
* It is not possible to develop and to test the system incrementally


### Question 26077
In Facebook it is not possible to have the information about more that one bilion users in a single disk. Therefore, a sharding technique is applied, where the persistent information is split between several database servers, and applications are routed to the right servers for queries and updates. To describe this architecture
* It is necessary design a CRUD matrix to show the dependencies between the persistent information.
* It is enough to design a view of the Data Model architectural style at the conceptual level because Facebook information has a very simple structure.
* It is not necessary to have any view of the Data Model architectural style because Facebook information has a very simple structure.
* It is necessary to design a view of the Data Model architectural style at the physical level to deal with performance issues of the access to data.


### Question 26078
To achieve a faster time-to-market, software companies are increasingly using a strategy of incremental releases of their software, where each new release has a set of new features. Which architectural style is better to analyse whether the system's software architecture is adequate for the planned incremental releases?
* The Decomposition style
* The Generalization style
* The SOA style
* The Uses style


### Question 26079
Consider the following view of the Adventure Builder case study   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/934.png)  

* This view shows that the processing of orders is done synchronously.
* This view shows that bank debits are done asynchronously.
* This view shows that the responses from the providers are processed synchronously.
* This view shows that the processing of tracking requests is done synchronously.


### Question 26080
A criteria for the the application of the Decomposition architectural style of the Module viewtype is Build-vs-Buy decisions. The application of the criteria
* Results in a similar decomposition as if the criteria was not applied but some modules are identified to be outsourced.
* Results in a decomposition where each module may be implemented by a single developer.
* Allows to increase the overall calendar development time of the project because there is a communication overhead with external teams.
* Allows to identify modules for which the development team does not have the required implementation competences.


### Question 26081
A layer, in the layers architectural style, is a module:
* Because it has a well-defined interface
* That aggregates modules according to the uses relationship
* Because it has a well-defined interface and hides the internal behaviour
* That provides a set of complete and cohesive services


### Question 26082
Consider that a chess game should provide an automatic and intelligent chess player, and that to implement that player we will use some of the many chess engines already available in the market. Moreover, the system should allow the user to choose which engine to use for each new game. Given these requirements, which of the architectural styles from the module viewtype are best suited to satisfy them?
* The Decomposition style.
* The Decomposition and Uses styles.
* The Layered style.
* The Generalization and Decomposition styles.


### Question 26083
In the Fénix first architecture it was common programmers forget to lock objects in the context of transactions. A solution for this problem can be architecturally described using a view of the architectural style
* Decomposition
* Uses
* Data Model
* Aspects


### Question 26084
Consider the Uses architectural style of the Module viewtype
* Cycles in the uses relation between modules are a good sign, because it indicates that several modules should be tested together.
* The uses relation should be applied to the coarse-grained modules, because it allows to identify circular dependences.
* There isn't any relation with the layered architectural style because the allowed-to-use relation is more generic.
* The project manager uses this view to get advice on the incremental development of the system.


### Question 26085
Views of the module viewtype can be used to support requirements traceability analysis, determine how the functional requirements of a system are supported. This is represented by
* Data model view
* Generalization view
* Layered view
* Decomposition view


### Question 26086
Consider the following description of *Memcached*, which is adapted from its Wiki:  
>"Memcached is an in-memory key-value store for small chunks of arbitrary data from results of database calls, API calls, or page rendering. It is made up of:  
-  Client software, which is given a list of available memcached servers.  
-  A client-based hashing algorithm, which chooses a server based on the "key" input.  
-  Server software, which stores your values with their keys into an internal hash table.  
-  Server algorithms, which determine when to throw out old data (if out of memory), or reuse memory.  
"  
  
Suppose that you want to present an architectural view for *Memcached* that represents the above information. Which view is more adequate?
* A view of the Data Model style
* A view of the Layers style
* A view of the Uses style
* A view of the Decomposition style


### Question 26087
The uses architectural style allows to assess the impact of changes in modules
* Because it is a natural extension of the use cases concept
* But it requires additional information on the modules internal structure
* And contains all the information required to assess effectively the impact
* But it needs to be complemented, for each uses relationship, with the level of coupling


### Question 26088
One of the advantages of having views of the module viewtype is that they allow to do an impact analysis to predict the effect of modifying the system. The architectural style of the module viewtype which provides richer information for this impact analysis is
* Decomposition style.
* Generalization style.
* Layered style.
* Uses style.


### Question 26089
Suppose that you are implementing a module in a system that has a two layered architecture. Knowing that your module belongs to the upper layer (assuming the usual notation for the layer style), this means that you
* Can use the operations defined in the lower layer, but not the ones defined inthe upper layer
* Can use the operations defined in the upper layer, but not the ones defined inthe lower layer
* Should use some operation defined in the lower layer
* Can use the operations defined in any of the system's modules


### Question 26090
The Uses architectural style of the Module viewtype
* Allows the analysis of the impact of changes because if a module uses another it will necessarily have to change whenever the used module changes.
* Improves testability because if a module uses another then it is only possible to test them together.
* Improves testability because it informs the tester about which modules involved in circular use dependencies.
* Allows incremental development because the possible increments of functionally can be inferred from use dependencies.


### Question 26091
According to the definition of the Layered architectural style, each layer represents a grouping of modules that offers a cohesive set of services.
* This means that the modules inside a layer cannot be loosely coupled.
* This means that this architectural style emphasizes the quality of performance.
* This means that each module cannot use other modules inside the same layer.
* This means that the modules inside a layer are likely to be ported to a new application together.


### Question 26092
In a layered architecture composed by four layers, where the topmost layer is the layer number 1 and the bottommost layer is the layer number 4, which of the layers is more modifiable?
* Layer 4.
* In a layered architecture all layers are equally modifiable.
* Modifiability is not made easier by a layered architecture.
* Layer 1.


### Question 26093
Consider a view of the module viewtype where there is a uses loop, a cycle of uses dependences between several modules. It may be possible to break the dependence cycle by
* Applying the generalization style to identify child modules of a module in the loop chain.
* Identifying which of the *uses* dependencies are actually generalization dependencies.
* Decomposing a *uses* relation into different interfaces.
* Applying the decomposition style to some of the modules in the loop chain.


### Question 26094
A function call is not necessarily a uses relation of the Uses architectural style of the Module viewtype because
* The invoked function may not have any input parameter.
* The invoked function may not have any output parameter.
* The invoked function may not have both any input parameter nor any output parameter.
* The correctness of the caller module may not depend on the correct implementation of the invoked function in the called module.


### Question 26095
Consider the Decomposition architectural style of the Module viewtype
* Its main goal is to establish the reusability qualities of the architecture.
* Project managers are not interested in views that use this style because it lacks the necessary level of detail.
* Incremental development is a criteria that drives the design of views of this type.
* There should be at least one view of the system using this architectural style.


### Question 26096
Suppose that in the process of designing a system's software architecture you come to the conclusion that there are uses relations in both directions in almost all of the system's modules. This means that
* There is a high level of communication between the several modules, and this will cause the system to have a low performance
* It is not possible to install the system in more than one machine
* It is very hard to explain what the system does, because we need to understand all the execution fluxes
* It is not possible to develop and to test the system incrementally


### Question 26857
With the evolution of the web application technologies, it is now possible to develop web applications with a user interface similar to the interface of desktop applications. Yet, for this to happen, part of the code that was executing in the web server is now executing in the web browser. How does this change manifests in the software architecture of the system?
* In the Deployment view, because the presentation component is now executing in a different place
* In the component-and-connector view, because the connector between the web client and the web server has to change
* In the Layer view, because the order of the layers will have to change
* In the mapping between layers of the system and the components where they execute


### Question 26858
To achieve a faster time-to-market, software companies are increasingly using a strategy of incremental releases of their software, where each new release has a set of new features. Which architectural style is better to analyse whether the system's software architecture is adequate for the planned incremental releases?
* The Decomposition style
* The Deployment style
* The Work-assignment style
* The Uses style


### Question 26859
There are several tactics to satisfy availability requirements, which may be applied depending on the concrete requirement that we want to satisfy. Assuming that you want to deal with faults of type *omission* in your system, which tactic is more adequate?
* Active redundancy
* Ignore faulty behaviour
* Ping/Echo
* Retry


### Question 26860
In the Graphite system the component *carbon* provides to *webapp* components an access interface to the *buffers* in order to improve the quality of
* Performance.
* Interoperability.
* Security.
* Availability.


### Question 26861
Considering the availability architectural quality, the tactic of retry
* Can be applied to any kind stimulus in availability scenarios
* Can guarantee that the system will not become unavailable
* When applied it increases the latency of the availability scenario's response time
* Is useful to support scenarios where the stimulus is an omission


### Question 26862
Suppose that you decided to use the Google App Engine (GAE) in the development of a web application. The GAE is described in the Wikipedia as follows:  
>"Google App Engine is a platform for developing and hosting web applications in Google-managed data centers. Google App Engine is cloud computing technology. It virtualizes applications across multiple servers and data centers. [...] Google App Engine is free up to a certain level of used resources. Fees are charged for additional storage, bandwidth, or CPU cycles required by the application."  
  
On the other hand, the GAE documentation reads the following:  
>"With App Engine, you can build web applications using standard Java technologies and run them on Google's scalable infrastructure. The Java environment provides a Java 6 JVM, a Java Servlets interface, and support for standard interfaces to the App Engine scalable datastore and services, such as JDO, JPA, JavaMail, and JCache. Standards support makes developing your application easy and familiar, and also makes porting your application to and from your own servlet environment straightforward."  
  
Taking into account these two perspectives on the GAE, which architectural styles are more appropriate to represent the use of GAE in the software architecture of your web application?
* The *Decompostion* and *Implementation* styles
* The *Deployment* and *Uses* styles
* The *Client-Server* and *Generalization* styles
* the *Deployment* and *Layers* styles


### Question 26863
The *Ensuring that the implementation conforms to the architecture* step of how to create an architecture
* Tries to guarantee that the final system will have the qualities required by stakeholders.
* Does not allow developers to define some of the design of the system
* It requires automatic generation of code from the architecture.
* Tries to guarantee that the final system will have the qualities aimed by the architecture.


### Question 26864
The Chromium is a web browser that introduced an innovative architecture. In the Chromium description we can read:  
>"We use separate processes for browser tabs to protect the overall application from bugs and glitches in the rendering engine. We also restrict access from each rendering engine process to others and to the rest of the system. In some ways, this brings to web browsing the benefits that memory protection and access control brought to operating systems. We refer to the main process that runs the UI and manages tab and plugin processes as the "browser process" or "browser." Likewise, the tab-specific processes are called "render processes" or "renderers." The renderers use the WebKit open-source layout engine for interpreting and laying out HTML."  
  
Which architectural style should we use to represent this aspect of Chromium?
* Client-Server
* Peer-to-Peer
* Uses
* Communicating Processes


### Question 26865
The availability quality can be supported by a voting tactic in order to identify faults of
* Programming, if the components execute modules developed by different teams.
* Hardware, if there is hardware redundancy.
* Operating Systems, if redundant components execute on top of different operating systems..
* All the previous options.


### Question 26866
Consider the following definition of Microservice architectural style by Martin Fowler  
>"The microservice architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies."  
  
To represent an architecture based on Microservices
* We do not need a view of the module viewtype because it is about the runtime properties of the system.
* We do not need a view of the allocation viewtype because deployment is automated.
* The component-and-connector view should emphasize the performance qualities of systems following the microservices architecture.
* It is necessary to use views of the three viewtypes.


### Question 26867
Consider the following excerpt about the Amazon system  
>"Mainly, I think service orientation has helped us there. The stored data formats are decoupled from the format in which you communicate data items. If there is no need for sharing schemas of the actual storage layout, you can focus on making sure that the service interfaces can evolve in a way that allows you to handle variations of data formats. You could dictate a rigorous single format, but that would not be realistic if you are in Amazon's platform business. We have to make sure that the platform can be extended by our customers to meet their needs."  
  
The architectural style that better represents these aspects of the Amazon architecture is
* Data model to express the stored data formats
* Aspects to express the evolution of service interfaces
* Publish-subscribe to express how data is shared between services
* Decomposition to express the services interfaces


### Question 26868
Suppose that you join the development team of a very large software system, and that you are assigned some tasks to change some existing features. Which of the following architectural views would be, in principle, more useful to you to perform those tasks quickly?
* *Decomposition* and *Layers* views
* *Decomposition* and *Work assignment* views
* *Decomposition* and *Generalization* views
* *Decomposition* and *Implementation* views


### Question 26869
An email client such as Mozilla's Thunderbird or Microsoft's Outlook allows a user both to read the emails that were sent to him and to send new emails to other people. To do that, the email client connects to other components (one or more): some of these components keep the user's mailboxes with all the emails that were sent to him, whereas other components know how to forward the emails sent by the user to their final destinations (associated with a new set of destinations). In either case, it is always the email client that makes a request to the other components, but whereas in the first case the email client receives all the information about the user's emails, in the second case only a success or failure error code is returned. The architectural patterns that best describe the interactions between the components from the client to the final destinations
* Client-server in both cases.
* Peer-to-peer in both cases.
* Peer-to-peer in the first case and Client-Server in the second.
* Client-server in the first case and Peer-to-peer in the second.


### Question 26870
A requirement for a chess game is that it keeps a table with the best scores obtained in the game. Naturally, this information should be kept between two different executions of the system. Assuming that the game is a web-based application, then
* It is not necessary to use a ''Data Access'' layer because the information is simple.
* We must identify a module for writing the scores in a Decomposition style.
* We may assign the responsibility of writing the scores to another module that already has other responsibilities.
* We have to use a Repository component-and-connector style.


### Question 26871
Assume that one of the requirements for a graphical chess game is that it should be able to run both in Microsoft's Windows and Apple's Mac OS X operating systems. A good solution for this system would:
* Use a classic 3-layer architecture with the following layers, from top to bottom: Presentation, Domain Logic, and Data Access.
* Use an aspect-oriented architecture, where an aspect is used to generate a graphical interface.
* Use two deployment views, each one allocating different components to different machines with different operating systems.
* Create a decomposition where there is a module corresponding to the Windows OS and another one for the Mac OS X, each one responsible for containing the OS-specific code.


### Question 26872
The Chromium is a web browser that introduced an innovative architecture. In the Chromium description we can read:  
>"Chromium is a large and complex cross-platform product. We try to share as much code as possible between platforms, while implementing the UI and OS integration in the most appropriate way for each. While this gives a better user experience, it adds extra complexity to the code. This document describes the recommended practices for keeping such cross-platform code clean. We use a variety of different file naming suffixes to indicate when a file should be used:  
-  Windows files use the `_win` suffix.  
-  Cocoa (Mac UI) files use the `_cocoa` suffix, and lower-level Mac files use the `_mac` suffix.  
-  Linux files use `_linux` for lower-level files, `_gtk` for GTK-specific files, and `_x` for X Windows (with no GTK) specific files.  
-  Posix files shared between Mac and Linux use the `_posix` suffix.  
-  Files for Chrome's ''Views'' UI (on Windows and experimental GTK) layout system use the `_views` suffix.  
The separate front-ends of the browser are contained in their own directories:  
-  Windows Views (and the experimental GTK-views):`chrome/browser/ui/views`  
-  Linux GTK: `chrome/browser/gtk`  
-  Mac: `chrome/browser/cocoa`  
"  
  
Which architectural style should we use to represent this aspect of Chromium?
* Work assignment
* Decomposition
* None, because this description does not describe any architectural aspect of the system
* Implementation


### Question 26873
Suppose that you are developing the software architecture of a new system for an organization composed of several organizational units, each one with its own information systems, which have been developed independently of each other over the course of several years and depending on the particular needs of each unit. Your system has the goal of integrating the various existing systems, providing in this way not only a unified view of how the organization works, but also allowing the creation of new processes within the organization that involve more than one unit. Which architectural style is better suited to design such a system?
* The Decomposition style.
* The Client-Server style.
* The Communicating Processes style.
* The Service Oriented Architecture style.


### Question 26874
Consider the following requirement for availability of the Adventure Builder system  
>"The Consumer Web site sent a purchase order request to the order processing center (OPC). The OPC processed that request but didn't reply to Consumer Web site within five seconds, so the Consumer Web site resends the request to the OPC."  
  
If we represent this requirement as a scenario
* The stimulus is a crash and the tactic is retry
* The stimulus is an incorrect timing and the tactic is ignore faulty behaviour
* The stimulus is incorrect response and the tactic is voting
* The stimulus is an omission and the tactic is retry


### Question 26875
The Eclipse IDE is an open source application written in Java, and is extensible through the use of plug-ins. In the document that describes the existing plug-ins architecture in Eclipse, we may read the following:  
>"A plug-in in Eclipse is a component that provides a certain type of service within the context of the Eclipse workbench. [...] The plug-in class provides configuration and management support for the plug-in. A plug-in class in Eclipse must extend `org.eclipse.core.runtime.Plugin`, which is an abstract class that provides generic facilities for managing plug-ins."  
  
Considering the model and terminology used in the course to describe a software architecture, what kind of views are more appropriate to represent the plug-ins architecture of Eclipse described above?
* Views of the Component-and-Connector viewtype
* Views of the Allocation viewtype
* All of the above
* Views of the Module viewtype


### Question 26876
Consider a view of the module viewtype where there is a uses loop, a cycle of uses dependences between several modules. It may be possible to break the dependence cycle by
* Applying the generalization style to identify child modules of a module in the loop chain.
* Identifying which of the *uses* dependencies are actually generalization dependencies.
* Decomposing a *uses* relation into different interfaces.
* Applying the decomposition style to some of the modules in the loop chain.


### Question 26902
Architecturally significant requirements (ASR) are captured in a utility tree where each one of the ASRs are classified in terms of its architectural impact and business value.
* Only the scenarios that have high architectural impact and high business value should appear in the tree.
* A scenario for a power outage should have a low business value because the fault is temporary.
* A scenario for a 24 hours x 7 days availability of the system should appear as a leaf of the utility tree.
* The utility tree covers all the significant qualities the system has to address.


### Question 26903
Consider the following excerpt from the Wikipedia page on *white-box testing*:  
>"White-box testing is a method of testing software that tests internal structures or workings of an application, as opposed to its functionality. In white-box testing an internal perspective of the system (including the module's code), as well as programming skills, are required and used to design test cases. The tester chooses inputs to exercise paths through the code and determine the appropriate outputs."  
  
Assuming that you belong to the team testing a complex system and that you are responsible for performing white box tests on the system, which of the following architectural views of the system would be most useful to you?
* Work Assignment views
* Generalization views
* Deployment views
* Implementation views


### Question 26904
Which quality a global cache, where request nodes are responsible for retrieval, does not provide?
* Availability.
* Scalability.
* Performance.
* Application-specific eviction.


### Question 26905
Consider the following scenario  
>"When writing to the database the system receives an exception about a write failure. The system should stop interacting with data base and write a log message."  
  
The quality addressed by this scenario is
* Performance.
* Reliability.
* Fault-tolerance
* Availability.


### Question 26906
Which of the following phrases best describe the relationship between modules and components?
* A module may contain code from different components
* A module may execute code from different components
* A component may contain code from different modules
* A component may execute code from different modules


### Question 26907
How does the software architecture allow the incorporation of independently developed modules?
* Because modules are part of the component-and-connector viewtype.
* Because the software architect cannot implement all modules.
* Because the identification of the main modules, and their responsibilities, allow the definition of interfaces for the modules that can be outsourced from third party venders.
* Because the software architecture of the system has impact on the organizational structure of third party vendors.


### Question 26908
You have to develop an application that collects news from different web sources and process that information to present a digest to the application users. The different sources provide similar information through different interfaces (APIs). Additionally, the new sources may change the interfaces, for instance to enhance their service. Which architectural style can be used to represent this requirements?
* Peer-to-Peer to represent the communication between the components
* Client-Server to represent the request the application makes to the different new sources
* Layers to create a virtual machine that hides the internals of the application from its users interface code to allow the support of different user interfaces
* Generalisation to represent an abstraction common to all interfaces and keep API-specific details in child modules


### Question 26909
Suppose that, to satisfy an availability requirement related with the occurrence of faults at the network infrastructure used by your system, you want to use the tactic named *Ping/Echo*. How does the use of that tactic manifests in the architectural views of your system?
* Only in the Deployment view
* Only in the Decomposition view
* Only in a component-and-connector view
* Both in a component-and-connector and the Deployment views


### Question 26910
The typical software architecture of an enterprise application is composed of three tiers and three layers. Yet, we may have variations of this architecture. For instance, by separating the middle tier in two tiers. In this case, which other changes exist on the architecture that are related with the layers?
* We now have four layers, where each layer is executed in the corresponding tier, as before
* Each one of the two middle tiers executes the previously existing three layers, and no change is needed on the layers view
* There is no relation between the tiers and the layers, so the layers architecture is not changed
* The execution of the previously existing layers is split between the two new tiers, and new intermediate layers may be needed


### Question 26911
One way to increase the performance of a 3-tier enterprise application (with the standard separation in the web client, web server, and database tiers) is to replicate the web server tier and to add a load-balancer between the web clients and the web servers. Unfortunately, for some enterprise applications that option is not enough (or does not work at all), because
* They have many different use cases, corresponding to many distinct user interfaces
* They need to be able to process concurrent requests from the users
* They have a very complex domain logic that requires much processing power for answering each request
* They have to process very large amounts of data in each request


### Question 26912
The layered architectural style applies the modifiability architectural tactic of
* Split module.
* Use an intermediary.
* Refactor.
* Restrict dependencies.


### Question 26913
The recent developments in web applications that made them provide a richer user interface led to a change in its architecture: part of the application's computation has to be done in the web browser used by users to access the application. How is this change in the architecture manifested in the different types of views that describe the software architecture of a web application?
* Given that the change is on execution aspects, the change manifests itself only through the modification of components and connectors on the system
* This change in the way of how web applications run does not correspond to any change in its architecture, because at the architectural level we still have the same components
* The only architectural change is on the Deployment view, because the components and connectors remain the same, but execute in different places
* This change manifests itself on the relationship between the system's modules and components


### Question 26914
To increase the availability of a web application it is possible to use a load-balancer between the clients and the servers that detects server failures and transparently redirects the requests to the servers that are functioning properly. To represent this architecture
* It is enough to show the load-balancer between the web clients machines and the servers machines using a deployment view
* It is necessary to create a uses view to show how clients require the correct functioning of servers
* It is necessary to change the component-and-connector view to show the communicating processes
* It is necessary to change the connector between the web clients and the web servers, in the component-and-connector view, to show the semantics that is provided by the load-balancer


### Question 26915
Suppose that in the development of an enterprise application (which needs to access a database) it was decided to use the Hibernate framework to simplify the development of the data access code. Which architectural view is the most adequate to represent this decision?
* A Deployment view
* A Component-and-Connector view
* A Uses view
* A Decomposition view


### Question 26916
Given the complexity of building a good automatic Chess player, programs that play chess usually make use of existing chess engines, as shown by the following excerpt from Wikipedia:  
>"A chess engine is a computer program that can play the game of chess. Most chess engines do not have their own graphical user interface (GUI) but are rather console applications that communicate with a GUI such as XBoard (Linux) and WinBoard (Windows) via a standard protocol."  
  
In the web page for XBoard, we may read the following:  
>"XBoard is a graphical user interface for chess [...]. It displays a chessboard on the screen, accepts moves made with the mouse, and loads and saves games in Portable Game Notation (PGN). It serves as a front-end for many different chess services, including:  
-  Chess engines that will run on your machine and play a game against you or help you analyze, such as GNU Chess, Crafty, or many others.  
-  [...]  
"  
  
Given the above information on XBoard, chess engines, and how they interact at runtime, which of the following architectural styles best represents the of architecture of a software system based on XBoard and one of the engines?
* The *Uses* style
* The *Layers* style
* The *Peer-to-Peer* style
* The *Communicating Processes* style


### Question 26917
Suppose that you are developing a software architecture for a new large scale system and that you intend to resort extensively to third party subcontractors for the development of various parts of the system. Which architectural styles are most useful to plan the development of the system in this case?
* The Decomposition and the Layers styles
* The Decomposition and the Uses styles
* The Decomposition and the SOA styles
* The Decomposition and the Work Assignment styles


### Question 26918
The uses architectural style allows to assess the impact of changes in modules
* Because it is a natural extension of the use cases concept
* But it requires additional information on the modules internal structure
* And contains all the information required to assess effectively the impact
* But it needs to be complemented, for each uses relationship, with the level of coupling


### Question 26919
Consider a view of the module viewtype where there is a uses loop, a cycle of uses dependences between several modules. It may be possible to break the dependence cycle by
* Applying the generalization style to identify child modules of a module in the loop chain.
* Identifying which of the *uses* dependencies are actually generalization dependencies.
* Decomposing a *uses* relation into different interfaces.
* Applying the decomposition style to some of the modules in the loop chain.


### Question 26920
Consider the following figure   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/713.png)  

* The access to two different aggregate instances in the context of the same request does not hinder scalability
* This is the solution followed by Twitter client applications
* It describes the typical behavior of a microservices system
* To support high scalability the request of `User 1` needs to be decomposed into a request to only one of the aggregate instances and the processing in the other aggregate occurs in the background


### Question 26921
To analyse the performance of a system
* Only views of the component-and-connector viewtype are needed
* Only views of the component-and-connector viewtype and allocation viewtype are needed
* Views of the module viewtype are not needed
* All viewtypes may be necessary


### Question 26942
In the Java documentation you can find:  
>"`public abstract class Component`\*`extends Object`\*`implements ImageObserver, MenuContainer, Serializable`"  
  
Class `Component` is:
* A component.
* Both, a component and a module, depending on the perspective.
* An external element.
* A module.


### Question 26943
Consider the peer-to-peer architectural style
* All the peers are equal.
* Any peer can access any other peer.
* Peers are only used to share files.
* The interaction between peers is symmetric.


### Question 26944
Consider an enterprise application that needs to keep its data persistently, but for which no one knows yet what is the volume of information that will be handled by the application. Therefore, the system's architect intends to develop the system such that it is possible to change easily the relational database (RDBMS) component used to store the application's data, replacing it with an RDBMS from another manufacturer. Given that this is a common requirement, the recommended software architecture for such applications fulfills this requirement by using a particular architectural style. Which style is it?
* The *Shared data* style
* The *Repository* style
* The *Client-Server* style
* The *Layers* style


### Question 26945
Consider the following generalization view of the Catalog of DVD case study.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1058.png)  

* This generalization was driven by a split module tactic.
* This view fulfills an availability scenario, which defines the expected behavior whenever an external source is not available.
* This view fulfills a modifiability scenario, which states that it should be easy to support the system in new software platforms, e.g. *Windows* or *OS X* .
* This view fulfills a modifiability scenario, which states about the cost of adding a new source of information to the system.


### Question 26946
On the web page of Memcached can be read:  
>"..., high-performance, distributed memory object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load."  
  
According to this information, Memcached is
* A component
* An allocation element
* A module
* Both, a module and a component


### Question 26947
Suppose that you are developing a new software system and that you want some part of the system's functionality to be easily reusable in future systems. Which of the following architectural styles are more suitable to show that the system architecture meets this requirement.
* The *implementation* style, which allows us to know where are the artifacts that implement a certain module
* The *layers* style, which allows us to show that the structure of our system is composed of various modules that may be easily reused in other systems
* The *client-server* and *deployment* styles, which allow us to isolate the required functionality in a component that executes autonomously and, thus, reusable in other systems
* The *decomposition* and *uses* styles, which allow us to show how dependent a certain module is of other parts of the system


### Question 26948
The definition of software architecture, on the course book, is  
>"*The software architecture of a system is the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both.*"  
  
According to this definition
* The set of structures is needed to support different levels of performance for the system.
* The hardware is an example of a software element.
* There isn't any relation between the properties of the software elements and the ability to reason about the system.
* To reason about a system is to verify whether the architecturally significant requirements are considered by the architecture.


### Question 26949
A software system is usually described using different architectural views
* Each view contains a single architectural style.
* Views need to contain more than one architectural style.
* A view may not contain any architectural style.
* None of the above.


### Question 26950
The Tiers architectural style
* Applies layers to tiers.
* Is an extension of the Client-Server architectural style.
* Defines tiers as components.
* Restricts the communication between components because, for instance, a group of components should be located in the same hardware.


### Question 26951
Consider a view of the module viewtype where there is a uses loop, a cycle of uses dependences between several modules. It may be possible to break the dependence cycle by
* Applying the generalization style to identify child modules of a module in the loop chain.
* Identifying which of the *uses* dependencies are actually generalization dependencies.
* Decomposing a *uses* relation into different interfaces.
* Applying the decomposition style to some of the modules in the loop chain.


### Question 26952
Web applications went through several evolutions over the last years. One of those evolutions was to make their user interfaces more sophisticated, by leveraging on new technologies available in the browsers, such as, for example, Javascript, to provide a more satisfying user experience. What were the most visible consequences of such an evolution on the typical software architecture of a web application?
* The connector used to represent the interaction between the browser and the web server changed
* The browser is now a component of a different type
* That evolution did not have any consequences on the software architecture of a web application
* The presentation logic layer and how it relates with the underlying layer changed


### Question 26953
The Eclipse IDE is an open source application written in Java, and is extensible through the use of plug-ins. In the document that describes the existing plug-ins architecture in Eclipse, we may read the following:  
>"A plug-in in Eclipse is a component that provides a certain type of service within the context of the Eclipse workbench. [...] The plug-in class provides configuration and management support for the plug-in. A plug-in class in Eclipse must extend `org.eclipse.core.runtime.Plugin`, which is an abstract class that provides generic facilities for managing plug-ins."  
  
Considering the model and terminology used in the course to describe a software architecture, what kind of views are more appropriate to represent the plug-ins architecture of Eclipse described above?
* Views of the Component-and-Connector viewtype
* Views of the Allocation viewtype
* All of the above
* Views of the Module viewtype


### Question 26954
The architectural style that best represents the runtime execution of a system Git installed for a small group of developers is
* Peer-to-peer style.
* Pipe-and-Filter style.
* Publish-subscribe style.
* Shared-data style.


### Question 26955
In Chrome system, to show that it provides mobility qualities by managing the number of tab, it is necessary to use
* The communicating processes style.
* The communicating processes style and the pipes-and-filters style.
* The dynamic reconfiguration style.
* The communicating processes style and the dynamic reconfiguration style.


### Question 26956
Suppose that there are certain performance requirements for a system, and that you want to show to the stakeholders of the system that the software architecture that you designed meet those requirements. To do this
* It makes no sense to use views of the module viewtype, as they give only a static view of the system
* You should use only views of the component-and-connector viewtype, which describe the dynamic aspects of the system
* The only views that are relevant to performance requirements are views of the Deployment style
* You may need to use views of the three viewtypes


### Question 26957
In the Publish-Subscribe architectural style, the components, from the point of view of the modules they execute
* Depend on the types of the publishers components
* Are completely independent
* It is necessary to support dynamic Defer Binding of components, publishers and subscribers, to the connector to be completely independent
* Only depend on the type of events


### Question 26958
Consider the following representation of Amazon's architecture (sorry for the figure's layout: **save trees**)   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/650.png)  
 What is the most relevant architecture style that is used in this figure?
* Client-server to represent performance.
* Service-oriented architecture to represent interoperability.
* Shared-data to represent modifiability.
* Tiers to represent scalability.


### Question 26959
When comparing Amazon Silk with Google Chrome
* In Amazon Silk a request for a web page corresponds to a peer-to-peer interaction between all the web components containing the resources.
* In Google Chrome a request for a web page is accomplished by a single access to the internet.
* In Google Chrome a request for a web page aggregates the page on the background before it is sent to the client.
* In Amazon Silk a request for a web page corresponds to requesting a service from the amazon cloud.


### Question 26960
In Facebook it is not possible to have the information about more that one bilion users in a single disk. Therefore, a sharding technique is applied, where the persistent information is split between several database servers, and requests are routed to the right servers for queries and updates. Additionally, due to performance requirements, the information needs to be replicated in several servers. To describe this architecture
* It is not necessary to have any view of the Data Model architectural style because Facebook information has a very simple structure.
* It is enough to design a view of the Data Model architectural style at the conceptual level because Facebook information has a very simple structure.
* It is enough to design a view of the Data Model architectural style at the logical level because the information will be stored in a relational database.
* It is necessary to design a view of the Data Model architectural style at the physical level to deal with performance and consistency issues of the access to data.


### Question 26961
Consider the Work Assignment architectural style of the allocation viewtype.
* It assigns components and connectors to people and teams.
* It does not consider the software that is outsourced.
* It allows to estimate the cost of hardware.
* It is useful for the project managers.


### Question 26962
In the description of the Microservices Architecture by James Lewis and Martin Fowler can be read:  
>"Microservice teams would expect to see (...) for each individual service such as dashboards showing up/down status and a variety of operational and business relevant metrics. Details on circuit breaker status, current throughput and latency are other examples we often encounter in the wild."  
  
Which quality is being referred?
* Performance
* Availability
* Usability
* Monitorability


### Question 26963
According to the SEI model, there are three different architectural viewtypes that are usually necessary to describe completely a software architecture.
* Those three viewtypes complement each other, but they are completely independent, showing different aspects that have no relation among them
* The module and component-and-connector viewtypes are independent of one another, but the allocation viewtype depends on the first two
* Each viewtype uses different software elements, such as modules or components, so it does not make sense to talk about relationships among these viewtypes
* Even though each viewtype addresses different aspects of a system, there are relationships among all of them


### Question 26964
Consider a stakeholder that is particularly concerned about the total cost of the project. When it comes to describing the system using allocation viewtypes is interested in
* A deployment view.
* A work assignment view.
* A install view.
* A deployment and a work assignment view.


### Question 26965
Consider the Figure that describes the use of caches in web services.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/480.png)  
 In that Figure, there is a rectangle with the name *Cache* within another rectangle with the name *Request Node*. Taking into account the description made in the text and the goal of that Figure, those rectangles correspond to which type of software elements?
* They are both modules
* The *Request Node* is a component and the *Cache* is a module
* The *Request Node* is a module and the *Cache* is a component
* They are both components


### Question 26966
When comparing Amazon Silk with Google Chrome in the context of the prediction of pages the user is going to access
* Google Chrome uses a usability maintain system model tactic.
* Amazon Silk predictions are constrained by the amount of information it can store about each user access.
* Google Chrome predictions do not require storage in the client-side.
* Amazon Silk predicts accesses based on the information gathered for all Silk users.


### Question 26967
One of the terms often used to describe the software architecture of a system is the term *tier*, being common, for instance, to talk about *multi-tier* systems. Taking into account the various types of software elements that compose a software architecture, a *tier* is
* A component
* A module
* A layer
* A grouping of components


### Question 26968
Consider the Service-Oriented Architecture architectural style
* It cannot be applied when the system includes legacy systems.
* Its enterprise service bus cannot support asynchronous communication between the components.
* The typical communication pattern is point-to-point.
* The main quality this style addresses is interoperability.


### Question 26969
In the description of the Chrome we can read

> What about network performance? First off, Chrome uses the same network stack on Android and iOS as it does on all other versions. This enables all of the same network optimizations across all platforms, which gives Chrome a significant performance advantage. However, what is different, and is often adjusted based on the capabilities of the device and the network in use, are variables such as priority of speculative optimization techniques, socket timeouts and management logic, cache sizes, and more.

Which modifiability tactic is being used?
* Increase semantic coherence.
* Use an intermediary.
* Restrict dependencies.
* Abstract common services.


### Question 26970
Consider the following distinction between Monoliths and Microservices made by Matin Fowler   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/636.png)  
 If we try to map this figure into a set of views we will need.
* A decomposition view.
* A view of the component-and-connector viewtype.
* A view of the component-and-connector viewtype and a deployment view.
* A decomposition view, a view of the component-and-connector viewtype and a deployment view.


### Question 26971
The Install and Implementation architectural styles
* Allocate modules to the file system
* Are applied to completely distinct sets of files
* Are applied to the same set of files
* Differ on the emphasis on production and development phases of the software process


### Question 26972
Consider the following architectural view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/525.png)  
 In this component-and-connector view the interactions the interactions between components follow the architectural style(s)
* Communicating processes
* Communicating processes and shared-data
* Communicating processes, shared-data and service-oriented architecture
* Communicating processes, shared-data, service-oriented architecture, and peer-to-peer


### Question 26973
In his article, *Who Needs and Architect?*, Martin Fowler cites Ralph Johnson definition:  
>"Architecture is the set of decisions that must be made early in a project."  
  
In his opinion:
* This is right because if you don't the project fails
* This is wrong because you can easily change these decisions during the project lifetime
* This is wrong because it is against the agile way of thinking the software development process
* This is right but you cannot be completely sure whether the decisions are the right ones


### Question 26974
In the Publish-Subscribe architectural style
* All the published events are received by their subscribing components.
* The events should be received by the same order they are sent.
* The set of events types are predefined at initialization time.
* A component can subscribe to events.


### Question 26975
Consider that an architect needs to design a system which interacts with two external sources of information, and it has to import some of the information to store it in the system's internal database. The stakeholders inform him that it will be necessary to include new sources of information in the future, besides the two already identified, but they cannot precisely define which they are. This changes will occur after the first version of the system is in production. Additionally, the stakeholders define a short period of time to integrate a new source of information. Given this requirements the architect should
* Consider the requirements not realistic
* Apply tactics of defer binding to allow the addition of the new sources of information in initialization time
* Consider this requirement as a non architecturally significant requirement
* Identify what should be the common and specific parts of the module responsible for the interaction with the external sources, before interacting again with the stakeholders


### Question 26976
In the HDFS system the fault recovery tactics are:
* Active replication and passive replication
* Active replication, passive replication, and spare
* Quorum, active replication, and passive replication
* Passive replication and spare


### Question 26977
Consider the following architectural view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/476.png)  
 According to this view the stakeholders can see that the Adventure Builder system
* Becomes unavailable for clients if there is a fault in the hardware of web server (srv-web)
* Becomes unavailable for clients if there is a fault in the hardware of database server (srv-db)
* Becomes unavailable for clients if there is a fault in the hardware of service server (srv-opc)
* Becomes unavailable for banks if there is a fault in the hardware of service server (srv-opc)


### Question 26978
A connector may be attached to components of different types because
* The type of a connector does not depend on the type of its roles.
* The type of a component does not depend on the type of its ports.
* The attachment is a runtime relation which dynamically manages type compliance.
* The attachment between components and connectors only depends on their ports and roles types.


### Question 26979
Consider the following application-specific types that were defined for a component-and-connector view that depicts the components within `Carbon` component.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/383.png)  

* In the view there are multiple instances of the `Writer` component.
* In the view `Receiver` component's `client` port is not associated with an external port.
* In the view the `produce` port of a `Receiver` component is attached to the `consume` port of a `Writer` component.
* In the view there are multiple instances of the `Queue` component.


### Question 26980
Consider the following view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/846.png)  
 In this view the following architectural styles are used
* Service-oriented architecture, and Client-server
* Service-oriented architecture, and Shared-data
* Service-oriented architecture, Shared-data, and Peer-to-peer
* Service-oriented architecture, Shared-data, Peer-to-peer, and Client-server


### Question 26981
The client-server architectural style provides availability because
* It allows an undefined number of clients.
* Servers can also be clients.
* Servers can send a heartbeat to clients.
* It is possible to have redundant servers.


### Question 27097
Suppose you have a system with a client-server architecture that was designed to support the simultaneous existence of at most 100 clients, without specific requirements for availability. The solution adopted and put into operation four years ago is a single server component to which all clients connect to. This solution satisfies the initial requirements but with the recent increase in the maximum number of clients to 200, the system no longer has acceptable performance. Not knowing anything else about the system's architecture, which solution do you propose to solve the system's performance problems?
* To keep the current architecture of the system and optimize the code to achieve the currently required performance levels
* To change the Deployment view, replicating the server component by more machines
* To review the system's architecture so that part of the computation that is currently done at the server shifts to the clients
* To replace the machine used to run the server component by a more powerful machine that meets the new performance requirements, keeping only a server component running


### Question 27098
In the Hadoop system the use of a *BackupNode* instead of a *CheckpointNode*:
* Allows the creation of checkpoints but it is necessary to request all the information from the *NameNode* whenever a new checkpoint creation begins
* Does not allow the creation of checkpoints
* Allows the creation of checkpoints without requiring any kind of information from the *NameNode*
* Allows the creation of checkpoints using the information that it gradually receives from the *NameNode*


### Question 27099
Suppose that you are implementing a web application and that you decided to use an HDFS system to store the data of your application---that is, your web application will be a client of the HDFS system. How does this decision affects the architecture of your web application?
* The component-and-connector view must, necessarily, be changed to include the components *NameNode* and *DataNode*, with which the web application has to interact to access its data
* The layered view of the web application will have to include a new layer corresponding to the Hadoop MapReduce framework
* The Deployment view must be changed to include the racks needed to run the HDFS system
* The application continues to have a three-tiered architecture, where one of the tiers is now the HDFS system


### Question 27100
What is the architectural impact of an Architecturally Significant Requirement (ASR)?
* Means that including this requirement will very likely results in a different architecture.
* Is a value the stakeholders assign to the ASR.
* It is the cost associated with the implementation of the ASR.
* Defines the number of software elements of the software architecture that are related with the ASR.


### Question 27101
When comparing Amazon Silk with Google Chrome
* Amazon Silk explicitly caches pages on the browser to optimize accesses.
* Amazon Silk cache is not shared between different users of the service to support confidentiality.
* Google Chrome cache is shared among the different users of a desktop machine.
* Google Chrome predictor takes into consideration the amount of available cache.


### Question 27167
Consider the change in the architecture associated with the use of caches in web services shown in the figure   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1283.png)  
Taking into consideration that in this change the added global cache is located in a server, which has a larger storage capacity than the request Nodes, this change has the impact of
* Increasing performance and availability
* Increasing availability and decreasing performance
* Increasing scalability and availability
* Increasing performance and decreasing availability


### Question 27168
Consider the following excerpt from the tutorial on the Hadoop MapReduce:  
>"Hadoop MapReduce is a software framework for easily writing applications which process vast amounts of data (multi-terabyte data-sets) in-parallel on large clusters (thousands of nodes) of commodity hardware in a reliable, fault-tolerant manner. A MapReduce job usually splits the input data-set into independent chunks which are processed by the map tasks in a completely parallel manner. The framework sorts the outputs of the maps, which are then input to the reduce tasks. Typically both the input and the output of the job are stored in a file-system. The framework takes care of scheduling tasks, monitoring them and re-executes the failed tasks."  
  
Which architectural style of the component-and-connector viewtype is more adequate to describe how the MapReduce works, taking into account its main advantages in solving a problem?
* The Shared data style
* The Pipes-and-filters style
* The Peer-to-Peer style
* The Communicating Processes style


### Question 27169
Some usability qualities are not architectural because
* They only concern the web designers
* They are dependent on performance tactics
* They are dependent on availability tactics
* They are not implemented by a usability tactic


### Question 27170
Consider the following figure that presents an architectural view of an *Image Hosting Application* which resulted from the enrichment of another architectural view by adding another *Image File Storage* pair, in the figure they are distinguished by 1 and 2.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/949.png)  
 Which quality results from this enrichment, that was not provided by the previous version of the architecture?
* Availability of the Image Write Service, whenever one of the Image Write Service components crashes
* Availability of the Image File Storage, whenever the Image File Storage component crashes
* Performance of the Image Write Service
* Scalability of the Image File Storage in terms of the storage capacity


### Question 27171
One of the best practices in the design of a software architecture is to create a skeleton system. What is its purpose?
* To create an abstraction layer between the architecture of the system and its functionalities, so that the architecture may be changed later without affecting the functionalities
* To create an artifact that may be used to explain the system's software architecture to the various stakeholders
* To facilitate the work assignment to the members of the development team that will implement the system's functionalities
* To allow testing and validating the software architecture in the early development stages


### Question 27172
There are other factors that affect the development of a software system, besides its functional requirements and quality attributes. For example, factors such as budget or available time. These factors
* Influence the software development process and its management, but not the software architecture of the system under development
* Are important to determine the feasibility of the system, but once we reach the conclusion that the system can be developed with these restrictions, software architecture no longer depends on these factors
* Are not one of the influences of the software architecture in the Architecture Influence Cycle
* Should be captured in scenarios, as the requirements for quality attributes, and be taken into account in the design of the software architecture


### Question 27173
In wikipedia you can find the following fragment of a definition:  
>"An individual software component is a software package, or a module that encapsulates a set of related functions."  
  
According to the definitions taught in the course the above *individual software component* corresponds to:
* A component.
* Both, a component and a module, depending on the perspective.
* An external element.
* A module.


### Question 27174
The web page that describes the architecture of Chromium OS (an open source project to implement a new operating system) starts like this:  
>"Chromium OS consists of three major components:  
-  The Chromium-based browser and the window manager  
-  System-level software and user-land services: the kernel, drivers, connection manager, and so on  
-  Firmware  
"  
  
Considering this brief description of the software architecture of Chromium OS, which architectural style is more adequate to represent it?
* The Communicating Processes style
* The Client-Server style
* Any style of the component-and-connector viewtype
* The Decomposition style


### Question 27175
The architectural style that best represents the runtime execution of a system Git installed for a small group of developers is
* Peer-to-peer style.
* Pipe-and-Filter style.
* Publish-subscribe style.
* Shared-data style.


### Question 27176
Consider the following excerpt about the Scalable web architecture and distributed systems case study about two different possible implementations of a global cache  
>"The majority of applications leveraging global caches tend to use the first type, where the cache itself manages eviction and fetching data to prevent a flood of requests for the same data from the clients. However, there are some cases where the second implementation makes more sense. For example, if the cache is being used for very large files, a low cache hit percentage would cause the cache buffer to become overwhelmed with cache misses; in this situation it helps to have a large percentage of the total data set (or hot data set) in the cache."  
  

* The solution where the cache is responsible for the eviction has better availability
* The solution where the application is responsible for the eviction has better modifiability
* The solution where the cache is responsible for the eviction has better performance
* The solution where the application is responsible for the eviction has better availability


### Question 27237
Designing an architecture
* Is driven by functional requirements.
* Is done in a single step, after all the tactics were identified.
* Is a top-down process where a initial decomposition is chosen and it is successively decomposed without changing the initial decisions.
* Is an iterative process where architectural designs are proposed as hypothesis and tested.


### Question 27238
In the context of the FenixEdu case study the following scenario was identified.  
>"The management intends that the system should be available to all users, even after offices close and classes finish because students may need courses material to study 24X7 and faculty and administrative staff may want to work from home."  
  
This is a
* Usability scenario.
* Availability scenario.
* Modifiability scenario.
* Business scenario.


### Question 27239
Consider the following decomposition view of the Graphite system where module Store Graphs is responsible for managing the storage of datapoints and graphs and module Present Graphs for graphs generation and presentation. Buffering is a library used to temporarily store incoming data point.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/398.png)  

* Buffering can be considered a sub-module of the Present Graphs module.
* Buffering can be considered a direct sub-module of the top Graphite module.
* Buffering is not a module.
* Buffering can be considered a sub-module of the Store Graphs module.


### Question 27240
The component-and-connector viewtype of the software architecture description
* Addresses the aspects of the assignment of people to the implementation of the units of code.
* Addresses the aspects of the assignment of processes to the hardware where the system is going to execute.
* Addresses the aspects of the runtime properties of the system.
* Addresses the aspects of the implementation of the system.


### Question 27241
Consider the concepts of module interface and component port.
* A module interface has to be attached to a single component port.
* A module interface can be replicated but component ports cannot.
* A module interface may be attached to several component ports.
* A module interface cannot be replicated but component ports can.


### Question 27242
An advantage of Chrome when compared with Amazon Silk is
* It can take advantage of concurrency
* The *browser* needs to make more requests to the server
* It uses machine learning techniques
* It does not depend on a proprietary service


### Question 27243
Consider the following sentence by Melvin Conways, also known as Conway's Law  
>"organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations"  
  

* This law highlights the impact of the business on the architecture
* This law states that architectures impact on the structure of the organization
* This law does not apply to the design of architectures
* This law can be seen as an example of the architecture influence cycle


### Question 27244
The stimulus of an availability scenario
* Can be a failure.
* Should be a fault.
* Can be an error.
* Should be a crash.


### Question 27245
An attack is
* The source of stimulus for scenarios of the Availability quality.
* The stimulus for scenarios of the Availability quality.
* The source of stimulus for scenarios of the Security quality.
* The stimulus for scenarios of the Security quality.


### Question 27246
A criteria for the the application of the Decomposition architectural style of the Module viewtype is Build-vs-Buy decisions. The application of the criteria
* Results in a similar decomposition as if the criteria was not applied but some modules are identified to be outsourced.
* Results in a decomposition where each module may be implemented by a single developer.
* Allows to increase the overall calendar development time of the project because there is a communication overhead with external teams.
* Allows to identify modules for which the development team does not have the required implementation competences.


### Question 27247
On the course slides you can find the following definition of architecture:  
>"The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them."  
  
However, in the book you can find another definition:  
>"The software architecture of a system is the set of structures needed to reason about the system, which comprise the software elements, relations among them, and the properties of both."  
  

* The book definition does not consider relevant the externally visible properties.
* The book definition also considers that the properties are externally visible because by definition an architectural property is externally visible.
* The book definition is not correct, as pointed out in the errata.
* The book definition also considers that the properties are externally visible because they are used for reasoning by the stakeholders.


### Question 27248
The architecturally significant requirements are important in the process of creating the software architecture for a system because they are
* The components that manage the communication between the remaining elements in the system
* The stakeholders that drive the development of the system
* The tactics that satisfy the most important requirements for the system
* The most important requirements (both functional and qualities) that the system must achieve


### Question 27249
Consider the following application-specific types. Note that `Queue` components are within the `Carbon` components. In a view that contains components of these three types   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/388.png)  

* There is a message passing connector between the `read` port of `Queue` and the `data points access` port of `WebApp`.
* There is a connector between the `producer` port of a `Queue` component and the `client` port of its `Carbon` component.
* The `client` ports of `Carbon` and `WebApp` are connected to a `Client` component through the same connector instance.
* There is a interface delegation relation between the `read` port of `Queue` and the `query` port of `Carbon`.


### Question 27250
An architectural view of the Component-and-Connector viewtype that describes the interactions within the Renderer Process component of Chrome, uses the architectural style
* Repository
* Service-Oriented Architecture
* Client-Server
* Communicating-Processes


### Question 27251
Consider the following excerpt about the Amazon system  
>"Over time, this grew into hundreds of services and a number of application servers that aggregate the information from the services. The application that renders the Amazon.com Web pages is one such application server, but so are the applications that serve the Web-services interface, the customer service application, the seller interface, and the many third-party Web sites that run on our platform."  
  
The architectural style that better represents these aspects of the Amazon architecture is
* Service-oriented architecture to express how clients can access the services
* Client-server to express how multiple clients can access the applications
* Decomposition to express the different responsibilities assigned to each application
* Tiers to express that different applications define their own contexts


### Question 27252
Consider the following view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/856.png)  
 In this view the following architectural styles are used
* Tiers
* Tiers, and Shared-data
* Tiers, Shared-data, and Service-oriented architecture
* Tiers, Shared-data, Service-oriented architecture, and Client-server


### Question 27253
When designing the architecture for a system the architect realises that most of the modules have bidirectional uses relationships. This has impact on
* Performance because there is an overhead of communication between the modules.
* Install because most of the modules need to be assigned to the same executable file
* Availability because if a module fails the failure easily propagates to all the other modules
* Development because it is not possible to do incremental development


### Question 27254
Imagine that you intend to describe how a client reads a file from an HDFS system while supporting sporadic failures in the hardware of some DataNodes, but without affecting the availability of the system. To accomplish that, you want to use a component-and-connector view containing only two types of components: the HDFS Client, and the DataNode.
* That view will always be incomplete without the NameNode, because the HDFS Client needs to interact with it
* That view will always be incomplete without the NameNode, because the DataNode needs to interact with it
* The view does not need to include the NameNode, but in that case it will not be possible to reason about the availability of the system
* The availability guarantee may be given by the usage of an adequate connector between the HDFS Client and the DataNodes


### Question 27255
Consider the following scenario  
>"Our vehicle information system send our current location to the traffic monitoring system. The traffic monitoring system combines our location with other information, overlays this information on a Google Map, and broadcasts it. Our location information is correctly included with a probability of 99.99%."  
  
The quality addressed by this scenario is
* Performance.
* Availability.
* Testability.
* Interoperability.


### Question 27256
In the HDFS system, the main responsibility of the DataNode component is to store the data blocks corresponding to the client's files, and usually there are several instances of this component on each system. The architectural style that best describes the interaction pattern among the various instances of DataNode is
* The Shared data style
* The Pipes-and-filters style
* The Client-Server style
* The Peer-to-Peer style


### Question 27277
Consider the following excerpt about the Scalable web architecture and distributed systems case study  
>"Employing such a strategy maximizes data locality for the requests, which can result in decreased request latency. For example, let's say a bunch of nodes request parts of B: partB1, partB2, etc. We can set up our proxy to recognize the spatial locality of the individual requests, collapsing them into a single request and returning only bigB, greatly minimizing the reads from the data origin."  
  
The quality that is achieved with this tactic is
* Performance because all requests will be processed faster
* Availability because even if PartB1 is not available partB2 can be provided
* Reliability because a single correct read is used to responde to several requests
* Performance because it allows the processing of more requests per unit of time


### Question 27278
In the description of the Chrome case study you can read:  
*Typing in the Omnibox (URL) bar triggers high-likelihood suggestions, which may similarly kick off a DNS lookup, TCP pre-connect, and even prerender the page in a hidden tab.*  
This description refers to the qualities of
* Usability e Modifiability
* Availability e Usability
* Availability e Performance
* Performance e Usability


### Question 27279
The internationalization of the user interface is supported by the tactic(s)
* User Model and Undo
* User Model and System Model
* System Model
* User Model


### Question 27280
Which of the following tactics is not related with the control of resource demand
* Manage sampling rate
* Bound execution times
* Increase resource efficiency
* Maintain multiple copies of computation


### Question 27281
Consider the following scenario  
>"Our vehicle information system send our current location to the traffic monitoring system. The traffic monitoring system combines our location with other information, overlays this information on a Google Map, and broadcasts it. Our location information is correctly included with a probability of 99.99%."  
  

* The current location is the source of the stimulus.
* The traffic monitoring system is the environment.
* The Google Map is the artefact.
* The location information is correctly included with a probability of 99.99% is the response measure.


### Question 27282
Consider the following data model   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/779.png)  

* It allows high scalability because the data model has only four entities
* It allows high scalability because the only synchronized access is to the `ProductId`, so it requires a single contention point
* It does not allow high scalability
* It allows high scalability because it is possible the implement transactions associated to each one of the aggregates


### Question 27283
The software architecture of a system is usually represented through several views because we need to
* Have a view for each stakeholder
* Have at least a view for each viewtype
* Have a view for each group of interconnected components, and very often a system has several groups of interconnected components
* Represent different architectural qualities and they may not be all represented in a single view


### Question 27284
Very often, when a software architecture is being designed, conflicting requirements are identified, like between security and availability. The role of the software architect is to
* Design an architectural solution together with the stakeholders to be sure that everybody agrees on the resolution of conflits.
* Solve the conflicts between requirements by deciding on the best trad-offs the system should support.
* Design an architecture that supports all the conflicting requirements and present it to the stakeholders.
* Facilitate the communication among the stakeholders such that they can decide on what are the architecturally significant requirements.


### Question 27285
Which stakeholder may require the quality of time to market?
* End user stakeholder.
* Maintenance organization stakeholder.
* Marketing stakeholder.
* All the stakeholders referred in the other options. 


### Question 27286
Consider the following informal view of an Image Hosting System   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/566.png)  

* This view highlights the availability of the `Image File Storage`.
* This view highlights the performance of `upload` operations.
* This view highlights the scalability of `upload` and `dowload` operations.
* This view highlights the performance of the `download` operations.


### Question 27287
To which performance tactic can a load balancer be associated?
* Maintain multiple copies of data
* Bound execution times
* Reduce overhead
* Maintain multiple copies of computation


### Question 27288
An advantage of Amazon Silk when compared with Chrome is
* Separates the Renderer process from the other processes
* Applies machine learning techniques
* Uses prefetching
* The *browser* needs to make less requests to the server


### Question 27289
In world-wide systems like Facebook or Amazon,
* All functionalities can be transactional
* It is not necessary to have transactional properties because all data is in memory
* Only the isolation property of transactions is supported
* Only a small set of functionalities are transactional


### Question 27290
In a scenario for interoperability
* The design of a reusable interface is the stimulus.
* The data input to the system is the stimulus.
* The request to adapt an interface is the stimulus.
* The exchange of information is the stimulus.


### Question 27291
In the Amazon Silk browser
* A request for a web page corresponds to a peer-to-peer interaction between all the web components containing the resources.
* Web pages are explicitly cached on the browser to optimize accesses.
* It is possible to customize the number of threads that run in the mobile device.
* A request for a web page corresponds to requesting a service from the amazon cloud.


### Question 27292
In a enterprise-wide system, like Fénix system,
* It is not necessary to have transactional behavior in the business logic
* The Component-and-Connector architecture needs to have three Tiers
* The Module architecture needs to have three Layers
* It is an advantage for programmers that the transactional behavior is transparently provided


### Question 27293
When designing an architecture requirements can be split into functional, quality attributes, and constraints. Functional requirements have impact on:
* A component-and-connector view
* An allocation view
* They are not represented by a view
* A module view


### Question 27294
Consider the two following views   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/626.png)  

* The Merge component executes the module merge.
* The module main is executed in the Merge component.
* The Pipe connectors do not execute any module.
* The Merge component executes the modules merge and stdio.


### Question 27295
Which of the following tactics is not related with the management of resources
* Introduce concurrency
* Maintain multiple copies of data
* Schedule resources
* Limit event response


### Question 27296
Consider the following view of the Adventure Builder case study   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/934.png)  

* This view shows that the processing of orders is done synchronously.
* This view shows that bank debits are done asynchronously.
* This view shows that the responses from the providers are processed synchronously.
* This view shows that the processing of tracking requests is done synchronously.


### Question 30827
In the software architecture of a system, the Deployment view is best suited for
* Estimating the effort needed to implement the system
* Analysing the system's portability and reusability
* Planning incremental releases of the system
* Analysing the performance of the system


### Question 30828
Several of the cases studied in this course have scalability requirements. That means that those systems should be designed in such a way that they
* Have high throughput
* Have low latency
* Allow many simultaneous users
* May be easily changed to increase their storage capacity


### Question 30829
Consider a system that will require a significative configuration effort during deployment, because it provides several variations of the same functionalities and it is necessary to choose which functionalities better fit in each case. The most helpful architectural view for this situation is
* Work assignment view
* Implementation view
* Deployment view
* Install view


### Question 30830
Consider the module viewtype views of the DVDCatalog application. The architect knows about a new requirement  
>"To support iPhone/iPad/Android version with sync, which allows offline use of the application in the mobile device and data synchronization to occur when a connection is available"  
  
This requirement requires a change of
* The uses view to represent how the mobile device uses the Catalog application
* The layered view to include a layer for each type of device
* The domain layer of the layered style to represent the types of devices
* The decomposition view to include a module for the synchronization responsibilities


### Question 30831
Considered the following two views of a system that receive a stream of character and produce the same stream where the characters are alternately uppercase and lowercase.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/940.png)  

* The *config* module is not used in the implementation of any component.
* The *main* module is used in the implementation of all components.
* The *Split* component uses the *to_lower* module for its implementation
* The connectors only use the *stdio* module for their implementation.


### Question 30832
Consider the module viewtype views of the DVDCatalog application. The architect knows about a new requirement  
>"To allow the share of catalogs with family and friends, including some access control."  
  
This requirement requires
* A change to the uses view to represent that friends can use each other catalog
* A change of the layered view to support different presentations, one for each friend
* A change of the decomposition view to include a set of new modules with the responsibilities associated with the access control
* A new aspect view that includes a module with the responsibilities associated with the access control and that crosscuts some of the other modules


### Question 30833
Using the Aspects architectural style promotes the modifiability of a system because
* It imposes restrictions on which uses relationships may exist between the system's modules
* It makes it easier to create generalization relationships between the system's modules
* It allows the decomposition of each of the system's modules into finer grained modules
* It separates in new modules responsibilities that were spread over various of the system's modules


### Question 30834
What could be the cause of the failures, when an application server shows some omissions to requests from the clients.
* A fault in the application code.
* A fault in the application server hardware memory.
* A fault in a library being used by the application
* All options are true.


### Question 30835
The main difference between the *Uses* relation of the Uses style and the *Allowed to Use* relation of the Layers style
* Is that the *Uses* relation can happen only among modules belonging to the same layer
* Is that the *Allowed to Use* relation does not imply that the correctness of the upper layer depends on the correct implementation of its nearest lower layer
* Is that the *Allowed to Use* relation is a *Uses* relation between layers
* Is that the *Allowed to Use* relation defines a restriction for the possible *Uses* relations between modules belonging to different layers


### Question 30836
Consider the following view of the Adventure Builder case study that applies the tiers architectural style   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/894.png)  

* This view shows that the `Adventure Builder Catalog DB` and the `OPC` components should be deployed in the same hardware.
* This view **does not** show that the `Adventure Builder Catalog DB` and the `OPC` components can execute behind a firewall.
* This view **does not** show that the access to the `web tier` has some security qualities.
* This view shows that if is possible to scale differently the `web tier` from the `EJB tier`.


### Question 30837
A high-level component-and-connect view of Graphite system can be designed using only the architectural style(s)
* Shared-data and Communicating-Processes
* Communicating-Processes
* Tiers
* Client-Server and Shared-data


### Question 30838
The scalability quality is achieved in the Hadoop system only because
* Stakeholders requirements do not emphasize performance as the most important issue
* The Hadoop small development team is highly competent and skilled
* The Hadoop system implementation uses complex distributed algorithms for scalability
* Stakeholders do not mind if two simultaneous reads on the same file by two different applications may return different values


### Question 30839
The Service-Oriented Architecture style improves interoperability because
* It enforces the use of a single implementation language among all applications
* The orchestration is in charge of improving the transparent location of service providers
* The enterprise service bus coordinates the execution of several services
* It decouples applications developed for different organizations


### Question 30840
Consider the following figure that presents a Proxy Server, which collapses requests from different users.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/790.png)  

* This solution optimizes the performance in terms of the latency of each request
* This solution allows an "infinite"increase of the number clients by allowing the inclusion of more Request Nodes
* This solution continues to provide service even if a crash occurs in the Data server
* This solution optimizes the performance in terms of the throughput of processed requests


### Question 30841
Consider a web application that was implemented using three layers: presentation, domain logic, and data access. How are these layers mapped into the components if it is a rich interface application.
* All layers are mapped to the application server component.
* The presentation and domain logic layers are mapped to the application server component and the data access layer to the repository component.
* The presentation layer is mapped to the browser component and the other two layers are mapped to the application server component.
* All layers are mapped to the browser component where the data access layer will contains, besides a module to access a local repository, modules to access external services.


### Question 30842
Consider the following generalization view of the Catalog of DVD case study to fulfill a modifiability scenario   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/931.png)  
 From this view the stakeholders can infer
* The cost of the modification.
* That the integration of a new source will not have any impact on the other modules of the Catalog of DVDs.
* That the modification can occur at runtime.
* That the impact of integrating a new source is controlled by the interface of *Import DVD Info* Module.


### Question 30843
Consider the following requirement for availability of the Adventure Builder system  
>"The Consumer Web site is available to the user 24x7. If an instance of OPC application fails, the fault is detected and the system administrator is notified in 30 seconds; the system continues taking order requests; another OPC instance is automatically created; and data remains in consistent state."  
  
In order to support this quality it is necessary to
* Use a passive redundancy tactic in the Consumer Web site
* Use an active redundancy tactic in the OPC (Order Processing Center) 
* Use an active redundancy tactic in the Consumer Web site
* Use a passive redundancy tactic in the OPC (Order Processing Center)


### Question 30844
According to the document that describes the architecture of web services:  
>"Another critical piece of any distributed system is a load balancer. Load balancers are a principal part of any architecture, as their role is to distribute load across a set of nodes responsible for servicing requests. This allows multiple nodes to transparently service the same function in a system. Their main purpose is to handle a lot of simultaneous connections and route those connections to one of the request nodes, allowing the system to scale to service more requests by just adding nodes."  
  
Based on this description, what is the best way to represent the architecture of a system that is using a *load balancer*?
* With a Deployment view, where the *load balancer* is part of the communication infra-structure used to execute the system
* With a Uses view, representing the existing dependencies between the *load balancer* and the services that it uses
* With a Layers view, where the *load balancer* creates an abstraction layer between who makes the request and who provides the service
* With a component-and-connector view, where the *load balancer* is a component of the system


### Question 30845
An architectural tactic for a system describes
* A non-functional requirement a system has to achieve
* What should be the system response in the occurrence of a stimulus
* A decomposition of the system that fulfills an architectural quality
* How to control the response to one or more stimulus


### Question 30846
Consider the module viewtype views of the Catalog of DVD application. The architect knows about a new requirement  
>"To support iPhone, iPad, Android versions with sync, which allows offline use of the application in the mobile device and data synchronization to occur when a connection is available"  
  
This requirement requires a change of
* The uses view to represent how the mobile device uses the Catalog application.
* The layered view to include a layer for each type of device.
* The domain layer of the layered style to represent the types of devices.
* The decomposition view to include a module for the synchronization responsibilities.


### Question 30987
Consider the following figure that presents a Queue where client applications write their requests to be processed by a server (asynchronous) and compare with another architectural design (synchronous) where a thread is associated with each request.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/966.png)  
 Consider a situation where the server that processes the tasks crashes
* In the synchronous solution only some of the tasks that are being executed are lost and they have to be resubmitted by the client
* In the asynchronous solution the tasks that are being executed are lost and they have to be resubmitted by the client
* In the synchronous solution the tasks being executed are finished without requiring the client to resubmitted them
* In the asynchronous solution it is possible to provide an implement where the tasks being executed are finished without requiring the client to resubmitted them


### Question 30988
Consider the following decomposition view of the Catalog of DVD case study.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1039.png)  

* The decomposition was driven by a defer binding tactic.
* The decomposition was driven by a quality that is supported by a restrict dependencies tactic.
* The decomposition was driven by a quality that is supported by an encapsulate tactic.
* The decomposition was driven by a split module tactic.


### Question 30989
Consider the architectural solutions for microservices architectures that use the event sourcing technique. This technique has the following advantage
* Simplifies the evolution of the event schema.
* Simplifies the query operations in the event store.
* Provides a programming model developers are familiar with.
* Allows the querying of a past state.


### Question 30990
Consider the following scenario  
>"When writing to the database the system receives an exception about a write failure. The system should stop interacting with data base and write a log message."  
  
The quality addressed by this scenario is
* Performance.
* Reliability.
* Fault-tolerance
* Availability.


### Question 30991
Consider the following usability scenario of the Catalog of DVDs case study  
>"The user intends to have up-to-date info about the movies and the system informs the user that the existing sources have new information about one of his DVDs, which helps to maintain an up-to-date catalog."  
  
The tactic used to fulfill this scenario is
* Aggregate.
* Maintain user model.
* Maintain task model.
* Maintain system model.


### Question 30992
Consider the following decomposition of a domain model into 3 aggregates. If, instead of this decomposition, `Customer` and `Order` were in the same aggregate   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/921.png)  

* It would reduce the scalability for updates of different orders for the same customer.
* Two users would conflict if they attempt to edit different orders for the same customer.
* As the number of orders grows it will be increasingly expensive to load the aggregate.
* All the above.


### Question 30993
A connector may be attached to components of different types because
* The type of a connector does not depend on the type of its roles.
* Components of different types may have ports of the same type.
* The attachment is a runtime relation which dynamically manages type compliance.
* The attachment between components and connectors only depends on their ports and roles types.


### Question 30994
The Pipe-and-Filter style allows composition of filters
* But when the filters are executed sequentially the composition power is reduced.
* But the size of buffers may reduce the composition power.
* And filters do not have to agree on the data formats.
* Which improves modifiability, because filters are decoupled through pipes.


### Question 30995
In the context of the *Graphite* case study, consider the following view that represents the internal behavior of the *Carbon* component, where the components `r1,... , rn, w` are threads and `q1, ..., qn` are buffers. This view shows the Graphite's architecture support of   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1036.png)  

* A performance scenario associated with the latency of writing data points to disk.
* An availability scenario associated with a fault in the *Carbon* component.
* A usability scenario.
* A performance scenario associated with the throughput of writing data points to disk.


### Question 30996
There are several tactics to satisfy availability requirements, which may be applied depending on the concrete requirement that we want to satisfy. Assuming that you want to deal with faults of type *omission* in your system, which tactic is more adequate?
* Active redundancy
* Ignore faulty behaviour
* Ping/Echo
* Retry


### Question 30997
The microservices impact on the team organization
* Enforces a focus on the specialization of the specific competences, like testing.
* Allows teams to be focused on the product.
* Does not have any relation with the Conway's Law.
* Does not reduce the amount of communication between the developers.


### Question 30998
Consider the following figure that presents a Image Hosting System.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/929.png)  
 By adding another Image File Storage component, which contains a redundant copy of the data and provides read access to the clients, but without guaranteeing a ACID transactional behavior between reads and writes, it improves the quality(ies) of
* Performance.
* Availability for incorrect responses from the Image File Storage component.
* Performance and Availability for incorrect responses from the Image File Storage component.
* Performance and Availability for crashes of the Image File Storage component.


### Question 30999
In a microservices architecture, aggregates are used as a unit of processing
* An aggregate can contain a large number of instances.
* An aggregate has runtime references to other aggregates.
* An aggregate is cluster of domain classes.
* An aggregate is usually loaded in its entirety from the database.


### Question 31000
The main tactic associated with the layered architectural style is:
* Split module
* Encapsulate
* Defer binding
* Restrict dependencies


### Question 31001
One of the best practices in the design of a software architecture is to create a skeleton system. What is its purpose?
* To create an abstraction layer between the architecture of the system and its functionalities, so that the architecture may be changed later without affecting the functionalities
* To create an artifact that may be used to explain the system's software architecture to the various stakeholders
* To facilitate the work assignment to the members of the development team that will implement the system's functionalities
* To allow testing and validating the software architecture in the early development stages


### Question 31002
Consider the following decomposition views of the Catalog of DVD case study were the *Autocomplete* module is implemented in javascript and executes in a browser.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1050.png)  

* The view illustrates the achievement of a security scenario.
* The view illustrates the achievement of a performance scenario.
* The view results from the implementation of a support user initiative tactic.
* The view results from the implementation of a support system initiative tactic.


### Question 31003
One of the advantages of having views of the module viewtype is that they allow to do a traceability analysis of requirements, how the functional requirements of the system are supported by module responsibilities. The modifiability tactic that is involved in this mapping is
* Abstract common services.
* Restrict dependencies.
* Encapsulation.
* Split module.


### Question 31004
The Java web servers, like Tomcat, use threads to process requests. For each request they create (or reuse) a thread to process it. To draw a architectural view that describes this behaviour we should use
* A Module viewtype view
* A Allocation viewtype view
* A Install view
* A Communicating processes view


### Question 31005
Consider the following figure that presents a Queue where client applications write their requests to be processed by a server (asynchronous) and compare with another architectural design (synchronous) where a thread is associated with each request.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/956.png)  

* The synchronous solution requires less memory than asynchronous solution
* In the synchronous solution a task can be associated, during its execution, with different execution entities, e.g. thread
* In the asynchronous solution a task is always associated, during its execution, with the same execution entity, e.g. thread
* The asynchronous solution can support a larger number of simultaneous requests


### Question 31006
Consider the following figure that presents a Queue where client applications write their requests to be served by a server.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/800.png)  

* This solution assures a consistency view to the clients of the data that is written
* In this solution the clients invocations have to be synchronous
* In this solution the tasks in the queue need to be sequentially processed, only when a task is finished can another start to be processed
* This solution allows the dimensioning of the number of activities (threads or processes) that run in the server, taking into consideration the server's hardware capacity, in order to have a efficient usage of the server's CPU


### Question 31632
The availability quality depends on
* The mean time before failure.
* The mean time to repair.
* Both, the mean time before failure and the mean time to repair.
* All options are false.


### Question 31633
Consider the following view of the Adventure Builder system   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1016.png)  
 In this view it is possible to reason that
* If the OPC crashes the Consumer Website can continue to provide service in normal mode.
* If the Adventure Catalog BD crashes the Consumer Website can continue to present the Adventure Builder offers.
* If a Bank component is not available the OPC cannot continue to provide service.
* If the OPC crashes the Consumer Website can continue to provide service in degraded mode.


### Question 31634
How can be guaranteed that the update of an aggregate and the publishing of an event about the update is an atomic action
* The aggregates publishes the event in a message broker and subscribes to the published event.
* Using the database of the aggregate as a temporary message queue.
* Using event sourcing.
* All of the above.


### Question 31635
Consider the module viewtype views of the DVDCatalog application. The architect knows about a new requirement  
>"To allow the share of catalogs with family and friends, including some access control."  
  
This requirement requires
* A change to the uses view to represent that friends can use each other catalog.
* A change of the layered view to support different presentations, one for each friend.
* A change of the decomposition view to include the responsibilities associated with the access control.
* A new aspect view to include the responsibilities associated with the access control.


### Question 31636
Consider the architectural solutions for microservices architectures that use the Command Query Responsibility Segregation (CQRS) technique in the context of Event Sourcing. This technique has the following disadvantage
* Does not allow optimizations according to the type of query.
* Does not support independent scalability according to the type of operation.
* Querying the event sourcing becomes more complex.
* Reads may not be consistent with the most recent write.


### Question 31642
In Graphite system, in order to generate up-to-date graphs, the *WebApp* component interacts with the *Carbon* component. The interaction between these two components follows the architectural style
* Communicating Processes.
* Repository.
* Pipes-and-Filters.
* Client-server.


### Question 31643
An attack is
* The source of stimulus for scenarios of the Availability quality.
* The stimulus for scenarios of the Availability quality.
* The source of stimulus for scenarios of the Security quality.
* The stimulus for scenarios of the Security quality.


### Question 31644
Consider the following architectural view of the Adventure Builder system, designed around the Order Processing Center  
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1091.png)  
The views **does not** allow the reason about the quality of
* Modifiability
* Performance
* Interoperability
* Security


### Question 31645
In the description of the Gnutella system can be read:  
>"The topology of the system changes at runtime as peer components connect and disconnect to the network."  
  

* When a peer connects to the network it establishes connections with all other peers in the network
* When a peer receives a connection it sends all its files to the peer connecting it
* The behavior described in the sentence can be represented in a view where the tier architectural style is used
* The behavior described in the sentence can be represented in a view where the dynamic reconfiguration architectural style is used


### Question 31646
Web applications went through several evolutions over the last years. One of those evolutions was to make their user interfaces more sophisticated, by leveraging on new technologies available in the browsers, such as, for example, Javascript, to provide a more satisfying user experience. What were the most visible consequences of such an evolution on the typical software architecture of a web application?
* The style of the connector used to represent the interaction between the browser and the web server changed
* The browser is now a component of a different type
* That evolution did not have any consequences on the software architecture of a web application
* The presentation logic layer and how it relates with the underlying layer changed


### Question 31647
Consider an architecturally significant requirement (ASR) that has a low impact on the architecture but a high business value
* This ASR requires a specific architectural design because it profoundly affects the architecture.
* The cost of meeting the ASR after development starts is too high.
* Any ASR that has a high business value cannot have a low architecture impact because it needs to be supported by the architecture.
* This ASR can easily be supported by the architecture because it has little effect in the architecture.


### Question 31648
Consider the architectural solutions for microservices architectures that use the Command Query Responsibility Segregation (CQRS) technique in the context of Event Sourcing. This technique has the following disadvantage
* Does not allow optimizations according to the type of query.
* Does not support independent scalability according to the type of operation.
* Does not support joins.
* Reads may not be consistent with the most recent write.


### Question 31649
Using the Aspects architectural style promotes the modifiability of a system because
* It imposes restrictions on which uses relationships may exist between the system's modules
* It makes it easier to create generalization relationships between the system's modules
* It allows the decomposition of each of the system's modules into finer grained modules
* It separates in new modules responsibilities that were spread over various of the system's modules


### Question 31650
Given the complexity of building a good automatic Chess player, programs that play chess usually make use of existing chess engines, as shown by the following excerpt from Wikipedia:  
>"A chess engine is a computer program that can play the game of chess. Most chess engines do not have their own graphical user interface (GUI) but are rather console applications that communicate with a GUI such as XBoard (Linux) and WinBoard (Windows) via a standard protocol."  
  
In the web page for XBoard, we may read the following:  
>"XBoard is a graphical user interface for chess [...]. It displays a chessboard on the screen, accepts moves made with the mouse, and loads and saves games in Portable Game Notation (PGN). It serves as a front-end for many different chess services, including:  
-  Chess engines that will run on your machine and play a game against you or help you analyze, such as GNU Chess, Crafty, or many others.  
-  [...]  
"  
  
Given the above information on XBoard, chess engines, and how they interact at runtime, which of the following architectural styles best represents the of architecture of a software system based on XBoard and one of the engines?
* The *Uses* style
* The *Layers* style
* The *Peer-to-Peer* style
* The *Communicating Processes* style


### Question 31651
The repository architectural style provides performance because
* It implements a maintain multiple copies of computation tactic.
* It supports the access to persistent information.
* It implements a maintain multiple copies of data tactic.
* It supports the concurrent access of data accessors.


### Question 31652
Consider the kind of relations between components and modules.
* A module contains the code that executes in a single component and a component executes the code of a single module
* A module contains the code that can execute in several components and a component executes the code of a single module
* A module contains the code that executes in a single component and a component can execute the code of several modules
* A module contains the code that can execute in several components and a component can execute the code of several modules


### Question 31653
Consider the module viewtype views of the DVDCatalog application. The architect knows about a new requirement  
>"The application should support other kinds of catalogs (CDs, games, books, ...)."  
  
This requirement requires a change of
* The layered view to support a new specific layer for the customization of the catalog.
* The layered view to accommodate a new layer for each kind of catalog, which other layers may use.
* The data model view in order to define entities for each kind of catalog.
* The data model view in order to define generic entities that can be customized for different kinds of catalogs.


### Question 31654
Consider the concept of interface delegation
* It corresponds to a particular case of a specialization in a generalization view.
* It represents a relation between a connector's role and a port of one of its internal components.
* It represents a relation between a component's port and a connector's role.
* It represents a relation between a component's port and a port of one of its internal components.


### Question 31655
In Graphite system the *receiver* and the *writer threads* support asynchronous writing of metrics to optimize disk accesses. The interaction between these two components follow the architectural style
* Client-server.
* Repository.
* Pipes-and-Filters.
* Communicating Processes.


### Question 31656
Event Sourcing is a technique that use the following architectural style
* The communicating processes.
* Pipes-and-filters.
* Dynamic reconfiguration.
* Publish-subscribe.


### Question 31657
In the description of the *How Netflix works* can be read:  
>"The Netflix app or website determines what particular device you are using to watch, and fetches the exact file for that show meant to specially play on your particular device, with a particular video quality based on how fast your internet is at that moment."  
  
Which corresponds to the application of the following tactic
* Prioritize events
* Limit event response
* Introduce concurrency
* Manage sampling rate


### Question 31658
Consider the following performance/scalability scenario for the Adventure Builder system  
>"Up to 500 users click to see the catalog of adventure packages following a random distribution over 1 minute; the system is under normal operating conditions; the maximal latency to serve the first page of content is under 5 seconds; average latency for same is less than 2 seconds. If required, the system should easily support an increase in the number of simultaneous requests while maintaining the same latency per request."  
  
and the following architectural view  
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/1136.png)  

* The view does not address the scenario
* The view addresses the scenario because it separates the modules that represent the interfaces a new business partner has to implement
* The view addresses the scenario because the `Consumer Website` module uses the `gwt` and `waf` modules
* The view addresses the scenario because it separates the `Consumer Website` module from the `OpcApp` module to allow the execution of the `Consumer Website` module in a component that can have multiple copies of computation


### Question 31659
Consider the following figure that presents an architectural view of an *Image Hosting Application*.   
![picture](https://quizzes-tutor.tecnico.ulisboa.pt/api/images/questions/967.png)  
 The replication between the Image File Storage *n* and Image File Storage *nb*
* Provides the quality of performance
* Provides the quality of modifiability
* Does not provide any additional quality
* Provides the quality of availability


### Question 31660
To which performance tactic can the use of queues be associated?
* Schedule resources
* Bound execution times
* Increase resource efficiency
* Limit event response


### Question 31661
Command Query Responsibility Segregation (CQRS) technique uses the following architectural styles
* Repository and Publish-subscribe.
* Publish-subscribe and Repository.
* Client-server and Repository.
* Client-server, Repository and Publish-subscribe.


