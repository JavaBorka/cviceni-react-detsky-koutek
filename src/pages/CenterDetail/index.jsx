import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CenterDetail() {

    const {id} = useParams()

    const [center, setCenter] = useState({})

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then (data => {
            console.log(data)
            setCenter(data)
        } )
    }, [id])

    return (
        <>
            <h2>Pobočka {center.name}</h2>
            <p>Vzdálenost od centra: <strong>{center.height}</strong> metrů</p>
            <p>{console.log(id)}</p>
        </>
    );
}

export default CenterDetail;