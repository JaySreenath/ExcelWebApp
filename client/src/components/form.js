import React, {useState} from 'react'
import axios from 'axios';
import {backendUrlSurgery} from '../BackendURL';

const Form = () => {

    const[values,setValues] = useState({ename:"", snumber:"", mnumber:"", productionValue:"", meter:"", Todaydate:""});
    const[errors,setErrors] = useState({ename:"", snumber:"", mnumber:"", productionValue:"", meter:"", Todaydate:""});
    const[valid,setValid] = useState({ename:"", snumber:"", mnumber:"", productionValue:"", meter:"", Todaydate:""});

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setValues({...values, [name]: value});
        validate(name,value);
    }

    const validate = (name,value) => {
        switch (name) {
            case "name":
            case "surgeon":
            case "anaesthetist":
                if (value === "") {
                    setErrors({...errors, [name]:"Please enter the value"});
                    setValid({...valid, [name]: false});
                } else {
                    setErrors({...errors, [name]:""});
                    setValid({...valid, [name]: true});
                }
                break;
            default:
                break;
            }
    }

    const post = () => {
        axios.post(backendUrlSurgery+'/schedule', values).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err);
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        post();
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-4 ">
                        <span className="text-success"></span>
                        <h1>Day Production</h1>
                        <form className="form" onSubmit={handleSubmit} > 
                            <div className="form-group mt-3 mb-3" >
                                <label htmlFor="ename">Employee Name<span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Please enter the field"
                                    value={values.ename}
                                    onChange={handleChange}
                                    id="ename"
                                    name="ename"
                                    className="form-control"
                                />
                            </div>
                            {errors.ename ? (<span className="text-danger">{errors.name}</span>): null}
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="snumber">Serial Number<span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    placeholder="Please enter the S.NO"
                                    value={values.snumber}
                                    onChange={handleChange}
                                    id="snumber"
                                    name="snumber"
                                    className="form-control"
                                />
                            </div>
                            {errors.mnumber ? (<span className="text-danger">{errors.surgeon}</span>): null}
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="mnumber">Machine Number<span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    placeholder="Please enter the machine number"
                                    value={values.mnumber}
                                    onChange={handleChange}
                                    id="mnumber"
                                    name="mnumber"
                                    className="form-control"
                                />
                            </div>
                            {errors.productionValue ? (<span className="text-danger">{errors.anaesthetist}</span>): null}
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="productionValue">Production Value<span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    placeholder="Please enter the production value"
                                    value={values.productionValue}
                                    onChange={handleChange}
                                    id="productionValue"
                                    name="productionValue"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="meter">Meter<span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    placeholder="Please enter the meter value"
                                    value={values.meter}
                                    onChange={handleChange}
                                    id="meter"
                                    name="meter"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="Todaydate">Today's Date<span className="text-danger">*</span></label>
                                <input
                                    type="date"
                                    value={values.Todaydate}
                                    onChange={handleChange}
                                    id="Todaydate"
                                    name="Todaydate"
                                    className="form-control"
                                />
                            </div>
                            {errors.start ? (<span className="text-danger">{errors.start}</span>): null}
                            <button className="btn btn-primary mt-3" type="submit" >Calculate</button>
                        </form>
                        <br />
                        {/* <!--can be a button or a link based on need --> */}
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Form;
