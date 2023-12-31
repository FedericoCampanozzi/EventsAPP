UPDATE my_events
SET  title = $1, idtype = $2, datestart = $3, dateend = $4
WHERE id = $5