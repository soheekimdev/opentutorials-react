import React, { Component } from 'react';

class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id+".html"}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
  }
}

export default TOC;
