import React, { Component, lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from "./components/Home/Home";

const Customers = lazy(() => import("./components/Customers/Customers"));
const CustomerForm = lazy(() => import('./components/Customers/FormCustomer/FromCustomer'));
const AddCustomer = lazy(() => import('./components/Customers/AddCustomer/AddCustomer'));

const AdminAccounts = lazy(() => import("./components/AdminAccounts/AdminAccounts"));
const AddAdminAccount = lazy(() => import("./components/AdminAccounts/AddAdminAccount/AddAdminAccount"));
const AdminAccountForm = lazy(() => import("./components/AdminAccounts/FormAdminAccount/AdminAccountForm"));

const Slides = lazy(() => import("./components/Slides/Slides"));
const AddSlide = lazy(() => import("./components/Slides/AddSlide/AddSlide"));
const SlideForm = lazy(() => import("./components/Slides/FormSlide/SlideForm"));

const Booking = lazy(() => import("./components/Booking/Booking"));

const Rates = lazy(() => import("./components/Rates/Rates"));
const RateForm = lazy(() => import('./components/Rates/FormRates/FromRates'));
const AddRate = lazy(() => import('./components/Rates/AddRates/AddRates'));

const RoomTypes = lazy(() => import("./components/RoomTypes/RoomTypes"));
const RoomTypeForm = lazy(() => import('./components/RoomTypes/FormRoomType/RoomTypeForm'));
const AddRoomType = lazy(() => import('./components/RoomTypes/AddRoomType/AddRoomType'));

import Login from './components/Login/Login';

import OwnAccount from './components/myOwnAccount/OwnAccountForm';

export default class RouterURL extends Component {
    render() {
        return (
            <React.StrictMode>
            <Router>
                <Suspense fallback={ <div>Loading...</div> }>
                    <div>
                        <Route exact path="/admin" component={ Login }/>

                        <Route exact path="/admin/home" component={ Home }/>

                        <Route exact path="/admin/form_own_account/:id" component={ OwnAccount }/>

                        <Route exact path="/admin/customers" component={ Customers }/>
                        <Route exact path="/admin/form_customer/:id" component={ CustomerForm }/>
                        <Route exact path="/admin/add_customer" component={ AddCustomer }/>
                        
                        <Route exact path="/admin/admin_accounts" component={ AdminAccounts }/>
                        <Route exact path="/admin/booking" component={ Booking }/>

                        <Route exact path="/admin/rates" component={ Rates }/>
                        <Route exact path="/admin/form_rates/:id" component={ RateForm }/>
                        <Route exact path="/admin/add_rates" component={ AddRate }/>

                        <Route exact path="/admin/room_types" component={ RoomTypes }/>
                        <Route exact path="/admin/form_room_type/:id" component={ RoomTypeForm }/>
                        <Route exact path="/admin/add_room_type" component={ AddRoomType }/>

                        <Route exact path="/admin/slides" component={ Slides }/>
                        <Route exact path="/admin/add_slide" component={ AddSlide }/>
                        <Route exact path="/admin/form_slide/:id" component={ SlideForm }/>
                        
                        <Route exact path="/admin/admin_accounts" component={ AdminAccounts }/>
                        <Route exact path="/admin/form_admin_account/:id" component={ AdminAccountForm }/>
                        <Route exact path="/admin/add_admin_account" component={ AddAdminAccount }/>
                    </div>
                </Suspense>
            </Router>
            </React.StrictMode>
        )
    }
}
