import React from 'react';
import {Route} from 'react-router-dom'
// import {connect} from 'react-redux'
// import {createStructuredSelector} from 'reselect'


// import SHOP_DATA from './shop.data.js'
import CollectionsOverview from  '../../components/collections-overview/CollectionsOverview.component'
import CollectionPage from '../collection/Collection.component'
const ShopPage = ({match}) =>  (      
    <div className="shop-page">            
        <Route path={`${match.path}`} exact={true}   component={CollectionsOverview}  />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>   
)


export default ShopPage