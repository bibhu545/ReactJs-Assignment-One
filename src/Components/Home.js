import React, { Component } from 'react'
import ProductForm from './ProductForm'
import ProductData from './ProductData'
import { ProductModel, initialData } from "../Utils/Models";

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            currentProduct: new ProductModel(),
            editMode: false,
        }
    }

    componentDidMount() {
        this.setState({
            products: initialData
        })
    }

    validateForm = () => {
        let valid = true;
        if (this.state.currentProduct.name.trim() === "") {
            alert("Name can not be empty");
            valid = false;
        }
        else if (this.state.currentProduct.description.trim() === "") {
            alert("Description can not be empty");
            valid = false;
        }
        else if (this.state.currentProduct.category === 0) {
            alert("Please select a category");
            valid = false;
        }
        else if (this.state.currentProduct.price === 0) {
            alert("Please enter a valid price");
            valid = false;
        }
        return valid;
    }

    handleProductForm = (e) => {
        e.preventDefault();
        if (!this.validateForm()) {
            return;
        }
        this.state.editMode ? this.updateData(e) : this.addNewData()
    }

    addNewData = () => {
        this.setState({
            products: [...this.state.products, this.state.currentProduct],
            currentProduct: new ProductModel()
        })
    }

    updateData = (e) => {
        e.preventDefault();
        const { products } = this.state;
        let itemIndex = this.state.products.findIndex((item => item.id === this.state.currentProduct.id));
        products[itemIndex] = this.state.currentProduct;
        this.setState({
            products: [...products],
            currentProduct: new ProductModel()
        })
    }

    onProductValueChanged = (e) => {
        let name = e.target.name
        let value = e.target.value
        let updatedProduct = { ...this.state.currentProduct }
        updatedProduct[name] = value
        this.setState({
            currentProduct: updatedProduct
        })
    }

    editProduct = (e, productData) => {
        e.preventDefault();
        this.setState({
            currentProduct: productData,
            editMode: true
        })
    }

    cancelOperation = (e) => {
        e.preventDefault();
        this.setState({
            currentProduct: new ProductModel(),
            editMode: false
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-12 padded-content">
                        <ProductForm
                            handleProductForm={this.handleProductForm}
                            currentProduct={this.state.currentProduct}
                            onProductValueChanged={this.onProductValueChanged}
                            onCancel={this.cancelOperation}
                            editMode={this.state.editMode} >
                        </ProductForm>
                    </div>
                    <div className="col-md-7 col-12 padded-content">
                        <ProductData
                            products={this.state.products}
                            onEditProduct={this.editProduct} >
                        </ProductData>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
