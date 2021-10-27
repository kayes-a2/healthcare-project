//useing custom hook

import { useEffect, useState } from "react";

//usemedicine custom hook component arrow function
const useMedicine = () => {

    //using state 
    const [medicines, setMedicines] = useState([]);

    //using sideeffect external hook of state
    useEffect(() => {

        //fetch for load data from public folder
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, []);
    return { medicines, setMedicines };
};

//export usedetails custom hook component
export default useMedicine;