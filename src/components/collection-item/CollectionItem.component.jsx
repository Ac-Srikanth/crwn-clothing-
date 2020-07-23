import React from 'react'
import CustomButton from '../custom-button/CustomButton.component'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'

import './collectionItem.styles.scss'


const CollectionItem = ({item, addItem}) => (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}>
        </div>
        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted>Add to cart</CustomButton>   
    </div>
)

const mapStateToProps = (dispatch) => ({
    addItem:item =>dispatch(addItem(item))
})

export default connect(null, mapStateToProps)(CollectionItem)