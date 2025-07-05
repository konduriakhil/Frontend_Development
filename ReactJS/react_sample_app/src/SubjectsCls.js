import { Component } from "react";

class SubjectsCls extends Component
{
    subjets = ['html', 'css', 'react', 'js', 'angular'];

    render(){
        return (
            <div>
                <h1>Subjects From Class Component</h1>
                <h2>Total no of subjects: {this.subjets.length}</h2>
                <ol>
                    {
                        this.subjets.map((subject, index) => {
                            return <li key={index}>{subject}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default SubjectsCls