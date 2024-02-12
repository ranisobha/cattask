import React, { useEffect, useState } from 'react'
import { GET_SINGLE_CAT_DATA } from '../sevices/apiService';
import { useParams } from 'react-router-dom';

function SingleCat() {
    const { id } = useParams()
    const [catData, setCatData] = useState({});

    const getSingleCarData = async (CAT_ID) => {
        const catData = await GET_SINGLE_CAT_DATA(CAT_ID);
        setCatData(catData[0])
    }

    useEffect(() => {
        if (id) {
            getSingleCarData(id)
        }
    }, [id])

    return (
        <>
            <h1 style={{ padding: '0.5rem 2rem' }}>Single Cat <span style={{ fontWeight: "500", color: 'gray', fontSize: "1rem" }}>( Refresh to get new Cat )</span></h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", height: '100vh', width: '100vw' }}>
                <div key={catData.id} style={{ backgroundColor: "white", borderRadius: "1rem", padding: '0.3rem', width: 'fit-content' }}>
                    <img style={{ borderRadius: '1rem', maxWidth: '500px', width: '100%', height: '300px', cursor: 'pointer' }} src={catData.url} />
                </div>
            </div>
        </>
    )
}

export default SingleCat