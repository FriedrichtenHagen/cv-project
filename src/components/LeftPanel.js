


export default function LeftPanel({cvData}){

    const skills = cvData.skills.map(skill => {
        return(
            <li key={crypto.randomUUID()}>
                {skill}
            </li>
        )
    })
    
    return(
        <div className="LeftPanel">
            <img src={cvData.image} className="headshot" alt="asdfa"></img>
            <h1 className='firstName'>{cvData.firstName} {cvData.lastName}</h1>
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