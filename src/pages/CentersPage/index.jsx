import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './style.css'

function CentersPage() {

    const [centers, setCenters] = useState([])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
        . then(response => response.json())
        .then(data => {
            setCenters(data.results)
        })
    }, [])
    
    return ( 
        <>

        <h2>Naše dětské koutky</h2>
        <div className="container">
            <ul>
                {centers.map((center =>
                    <NavLink to={center.url.split('/')[5]}><li key={center.name}>{center.name}</li></NavLink>
                    ))
                }
            </ul>

            <Outlet />
        </div>
        </>
    );
}

export default CentersPage;