import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Fact from "./Fact";

const Facts = (props) => {
    const [facts, setFacts] = useState([]);
    // empty array will make use effect run only on mount (initial render)
    useEffect(() => {
        console.log("Fact  component mounting");
        getFacts()

        return () => {
            // eventlisteners, timers we want to remove/stop
            console.log("Fact  component unmounting");
        };
    }, []);

    const getFacts = async () => {
        try {
            let res = await axios.get("api/facts");
            setFacts(res.data);
            //console.log(res);
            console.log(" Facts here in res.data", res.data);
        } catch (error) {
            alert("error occured getting fact check console/server");
            console.log(error);
        }
    };

    const renderFacts = () => {
        return facts.map(f=> <Fact key={f.id} {...f} />);
    };
    return (
        <div>
            <h1>Facts</h1>
            {renderFacts()};
        </div>
    );
};

export default Facts;