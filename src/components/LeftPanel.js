


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

            <div class="titleRow">
                <input className="firstName" defaultValue={cvData.firstName} onChange={(e) => {handleInputChange(e)}}></input>
                <input className="lastName" defaultValue={cvData.lastName} onChange={(e) => {handleInputChange(e)}}></input>
            </div>
            <div class="row">
                <input className="title" defaultValue={cvData.title} onChange={(e) => {handleInputChange(e)}}></input>
            </div>

            <div class="titleRow">
                Contacts
            </div>
            <div class="row">
                <div className="phoneNumber" >{cvData.contacts.phoneNumber}</div>
            </div>
            <div class="row">
                <div className="email" >{cvData.contacts.email}</div>
            </div>
            <div class="row">
                <div className="address" >{cvData.contacts.address}</div>
            </div>

            <div class="titleRow">
                Skills
            </div>
            <div class="row">
                <ul>
                    {skills}
                </ul>
            </div>
        </div>
        )
    }
    return(
        <div className="LeftPanel">
            <img src={cvData.image} className="headshot" alt="asdfa"></img>

            <div class="titleRow">
                <div className='firstName' onClick={handleTextClick}>{cvData.firstName}</div>
                <div className="lastName">{cvData.lastName}</div>
            </div>
            <div class="row">
                <div className='title'>{cvData.title}</div>
            </div>

            <div class="titleRow">
                Contacts
            </div>
            <div class="row">
                <div className="phoneNumber" >{cvData.contacts.phoneNumber}</div>
            </div>
            <div class="row">
                <div className="email" >{cvData.contacts.email}</div>
            </div>
            <div class="row">
                <div className="address" >{cvData.contacts.address}</div>
            </div>

            <div class="titleRow">
                Skills
            </div>
            <div class="row">
                <ul>
                    {skills}
                </ul>
            </div>
        </div>
    )
}

