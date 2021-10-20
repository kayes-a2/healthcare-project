const { useState, useEffect } = require("react")

const useMedicine = () => {
    const [medicine, setMedicine] = useState([]);
    useEffect(() => {
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setMedicine(data))
    }, []);
    return { medicine, setMedicine };
};

export default useMedicine;