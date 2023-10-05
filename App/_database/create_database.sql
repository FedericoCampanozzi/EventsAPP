DROP TABLE IF EXISTS my_events;
DROP TABLE IF EXISTS events_type;

CREATE TABLE events_type ( 
    ID INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    TypeName VARCHAR(100) NOT NULL
);

CREATE TABLE my_events ( 
    ID INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    DateCreate DATE NOT NULL DEFAULT GETDATE(),
    Title VARCHAR(100) NOT NULL,
    ID_Type INT NOT NULL,
    DateStart DATETIME NULL,
    DateEnd DATETIME NULL,

    FOREIGN KEY (ID_Type) REFERENCES events_type(ID)
);

INSERT INTO events_type(TypeName) VALUES ('Concert');
INSERT INTO events_type(TypeName) VALUES ('Formal dinner');
INSERT INTO events_type(TypeName) VALUES ('Workout');

INSERT INTO my_events(Title,ID_Type,DateStart,DateEnd) VALUES ('My first events', 
1, CONVERT(DATETIME,'2024-3-1 18:00:00', 102), CONVERT(DATETIME,'2024-3-2 23:00:00', 102));
