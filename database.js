var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');

mongoose.connection.on('error', function(err) {
    console.error('MongoDB error: %s', err);
});

mongoose.connection.once('open', function () {
    console.log('connected.');

});


var Form = new Schema({
    form_name			: String,
    data				: String,
    is_deleted			: Boolean,
    data				: String
});

var Users = new Schema({
    username				: String,
    surname					: String,
    email					: String,
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
    physical_address		: String
});

var Statistics = new Schema({
    patient_id				: String,
    patient_name			: String,
    doctor_name				: String,
    procedure_name			: String,
    demographics			: String
});


var form = mongoose.model('forms', Form);
var patient = mongoose.model('patient', Patient);
var stats = mongoose.model('statistics', Statistics);
var user = mongoose.model('users', Users);






