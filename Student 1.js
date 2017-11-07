db = db.getSiblingDB('dbLibrary')

print("You are now connected to database : " + db);

db.Collection_Student.drop();

Student1 = 	
		{ 
			"Student_No"		: "S124567",
			"First_Name"	: "James",			 
			"Last_Name"		: "Mead",
			"Gender"    : "Male",			 
			"Course"     	 	: "Forensic Computing",			 
			"DOB"      : "08/09/1995",
			"Contact No"  			: "07542154736",
		};

           
Student2 = 
		{ 
			"Student_No"		: "S124589",
			"First_Name"	: "Jane",			 
			"Last_Name"		: "Smith",
			"Gender"    : "Female",			 
			"Course"     	 	: "Forensic Computing",			 
			"DOB"      : "08/09/1995",
			"Contact No"  			: "07542145367",
		};


Student3 = 
		{ 
			"Student_No"  : "S124589",
			"First_Name"  : "Jane",			 
			"Last_Name"   : "Smith",
			"Gender"      : "Female",			 
			"Course"      : "Forensic Computing",			 
			"DOB"         : "08/09/1995",
			"Contact No"  : "07542184756",
		};

Student4 = 
		{ 
			"Student_No"  : "S124591",
			"First_Name"  : "Alice",			 
			"Last_Name"   : "Roger",
			"Gender"      : "Female",			 
			"Course"      : "Computing",			 
			"DOB"         : "08/09/1995",
			"Contact No"  : "07542183645",
		};

Student5 = 
		{ 
			"Student_No"  : "S124702",
			"First_Name"  : "Thomas",			 
			"Last_Name"   : "Roger",
			"Gender"      : "Male",			 
			"Course"      : "Computing",			 
			"DOB"         : "08/09/1995",
			"Contact No"  : "07542183656",
		};
           

db.Collection_Student.insert(Student1);
db.Collection_Student.insert(Student2);
db.Collection_Student.insert(Student3);
db.Collection_Student.insert(Student4);
db.Collection_Student.insert(Student5);

cursor = db.Collection_Student.find();
cursor.forEach(printjson);