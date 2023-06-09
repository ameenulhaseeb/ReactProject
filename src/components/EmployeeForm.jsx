import React from 'react'
import Navbar from './Navbar'

const EmployeeForm = () => {

  return (
    <div>
        <Navbar/>
      <div className="container">
        <h3>Add Employee</h3>
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
               Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
            Designation
            </label>
            <input
              type="text"
              name="designation"
              className="form-control"
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="form-control"
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Salary
            </label>
            <input
              type="text"
              name="salary"
              className="form-control"
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-success" >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeForm
