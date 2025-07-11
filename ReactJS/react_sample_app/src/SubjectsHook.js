
import { useState } from "react"

const SubjectsHook = () =>{

    const courses = ['html', 'css', 'js', 'react', 'Bootstrap']
    const [subjects, myCounter] =useState(courses)    

    const addMoreSubjects = () => {
            let moreSubjects = ['Node', 'Express', 'Mongo DB']
            let updatedSubjects = [...subjects, ...moreSubjects]//rest or spread operator            
            myCounter(updatedSubjects)
    }   

    return (
        <div>
            <h1>Subjects List ({subjects.length}) </h1>
            {
                subjects.length > 0 ? subjects.map((item, index) =>
                <li key={index}>{item}</li>) : null
            }
            <button onClick={addMoreSubjects}>Add More Subjects</button>
        </div>
    )
}
export default SubjectsHook