


export default function LeftPanel({cvData, setCvData, editMode, setEditMode}){

    const skills = cvData.skills.map(skill => {
        return(
            <li key={crypto.randomUUID()}>
                {skill}
            </li>
        )
    })

    function handleInputChange(e){
        // do not mutate state directly!
        let data = cvData
        data[e.target.className] = e.target.value
        setCvData(data)
    }
    function handleTextClick(){
        setEditMode(true)
    }



    if(editMode){
        return(
            <div className="LeftPanel">
            <img src={cvData.image} className="headshot" alt="asdfa"></img>

            <div class="name">
                <input className="firstName" defaultValue={cvData.firstName} onChange={(e) => {handleInputChange(e)}}></input>
                <input className="lastName" defaultValue={cvData.lastName} onChange={(e) => {handleInputChange(e)}}></input>
            </div>

            <input className="title" defaultValue={cvData.title} onChange={(e) => {handleInputChange(e)}}></input>

            <h2>Contacts</h2>
            <div className="phoneNumber" >{cvData.contacts.phoneNumber}</div>
            <div className="email" >{cvData.contacts.email}</div>
            <div className="address" >{cvData.contacts.address}</div>
            <h2>Skills</h2>
            <ul>
                {skills}
            </ul>
        </div>
        )
    }
    return(
        <div className="LeftPanel">
            <img src={cvData.image} className="headshot" alt="asdfa"></img>

            <div class="name">
                <div className='firstName' onClick={handleTextClick}>{cvData.firstName}</div>
                <div className="lastName">{cvData.lastName}</div>
            </div>

            <div className='title'>{cvData.title}</div>

            <h2>Contacts</h2>
            <div className="phoneNumber" >{cvData.contacts.phoneNumber}</div>
            <div className="email" >{cvData.contacts.email}</div>
            <div className="address" >{cvData.contacts.address}</div>
            <h2>Skills</h2>
            <ul>
                {skills}
            </ul>
        </div>
    )
}