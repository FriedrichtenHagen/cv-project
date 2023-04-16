


export default function LeftPanel({cvData, setCvData, editMode, setEditMode}){

    const skills = cvData.skills.map((skill, index) => {
        if(editMode){
            return(
                <li key={crypto.randomUUID()}>
                   <input defaultValue={skill} className={`index`+index} onChange={(e) => {handleInputChange(e)}}></input>
                </li>
            )
        } else{
            return(
                <li key={crypto.randomUUID()}>
                    {skill}
                </li>
            )
        }
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

            <div className="titleRow">
                <input className="firstName" defaultValue={cvData.firstName} onChange={(e) => {handleInputChange(e)}}></input>
                <input className="lastName" defaultValue={cvData.lastName} onChange={(e) => {handleInputChange(e)}}></input>
            </div>
            <div className="row">
                <input className="title" defaultValue={cvData.title} onChange={(e) => {handleInputChange(e)}}></input>
            </div>

            <div className="titleRow">
                Contacts
            </div>
            <div className="row">
                <input className="phoneNumber" defaultValue={cvData.phoneNumber} onChange={(e) => {handleInputChange(e)}}></input>
            </div>
            <div className="row">
            <input className="email" defaultValue={cvData.email} onChange={(e) => {handleInputChange(e)}}></input>

            </div>
            <div className="row">
            <input className="address" defaultValue={cvData.address} onChange={(e) => {handleInputChange(e)}}></input>
            </div>

            <div className="titleRow">
                Skills
            </div>
            <div className="row">
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

            <div className="titleRow">
                <div className='firstName' onClick={handleTextClick}>{cvData.firstName}</div>
                <div className="lastName" onClick={handleTextClick}>{cvData.lastName}</div>
            </div>
            <div className="row">
                <div className='title' onClick={handleTextClick}>{cvData.title}</div>
            </div>

            <div className="titleRow">
                Contacts
            </div>
            <div className="row">
                <div className="phoneNumber" onClick={handleTextClick}>{cvData.phoneNumber}</div>
            </div>
            <div className="row">
                <div className="email" onClick={handleTextClick}>{cvData.email}</div>
            </div>
            <div className="row">
                <div className="address" onClick={handleTextClick}>{cvData.address}</div>
            </div>

            <div className="titleRow">
                Skills
            </div>
            <div className="row">
                <ul>
                    {skills}
                </ul>
            </div>
        </div>
    )
}

