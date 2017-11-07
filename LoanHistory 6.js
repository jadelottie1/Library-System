
db = db.getSiblingDB('dbLibrary');

print("You are now connected to database : " + db);

cursor = db.Collection_Loan.find(
	{$and :
		[
			{"Student_No" : "S124567"},
			{"Date_Issued": 
				{
				$gte: ISODate("2017-10-01T00:00:00.000Z"),
				$lte: ISODate("2017-10-31T00:00:00.000Z")
				}
			}
		]
	}
);

cursor.forEach(printjson);
