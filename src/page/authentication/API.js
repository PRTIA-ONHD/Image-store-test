import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const API = () => {

    const [data, setdata] = useState();
    const [loading, setloading] = useState(false);
    
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let data = {
            query: `query {
                allUsers {
                  username
                  email
                }
              }`
        };
        try {
            setloading(true)
            const response = await axios.post('http://192.168.1.141:8000/graphql', data, {
                headers: {
                    'Content-Type': 'application/json',
                    //   'Cookie': 'csrftoken=9jrisi0DuqSeXxm46uoAENW6u9HGhm2L; sessionid=4f1xr1wf1wjc5e2iz0omnp6whwy3tj7h'
                },
            });
            console.log(response.data.data.users);
            setdata(response.data.data.users)
        } catch (error) {
            console.error(error);
        } finally {
            setloading(false)
        }

    };

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {data && data.map(item => (
                        <h1 key={item.username}>{item.username}</h1>
                    ))}
                </div>
            )}
        </div>

    )
}