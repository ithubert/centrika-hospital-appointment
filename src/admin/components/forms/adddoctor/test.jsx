import React, { useState, useEffect } from "react";

const SelectDepartments = () => {
    const [departments, setDepartments] = useState(null);

    const loadDepartments = async () => {
        try {
            const response = await fetch('http://localhost:3000/all');
            const datas = await response.json();
            const filter = datas.map(data => data.departments);
            setDepartments(filter);
        } catch (error) {
            console.log("loadDepartments", error);
        }
    };

    useEffect(() => {
        loadDepartments();
    }, []);

    return (
        <>
            {departments && (
                <select id="selectDepartments">
                    {departments.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            )}
        </>
    );
};

export default SelectDepartments;