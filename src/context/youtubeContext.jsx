import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

export const YoutubeContext = createContext();

export function YoutubeProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [videos, setVideos] = useState(null);

    //   console.log(selectedCategory)

    useEffect(() => {
        // getting videos from API
        if (selectedCategory.type === "home" ||
            selectedCategory.type === "trending") {
            // Sending request via using helpers fonk.
            getData(`/${selectedCategory.type}`).then((res) => setVideos(res.data.data))
        }
        // if selected category is not category/home/trending.
        // A request is made to Search and a parameter is given.

        // When you type the following code into the search input,
        // For example, when you type the music parameter, it pulls the incoming data.
        if (selectedCategory.type === "category") {
            getData(`search?query=${selectedCategory.name}&type=video`)
                .then((res) => setVideos(res.data.data))
        }

    }, [selectedCategory])

    return (
        // The reason for the double parentheses is that value accepts a single value, we have three. If we put these into objects, they become one.
        <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, videos }}>
            {children}
        </YoutubeContext.Provider>
    );
}

