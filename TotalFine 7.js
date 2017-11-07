
db = db.getSiblingDB('dbLibrary')
print("You are now connected to database : " + db);


//cursor = db.Collection_Loan.find({"Student_No": "s1234567"}, {"Issue date": $month:10});

cursor = db.Collection_Loan.aggregate (
    {$unwind : "$Book"},
    {$match : {$and :
                [
                    {"studentID" : "S1707324"},
                    {"DayReturned": 
                        {
                        $gte: ISODate("2017-01-01T00:00:00.000Z"),
                        $lte: ISODate("2017-12-31T00:00:00.000Z")
                        }
                    }
                ]
            }
    },
    {$group : {
            "_id": '$studentID',
            //"Total_Spent" : { $sum: { $multiply: [ "$Books.Fine Paid", "$Invoice_Items.Quantity" ] } }
            "Fine_Summary" : { $sum: "$Book.FinePaid" }
        }
    }

);
cursor.forEach(printjson); 