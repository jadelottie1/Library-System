db = db.getSiblingDB('dbLibrary')

print("You are now connected to database : " + db);

//db.Collection_Loan.drop();
db.Collection_BookReturn.drop();

Student = 
		{ 
             "studentID" : "S1707324",
             "StudentFirstName" : "Jane",
             "StudentLastName" : "Torra",
             "DOB" : new Date("01/01/1995"),
    

              "Book" : 	[
									{
										"BookID"     : "B1707324",
										"BookTitle"     : "Binary101",
										"DayWithdrawn"  : new Date("01/01/2017"),
										"DaytoReturn"   : new Date("01/03/2017"),
                                        "DayReturned"   : new Date("2017-10-25T03:20:00"),
                                        "FinePaid"      : 12,
                                        "DateFinePaid"  : new Date("07/03/2017")
									},
									{
										 "BookID"     : "B1707324",
                                        "BookTitle"     : "Java Basic",
										"DayWithdrawn"  : new Date("01/01/2017"),
										"DaytoReturn"   : new Date("01/03/2017"),
                                        "DayReturned"   : new Date("01/03/2017")
									}
								]
		};

db.Collection_Loan.insert(Student);

db.Collection_Loan.update(
   { studentID : "S1707324", "Book.BookTitle" : "Binary101" },
   { 
       $set: {"Book.$.DayReturned" : new Date("2017-10-28T03:20:00"), "Book.$.FinePaid" :50}
   }
)

/*db.myCollection.BookReturn.update( {}, { $set: { Book:{FinePaid: 1}}}, false, true);
cursor = db.Collection_BookReturn.find();
cursor.forEach(printjson);*/