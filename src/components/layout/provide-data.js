import React, { useState } from 'react'
import axios from 'axios';
function ProvideData() {

    const [error, setErr] = useState(false);
    const [submit, setsubmit] = useState(false);
    const [id, setId] = useState(0)
    const [data, setData] = useState({
        name: "",
        time: "",
        contact: "",
        location: "",
        cat:[],
        vrAt: "",
        msg: "",
    });
    const { name, contact, location, cat, msg } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
        console.log(id, data, "wdhus")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("f", data);
        console.log(name)
        // const datas=[{
        //     "Name": name.toString(),
        //     "contact":contact.toString(),
        //     "location":  location.toString(),
        //     "catagories": cat.toString(),
        //     "msg": msg.toString(),
        //     "dos": new Date().toLocaleDateString(),
        //     "visited": "FALSE"
        // }]
        const datas ={
            name:data.name.toString(),
        time: data.time,
        contact:data.contact.toString(),
        location: data.location.toString(),
        cat: data.cat,
        vrAt:data.vrAt,
        msg: data.msg.toString(),
       dos: new Date().toLocaleDateString(),
           visited: "FALSE"

        }
        axios.post('https://contact-form-38965-default-rtdb.firebaseio.com/contactForm-new.json',datas)
            .then(response => {
                console.log(response, "res");
                setData({ ...data, name: "",  contact: "", location: "", cat: "", msg: "", })
                setsubmit(true)
            })
            .catch(error => {
                console.log(error)
                setErr(true)
            })
    }

    const handleSubmitBtn = (e) => {
        console.log("clicke")
        setId(id + 1);
        
    }

const onchange =(e)=>{
const {value , name} = e.target

}
    return (
        <div className="submit-details">
            <div className="submit-details__title">
                <span className="submit-details__heading"> You Can Also Help</span><br />
                <span className="submit-details__desc">By Providing Any Details of Bed,Oxygen, medicine or plasma In The Form  and our backend team will verify it  and the people in need can later use the resource.  </span>
            </div>
            <div className="submit-details__form">
                <form className="submit-details__form-sec" onSubmit={handleSubmit} >
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                            <span className="submit-details__label">Full Name</span>
                            <input type="text" className="submit-details__input-field" placeholder="Your Full Name" name="name" value={name} onChange={handleChange} />
                        </div>
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Catagories</span>
                            <select name="catagories" id="catagories" className="submit-details__input-field" onChange={handleChange} >
                                <option disabled={true} defaultValue="select" >select</option>
                                <option value="oxygen">Oxygen</option>
                                <option value="bed">Bed</option>
                                <option value="plasma">Plasma</option>
                                <option value="medicine">medicine</option>
                            </select>
                            {/* <div>
                            <input onChange={handleChange} type="checkbox" value='oxygen' name='cat' id='o2' />
                            <label htmlFor='o2'>oxygen</label>
                            </div>
                            <div>
                            <input onChange={handleChange} type="checkbox" value='plasma' name='cat' id='plasma' />
                            <label htmlFor='plasma'>pLASMA</label>
                            </div>
                            <div>
                            <input onChange={handleChange} type="checkbox" value='bed' name='cat' id='bed' />
                            <label htmlFor='bed'>Bed</label>
                            </div> */}
                            
                        </div>
                    </div>
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Contact Number</span>
                            <input type="text" className="submit-details__input-field" required maxLength="10" placeholder="enter Contact Number" name="contact" value={contact} onChange={handleChange} />
                        </div>
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Location</span>
                            <input type="text" className="submit-details__input-field" required placeholder="Location" name="location" value={location} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="submit-details__row">
                    <span className="submit-details__label">message</span>
                        <textarea className="submit-details__input-field" placeholder="Enter Additional Information Here In this Text Area" id="textAreaForm" name="msg" rows="10" cols="50" value={msg} onChange={handleChange}>          
                    </textarea>

                    </div>
                    <div className="submit-details__submit-sec">
                        <button type="submit" className="submit-details__submit-btn" onClick={handleSubmitBtn}>Submit</button>
                    </div>
                </form>
                {error ? <h1 className="toast">could not be submited try agin later  or call on 7780988972</h1> : null}
                {submit ? <h1 className="toast"> submitted successfully</h1> : ""}
            </div>
        </div>
    )
}

export default ProvideData
