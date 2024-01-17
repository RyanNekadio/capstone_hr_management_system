import { useState } from "react";
import { useNavigate, createBrowserRouter } from "react-router-dom";

const CreateAccountForm = ({ currentUser, postEmployee }) => {
    const [stateEmployee, setStateEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
        proRota: "",
        salary: ""
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (
            stateEmployee.firstName === "" ||
            stateEmployee.lastName === "" ||
            stateEmployee.email === "" ||
            stateEmployee.password === "" ||
            stateEmployee.dateOfBirth === "" ||
            stateEmployee.address === "" ||
            stateEmployee.phoneNumber === "" ||
            stateEmployee.proRota === "" ||
            stateEmployee.salary === ""
        ) {
            alert("Please fill in the sign up form")
            return
        }
        postEmployee(stateEmployee)
        setStateEmployee({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dateOfBirth: "",
            address: "",
            phoneNumber: "",
            proRota: "",
            salary: ""
        })
    }
    const handleChange = (e) => {
        let fieldName = e.target.name;
        let copiedEmployee = { ...stateEmployee };
        copiedEmployee[fieldName] = e.target.value;
        setStateEmployee(copiedEmployee);
    }
    return (
        <>
        <section className="create-account">
            <h2>Create Account</h2>
                <form onSubmit={handleFormSubmit}>
                        <section>Access Level
                            <select id="dropdown">
                                <option>Admin</option>
                                <option>Employee</option>
                            </select></section>

                            <section><label>First Name: </label><input type="text" onChange={handleChange} name="firstName" placeholder="Enter your first name" value={stateEmployee.firstName} /></section>

                            <section><label>Last Name: </label><input type="text" onChange={handleChange} name="lastName" placeholder="Enter your last name" value={stateEmployee.lastName} /></section>

                            <section><label>Email Address: </label><input type="email" onChange={handleChange} name="email" placeholder="Enter your email address" value={stateEmployee.email} /></section>

                            <section><label>Password: </label><input type="password" onChange={handleChange} name="password" placeholder="Enter your password" value={stateEmployee.password} /></section>
                            
                            <section><label>Date of Birth: </label><input type="date" onChange={handleChange} name="dateOfBirth" placeholder="Enter your date of birth" value={stateEmployee.dateOfBirth} /></section>
                            
                            <section><label>Address: </label><input type="text" onChange={handleChange} name="address" placeholder="Enter your address" value={stateEmployee.address} /></section>
                            
                            <section><label>Phone Number: </label><input type="tel" onChange={handleChange} name="phoneNumber" placeholder="Enter your phone number" value={stateEmployee.phoneNumber} /></section>

                            <section><label>Pro Rota: </label><input type="text" onChange={handleChange} name="proRota" placeholder="Enter your pro rota" value={stateEmployee.proRota} /></section>

                            <section><label>Salary: </label><input type="text" onChange={handleChange} name="salary" placeholder="Enter your salary" value={stateEmployee.salary} /></section>
                            
                            <section><input type="submit" value="Create" /></section>
                </form>
                </section>
        </>
    );
}
export default CreateAccountForm;