import { useEffect, useState } from 'react';
import { GET_CAT_DATA } from '../sevices/apiService';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()
    const [catData, setCatData] = useState([])

    useEffect(() => {
        getCatData()
    }, [])

    const getCatData = async () => {
        const catData = await GET_CAT_DATA();
        setCatData(catData)
    }

    const redirectToSingleCatPage = (CAT_ID) => {
        navigate(`/cat/${CAT_ID}`)
    }

    return (
        <>
            <h1 style={{padding:'0.5rem 2rem'}}>Random Cats <span style={{fontWeight:"500", color:'gray' , fontSize:"1rem"}}>( Refresh to get new Cats )</span></h1>
            <div style={{ padding: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }} >
                {catData.length > 0 &&
                    catData.map((cat) => {
                        return <div onClick={() => {
                            redirectToSingleCatPage(cat.id)
                        }} key={cat.id} style={{ backgroundColor: "white", borderRadius: "1rem", padding: '0.3rem', width: 'fit-content' }}>
                            <img style={{ borderRadius: '1rem', width: '250px', height: '170px', cursor: 'pointer' }} src={cat.url} />
                        </div>
                    })
                }
            </div>
        </>
    );
}

export default Home;