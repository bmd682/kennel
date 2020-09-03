import React, { useState } from "react"

export const EmplyeeContext = React.createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }

    /*
        You return a context provider which has the
        `Employees` state, the `addEmployee` function,
        and the `getEmployee` function as keys. This
        allows any child elements to access them.
    */

    return (
        <EmplyeeContext.Provider value={{
            employees, addEmployee, getEmployees
        }}>
            {props.children}
        </EmplyeeContext.Provider>
    )
}