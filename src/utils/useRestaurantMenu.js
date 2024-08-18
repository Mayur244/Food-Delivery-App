import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInformation, setResInformation] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId );
        const json = await data.json();
        setResInformation(json.data);
    }

    return resInformation;
}

export default useRestaurantMenu;
