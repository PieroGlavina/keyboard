import React, {useEffect} from 'react'

const ReviewCustomizer = ({setIsCollapsed}) => {

    useEffect(() => {
        setIsCollapsed(true);
    }, []);


    return (
        <div>
            <p className="font-display text-custom-gray-light text-justify">HERE IS THE REVIEW</p>
            <p>{}</p>
        </div>

    )
}
export default ReviewCustomizer
