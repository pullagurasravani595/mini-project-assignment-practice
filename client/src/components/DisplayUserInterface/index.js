import {useState, useEffect} from 'react'

const DisplayUserInterface = () => {
    const [apiObject, setApiObj] = useState({users : [{name: 'sunitha',origin: 'Bangalure', destination: "Mumbai", secreteKey: "user, world"}]})

    useEffect(() => {
        getApiResponseObj()
    })

    const getApiResponseObj = async () => {
        const response = await fetch("http://localhost:3004/api/")
        if (response.ok === true) {
            const responseData = {users : [{name: 'Jack Reacher',origin: 'Bangalure', destination: "Mumbai", secreteKey: "user, world"}]}
            setApiObj(responseData)
        }else {
            console.log(response.ok)
        }
    }

    console.log(apiObject)
    const {users} = apiObject
    const {name, origin, destination, secreteKey} = users

    return (
        
        <div>
            <p>{name}</p>
            <p>{origin}</p>
            <p>{destination}</p>
            <p>{secreteKey}</p>
            <h1>frontend task</h1>
        </div>
    )

}

export default DisplayUserInterface