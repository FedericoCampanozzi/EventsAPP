INSERT INTO my_events(Title, ID_Type, DateStart, DateEnd) 
VALUES (@Title, @ID_Type, CONVERT(DATETIME,@DateStart, 102), CONVERT(DATETIME,@DateEnd, 102))