import React from "react";
import BusinessList from "./businessList";
import './businessList.css';

 class BusinessApp extends React.Component {
    render(){
      return(  
        <div>
            <BusinessList name={this.props.businessObject.name} address={this.props.businessObject.address} city={this.props.businessObject.city} state={this.props.businessObject.state} zipcode={this.props.businessObject.zipcode} rating={this.props.businessObject.rating} reviewcount={this.props.reviewcount}/>
        </div>    
      )
    }
}

export default BusinessApp;