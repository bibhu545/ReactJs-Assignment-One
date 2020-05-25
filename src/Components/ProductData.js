import React, { Component } from 'react'
import withCommonHOC from '../Utils/withCommonHOC'

export class ProductData extends Component {

    render() {
        const { products, onEditProduct } = this.props
        return (
            <React.Fragment>
                <h4 className='center-content text-primary'>
                    Our Store
                </h4>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th onClick={() => this.props.sortData(products, "name")}>Product</th>
                                <th onClick={() => this.props.sortData(products, "category")}>Category</th>
                                <th onClick={() => this.props.sortData(products, "description")}>Description</th>
                                <th onClick={() => this.props.sortData(products, "price")}>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <a href="/" onClick={(e) => onEditProduct(e, item)}>Edit</a>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default withCommonHOC(ProductData)
