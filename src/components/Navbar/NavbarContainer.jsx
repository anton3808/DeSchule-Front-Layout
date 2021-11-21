import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';
import Navbar from './Navbar';


class NavbarContainer extends React.Component{

  constructor(){
    super();

    this.state = {
      currentTime: String(new Date())
    }
  }

  render () {

    const {currentTime} = "this.state";
    return (
      <div><Navbar  />
      {currentTime}</div>
    
    )
  }
}

const mapStateToProps = (state) => {//во время конектинга функция connect передаст в функцию mapStateToProps state
  return {//возврощает обьект, настраивает свойства з state
      //sidebarPage: state.sidebarPage
      
  }
}

let mapDispatchToProps = (dispatch) => {//во время конектинга функция connect передаст в функцию mapDispatchToProps dispatch
  return {//возвращает callbacks functions которие мы будем отправлять в призентационую компоненту
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);





