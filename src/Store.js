import Api from "./configs";

//administration functions
const testRoute = () => Api().get("/test");
const FetchAllSpecialization = () => Api().get("/getAllSpecializations");
const FetchAllDrugTypes = () => Api().get("/FetchAllDrugTypes");
const isLoggedIn = () => Api().get("/user");
const CheckAuthToken = async () => localStorage.getItem("token");
const Adminlogin = (param) => Api().post("/Adminlogin", param);
const AddSpecialization = (param) => Api().post("/specialization", param);
const AddMedicalStaff = (param) => Api().post("/AddMedicalStaff", param); 
const AddReceptionist = (param) => Api().post("/AddReceptionist", param);
const AddAccountant = (param) => Api().post("/AddAccountant", param);
const AddNewStaff = (param) => Api().post("/AddNewStaff", param);
const AddNewPharmacyStaff = (param) => Api().post("/AddNewPharmacyStaff", param);
const RemoveSpecialization = (param) => Api().post("/removespecialization", param);
const RemoveMedicalStaffRecord = (param) => Api().post("/RemoveMedicalStaffRecord", param);
const RemovePharmacyRecord = (param) => Api().post("/RemovePharmacyRecord", param);
const RemoveAccountantRecord = (param) => Api().post("/RemoveAccountantRecord", param);
const RemoveInventoryRecord = (param) => Api().post("/RemoveInventoryRecord", param);
const RemoveReceptionistRecord = (param) => Api().post("/RemoveReceptionistRecord", param); 
const UpdateMedicalStaffRecord = (param) => Api().post("/UpdateMedicalStaffRecord", param); 
const UpdateReceptionistRecord = (param) => Api().post("/UpdateReceptionistRecord", param);
const UpdatePharmacyRecord = (param) => Api().post("/UpdatePharmacyRecord", param);
const UpdateAccountantRecord = (param) => Api().post("/UpdateAccountantRecord", param); 
const UpdateInventoryStaffRecord = (param) => Api().post("/UpdateInventoryStaffRecord", param);
const AdminLogout = () => Api().post("/AdminLogout");

//receptionist functions  
const ReceptionistLogin = (param) => Api().post("/ReceptionistLogin", param);
const AddApointmentHistory = (param) => Api().post("/AddApointmentHistory", param); 
const GetAllAppointmentRequest = () => Api().get("/AllAppointmentRequest");
const RemoveAppointmentRecord = (param) => Api().post("/RemoveAppointmentRecord", param);
const AddPatientRecord = (param) => Api().post("/AddPatientRecord", param);

//doctors login 
const MedicalStaffLogin = (param) => Api().post("/MedicalStaffLogin", param);
const UpadateAppointmentRecord = (param) => Api().post("/UpadateAppointmentRecord", param);
const FetchPatientMedicalRecord = () => Api().get("/FetchPatientMedicalRecord");
const MedicalStaffProfile = () => Api().get("/medicalstaff");  
const AddMedicalDiagnosis = (param) => Api().post("/AddMedicalDiagnosis", param);
const AddMedicalPrescriptions = (param) => Api().post("/AddMedicalPrescriptions", param); 
const MedicalStaffLogout = () => Api().post("/MedicalStaffLogout");

//inventory login
const InventoryLogin = (param) => Api().post("/Inventorylogin", param);   
const AddDrugs = (param) => Api().post("/AddDrugs", param);
const InventoryLogout =  () => Api().post("/InventoryLogout"); 
const UpdateDrugsInventory = (param) => Api().post("/UpdateDrugsInventory", param);

//acountancy  
const AccountancyLogin = (param) => Api().post("/AccountancyLogin", param);   
const AccountUpadateAppointmentRecord = (param) => Api().post("/AccountUpadateAppointmentRecord", param);
const UpdatePrescription = (param) => Api().post("/UpdatePrescription", param); 
const AccountantLogout =  () => Api().post("/AccountantLogout"); 

//pharmacy
const PharmacyLogin = (param) => Api().post("/PharmacyLogin", param);
const FetchTypeRelatedDrugs = (param) => Api().get(`/FetchTypeRelatedDrugs?drugtype=${param}`);
const GetSelectedDrugDetails = (param) => Api().get(`/GetSelectedDrugDetails?drugname=${param}`);

export {
  testRoute,
  Adminlogin,
  isLoggedIn,
  CheckAuthToken,
  AddSpecialization,
  RemoveSpecialization,
  FetchAllSpecialization,
  AddMedicalStaff,
  UpdateMedicalStaffRecord,
  RemoveMedicalStaffRecord,
  AdminLogout,
  AddReceptionist,
  UpdateReceptionistRecord,
  RemoveReceptionistRecord,
  ReceptionistLogin,
  AddApointmentHistory,
  GetAllAppointmentRequest,
  RemoveAppointmentRecord,
  AddPatientRecord,
  MedicalStaffLogin,
  UpadateAppointmentRecord,
  FetchPatientMedicalRecord,
  MedicalStaffProfile,
  AddMedicalDiagnosis,
  AddMedicalPrescriptions,
  MedicalStaffLogout,
  AddNewStaff,
  InventoryLogin,
  AddDrugs,
  InventoryLogout,
  AddAccountant,
  AccountancyLogin,
  AccountUpadateAppointmentRecord,
  UpdatePrescription,
  AccountantLogout,
  PharmacyLogin,
  AddNewPharmacyStaff,
  FetchAllDrugTypes,
  FetchTypeRelatedDrugs,
  GetSelectedDrugDetails,
  UpdateDrugsInventory,
  UpdatePharmacyRecord,
  UpdateAccountantRecord,
  UpdateInventoryStaffRecord,
  RemovePharmacyRecord,
  RemoveInventoryRecord,
  RemoveAccountantRecord
};
