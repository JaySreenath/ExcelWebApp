import React, {useState} from 'react'
import axios from 'axios';
import {backendUrlSurgery} from '../BackendURL';

const Form = () => {

    const[values,setValues] = useState({name:"", surgeon:"", anaesthetist:"", theatre:"", start:"", end:""});
    const[errors,setErrors] = useState({name:"", surgeon:"", anaesthetist:"", theatre:"", start:"", end:""});
    const[valid,setValid] = useState({name:"", surgeon:"", anaesthetist:"", theatre:"", start:"", end:""});

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
                                <label htmlFor="name">Employee Name<span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Please enter the field"
                                    value={values.name}
                                    onChange={handleChange}
                                    id="name"
                                    name="name"
                                    className="form-control"
                                />
                            </div>
                            {errors.name ? (<span className="text-danger">{errors.name}</span>): null}
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="surgeon">Serial Number<span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    placeholder="Please enter the S.NO"
                                    value={values.surgeon}
                                    onChange={handleChange}
                                    id="surgeon"
                                    name="surgeon"
                                    className="form-control"
                                />
                            </div>
                            {errors.surgeon ? (<span className="text-danger">{errors.surgeon}</span>): null}
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="anaesthetist">Machine Number<span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    placeholder="Please enter the machine number"
                                    value={values.anaesthetist}
                                    onChange={handleChange}
                                    id="anaesthetist"
                                    name="anaesthetist"
                                    className="form-control"
                                />
                            </div>
                            {errors.anaesthetist ? (<span className="text-danger">{errors.anaesthetist}</span>): null}
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="theatre">Production Value<span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    placeholder="Please enter the production value"
                                    value={values.theatre}
                                    onChange={handleChange}
                                    id="theatre"
                                    name="theatre"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="theatre">Meter<span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    placeholder="Please enter the meter value"
                                    value={values.theatre}
                                    onChange={handleChange}
                                    id="theatre"
                                    name="theatre"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mt-3 mb-3 ">
                                <label htmlFor="start">Today's Date<span className="text-danger">*</span></label>
                                <input
                                    type="date"
                                    value={values.start}
                                    onChange={handleChange}
                                    id="start"
                                    name="start"
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
