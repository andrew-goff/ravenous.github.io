//The component that displays the individual fields in the business array for each business
import './businessList.css';
import './App.css';
import pizza from './image/pizza.jpg';
import {business1} from './business.js';
import {business2} from './business.js';
import React  from 'react';
import ReactDOM from 'react-dom';

//const businessList = ['Papa Jons Pizzeria', '23 Darlington Street', 'Albany', 'NY', '12123', 'Takeaway', 4 , 15];
//const businessList2 = ['Pizzeria', '124 Main Street', '', 'NY', '', 4, 66];

class BusinessList extends React.Component {
    //const business1items = businessList.map((business1Item => business1Item))
    //const business2items = businessList2.map((business2Item => business2Item))    
    render(){
      return(
        <div className="content-box">
            <p className="Businesslist-p"><img src={'https://content.codecademy.com/programs/react/ravenous/pizza.jpg'} className="business1-logo" alt="logo" /></p>
            <p className="Businesslist-p">{this.props.name}</p>
            <p className="Businesslist-p">{this.props.address}</p>
            <p className="Businesslist-p">{this.props.city}</p>
            <p className="Businesslist-p">{this.props.state}</p>
            <p className="Businesslist-p">{this.props.zipcode}</p> 
            <p className="Businesslist-p">{this.props.rating}</p>
            <p className="Businesslist-p">{this.props.reviewcount}</p>
        </div>  
    );  
    }
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <BusinessList />;
root.render(element);
export default BusinessList;