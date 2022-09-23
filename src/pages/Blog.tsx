import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

export default function Blog() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: "LOAD_BLOG"})
    }, [])

    return (
        <div>Blog</div>
    )
}