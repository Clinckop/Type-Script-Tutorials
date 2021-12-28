import { useEffect, useState } from "react";
import axios from "axios";
import { FetchInterface } from "./FetchDogsInterface";

const Fetch = () => {
    const Url = "https://dog.ceo/api/breeds/image/random";
    const [dogs, setDogs] = useState<FetchInterface | null>(null);

    useEffect(() => {
        axios.get(Url).then((response) => { setDogs(response.data) });
    }, [Url])
    
    if (dogs) {
        return (
            <div>
                <img src={dogs.message} alt="" />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Normal Return</h1>
            </div>
        )
    }
}

export default Fetch;