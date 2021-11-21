import React from 'react';
import Cabinet from './Cabinet';



class CabinetContainer extends React.Component{

  render() {//рендер
    return (
      <Cabinet {...this.props}  />//передаем все props(розкукоживаем их используя спред оператор)
    )
  }

}



export default CabinetContainer



