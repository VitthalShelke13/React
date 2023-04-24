import React, { Component } from 'react'
import {userContext,adminContext} from '../../AppV2'
export default class ClassB extends Component {
  render() {
    return (
    <>
    <div>ClassB</div>
    <userContext.Consumer>
        {
            (myuser)=>{
                return(
                    <>
                    <adminContext.Consumer>
                        {
                            (myadmin)=>{
                                return(
                                    <>
                                    <div>classB- username:{myuser.name}</div>
                                    <div>classB- userrole:{myuser.Role}</div>
                                    <div>classB- adminName:{myadmin.name}</div>
                                    <div>classB- adminRole:{myadmin.Role}</div>
                                    </>
                                )
                            }
                        }
                    </adminContext.Consumer>
                    </>
                )
            }
        }
    </userContext.Consumer>
    
    </>
      
    
    )
  }
}
