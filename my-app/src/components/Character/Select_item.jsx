import React from 'react';
import './Select_item.css'
import Take from '../Take'
const Select_item = (props) => {
  let i = -1;
const params = (props.params).map((param) => (i++, (props.values[i] == '' ? <span className="select_hide"></span> : <tr><td className="select_table_space"></td><td>{param}</td><td className="select_table_space"></td><td className="select_table_space"></td><td>{props.values[i]}</td></tr>)));
  //params += props.params[(props.params).length - 1]

  return (
    <div className="select_item">
      <div className="select_item_name">
        {props.name}
      </div>
      <div className="select_item_grid">
        <div className="select_item_img">
          <img src={require(`../../img/${props.img}.png`)}></img>
        </div>
        <div className="select_item_desc">
          <table>
              {params}
          </table>
        </div>
      </div>
      <div className="select_item_btn">
        <button onClick="Take()">Take this</button>
      </div>
    </div>
    );
}

export default Select_item;