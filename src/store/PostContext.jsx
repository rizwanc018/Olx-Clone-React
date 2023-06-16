import { createContext, useState } from "react";

export const PostContext = createContext('')

export default function Post({ children }) {
    const [postDetails, setPostDetails] = useState('ttttttttttttttt')
    return (
        // <PostContext.Provider value={{postDetails, setPostDetails}}>
        <PostContext.Provider value={{ postDetails, setPostDetails }}>
            {children}
        </PostContext.Provider>
    )
}