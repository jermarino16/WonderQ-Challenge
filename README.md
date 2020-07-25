# WonderQ Overview
> Below is all of the necessary information to understand the project I developed and the process I utilized. I have included information regarding what I have successfully implemented as well as the areas of the requirements that I struggled. Thank you for continuing to evaluate me as a developer!
> --- Jeremy Marino

###  Application Description / Requirements
> This is the relevant information that I gleaned from Shmuel that were the driving factors to the design  of the project.
- WonderQ is a broker that allows:
    - Multiple producers to write to it.
    - Multiple consumers to read from it.
- Producers receive confirmation messages upon writing to the Queue.
- Consumers can not poll for messages that have already been polled by another user.
- Consumers process messages individually.
- Messages processed are removed from WonderQ database.
- Polled messages have a timeout until they return back to the WonderQ.

###  Tasks
> These are the tasks specified by Shmuel. I have written a brief description on how well I have completed each task.
- ###### Design a module that represents WonderQ. You can abstract the logic around database storage:
    - I believe I have created all of the API's with appropriate architecture needed for the longevity of the program.
- ###### Setup a test app that will generate messages and demonstrate how WonderQ works.
    - I did not succeed in implementing a test app.
 - ###### Setup a quick and dirty developer tool that can be used to show the current state of WonderQ at any time.
    - I created an API that returns the available message count and polled message count which I believe suffices.
 - ###### Write documentation for potential API endpoints. Talk about their inputs/ outputs, formats, methods, responses, etc.
    - I used Stoplight.IO for documentation. Each API has a description as well as Request Body information and possible responses. I have shared the documentation with Shmuel's email address.
- ###### Discuss how would you go about scaling this system to meet high-volume requests? What infrastructure / stack would you use and why?
    - I attached a file titled "Scaling.md" in the GitHub repo to answer this question.

### Process
> This is the process that I underwent to complete the project. I hope this helps bring insight on how I like to tackle problems
1. First, I re-read the tasks and requirements and made a complete list of what was needed. I asked the Product Owner, Shmuel, for clarification on a requirement I did not fully comprehend instead of making assumptions and delivering on a feature out of scope. In this process, I examined  Amazon's Simple Queue service to fully understand Queue functionality.
2. Next, I created diagrams. In this phase, I created a simple system architecture design and use-case diagram. These were basic but allowed me to better visualize what will be occuring as well as what is needed.
3. After that I created my API documentation. This is where I fully designed the implementation of the API's before coding. I prefer to create the documentation and truly draw up the API's before coding. This makes it to where changes in architecture are easier to truly implement and think about as well as allowing me to have full documentation of the system when it's deployed.
4. After that I proceeded to code and mapout what was already designed. Some minor tweaks needed to change with API design as I discovered flaws and documentation was immediately updated.

### Application Models
> This is a brief description of the main Model's that the API's and overall app was designed around.
- ###### Queues
    - The Queue is the main component that contains available messages and polled messages.
- ###### Messages
    - The messages are what users can poll and read.
- ###### Users
    - Users who can utilize queues and messages. The api routes and model was not fully  implemented.

### Functionality Overview
> The API's implemented allow for CRUD Queue operations, and CRUD Message Operations. Messages by default are added to the respective Queue and automatically added as an available message. Messages can then be polled and added to a respective user's own polled array. Messages can only be read if they are polled. All API's are implemented with dummy data are not connected to any databases.

###  What I would hope to add 
- ###### Connect to Database
    - The Application would flow much easier when connected to a DB. The relationship between Messages and Queues would be more easily seen when that is done.
- ###### Frontend / Test App
    - I would like to have an easy way to interact with the API's or test them ideally.
- ###### Authentication / Authorization
    - Ideally routes would have the appropriate verification of the user's that are calling those routes.
- ###### Message Timeouts
    - I would have liked to build in a timeout for polled messages to automatically go back to available messages.
- ###### Queue Features
    - I could implement features where Queue has information regarding how many polled messages a user can have, and message delivery time, etc.
   
###  Documentation
> Documentation was created using Stoplight.io and has been shared with Shmuel's email. 

###  Conclusion
> Thanks again for taking the time to consider me as a possible member of your team. I hope I was able to give you guys a decent understanding of where I am at as an engineer. I look forward to hearing feedback from you guys, no matter how constructive it may be!
— Jeremy Marino

