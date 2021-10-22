const { useState, useEffect } = require("react")

const useMedicine = () => {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, []);
    return { medicines, setMedicines };
};

export default useMedicine;