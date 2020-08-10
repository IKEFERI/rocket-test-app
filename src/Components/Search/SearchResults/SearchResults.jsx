import Posts from "../../Posts/Posts";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {StyledSerchResults} from "./StyledSearchResults";


const SearchResults = () => {
    let [isVisible, setIsVisible] = useState(false);
    const postsFiltered = useSelector(state => state.UsersState.postsSearch);
    const valueIsDef = useSelector(state => state.UsersState.valueIsDef);


    useEffect(() => {
        if (postsFiltered.length) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    })


    return (isVisible || valueIsDef ?
            <StyledSerchResults>
                <h2>Results Search: {postsFiltered.length}</h2>
                <Posts postsOutput={postsFiltered} notify={"Nothing found. Please enter another request."}/>
            </StyledSerchResults>
            : ""
    )
}


export default SearchResults;
