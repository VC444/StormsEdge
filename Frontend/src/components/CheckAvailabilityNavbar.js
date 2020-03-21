import React from 'react';
import '../styles/CheckAvailabilityNavbar.css';

import {
    Link, Redirect
} from "react-router-dom";

// This is the bootstrap navbar component which is used in App.js

class CheckAvailabilityNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };

        this.submitPressed = this.submitPressed.bind(this);
        this.handleCheckInDateChange = this.handleCheckInDateChange.bind(this);
        this.getCurrentDateInYYYYMMDDFormat = this.getCurrentDateInYYYYMMDDFormat.bind(this);
    }

    // as the user changes the check in date update the checkout date to start from check in date onwards
    handleCheckInDateChange = event => {
        this.refs.checkOutDateRef.setAttribute('min', event.target.value);
    };

    submitPressed = event => {

        this.setState({ redirect: true })

    }

    getCurrentDateInYYYYMMDDFormat = () => {

        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    componentDidMount() {


        //DISPLAYS FROM CURRENT DATE ONWARDS BY DEFAULT AND PREVIOUS DATE ARE DISABLED
        this.refs.checkInDateRef.setAttribute('min', this.getCurrentDateInYYYYMMDDFormat());
        this.refs.checkOutDateRef.setAttribute('min', this.getCurrentDateInYYYYMMDDFormat());



    }

    render() {
        if (this.state.redirect) {

            return (<Redirect to="/roomlist" />);
        }
        return (
            <nav class="navbar sticky-top bg-warning">
                <div class="navbar-brand">Booking Your Hotel</div>
                <form class="form-inline" onSubmit={this.submitPressed}>
                    <label for="checkIn">Check In:</label>
                    <input class="form-control" type="date" id="checkIn" name="checkIn" ref="checkInDateRef" onChange={this.handleCheckInDateChange} required/>
                    <label for="checkOut">Check Out:</label>
                    <input class="form-control" type="date" id="checkOut" name="checkOut" ref="checkOutDateRef" required/>

                    <label for="guests">Guests:</label>
                    <select class="form-control" id="guests">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                    <label for="rooms">Room:</label>
                    <select class="form-control" id="rooms">
                        <option>1</option>
                    </select>

                    <input class="submitButtonColor" type="submit" value="CHECK AVAILABILITY" />
                </form>

            </nav>

        );
    }
}

export default CheckAvailabilityNavbar;