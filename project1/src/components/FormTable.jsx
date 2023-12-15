import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Sample form data array (replace this with your actual data)


export const FormTable = () => {
    const [bloodGroupFilter, setBloodGroupFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [formData, setFormdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/data").then((response) => {
            setFormdata(response.data);
        });
    }, [])


    // Function to handle blood group and location filters
    const handleBloodGroupFilterChange = (e) => {
        setBloodGroupFilter(e.target.value);
    };

    const handleLocationFilterChange = (e) => {
        setLocationFilter(e.target.value);
    };

    // Filter form data based on blood group and location
    const filteredData = formData.filter((data) => {
        return (
            (!bloodGroupFilter || data.bloodGroup.toLowerCase() === bloodGroupFilter.toLowerCase()) &&
            (!locationFilter || data.location.toLowerCase().includes(locationFilter.toLowerCase()))
        );
    });

    return (
        <div>
            <div className='background-paper'>
                <h2>Search</h2>
                <div>
                    <label htmlFor="bloodGroupFilter">Blood Group:</label>
                    <input
                        type="text"
                        id="bloodGroupFilter"
                        value={bloodGroupFilter}
                        onChange={handleBloodGroupFilterChange}
                        placeholder="Enter Blood Group"
                    />
                </div>
                <div>
                    <label htmlFor="locationFilter">Location:</label>
                    <input
                        type="text"
                        id="locationFilter"
                        value={locationFilter}
                        onChange={handleLocationFilterChange}
                        placeholder="Enter Location"
                    />
                </div>
            </div>
            <h2>Filtered Table</h2>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <table>
                    <thead>
                        <tr >
                            <th>Name</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td>{item.email}</td>
                                <td>{item.bloodGroup}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FormTable;
