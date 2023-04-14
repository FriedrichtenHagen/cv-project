export default function RightPanel({cvData}){
    const workExperience = cvData.workExperience.map(position => {
        return(
            <div className="position" key={crypto.randomUUID()}> 
                {position.years}
                <h3>{position.position}</h3>
                <p>{position.company}</p>
                <p>{position.description}</p>
            </div>
        )
    })
    
    
    return(
        <div className="RightPanel">
            <h2>Work Experience</h2>
            {workExperience}

        </div>
    )
}