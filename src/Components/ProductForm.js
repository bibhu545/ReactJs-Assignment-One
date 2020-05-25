import React from 'react'
import { Categories } from '../Utils/Models'

function ProductForm(props) {

    const { editMode, currentProduct, handleProductForm, onProductValueChanged, onCancel } = props

    return (
        <React.Fragment>
            <h4 className='center-content text-primary'>
                Update Store
            </h4>
            <div className="form-content">
                <form onSubmit={handleProductForm}>
                    <div className="form-group">
                        <label htmlFor="name">Name*:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="E.g. Galaxy S" value={currentProduct.name} onChange={onProductValueChanged} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category*:</label>
                        <select type="text" className="form-control" id="category" name="category" value={currentProduct.category} onChange={onProductValueChanged}>
                            <option value="0">Select</option>
                            {
                                Categories.map((item) =>
                                    <option value={item.value} key={item.id}>{item.value}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description*:</label>
                        <textarea type="text" className="form-control" id="description" name="description" placeholder="E.g. Nice phone" value={currentProduct.description} onChange={onProductValueChanged}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price*:</label>
                        <input type="number" className="form-control" id="price" name="price" placeholder="E.g. 25000" value={currentProduct.price} onChange={onProductValueChanged} />
                    </div>
                    <div className="right-content">
                        {
                            editMode ?
                            <button type="submit" className="btn btn-primary">Update</button> :
                            <button type="submit" className="btn btn-primary">Save</button>
                        }
                        <button type="button" className="btn btn-light" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ProductForm
