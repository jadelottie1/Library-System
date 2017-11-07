db = db.getSiblingDB('dbLibrary')

print("You are now connected to database : " + db);

db.Collection_Loan.drop();

loan1 = 	
		{ 
			"Student_No"	: "S124567",
			"First_Name"	: "James",			 
			"Last_Name"		: "Mead",
            "Date_Issued"   :  new Date("2017-10-05T23:59:00"),
            "Time_Issued"   : "09:43 AM",
		

			"Loan_Items" : 	[
									{
                                        "Number_of_Copies": 1,
                                        "Book_Title": "HTML and CSS",
                                        "Barcode"	: "45879654236547",		
                                        "Due_Date"  : "10/10/2017"
									},
									{
										"Book_Title": "Forensics for Beginners",
                                        "Barcode"	: "45879654224698",		
                                        "Due_Date"  : "09/10/2017"
									},
                                    {   "Book_Title": "Data Basics",
                                        "Barcode"	: "45569654236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
                                    {   "Book_Title": "The Spiders Web",
                                        "Barcode"	: "458796577236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
								]
		};
loan2 = 
        { 
            "Student_No"	: "S124589",
			"First_Name"	: "Jane",			 
			"Last_Name"		: "Smith",
            "Date_Issued"   : "21/09/2017",
            "Time_Issued"   : "09:20 AM",
		

			"Loan_Items" : 	[
									{
                                        "Book_Title": "HTML and CSS",
                                        "Barcode"	: "45879654236547",		
                                        "Due_Date"  : "10/10/2017"
									},
									{
										"Book_Title": "Forensics for Beginners",
                                        "Barcode"	: "45879654224698",		
                                        "Due_Date"  : "09/10/2017"
									},
                                    {   "Book_Title": "Data Basics",
                                        "Barcode"	: "45569654236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
                                    {   "Book_Title": "The Spiders Web",
                                        "Barcode"	: "458796577236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
								]
		};
loan3 = 
        { 
            "Student_No"  : "S124589",
			"First_Name"  : "Jane",			 
			"Last_Name"   : "Smith",
            "Date_Issued"   : "21/09/2017",
            "Time_Issued"   : "09:00 AM",


			"Loan_Items" : 	[
									{
                                        "Book_Title": "HTML and CSS",
                                        "Barcode"	: "45879654236547",		
                                        "Due_Date"  : "10/10/2017"
									},
									{
										"Book_Title": "Forensics for Beginners",
                                        "Barcode"	: "45879654224698",		
                                        "Due_Date"  : "09/10/2017"
									},
                                    {   "Book_Title": "Data Basics",
                                        "Barcode"	: "45569654236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
                                    {   "Book_Title": "The Spiders Web",
                                        "Barcode"	: "458796577236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
								]
		};      
loan4 = 
      { 
            "Student_No"  : "S124591",
			"First_Name"  : "Alice",			 
			"Last_Name"   : "Roger",
		    "Date_Issued"   : "21/09/2017",
            "Time_Issued"   : "10:00 AM",
	

			"Loan_Items" : 	[
									{
                                        "Book_Title": "HTML and CSS",
                                        "Barcode"	: "45879654236547",		
                                        "Due_Date"  : "10/10/2017"
									},
									{
										"Book_Title": "Forensics for Beginners",
                                        "Barcode"	: "45879654224698",		
                                        "Due_Date"  : "09/10/2017"
									},
                                    {   "Book_Title": "Data Basics",
                                        "Barcode"	: "45569654236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
                                    {   "Book_Title": "The Spiders Web",
                                        "Barcode"	: "458796577236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
								]
		};  
loan5=
     { 
           	"Student_No"  : "S124702",
			"First_Name"  : "Thomas",			 
			"Last_Name"   : "Roger",
            "Date_Issued"   : "21/09/2017",
            "Time_Issued"   : "10:00 AM",
	

			"Loan_Items" : 	[
									{
                                        "Book_Title": "HTML and CSS",
                                        "Barcode"	: "45879654236547",		
                                        "Due_Date"  : "10/10/2017"
									},
									{
										"Book_Title": "Forensics for Beginners",
                                        "Barcode"	: "45879654224698",		
                                        "Due_Date"  : "09/10/2017"
									},
                                    {   "Book_Title": "Data Basics",
                                        "Barcode"	: "45569654236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
                                    {   "Book_Title": "The Spiders Web",
                                        "Barcode"	: "458796577236698",		
                                        "Due_Date"  : "09/10/2017"
                                    },
								]
		};  
    


db.Collection_Loan.insert(loan1);
db.Collection_Loan.insert(loan2);
db.Collection_Loan.insert(loan3);
db.Collection_Loan.insert(loan4);
db.Collection_Loan.insert(loan5);

db.Collection_Loan.update(
   {"Student_No":  "S124567", "Loan_Items.Book_Title": "Data Basics"},
    { $set: { "Loan_Items.$.Returned_On" : new Date ("26/09/2017 05:20 PM") }}
   )

db.Collection_Loan.update(
   {"Student_No":  "S124567", "Loan_Items.Book_Title": "The Spiders Web"},
    { $set: { "Loan_Items.$.Returned_On" : new Date ("26/09/2017 05:20 PM"), "Loan_Items.$.Fine_Paid" : 2 }}
   )

cursor = db.Collection_Loan.find();
cursor.forEach(printjson);

cursor = db.Collection_Loan.find({"Loan_Items.Number_of_Copies": {$gt: 1}} , {"Student_No": 1, "Loan_Items.$": 1});
cursor.forEach(printjson);
