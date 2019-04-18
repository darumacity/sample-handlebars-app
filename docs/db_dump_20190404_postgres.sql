DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  EntryId serial NOT NULL,
  Title varchar(1024) NOT NULL,
  Content text NOT NULL,
  Description text NOT NULL,
  Image varchar(1024) DEFAULT NULL,
  WroteDate date NOT NULL,
  PRIMARY KEY (EntryId)
);

INSERT INTO entries VALUES (1,'Coffee Pic','test1','Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consecteturad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.','coffee.jpg','2019-04-04 21:44:12'),(2,'On the road again','test2','Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consecteturad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.','road.jpg','2019-04-04 21:44:13'),(3,'I couldn’t take any pictures but this was an amazing thing…','test3','Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consecteturad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',NULL,'2019-04-04 21:44:13'),(4,'Shopping','test4','Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consecteturad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.','shopping.jpg','2019-04-04 21:44:13');
