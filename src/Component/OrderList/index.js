import React, { Component } from 'react';
import OrderItem from '../OrderItem'

export default class OrderList extends Component {
    constructor (props) {
      super(props)
      this.state = {
        data: []
      }
    }
    componentDidMount() {
      fetch("/mock/order.json").then(res => {
        if (res.ok) {
          res
            .json()
            .then(data => {
              console.log(data);
              this.setState({
                data
              })
            })
        }
      });
    }
    render() {
      return (
        <div>
          {
            this.state.data.map(e => { // 一定要return 因为这个是js 第一要加key值
              return <OrderItem key={e.id} data={e} onSubmit= {this.handleSumbit} />
            })
          }
        </div>
      );
    }
    handleSumbit = (id, comment, stars) => {
   
      
      let data = this.state.data
      data.map(e => {
        if (e.id === id) {
          e.comment = comment
          e.stars = stars
          e.ifCommented = true
        }
      })
      this.setState({
        data
      })
    }
  }