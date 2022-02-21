import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './test.css'
export default function Test() {
    const [data, setData] = useState([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
    ]);
    const [searchTeam, setSearchTerm] = useState('')
    const renderData = (data) => {
        return data.filter((item) => {
            if (searchTeam == '') {
                return item
            } else if (item.name.trim().toLocaleLowerCase().includes(searchTeam.trim().toLocaleLowerCase()) || item.id == searchTeam) {
                return item
            }
        }).map((item) => {
            return (
                <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>{item.company.name}</td>
                </tr>
            )
        })

    }

    const searchTerm = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        setSearchTerm(e.target.value)
    }
    const arrangeId = () => {
        // console.log(1)
        setData(data.sort((a, b) => {
            return b.id - a.id
        }))
        console.log(data)
        
    }
    const arrangeString = () => {
        setData(data.sort((a, b) => { 
            return a.name.localeCompare(b.name)
         }))
        
    }
    // Ỏ đây em lấy json demo ạ - do em không hiểu rõ đề lắm 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    //    console.log(data)

    return (
        <>
            <div className='containerTest'>
                <div className='search'>
                    <input placeholder='Please enter name or id' onChange={searchTerm} />
                    <i className="iconSearch fas fa-search"></i>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {Object.keys(data[0])?.map((key, i) => {                        
                                return (
                                    <th key={i} scope="col">{key}
                                    {key === 'id' ? <i className="filterIcon fas fa-filter" onClick={arrangeId}></i> : <i className="filterIcon fas fa-filter" onClick={arrangeString}></i>}
                                        
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {renderData(data)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
