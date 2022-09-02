import { useState, useEffect } from "react";
import axios from 'axios';

export function FetchData(url) {

    const [items, setItems] = useState({
        data:null,
        error:null,
        loading:false
    });

    useEffect(() => {

        const fetchData = async() => {
            setItems({
                data:null,
                error:null,
                loading:true
            });

            axios.get(url).then(res => {
                setItems({
                    data:res.data.data,
                    error:null,
                    loading:false
                });
            }).catch( () => {
                setItems({
                    data:null,
                    error:true,
                    loading:false
                });
            });
        }

        fetchData();

    }, [url]);

    return items;
}

