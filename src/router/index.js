import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    //  *****************  Admin Routes  *****************
    {
        path: '/admin',
        name: 'AdminHome',
        component: () => import('../views/admin/AdminView'),
        children: [
            {
                path: '',
                name: 'AdminDashboard',
                component: () => import('../views/admin/AdminDashboard'),
            },
            {
                path: 'doctor-specialization',
                name: 'DoctorSpecialization',
                component: () => import('../views/admin/DoctorSpecialization')
            },
            { 
                path: 'add-receptionist',
                name: 'AddReceptionist',
                component: () => import('../views/admin/AddReceptionist')
            },
            {
                path: 'add-inventory',
                name: 'AddInventory',
                component: () => import('../views/admin/AddInventory')
            },
            {
                path: 'add-doctor',
                name: 'AddDoctor',
                component: () => import('../views/admin/AddDoctor'),
            },
            {
                path: 'add-accountant',
                name: 'AddAccountancy',
                component: () => import('../views/admin/AddAccountancy'),
            },
            {
                path: 'add-pharmacy',
                name: 'AddPharmacy',
                component: () => import('../views/admin/AddPharmacy'),
            },
            {
                path: 'manage-doctor',
                name: 'ManageDoctors',
                component: () => import('../views/admin/ManageDoctors')
            },
            {
                path: 'manage-receptionist',
                name: 'ManageReceptionist',
                component: () => import('../views/admin/ManageReceptionist')
            },
            {
                path: 'manage-pharmacist',
                name: 'ManagePharmacy',
                component: () => import('../views/admin/ManagePharmacy')
            },
            {
                path: 'manage-accountant',
                name: 'ManageAccountant',
                component: () => import('../views/admin/ManageAccountant')
            },
            {
                path: 'manage-inventory',
                name: 'ManageInventory',
                component: () => import('../views/admin/ManageInventory')
            },
            {
                path: 'manage-user',
                name: 'ManageUsers',
                component: () => import('../views/admin/ManageUsers')
            },
            {
                path: 'manage-patient',
                name: 'ManagePatients',
                component: () => import('../views/admin/ManagePatients')
            },
            {
                path: 'appointment-history',
                name: 'AppointmentHistory',
                component: () => import('../views/admin/AppointmentHistory')
            },
            {
                path: 'patient-search',
                name: 'PatientSearch',
                component: () => import('../views/admin/PatientSearch')
            },
            {
                path: 'edit-doctor',
                name: 'EditDoctor',
                component: () => import('../views/admin/EditDoctor')
            },

        ]
    },
    {
        path: '/admin-login',
        name: 'AdminLogin',
        component: () => import('../views/admin/AdminLogin')
    },


    //  *****************  Doctor Routes  *****************

    {
        path: '/doctor',
        name: 'DoctorHome',
        component: () => import('../views/doctor/DoctorView'),
        children: [
            {
                path: '/',
                name: 'DoctorDashboard',
                component: () => import('../views/doctor/DoctorDashboard'),
            },
            { // done
                path: 'add-patient',
                name: 'AddPatient',
                component: () => import('../views/doctor/AddPatient'),
            },
            { // done
                path: 'manage-patient',
                name: 'ManagePatients',
                component: () => import('../views/doctor/ManagePatients')
            },
            { // done
                path: 'appointment-history',
                name: 'AppointmentHistory',
                component: () => import('../views/doctor/AppointmentHistory')
            },
            { // done
                path: 'patient-search',
                name: 'PatientSearch',
                component: () => import('../views/doctor/PatientSearch')
            },
            {
                path: 'edit-patient',
                name: 'EditPatient',
                component: () => import('../views/doctor/EditPatient')
            },
            {
                path: 'edit-profile',
                name: 'EditProfile',
                component: () => import('../views/doctor/EditProfile')
            },

        ]
    },
    {
        path: '/doctor-login',
        name: 'DoctorLogin',
        component: () => import('../views/doctor/DoctorLogin')
    },


    //  *****************  Receptionist Routes  *****************


    {
        path: '/receptionist',
        name: 'ReceptionistView',
        component: () => import('../views/receptionist/ReceptionistView'),
        children: [
            { // done
                path: '/',
                name: 'ReceptionistDashboard',
                component: () => import('../views/receptionist/ReceptionistDashboard'),
            },
            { // done
                path: 'add-patient',
                name: 'AddPatient',
                component: () => import('../views/receptionist/AddPatient'),
            },
            { // done
                path: 'manage-patient',
                name: 'ManagePatients',
                component: () => import('../views/receptionist/ManagePatients')
            },
            {
                path: 'edit-patient',
                name: 'EditPatient',
                component: () => import('../views/receptionist/EditPatient')
            },
            { //
                path: 'appointment-history',
                name: 'AppointmentHistory',
                component: () => import('../views/receptionist/AppointmentHistory')
            },
            { //
                path: 'add-appointment',
                name: 'AddAppointment',
                component: () => import('../views/receptionist/AddAppointment')
            },
            { //
                path: 'patient-search',
                name: 'PatientSearch',
                component: () => import('../views/receptionist/PatientSearch')
            },
        ]
    },
    {
        path: '/receptionist-login',
        name: 'DoctorLogin',
        component: () => import('../views/receptionist/ReceptionistLogin')
    },


    //  *****************  Pharmacy Routes  *****************

    {
        path: '/pharmacy',
        name: 'PharmacyView',
        component: () => import('../views/pharmacy/PharmacyView'),
        children: [
            { // done
                path: '/',
                name: 'PharmacyDashboard',
                component: () => import('../views/pharmacy/PharmacyDashboard'),
            },
            { // done
                path: 'medical-history',
                name: 'MedicalHistory',
                component: () => import('../views/pharmacy/MedicalHistory'),
            },
            { // done
                path: 'patient-search',
                name: 'PatientSearch',
                component: () => import('../views/pharmacy/PatientSearch')
            },
            {
                path: 'edit-patient',
                name: 'EditPatient',
                component: () => import('../views/receptionist/EditPatient')
            },
            { //
                path: 'appointment-history',
                name: 'AppointmentHistory',
                component: () => import('../views/receptionist/AppointmentHistory')
            },
            { //
                path: 'add-appointment',
                name: 'AddAppointment',
                component: () => import('../views/receptionist/AddAppointment')
            },
            { //
                path: 'patient-search',
                name: 'PatientSearch',
                component: () => import('../views/receptionist/PatientSearch')
            },
        ]
    },
    {
        path: '/pharmacy-login',
        name: 'PharmacyLogin',
        component: () => import('../views/pharmacy/PharmacyLogin')
    },


    //  *****************  Accountancy Routes  *****************

    {
        path: '/accountancy',
        name: 'AccountancyView',
        component: () => import('../views/accountancy/AccountancyView'),
        children: [
            { // done
                path: '/',
                name: 'AccountancyDashboard',
                component: () => import('../views/accountancy/AccountancyDashboard'),
            },
            { //
                path: 'appointment-history',
                name: 'AppointmentHistory',
                component: () => import('../views/accountancy/AppointmentHistory')
            },
            { //
                path: 'prescription-history',
                name: 'PrescriptionHistory',
                component: () => import('../views/accountancy/PrescriptionHistory')
            },
            { //
                path: 'patient-search',
                name: 'PatientSearch',
                component: () => import('../views/accountancy/PatientSearch')
            },
        ]
    },
    {
        path: '/accountancy-login',
        name: 'AccountancyLogin',
        component: () => import('../views/accountancy/AccountancyLogin')
    },



    //  *****************  Inventory Routes  *****************

    {
        path: '/inventory',
        name: 'InventoryView',
        component: () => import('../views/inventory/InventoryView'),
        children: [
            { // done
                path: '/',
                name: 'InventoryDashboard',
                component: () => import('../views/inventory/InventoryDashboard'),
            },
            { //
                path: 'inventory-history',
                name: 'InventoryHistory',
                component: () => import('../views/inventory/InventoryHistory')
            },
            { //
                path: 'add-drug',
                name: 'AddDrug',
                component: () => import('../views/inventory/AddDrug')
            },
        ]
    },
    {
        path: '/inventory-login',
        name: 'InventoryLogin',
        component: () => import('../views/inventory/InventoryLogin')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
