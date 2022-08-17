import { useState, useEffect } from "react";

const FetchData = (url) => {

    const [data, setData] = useState({
        data:null,
        error:null,
        loading:false
    })

    useEffect(()=>{
        const fetchData = async() => {
            setData({
                data:null,
                error:null,
                loading:true
            })

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData({
                    data: json,
                    error:null,
                    loading: false
                })
            } catch(err) {
                setData({
                    data:null,
                    error:err,
                    loading: false
                })
            }
        }

        fetchData();

    }, [url])

    return data.data;
}

export default FetchData
