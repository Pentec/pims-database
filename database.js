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

/*--------------GynaecologySurgery------------------------------*/
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


/*--------------AdmissionDischarge------------------------------*/
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

var CervicalCancer = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    ID: {type: Number, require: true, title: 'ID number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    CellPhone:{
        First: {type: Number, require: true, title: 'Phone number'},
        Alternative: {type: Number, require: true, title: 'Alternative number'}
    },

    HIV:{
        HIVStatus: {type: String, title: 'HIV Status'},
        CD4: {type: Number, title: 'CD4'}
    },

    figoStage: {
        Ia1: {type: Boolean, title: 'Ia1'},
        Ia2: {type: Boolean, title: 'Ia2'},
        Ib1: {type: Boolean, title: 'Ib1'},
        Ib2: {type: Boolean, title: 'Ib2'},
        IIa1: {type: Boolean, title: 'IIa1'},
        IIa2: {type: Boolean, title: ' IIa2'},
        IIb : {type: Boolean, title: 'IIb '},
        IIIa : {type: Boolean, title: 'IIIa'},
        IIIb : {type: Boolean, title: 'IIIb'},
        IVa : {type: Boolean, title: 'IVa'},
        IVb : {type: Boolean, title: 'IVb'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    tumor: {
        tumorSize:{
            lessThan4: {type: Boolean, title: '<4cm'},
            greaterThan4: {type: Boolean, title: '>4cm'},
            Unknown: {type: Boolean, title: 'Unknown'}
        },

        depthOfInvasion: {type: Number, title: 'If stage Ib1: depth of invasion (mm)(2 digits)'}
    },


    imaging:{

        useOfImagingDiagnosticTools: {

            Yes: {type: Boolean, title: 'Yes'},
            No: {type: Boolean, title: 'No'},
            Unknown: {type: Boolean, title: 'Unknown'}
        },

        ifYes:{
            MRI: {type: Boolean, title: 'MRI'},
            CT: {type: Boolean, title: 'CT'},
            Ultrasound: {type: Boolean, title: 'Ultrasound'},
            PET: {type: Boolean, title: 'PET'},
            Other: {type: Boolean, title: 'Other'},
            Unknown: {type: Boolean, title: 'Unknown'}
        }
    },

    siteOfDistantMetastase: {
        Nil: {type: Boolean, title: 'Nil'},
        Lung: {type: Boolean, title: 'Lung'},
        Liver: {type: Boolean, title: 'Liver'},
        Bowel: {type: Boolean, title: 'Bowel'},
        Bone: {type: Boolean, title: 'Bone'},
        Brain: {type: Boolean, title: 'Brain'},
        Other : {type: Boolean, title: 'Other '},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    Histology: {
        Squamous: {type: Boolean, title: 'Squamous'},
        Adeno: {type: Boolean, title: 'Adeno'},
        Adenosquamous: {type: Boolean, title: 'Adenosquamous'},
        Clearcell: {type: Boolean, title: 'Clear cell'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    Differentiation: {
        Well: {type: Boolean, title: '1 (well)'},
        Moderately: {type: Boolean, title: '2 (moderately)'},
        Poorly: {type: Boolean, title: '3 (poorly)'}
    },

    lymphovascularSpaceInvolvement : {
        Absent: {type: Boolean, title: 'Absent'},
        Present: {type: Boolean, title: 'Present'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    primaryTreatment: {

        Nil: {type: Boolean, title: 'Nil'},
        SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
        RTAlone: {type: Boolean, title: 'RT alone'},
        NeoAdjuvantCTSurgery: {type: Boolean, title: 'Neo adjuvant CT + surgery'},
        SurgeryAdjuvantRTCRT: {type: Boolean, title: 'Surgery + adjuvant RT/CRT'},
        SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
        Chemoradiation: {type: Boolean, title: 'Chemoradiation'},
        CTAlone : {type: Boolean, title: 'CT alone'},
        Other : {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'},
        DateofTreatment   : {type: Date, require: true, title: 'Date of treatment'}
    },

    typeOfSurgery: {
        Conization: {type: Boolean, title: 'Conization'},
        AmputationOfCervix: {type: Boolean, title: 'Amputation of cervix'},
        RTNoLND: {type: Boolean, title: 'RT no LND'},
        RTwithLND: {type: Boolean, title: 'RT with LND'},
        TAHnoLND: {type: Boolean, title: 'TAH, no LND'},
        TAHwithLND: {type: Boolean, title: ' TAH with LND'},
        VHnoLND : {type: Boolean, title: 'VH no LND'},
        VHwithLND : {type: Boolean, title: 'VH with LND'},
        RHnoLND : {type: Boolean, title: 'RH no LND'},
        RHwithLND : {type: Boolean, title: 'RH with LND'},
        RadVHnoLND : {type: Boolean, title: 'Rad VH no LND'},
        RadVHwithLND: {type: Boolean, title: 'Rad VH with LND'},
        AnyKindOfExenteration: {type: Boolean, title: 'Any kind of exenteration'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Other: {type: Boolean, title: 'Other'},
        DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
    },

    typeOfRadiotherapy: {
        Intracavitary: {type: Boolean, title: 'Intracavitary'},
        ExternalPelvicRT: {type: Boolean, title: 'External pelvic RT'},
        ExternalPelvicParaortic: {type: Boolean, title: 'External pelvic + paraortic'},
        ExternalPelvicIntracavitary: {type: Boolean, title: 'External pelvic + intracavitary'},
        ExtpelvicParaortIntracavitary: {type: Boolean, title: 'Ext pelvic paraortic + intracavitary'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },

    typeOfChemotherapy:{
        Chemotherapy: {type: String, title: 'Specify type and drugs'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },

    responseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        NotAssessable: {type: Boolean, title: 'Not assessable'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Dateofassessment: {type: Date, require: true, title: 'Date of assessment' }
    },

    surgicalPathologicalEvaluation :{
        tumorSize: {
            lessThan4: {type: Boolean, title: '<4cm'},
            greaterThan4: {type: Boolean, title: '>4cm'},
            Unknown: {type: Boolean, title: 'Unknown'}
        }
    },

    lymphnodeInvolvementAtSurgery: {
        Notevaluated: {type: Boolean, title: 'Not evaluated'},
        Posnodes: {type: Boolean, title: 'Pos nodes'},
        Negnodes: {type: Boolean, title: 'Neg nodes'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    nodesInvolved: {
        Onlypelvic: {type: Boolean, title: 'Only pelvic'},
        Pelvicparaortic: {type: Boolean, title: 'Pelvic + paraortic'},
        Onlyparaortic: {type: Boolean, title: 'Only paraortic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    numberOfNodesExamined : {
        Pelvic: {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic'}
    },

    numberOfNodesPositive: {
        Pelvic: {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic'}
    },

    Relapse: {
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
    },

    SiteOfRelapse: {
        Local: {type: Boolean, title: 'Local'},
        Metastatic: {type: Boolean, title: 'Metastatic'},
        Localandmetastatic: {type: Boolean, title: 'Local and metastatic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    TreatmentAtRelapse: {
        Local: {type: Boolean, title: 'Local'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},

    lastKnownVitalStatus: {
        AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
        AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
        AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
        Dead: {type: Boolean, title: 'Dead'}
    },

    causeOfDeath :{
        CaCx: {type: Boolean, title: 'Ca Cx'},
        Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
        Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
        Intercurrentdisease: {type: Boolean, title: 'Intercurrent disease'},
        Unknowncauses: {type: Boolean, title: 'Unknown causes'},
        DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
    }
});

/*--------------CervicalCancer------------------------------*/
var CervicalCancer = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    ID: {type: Number, require: true, title: 'ID number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    CellPhone:{
        First: {type: Number, require: true, title: 'Phone number'},
        Alternative: {type: Number, require: true, title: 'Alternative number'}
    },

    HIV:{
        HIVStatus: {type: String, title: 'HIV Status'},
        CD4: {type: Number, title: 'CD4'}
    },

    figoStage: {
        Ia1: {type: Boolean, title: 'Ia1'},
        Ia2: {type: Boolean, title: 'Ia2'},
        Ib1: {type: Boolean, title: 'Ib1'},
        Ib2: {type: Boolean, title: 'Ib2'},
        IIa1: {type: Boolean, title: 'IIa1'},
        IIa2: {type: Boolean, title: ' IIa2'},
        IIb : {type: Boolean, title: 'IIb '},
        IIIa : {type: Boolean, title: 'IIIa'},
        IIIb : {type: Boolean, title: 'IIIb'},
        IVa : {type: Boolean, title: 'IVa'},
        IVb : {type: Boolean, title: 'IVb'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    tumor: {
        tumorSize:{
            lessThan4: {type: Boolean, title: '<4cm'},
            greaterThan4: {type: Boolean, title: '>4cm'},
            Unknown: {type: Boolean, title: 'Unknown'}
        },

        depthOfInvasion: {type: Number, title: 'If stage Ib1: depth of invasion (mm)(2 digits)'}
    },


    imaging:{

        useOfImagingDiagnosticTools: {

            Yes: {type: Boolean, title: 'Yes'},
            No: {type: Boolean, title: 'No'},
            Unknown: {type: Boolean, title: 'Unknown'}
        },

        ifYes:{
            MRI: {type: Boolean, title: 'MRI'},
            CT: {type: Boolean, title: 'CT'},
            Ultrasound: {type: Boolean, title: 'Ultrasound'},
            PET: {type: Boolean, title: 'PET'},
            Other: {type: Boolean, title: 'Other'},
            Unknown: {type: Boolean, title: 'Unknown'}
        }
    },

    siteOfDistantMetastase: {
        Nil: {type: Boolean, title: 'Nil'},
        Lung: {type: Boolean, title: 'Lung'},
        Liver: {type: Boolean, title: 'Liver'},
        Bowel: {type: Boolean, title: 'Bowel'},
        Bone: {type: Boolean, title: 'Bone'},
        Brain: {type: Boolean, title: 'Brain'},
        Other : {type: Boolean, title: 'Other '},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    Histology: {
        Squamous: {type: Boolean, title: 'Squamous'},
        Adeno: {type: Boolean, title: 'Adeno'},
        Adenosquamous: {type: Boolean, title: 'Adenosquamous'},
        Clearcell: {type: Boolean, title: 'Clear cell'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    Differentiation: {
        Well: {type: Boolean, title: '1 (well)'},
        Moderately: {type: Boolean, title: '2 (moderately)'},
        Poorly: {type: Boolean, title: '3 (poorly)'}
    },

    lymphovascularSpaceInvolvement : {
        Absent: {type: Boolean, title: 'Absent'},
        Present: {type: Boolean, title: 'Present'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    primaryTreatment: {

        Nil: {type: Boolean, title: 'Nil'},
        SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
        RTAlone: {type: Boolean, title: 'RT alone'},
        NeoAdjuvantCTSurgery: {type: Boolean, title: 'Neo adjuvant CT + surgery'},
        SurgeryAdjuvantRTCRT: {type: Boolean, title: 'Surgery + adjuvant RT/CRT'},
        SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
        Chemoradiation: {type: Boolean, title: 'Chemoradiation'},
        CTAlone : {type: Boolean, title: 'CT alone'},
        Other : {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'},
        DateofTreatment   : {type: Date, require: true, title: 'Date of treatment'}
    },

    typeOfSurgery: {
        Conization: {type: Boolean, title: 'Conization'},
        AmputationOfCervix: {type: Boolean, title: 'Amputation of cervix'},
        RTNoLND: {type: Boolean, title: 'RT no LND'},
        RTwithLND: {type: Boolean, title: 'RT with LND'},
        TAHnoLND: {type: Boolean, title: 'TAH, no LND'},
        TAHwithLND: {type: Boolean, title: ' TAH with LND'},
        VHnoLND : {type: Boolean, title: 'VH no LND'},
        VHwithLND : {type: Boolean, title: 'VH with LND'},
        RHnoLND : {type: Boolean, title: 'RH no LND'},
        RHwithLND : {type: Boolean, title: 'RH with LND'},
        RadVHnoLND : {type: Boolean, title: 'Rad VH no LND'},
        RadVHwithLND: {type: Boolean, title: 'Rad VH with LND'},
        AnyKindOfExenteration: {type: Boolean, title: 'Any kind of exenteration'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Other: {type: Boolean, title: 'Other'},
        DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
    },

    typeOfRadiotherapy: {
        Intracavitary: {type: Boolean, title: 'Intracavitary'},
        ExternalPelvicRT: {type: Boolean, title: 'External pelvic RT'},
        ExternalPelvicParaortic: {type: Boolean, title: 'External pelvic + paraortic'},
        ExternalPelvicIntracavitary: {type: Boolean, title: 'External pelvic + intracavitary'},
        ExtpelvicParaortIntracavitary: {type: Boolean, title: 'Ext pelvic paraortic + intracavitary'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },

    typeOfChemotherapy:{
        Chemotherapy: {type: String, title: 'Specify type and drugs'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },

    responseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        NotAssessable: {type: Boolean, title: 'Not assessable'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Dateofassessment: {type: Date, require: true, title: 'Date of assessment' }
    },

    surgicalPathologicalEvaluation :{
        tumorSize: {
            lessThan4: {type: Boolean, title: '<4cm'},
            greaterThan4: {type: Boolean, title: '>4cm'},
            Unknown: {type: Boolean, title: 'Unknown'}
        }
    },

    lymphnodeInvolvementAtSurgery: {
        Notevaluated: {type: Boolean, title: 'Not evaluated'},
        Posnodes: {type: Boolean, title: 'Pos nodes'},
        Negnodes: {type: Boolean, title: 'Neg nodes'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    nodesInvolved: {
        Onlypelvic: {type: Boolean, title: 'Only pelvic'},
        Pelvicparaortic: {type: Boolean, title: 'Pelvic + paraortic'},
        Onlyparaortic: {type: Boolean, title: 'Only paraortic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    numberOfNodesExamined : {
        Pelvic: {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic'}
    },

    numberOfNodesPositive: {
        Pelvic: {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic'}
    },

    Relapse: {
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
    },

    SiteOfRelapse: {
        Local: {type: Boolean, title: 'Local'},
        Metastatic: {type: Boolean, title: 'Metastatic'},
        Localandmetastatic: {type: Boolean, title: 'Local and metastatic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    TreatmentAtRelapse: {
        Local: {type: Boolean, title: 'Local'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},

    lastKnownVitalStatus: {
        AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
        AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
        AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
        Dead: {type: Boolean, title: 'Dead'}
    },

    causeOfDeath :{
        CaCx: {type: Boolean, title: 'Ca Cx'},
        Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
        Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
        Intercurrentdisease: {type: Boolean, title: 'Intercurrent disease'},
        Unknowncauses: {type: Boolean, title: 'Unknown causes'},
        DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
    }
});


/*--------------EndomatrialCancer------------------------------*/
var EndometrialCancer = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    ID: {type: Number, require: true, title: 'ID number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    CellPhone:{
        First: {type: Number, require: true, title: 'Phone number'},
        Alternative: {type: Number, require: true, title: 'Alternative number'}
    },

    HIVStatus:{
        Negative: {type: Boolean, title: 'HIV Negative'},
	Positive: {type: Boolean, title: 'HIV Positive'}
    },
    
    CD4: {type: Number, title: 'CD4 Count:'},

    figoStage: {
        Ia: {type: Boolean, title: 'Ia'},
        Ib: {type: Boolean, title: 'Ib'},
        Ic: {type: Boolean, title: 'Ic'},
	IIa: {type: Boolean, title: 'IIa'},
	IIb: {type: Boolean, title: 'IIb'},
	IIIa: {type: Boolean, title: 'IIIa'},
	IIIb: {type: Boolean, title: 'IIIb'},
	IIIc: {type: Boolean, title: 'IIIc'},
	IVa : {type: Boolean, title: 'IVa'},
	IVb : {type: Boolean, title: 'IVb'},
        Unknown: {type: Boolean, title: 'Unknown'},
	SurgicalStageUnavailable: {type: Boolean, title: 'Surgical stage unavailable'}
    },

    Histology: {
        NilUnclassifiable: {type: Boolean, title: 'Nil/unclassifiable'},
        EndometrioidAdeno: {type: Boolean, title: 'Endometrioid adeno'},
        Adenosquamous: {type: Boolean, title: 'Adenosquamous'},
        Clearcell: {type: Boolean, title: 'Clear cell'},
        MucinousAdeno: {type: Boolean, title: 'Mucinous adeno '},
        PapillarySerous: {type: Boolean, title: 'Papillary serous'},
	Squamous: {type: Boolean, title: 'Squamous'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    
    Differentiation: {
        Well: {type: Boolean, title: '1 (well)'},
        Moderately: {type: Boolean, title: '2 (moderately)'},
        Poorly: {type: Boolean, title: '3 (poorly)'},
	Unknown : {type: Boolean, title: 'Unknown'}
    },
    
    LymphovascularSpaceInvolvement: {
        Absent: {type: Boolean, title: 'Absent'},
        Absent: {type: Boolean, title: 'Absent'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
   
/*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation HT = Hormonal treatment)---*/    
primaryTreatmentPerformed : {
        Nil: {type: Boolean, title: 'Nil'},
        SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
	SurgeryAdjuvantRT: {type: Boolean, title: 'Surgery + adjuvant RT'},
	SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
	AdjuvantHT: {type: Boolean, title: 'Adjuvant HT'},
	HormonalPrimaryTherapy: {type: Boolean, title: 'Hormonal primary therapy'},
	Other : {type: Boolean, title: 'Other non standard treatments'},
        Unknown : {type: Boolean, title: 'Unknown'},
	DateofTreatment : {type: Date, require: true, title: 'Date of treatment'}
    },
    
    
    /*--(RH= Radical hysterectomy; LND= pelvic/paraortic lymphadenectomy)--*/
typeOfSurgery: {
        SimpleAbdHystNoLND: {type: Boolean, title: 'Simple abd hyst no LND'},
	SimpleAbdHystWithLND: {type: Boolean, title: 'Simple abd hyst with LND'},
        SimpleVagHystNoLND: {type: Boolean, title: 'Simple vag  hyst no LND'},
        SimpleVagHystWithLND: {type: Boolean, title: 'Simple vag  hyst with LND'},
        RadicalAbdHystNoLND: {type: Boolean, title: 'Radical abd hyst no LND'},
        RadicalAbdHystWithLND: {type: Boolean, title: ' Radical abd hyst with LND'},
        AnyKindOfexenteration : {type: Boolean, title: 'Any kind of exenteration'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Other: {type: Boolean, title: 'Other'},
        DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
    },
    
    LymphovascularSpaceInvolvement: {
        Absent: {type: Boolean, title: 'Absent'},
        Present: {type: Boolean, title: 'Absent'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
    
nodesInvolved: {
        Onlypelvic: {type: Boolean, title: 'Only pelvic'},
        Pelvicparaortic: {type: Boolean, title: 'Pelvic + paraortic'},
        Onlyparaortic: {type: Boolean, title: 'Only paraortic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
numberOfNodesExamined : {
        Pelvic: {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic'}
    },  
    
   numberOfNodesPositive: {
        Pelvic: {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic'}
    },
    
    /*---SURGICAL PATHOLOGICAL EVALUATION---*/
    
Cytology: {
        NotAvailable : {type: Boolean, title: 'Not available'},
        Negative: {type: Boolean, title: 'Negative'},
	Positive: {type: Boolean, title: 'Positive'}
        Unknown : {type: Boolean, title: 'Unknown'}
    },

Metastase: {
        Nil: {type: Boolean, title: 'Nil'},
	UterineSerosa: {type: Boolean, title: 'Uterine serosa'},
	Vagina: {type: Boolean, title: 'Vagina'},
        Adnexa: {type: Boolean, title: 'Adnexa'},
        BladdeBowelMucosa: {type: Boolean, title: 'Bladder/bowel mucosa'},
        IntraAbdominal: {type: Boolean, title: 'Intra abdominal'},
        InguinalNodes: {type: Boolean, title: 'Inguinal nodes '},
        Distant: {type: Boolean, title: 'Distant'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    
typeOfRadiotherapy: {
        Intracavitary: {type: Boolean, title: 'Intracavitary'},
        ExternalPelvicRT: {type: Boolean, title: 'External pelvic RT'},
        ExternalPelvicParaortic: {type: Boolean, title: 'External pelvic + paraortic'},
        ExternalPelvicIntracavitary: {type: Boolean, title: 'External pelvic + intracavitary'},
        ExtpelvicParaortIntracavitary: {type: Boolean, title: 'Ext pelvic paraortic + intracavitary'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },
    
    typeOfChemotherapy:{
        Chemotherapy: {type: String, title: 'Specify type and drugs'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },
    
 HormonalTreatment: {
        SingleDrug : {type: Boolean, title: 'Single drug'},
        MultipleDrug : {type: Boolean, title: 'Multiple drug '},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },
    
    responseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        NotAssessable: {type: Boolean, title: 'Not assessable'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Dateofassessment: {type: Date, require: true, title: 'Date of assessment' }
    },
    
Relapse: {
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
    },

siteOfDistantMetastase: {
        Local: {type: Boolean, title: 'Local'},
        Metastatic: {type: Boolean, title: 'Metastatic'},
        LocalAndMetastatic: {type: Boolean, title: 'Local and metastatic'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    
    
 /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/   
TreatmentAtRelapse: {
        Nil: {type: Boolean, title: 'Nil'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
	HT: {type: Boolean, title: 'HT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},
    
LastKnownVitalStatus: {
        AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
        AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
        AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
        Dead: {type: Boolean, title: 'Dead'}
    },
    
 
    causeOfDeath :{
        EndometrialCa: {type: Boolean, title: 'Endometrial ca'},
        Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
        Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
        Intercurrentdisease: {type: Boolean, title: 'Intercurrent disease'},
        Unknowncauses: {type: Boolean, title: 'Unknown causes'},
        DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
	}
});

/*----------------FollowUp_OncologyFollowUpVisit--------------------------------*/
var  = new OncologyFollowUpVisit({
	
	Name: {type: String, require: true, title: 'Name'},

        HospitalNumber: {type: String, require: true, title: 'Hospital Number'},
	
	DateOfVisit: {type: Date, require: true, title: 'Date of visit' },
	
	ExaminedByDr: {type: String, require: true, title: 'Examined by Dr.'},
	
	InitialDiagnosisAndStage: {type: String, require: true, title: 'Initial diagnosis and stage'},
	
	Complaints: {type: String, require: true, title: 'Complaints'},
	
	ClinicalFindings : {type: String, require: true, title: 'Clinical findings'},
	
	AdditionalNotes : {type: String, title: 'Additional notes'},
	
	Plan:{
		SpecialInvestigations:{type: String, require: true, title: 'Special investigations'},
		Referral:{type: String, require: true, title: 'Referral'},
		Treatment:{type: String, require: true, title: 'Treatment'}
		},
		
	NextFollowUpVisit : {type: String,  require: true, title: 'Next Follow-up visit'},
	
/*----Please complete after examination---*/

	TimeFromPrimaryTreatment:{
			months:{type: Number, title: 'months'}, 
			years:{type: Number, title: 'years'}
		},
		
	LastKnownVitalStatusOfPatient:{
		AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'}, 
		AliveNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
		AliveWithDisease: {type: Boolean, title: 'Alive with disease'}, 
		Dead: {type: Boolean, title: 'Dead'}
	},
	
	Relapse:{
		Yes: {type: Boolean, title: 'Yes'}, 
		No: {type: Boolean, title: 'No'},
		Unknown: {type: Boolean, title: 'Unknown'}
	},
	
	SiteOfRelapse:{
		Local: {type: Boolean, title: 'Local'}, 
		Metastatic: {type: Boolean, title: 'Metastatic'},
		LocalAndMetastatic: {type: Boolean, title: 'Local and metastatic'},
		Unknown: {type: Boolean, title: 'Unknown'}
	},
	
	DateOfRelapseDiagnosis: {type: Date, title: 'Date of relapse diagnosis' },
	
	
	/*--RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)--*/
	TreatmentAtRelapse:{
		Nil: {type: Boolean, title: 'Nil'}, 
		Surgery: {type: Boolean, title: 'Surgery'},
		Radiotherapy : {type: Boolean, title: 'Radiotherapy'},
		Chemotherapy: {type: Boolean, title: 'Chemotherapy'}, 
		HT: {type: Boolean, title: 'HT'},
		Surgery_RT : {type: Boolean, title: 'Surgery + RT'},
		CT_RT: {type: Boolean, title: 'CT + RT'},
		Other: {type: Boolean, title: 'Other'},
		Unknown: {type: Boolean, title: 'Unknown'}
		},
});

/*----DataForm_GynaeCriticalIncidents---*/
var DataCollection = new Schema({

	PatName: {type: String, require: true, title: 'Patient name'},
	
	Age: {type: Number, require: true, title: 'Age'},
	
	HospitalNum: {type: Number, require: true, title: 'Hospital number'},
	
	DateOfIncident: {type: Date, require: true, title: 'Date of incident' },
	
	Firm: {type: String, require: true, title: 'Firm'},
	
	HIVStatus: {type: String, title: 'HIV Status'}, 
	
	Parity{type: Number, require: true, title: 'Parity'},
	
	Grav{type: Number, require: true, title: 'Grav'},
	
	Admission:
	{
		Elective: {type: Boolean, title: 'Elective'}, 
		Emergency: {type: Boolean, title: 'Emergency'}, 
		Oncology: {type: Boolean, title: 'Oncology'}
	}, 
	
	Hospital:
	{
		Kalafong: {type: Boolean, title: 'Kalafong'}, 
		PAH: {type: Boolean, title: 'PAH'}
	}
	
	/*IntentionOfTreatmentOnAdmission*/
	IntentionOfTreatmentOnAdmission:
	{
		Surgical: {type: Boolean, title: 'Surgical'}, 
		Medical: {type: Boolean, title: 'Medical'}, 
		Palliative: {type: Boolean, title: 'Palliative'}
	},
	
	/*Problems, diagnosis and stages */
	PrimaryGynaecologialProblems: {type: String, require: true, title: 'Primary Gynaecologial Problem'},
	Oncology: {type: String, require: true, title: 'Oncology:Diagnosis and stage'},
	
	AssociatedMedProblems: {type: String, require: true, title: 'Associated medical problems'},
	Oncology: {type: String, require: true, title: 'Oncology: Diagnosis and stage'},
	
	SurgicalProceduresAndDatesDone: {type: String, require: true, title: 'Surgical procedures and dates done'},
	Oncology: {type: String, require: true, title: 'Oncology: Diagnosis and stage'},
	
	
	/*CRITICAL INCIDENT*/
	Event:{
		Death: {
		TickBlock: {type: Boolean, title: 'Tick block'}, 
		Details: {type: String, title: 'Specify details'}},
		
		ICUadmission: {
		TickBlock: {type: Boolean, title: 'ICU admission'}, 
		Details: {type: String, title: 'Specify details'}},
		
		PulmonarymbolismDVT: {
		TickBlock: {type: Boolean, title: 'Pulmonary embolism/DVT'}, 
		Details: {type: String, title: 'Specify details'}},
		
		RepeatLap: {
		TickBlock: {type: Boolean, title: 'Repeat laparotomies(specify reason)'}, 
		Details: {type: String, title: 'Specify details'}},
		
		UnplannedSurgery: {
		TickBlock: {type: Boolean, title: 'Unplanned surgery'}, 
		Details: {type: String, title: 'Specify details'}},
		
		BloodTransfusion: {
		TickBlock: {type: Boolean, title: 'Blood transfusion > 4 units'}, 
		Details: {type: String, title: 'Specify details'}},
		
		OrganDysfunction: {
		TickBlock: {type: Boolean, title: 'Organ dysfunction post surgery'}, 
		Details: {type: String, title: 'Specify details'}},
		
		Fistula: {Properties:{
		TickBlock: {type: Boolean, title: 'Fistula and other organ damage'}, 
		Details: {type: String, title: 'Specify details'}}},
		
		DelayedDiagnosis: {
		TickBlock: {type: Boolean, title: 'Delayed diagnosis'}, 
		Details: {type: String, title: 'Specify details'}},
		
		Death: {
		TickBlock: {type: Boolean, title: 'Tick block'}, 
		Details: {type: String, title: 'Specify details'}},
		
		OmissionOfProcedure: {
		TickBlock: {type: Boolean, title: 'Omission of procedure'}, 
		Details: {type: String, title: 'Specify details'}},
		
		EmergencyHysterec: {
		TickBlock: {type: Boolean, title: 'Emergency hysterectomy'}, 
		Details: {type: String, title: 'Specify details'}},
		
		PostOp: {
		TickBlock: {type: Boolean, title: 'Post-op complications requiring surgery'}, 
		Details: {type: String, title: 'Specify details'}},
		
		WoundSepsis: {
		TickBlock: {type: Boolean, title: 'Wound sepsis post-op requireing surgery'}, 
		Details: {type: String, title: 'Specify details'}},
		
		AnaestheticComplications: {
		TickBlock: {type: Boolean, title: 'Anaesthetic complications'}, 
		Details: {type: String, title: 'Specify details'}},
	},
	
	/*MODIFIABLE FACTORS*/
	/*---Modifiable Factors (tick type and leave where problem occured)----*/
	/*PatientOrientatedProblems*/
		PatientOrientatedProblems: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
		
	/*--If either of the above opetions has been selected, do not complete bellow---*/
		IfNoneSelected: 
		{
		DelayInSeeingHelp: {type: Boolean, title: 'Delay in seeking medical help'}, 
		UnsafeAbortion: {type: Boolean, title: 'Unsafe abortion'},
		FamilyProblem: {type: Boolean, title: 'Family problem'}, 
		CoumminityProblem: {type: Boolean, title: 'Community problem'},
		Other: {type: String, title: 'Other(specify)'}
		},
		
	/*---Emergency Care Problem: (tick type and level where problem occured)---*/
		PatientAgeGroup: 
		{
		PregnancyRelated: {type: Boolean, title: 'Pregnancy related'}, 
		ReproductiveYears: {type: Boolean, title: 'Reproductive years'},
		PeriMenopausal: {type: Boolean, title: 'Peri -menopausal'}, 
		PostMenopausal: {type: Boolean, title: 'Post-menopausaal'}
		},
		
		Resuscitation: 
		{
		LackOfInfo{type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactor: {type: Boolean, title: 'no avoidable factor'}
		},
		
	/*---If either of the above options has been selected, do not complete bellow--*/
		DoNotCompleteIfAboveSelected: 
		{
		AirwaysProblem: {type: Boolean, title: 'Airways problem'}, 
		BreathingProblem: {type: Boolean, title: 'Breathing problem'},
		CirculationProblem: {type: Boolean, title: 'Circulation problem'}, 
		DrugProblem: {type: Boolean, title: 'Drug problem'},
		InvestigationProblem: {type: Boolean, title: 'Investigation problem'}, 
		MonitoringProblem: {type: Boolean, title: 'Monitoring problem'}
		},
		
	/*--OncologyRelated--*/
	OncologyRelated:
	{
		DelayInDiagnosis_a: 
		{
		PatientRelated: {type: Boolean, title: 'Patient related'}, 
		Screening: {type: Boolean, title: 'Screening / Diagnostic test not'},
		Perfomed: {type: Boolean, title: 'Perfomed'}, 
		DelayInReferral: {type: Boolean, title: 'Delay in referral to tertiary institute'}
		},
		
		InappropriateFacility_b: 
		{
		PalliativeCare: {type: Boolean, title: 'Palliative care in 2°/3° hosp'}
		},
	}
		
	/*--LevelOfSurgeryPerformed--*/
		LevelOfSurgeryPerformed: 
		{
		Registrar: {type: Boolean, title: 'Registrar'}, 
		Consultant: {type: Boolean, title: 'Consultant'},
		Intern: {type: Boolean, title: 'Intern'}, 
		Midwife: {type: Boolean, title: 'Midwife (mwa)'}
		},
		
	/*AdministrativeProblems*/	
	AdministrativeProblems: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
	
		/*---If either of the above options has been selected, do not complete bellow---*/
	TransportProblemsHome_Institut: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	TransportProblemsInstitut_Institut: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	BarriersToEntry: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	LackOfAccessibility: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	LackOfHealCareFacilities_ICUBeds: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	LackOfHealthCareFacilities_EquipmentDrugsBlood: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	LackOfPersonnel: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	LackOfAppropriatelyTrainedStaff: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	TheatreEquipNotAvailable: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	CommunicationProblem: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	OtherAdministrativeProblems: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	Specify: 
		{
		Primary: {type: String, title: 'Specify'}, 
		},
		
	/*--Medical Care--*/
	MedicalCare: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
		
/*---If either of the above options has been selected, do not complete bellow---*/
	InitialAssessment: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},		
		
	ProblemReconitiaon_dx: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
	
	DelayInReferringPt: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	MxAtInappropriateLevel: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	IncorrectMx: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	SubStandardMx_CorrectDx: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	MonitoringProblem_NotInfrequentlyDone: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	MonitoringProblem_ProlongedABN_OBS_WithNoAction: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	SurgicalComplications: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	AnaestheticProblem_ProOptEValuationNotSufficient: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	Treatment_MedicationNotGiven: 
		{
		Primary: {type: Boolean, title: 'Primary'}, 
		Secondary: {type: Boolean, title: 'Secondary'},
		Tertiary: {type: Boolean, title: 'Tertiary'}
		},
		
	Summary: {type: String, title: 'Patient name'},
	
	NameOfRegistrar_print: {type: String, title: 'Patient name'},
});
/*-----------------------------------------------------------------------------------------------*/


var forms = mongoose.model('forms', Form);
var patient =  mongoose.model('patient', Patient);
var statistics = mongoose.model('statistics', Statistics);
var gynaecologySurgery = mongoose.model('gynaecologySurgery', GynaecologySurgery);
var addmissionDischarge = mongoose.model('addmissionDischarge', AdmissionDischarge);
var cervicalCancer = mongoose.model('cervicalCancer', CervicalCancer);
var endometrialCancer = mongoose.model('endometrialCancer', EndometrialCancer);

module.exports = { 
	forms: forms,
	patient: patient,
	statistics: statistics,
	gynaecologySurgery: gynaecologySurgery,
	addmissionDischarge: addmissionDischarge,
	cervicalCancer: cervicalCancer
	endometrialCancer: endometrialCancer

	};
