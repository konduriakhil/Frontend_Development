const Subjects = () => {
    
    var subjets = ['html', 'css', 'react', 'js', 'angular'];

    return(
        <div>
            <h1>Subjects List: </h1>
            <ul>
                {
                    subjets.map((subject, index) => {
                        return  <li key={index}>{subject}</li>;                       
                    })
                }
            </ul>
        </div>
    )
}
export default Subjects 