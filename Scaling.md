# Scaling
> Discuss how would you go about scaling this system to meet high-volume requests? 
> What infrastructure / stack would you use and why?

###  Infrastructure 
The Infrastructure I would leverage to scale this system to meet high-volume requests would be Amazon Web Services or any other cloud service provider. The main benefit from using their servers is being able to scale a product with ease in a bi-directional manner. With AWS, specifically, you can monitor the traffic of one's product and give the CPU utilization certain parameters. These parameters will dictate when a company should acquire more servers  to ensure the stability of their application. Another positive, is that when usage is quite low, you also have the means to scale down and save cost. 

### Stack
Node.JS for server-side rendering would be my option. For one that is what I am most comfortable with haha :) But alternatively, Node has several different features that help upscale a product. One of these is by implementing clustering which allows it to utilize the Master-Slave architecture. This helps increase horizontal scaling. 
Databases I can't give the best input on which one's are better. MongoDB is easily scalable, and the data being stored is not highly relational where it  would be useful.
