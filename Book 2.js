db = db.getSiblingDB('dbLibrary')

print("You are now connected to database : " + db);

db.Collection_Book.drop();

Book1 = 	
		{ 
			"Book_Title"	: "HTML and CSS",
			"Barcode"	: "45879654236547",		
            "Publisher_Name" : "Wordery",
            "Year_Published" : "2010",
            "Loan_Length"    : "21"

		};

Book2 = 	
		{ 
			"Book_Title"	: "Binaary 101",
			"Barcode"	: "45879654236698",		
            "Publisher_Name" : "Wordery",
            "Year_Published" : "2011",
            "Loan_Length"    : "20"

		};
Book3 = 	
		{ 
			"Book_Title"	: "Forensics for Beginners",
			"Barcode"	: "45879654224698",		
            "Publisher_Name" : "Spy Kids",
            "Year_Published" : "2014",
            "Loan_Length"    : "20"

		};
Book4 = 	
		{ 
			"Book_Title"	: "Data Basics",
			"Barcode"	: "45569654236698",		
            "Publisher_Name" : "Entity Books",
            "Year_Published" : "2015",
            "Loan_Length"    : "20"

		};
Book5 = 	
		{ 
			"Book_Title"	: "The Spiders Web",
			"Barcode"	: "458796577236698",		
            "Publisher_Name" : "IExplorer",
            "Year_Published" : "2016",
            "Loan_Length"    : "20"

		};
           

db.Collection_Book.insert(Book1);
db.Collection_Book.insert(Book2);
db.Collection_Book.insert(Book3);
db.Collection_Book.insert(Book4);
db.Collection_Book.insert(Book5);


cursor = db.Collection_Book.find();
cursor.forEach(printjson);