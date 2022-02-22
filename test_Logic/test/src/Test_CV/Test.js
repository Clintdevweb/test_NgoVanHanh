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
    const [change, setChange] = useState('')
    const renderData = () => {
        // console.log(data)
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
        // setChange(true)
        setSearchTerm(e.target.value)

    }
    const arrange = (e) => {    
        let keySort = e.target.value
        console.log(keySort)
        setChange(keySort)
        switch (keySort) {
            case '': {
                setData(data.sort((a, b) => {
                    // console.log(a ,b)
                    return a.id - b.id
                }))

                break;
            }
            case 'id':
                setData(data.sort((a, b) => {
                    return b.id - a.id
                }))

                break;
            case 'name':
                setData(data.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                }))

                break;
            case 'username':
                setData(data.sort((a, b) => {
                    return a.username.localeCompare(b.username)
                }))

                break;
            case 'email':
                setData(data.sort((a, b) => {
                    return a.email.localeCompare(b.email)
                }))

                break;
            case 'address':
                setData(data.sort((a, b) => {
                    return a.address.city.localeCompare(b.address.city)
                }))

                break;
            case 'phone':
                setData(data.sort((a, b) => {
                    return a.phone.localeCompare(b.phone)
                }))

                break;
            case 'website':
                setData(data.sort((a, b) => {
                    return a.website.localeCompare(b.website)
                }))

                break;
            case 'company':
                setData(data.sort((a, b) => {
                    return a.company.name.trim().toLocaleLowerCase().localeCompare(b.company.name.trim().toLocaleLowerCase())
                }))

                break;
        }


    }

    // Ỏ đây em lấy json demo ạ - do em không hiểu rõ đề lắm 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <>
            <div className='containerTest'>
                <div className='search'>
                    <input placeholder='Please enter name or id' onChange={searchTerm} />
                    <i className="iconSearch fas fa-search"></i>

                    <select className="select" onChange={arrange} >
                        <option value=''>Choose...</option>
                        {Object.keys(data[0]).map((key, i) => {
                            return <option key={i} value={key}>Sắp xếp theo {key}</option>

                        })}
                    </select>

                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key, i) => {
                                return <th key={i}>{key}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {renderData()}
                    </tbody>
                </table>
            </div>
        </>
    )
}
