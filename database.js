var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');

mongoose.connection.on('error', function(err) {
    console.error('MongoDB error: %s', err);
});

mongoose.connection.once('open', function () {
    console.log('connected to database.');

});


var Form = new Schema({
    form_name			: String,
    data			: String,
    is_deleted			: Boolean
});

var Users = new Schema({
    username				: String,
    surname				: String,
    email				: String,
    profile_pic				: String,
    user_rights				: Number,
    password				: String,
    department				: String,
    staff_type				: String
});


var Patient = new Schema({
    patient_name			: String,
    patient_surname			: String,
    contact_number			: Number,
    email_address			: String,
    physical_address			: String
});

var Statistics = new Schema({
    patient_id				: String,
    patient_name			: String,
    doctor_name				: String,
    procedure_name			: String,
    demographics			: String
});

var GynaecologySurgery = new Schema({

        ProcedureDate: {type: Date, require: true, title: 'Procedure Date' },
	
        HospitalNumber: {type: String, require: true, title: 'Hospital Number'},
	
        Age: {type: Number, require: true, title: 'Age'},
	
        Name: {type: String, require: true, title: 'Name'},
	
        Surname: {type: String, require: true, title: 'Surname'},
	
	P: {type: Number , title: 'Parity'},
	G: {type: Number, title: 'Gravidity'},
	M: {type: Number, title: 'Miscarriage'},
	E: {type: Number, title: 'Ectopic pregnancy'},

	HIV:{
		HIVStatus: {type: String, title: 'HIV Status'},
		CD4: {type: Number, title: 'CD4'}
	      },

	typeOfProcedure: {
		Elective: {type: Boolean, title: 'Elective'},
		Emergency: {type: Boolean, title: 'Emergency'}
           },
	
	 firm:{ 
		G1: {type: Boolean, title: 'G1'},
		G2: {type: Boolean, title: 'G2'}, 
		G3: {type: Boolean, title: 'G3'}, 
		ONC: {type: Boolean, title: 'ONC'}
         },
	
	categoryOfProcedure:{
		Oncology: {type: Boolean, title: 'Oncology'}, 
		GeneralGynae: {type: Boolean, title: 'General Gynaecology'},
		Infertility: {type: Boolean, title: 'Infertility'}, 
		Urologynaecology: {type: Boolean, title: 'Urologynaecology'}
	},
	
	typeOfAccess:{
		OpenAbdomen: {type: Boolean, title: 'Open Abdomen'},
		Endoscopy: {type: Boolean, title: 'Endoscopy'}, 
		Vaginal: {type: Boolean, title: 'Vaginal'}
	},

    preOperICD10Codes: [{type: String, title: 'Pre-Operative Diagnosis ICD Code:'}],
	
	performedBy:{
		Consultant: {type: Boolean, title: 'Consultant'}, 
		Fellow: {type: Boolean, title: 'Fellow'}, 
		Registrar: {type: Boolean, title: 'Registrar'},
		Intern: {type: Boolean, title: 'Intern'}
	},
       
	DygnosisNotOnICD10List: [{type: String, title: 'Diagnosis if not on ICD 10 list'}],
	
	ProPerformedCode: [{type: String, title: 'Procedure(s) Performed(Code) :'}],
	
	IntraOperativeComplications:{
		None: {type: Boolean, title: 'None'},
		BladderInjury: {type: Boolean, title: 'Bladder Injury'}, 
		BowelInjury: {type: Boolean, title: 'Bowel Injury'}, 
		BRUBT: {type: Boolean, title: 'Bleeding requiring unplanned blood transfusion'}, 
		ProcedureNotCompleted: {type: Boolean, title: 'Procedure Not Completed'}
	},
	
	OtherComplications: {type: String, title : 'Other Complications'}
});

var AdmissionDischarge = new Schema({

        HospitalNumber: {type: String, require: true, title: 'Hospital Number'},
	
	DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },
	
	Age: {type: Number, require: true, title: 'Age'},
	
	Name: {type: String, require: true, title: 'Name'},
	
        Surname: {type: String, require: true, title: 'Surname'},
	
	DateofAdmission: {type: Date, require: true, title: 'Date of Admission' },
	

	firm:{
		G1: {type: Boolean, title: 'G1'},
		G2: {type: Boolean, title: 'G2'}, 
		G3: {type: Boolean, title: 'G3'}, 
		ONC: {type: Boolean, title: 'ONC'}
	},
	
	Admission:{
		Emergency: {type: Boolean, title: 'Emergency'},
		ElectiveSurgery: {type: Boolean, title: 'Elective Surgery'}, 
		ElectiveOther: {type: Boolean, title: 'Elective Other'}
	},
	
	P: {type: Number , title: 'Parity'},
	G: {type: Number, title: 'Gravidity'},
	M: {type: Number, title: 'Miscarriage'},
	E: {type: Number, title: 'Ectopic pregnancy'},

	
	HIV: {
		HIVStatus: {type: String, title: 'HIV Status'},
		CD4: {type: Number, title: 'CD4'}
		},
		
	DateofDischarge: {type: Date, require: true, title: 'Date of Discharge' },
	
	TotalNumberOfDaysHospital: {type: Number, require: true, title: 'Total Number of Days in Hospital'},
	
	DaysInWard: {type: Number, require: true, title: 'Days in Ward'},
	
	DaysInICU: {type: Number, require: true, title: 'Days in ICU'},
	
	DaysInHighCare: {type: Number, require: true, title: 'Days in High Care'},
	
	FinalDiagnosisOnDischarge: [{type: String, title: 'Final diagnosis on discharge (ICD 10)'}],
	
		Miscarriage:{
		Threatening: {type: Boolean, title: 'Threatening'},
		Complete: {type: Boolean, title: 'Complete'},
		Incomplete: {type: Boolean, title: 'Incomplete'},
		Septic: {type: Boolean, title: 'Septic'}
	},
	Salpingitis:{
		ASOI: {type: Boolean, title: 'ASO I'},
		ASOII: {type: Boolean, title: 'ASO II'},
		ASOIII: {type: Boolean, title: 'ASO III'},
		ASOIV: {type: Boolean, title: 'ASO IV'}
	},
	Ectopic:{
		Ruptured: {type: Boolean, title: 'Ruptured'},
		Unruptured: {type: Boolean, title: 'Unruptured'}
	},
	BBA: {type: Boolean, title: 'BBA'},
	OtherDiagnosis:{type: Boolean, title: 'Other'},
	Oncology:{
		Cervix: {type: Boolean, title: 'Cervix'},
		Endometrium: {type: Boolean, title: 'Endometrium'},
		Ovarian: {type: Boolean, title: 'Ovarian'},
		Vulva: {type: Boolean, title: 'Vulva'},
		Vagina: {type: Boolean, title: 'Vagina'},
		ChorioGTD: {type: Boolean, title: 'Chorio/GTD'}
	},
	
	PostOperativeComplications: {
		None: {type: Boolean, title: 'None'},
		BladderInjury: {type: Boolean, title: 'Bladder injury'},
		BowelInjury: {type: Boolean, title: 'Bowel injury'},
		UretericInjury: {type: Boolean, title: 'Ureteric injury'},
		AnaestheticComplication: {type: Boolean, title: 'Anaesthetic complication'},
		ProcedureNotCompleted: {type: Boolean, title: 'Procedure not completed'},
		BRUBT: {type: Boolean, title: 'Bleeding requiring unplanned blood transfusion'},
		VascularInjury: {type: Boolean, title: 'Vascular injury'}
	},
	
	OtherComplications: {type: String, title : 'Other complications or reasons for non completion or anaesthetic complication '}
});


var forms = mongoose.model('forms', Form);
var users = mongoose.model('users', Users);
var patient =  mongoose.model('patient', Patient);
var statistics = mongoose.model('statistics', Statistics);
var gynaecologySurgery = mongoose.model('gynaecologySurgery', GynaecologySurgery);
var addmissionDischarge = mongoose.model('addmissionDischarge', AdmissionDischarge);

module.exports = { 
	forms: forms,
	users: users,
	patient: patient,
	statistics: statistics,
	gynaecologySurgery: gynaecologySurgery,
	addmissionDischarge: addmissionDischarge
	};
