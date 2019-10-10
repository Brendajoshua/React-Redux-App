import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAnimal } from '../actions';

const Animal = ({ animal, imageURL, error, isFetching, getAnimal }) => {
    useEffect(() => {
        getAnimal(animal);
    }, [animal, getAnimal])

    return (
        <div>
            <img src={imageURL} alt={animal}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        animal: state.animal,
        imageURL: state,imageURL,
        error: state.error,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps, {getAnimal})(Animal);
