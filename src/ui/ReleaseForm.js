import React from 'react';

const ReleaseForm = ({submitHandler}) => {
    
    let _releaseName, _releaseDate, _releaseDesc;

    const handleSubmit = (e) => {
        submitHandler(e, {
            name: _releaseName.value, 
            date: _releaseDate.value,
            description: _releaseDesc.value
        }
        );
        clearForm();
    }

    const clearForm = () => {
        _releaseDate.value = '';
        _releaseName.value = '';
        _releaseDesc.value = '';
    }

    return (
        <form onSubmit={handleSubmit} className="form-inline" style={{ paddingBottom: '15px' }}>
            <label className="sr-only" htmlFor="inlineFormInput">Release Name</label>
            <input type="text" ref={input => _releaseName = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Set the Name" />

            <label className="sr-only" htmlFor="inlineFormInputGroup">Release Date</label>
            <input type="text" ref={input => _releaseDate = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputGroup" placeholder="Set the Date" />

            <textarea ref={input => _releaseDesc = input} class="form-control mb-2 mr-sm-2 mb-sm-0 col-6" id="exampleFormControlTextarea1" rows="3" placeholder="Set the Description"></textarea>

            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
};

export default ReleaseForm;