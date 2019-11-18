import React, { Component } from 'react'
import {shipmentService} from '../services/shipmentService'
import TopNav from './topNav'

export class dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             tableData:[],
             stepperData:[]
        }
    }

    async componentDidMount(){
        const userCredentials = {
            "email": "mayankmittal@intugine.com"
        }
        const shipmentData = await shipmentService.shipmentData(userCredentials);

        const formattedData = {

        }

        shipmentData.data.data.map((slice)=>{
            
            if(slice.current_status_code in formattedData){
                formattedData[slice.current_status_code].count++ ;
                formattedData[slice.current_status_code].data.push(slice) 
            }else{
                formattedData[slice.current_status_code] = {
                    count:0,
                    data:[],
                    class: slice.current_status_code === 'DEL' ? `square_active` : `square`
                };
                formattedData[slice.current_status_code].count++ ;
                formattedData[slice.current_status_code].data.push(slice)
            }
        })

        

        this.setState({
            data : formattedData,
            tableData : formattedData.DEL.data,
            stepperData : formattedData.DEL.data[0].scan
        })
        
    }

    stepperHandler = (data)=>{
        this.setState({
            stepperData : data
        })
    }

    statusClickHandler (ev) {
        let classMan = {...this.state.data}
        Object.keys(classMan).map((slice)=>{
            slice === ev ? classMan[slice].class = `square_active` : classMan[slice].class = `square`;;
        })

        this.setState({
            tableData : this.state.data[ev].data,
            stepperData : this.state.data[ev].data[0].scan
        })
    }
    
    render() {
        const data = this.state.tableData;
        const stepperData = this.state.stepperData !== undefined ? this.state.stepperData : [];
        const StatusCount = this.state.data !== undefined ? this.state.data : [];
        return (
            <div>
                <TopNav/>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col s3 m3">

                    </div>
                        {
                            Object.keys(StatusCount).map((slice)=>{
                                return(
                                    <div id={slice} key={slice} className="col s1 m1" >
                                        <div className={this.state.data[slice].class} onClick={()=>this.statusClickHandler(slice) } ref={slice}>
                                            <p className="status_code" ref={slice}>{slice}</p>
                                            <p className="order_count" ref="here">{this.state.data[slice].count}</p>
                                        </div>  
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="row">
                        <div className="col s3 m3 stepper_holder" >
                        <div className="step" style={{paddingTop:`15px`}}>
                                <div>
                                    <div className="icon_circle">
                                    <svg className="destination" id="Group_13" data-name="Group 13" xmlns="http://www.w3.org/2000/svg" width="21.537" height="28.592" viewBox="0 0 21.537 28.592">
                                    <path id="Path_21" data-name="Path 21" d="M1424.068,641.873a.9.9,0,0,1-.9-.9v-26.8a.9.9,0,0,1,1.24-.829l19.743,8.164a.9.9,0,0,1,.019,1.649l-17.405,7.682a.9.9,0,0,1-.724-1.64h0l15.486-6.834-16.565-6.848v25.462A.9.9,0,0,1,1424.068,641.873Z" transform="translate(-1423.172 -613.281)" fill="#030504"/>
                                    </svg>

                                    </div>
                                    <div className="fl_line"></div>
                                </div>
                                <div>
                                    <div className="title" style={{marginBottom:`80px`}}> </div>
                                    <div className="body" style={{border:`none`}}></div>
                                </div>
                                
                            </div>
                            {
                              stepperData.map((slice, index)=>{
                                  const Style = slice.location === `Consignment Out for Delivery` ? `body row delivered` : `body row`;
                                return(
                                    <div className="step" key={index}>
                                        <div>
                                            <div className="circle"></div>
                                            <div className="line"></div>
                                        </div>
                                        <div>
                                            <div className={Style}>
                                                <div className="col s7 m7">
                                                    {slice.location}
                                                </div>
                                                <div className="col s3 m3">
                                                    {new Date(slice.time).getDate() + '-' + (new Date(slice.time).getMonth()+1) + '-' + new Date(slice.time).getFullYear()}
                                                </div>
                                                <div className="col s2 m2">
                                                    { (new Date(slice.time).getHours() < 10 ? `0`+new Date(slice.time).getHours() : new Date(slice.time).getHours()) + ':' + (new Date(slice.time).getMinutes() < 10 ? `0`+new Date(slice.time).getMinutes() : new Date(slice.time).getMinutes())}
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                              })  
                            }
                            <div className="step" style={{marginBottom: `15px`}}>
                                <div>
                                    <div className="icon_circle">
                                        <svg className="warehouse" xmlns="http://www.w3.org/2000/svg" width="22.467" height="26.849" viewBox="0 0 22.467 26.849">
                                            <g id="warehouse" transform="translate(412.14 -420.613)">
                                                <path id="Path_209" data-name="Path 209" d="M21.942,14.789a.524.524,0,0,0,.524-.524V6.329a.524.524,0,0,0-.274-.461L11.483.063a.525.525,0,0,0-.5,0L.274,5.868A.524.524,0,0,0,0,6.329v20a.524.524,0,0,0,.524.524H21.942a.524.524,0,0,0,.524-.524V18.982a.524.524,0,0,0-1.049,0V25.8h-4.43V19.573a1.683,1.683,0,0,0-.4-1.088,1.43,1.43,0,0,0,.4-.99V11.4a1.436,1.436,0,0,0-1.435-1.435H6.914A1.436,1.436,0,0,0,5.479,11.4v6.1a1.43,1.43,0,0,0,.4.99,1.684,1.684,0,0,0-.4,1.087V25.8H1.049V6.641l10.185-5.52,10.185,5.52v7.624a.524.524,0,0,0,.524.524ZM10.049,11.011h2.369v3.274l-.939-.5a.525.525,0,0,0-.492,0l-.938.5ZM6.528,11.4a.386.386,0,0,1,.386-.386H9v4.146a.524.524,0,0,0,.77.463l1.463-.777,1.463.777a.524.524,0,0,0,.77-.463V11.011h2.086a.386.386,0,0,1,.386.386v6.1a.387.387,0,0,1-.386.386H6.914a.387.387,0,0,1-.386-.386Zm5.89,7.533V22.2l-.939-.5a.524.524,0,0,0-.492,0l-.939.5V18.93Zm-5.89.642a.643.643,0,0,1,.642-.642H9v4.146a.524.524,0,0,0,.77.463l1.463-.777,1.463.777a.524.524,0,0,0,.77-.463V18.93H15.3a.643.643,0,0,1,.642.642V25.8H6.528Zm0,0" transform="translate(-412.14 420.613)"/>
                                                <path id="Path_210" data-name="Path 210" d="M57.747,51.214a.523.523,0,0,1-.25-.064l-8.361-4.532L40.774,51.15a.524.524,0,0,1-.5-.922l8.611-4.668a.524.524,0,0,1,.5,0L58,50.228a.524.524,0,0,1-.25.986Zm0,0" transform="translate(-450.042 377.502)"/>
                                                <path id="Path_211" data-name="Path 211" d="M408.961,307.887a.524.524,0,1,1,.514-.422A.529.529,0,0,1,408.961,307.887Zm0,0" transform="translate(-799.158 129.865)"/>
                                            </g>
                                        </svg>

                                    </div>
                                    <div className="line"></div>
                                </div>
                                <div>
                                  
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="col s8 m8">
                            <table>
                                <thead>
                                    <th>AWB NUMBER</th>
                                    <th>TRANSPORTER</th>
                                    <th>SOURCE</th>
                                    <th>DESTINATION</th>
                                    <th>BRAND</th>
                                    <th>START DATE</th>
                                    <th>ETD</th>
                                    <th>STATUS</th>
                                </thead>
                                <tbody>
                                    {
                                        data.map((slice)=>{
                                            return(
                                                <tr key={slice._id} onClick={()=>this.stepperHandler(slice.scan)}>
                                                    <td>{slice.awbno}</td>
                                                    <td>{slice.carrier}</td>
                                                    <td>{slice.from}</td>
                                                    <td>{slice.to}</td>
                                                    <td>{slice.order_data}</td>
                                                    <td>{new Date(slice.pickup_date).getDate() + '/' + (new Date(slice.pickup_date).getMonth()+1) + '/' + new Date(slice.pickup_date).getFullYear()}</td>
                                                    <td>{new Date(slice.time).getDate() + '/' + (new Date(slice.time).getMonth()+1) + '/' + new Date(slice.time).getFullYear()}</td>
                                                    {
                                                        slice.current_status !== `Delivered`?
                                                        <td>{slice.current_status}</td>:
                                                        <td style={{color:`#2BD564`}}>{slice.current_status}</td>
                                                    }
                                                    
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
    
                    </div>

                </div>
            </div>
        )
    }
}

export default dashboard
