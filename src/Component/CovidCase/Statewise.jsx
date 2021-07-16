import React, { useEffect, useState } from 'react';
import './statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();

        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();

    }, []);

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="main-heading">
                    <h1 className="mb-4 text-center"><span className="font-weight-bold header">India Covid19 Cases</span> </h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr className="main-class">
                                <th className="state">State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind} className="data_class">
                                            <th className="stateName">{curElem.state}</th>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }



                        </tbody>

                    </table>
                </div>

            </div>

        </>
    )
}

export default Statewise;
