export default function Map()
{
    let ar=["tamil",24,"erode",85,45,35,"final value"]

    let person= [
        {name:'tamil',qualification:{ug:'bsc',pg:'msc'}},
        {name:'siva',qualification:{ug:'bsc',pg:"mca"}},
        {name:'suresh',qualification:{ug:';EEE',pg:"no vlaue"}},
        {name:'1234567',qualification:{ug:'no',pg:'no'}}
    ]
    return(
        <>
            <h1>React map function</h1>

            {ar.map((a)=>(
                <li>
                    {a}
                </li>
            ))}

            <table>
                <tr>
                    <th>Name</th>
                    <th>Qualification</th>
                </tr>
                {person.map((s)=>(
                    <tr>
                        <td>
                            {s.name}
                        </td>
                        <td>
                            <li>{s.qualification.ug}</li>
                            <li>{s.qualification.pg}</li>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}