import axios from 'axios'
import React, { useEffect, useState} from 'react'

function OxygenPage() {
    const [oxygen, setoxygen] = useState([])
    const [loading , setLoading] = useState(true)
useEffect(()=>{
    axios.get('https://contact-form-38965-default-rtdb.firebaseio.com/contactForm-new.json')
    .then((response) => {
        
        const data= response.data
        console.log(data.data,'data')
        let arr =[]
    for (const key of Object.values(data)) {
        arr.push(key)
        console.log(key,"vakk");
        }
        console.log(arr,'arr')
        setoxygen(arr)
    })
    .finally(() => {
        setLoading(false);
    });
    
},[]);
const filteredVisited= oxygen.filter((i)=>i.visited==="FALSE");
    console.log("fi", filteredVisited)
    const oxygenFilter  = filteredVisited.filter((i)=>i.cat==="oxygen")
    console.log("ox",oxygenFilter)

    return (
        <div className="oxygen">
        {loading && <h1>loading.....</h1>}
            {oxygenFilter.length>0 ? 
                <>
                {oxygenFilter.map((item)=>
                    <div  key={item.row_id} className="data-card__card">
                    <div className="data-card__header">
                    <h1>{item.catagories}</h1>
                    </div>
                    <div className="data-card__body">
                    <div className="data-card__detail">
                        <div className="data-card__text"><span className="data-card__desc">Name : <h4>{item.name}</h4></span></div>
                        <div className="data-card__text"><span className="data-card__desc">location : <h4>{item.location}</h4></span></div>
                        <div className="data-card__text"><span className="data-card__desc">contact:<h4> {item.contact}</h4></span></div>
                         <div className="data-card__text"><span className="data-card__desc">date of submission: <h4>{item.dos}</h4></span></div>

                    <div className="data-card__message-box">
                        <p className="data-card__msg">
                        {item.msg}
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    )}
                   </>
                 : <div>no data</div>}
        </div>
    ) 
}

export default OxygenPage
