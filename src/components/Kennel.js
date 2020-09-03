import React from "react"
import "./Kennel.css"
import { Animal } from "./animal/Animal"
import { Customer } from "./customer/Customer"
import { Employee } from "./employee/Employee"
// import { Location } from "./location/Location"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>

    </>
)