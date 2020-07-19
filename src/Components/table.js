import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise'
import plus from '../images/plus.png';
import Modal from '../Components/Modal';
import { Container, Col, Row, InputGroup } from 'react-bootstrap';

export default class table extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          columnDefs: [
            {
              headerName:'Things to do',
              field: 'things',
              rowDrag: true,
              enableCheckBox:true,
              width: 400,
              pinned:"left"
              
            },
            { 
              field: 'due',
              rowDrag: true },
            {
              field: 'owner',
              width: 100,
              rowDrag: true
            },
            { 
              field: 'status',
              rowDrag: true
            },
            { 
              field: 'priority',
              rowDrag: true
            }
            
          ],
          defaultColDef: {
            width: 170,
            sortable: true,
            filter: true,
            editable:true,
          },
        
          rowData:  [
            { things: "Work1", due: "Jan 20", owner: 'teja' ,status:"Working on it",priority:"Urgent"},
            { things: "Work2", due: "Feb 16", owner: "teja",status:"stuck",priority:"Low"},
            { things: "Work3", due: "March 08", owner: "teja",status:"Waiting for Review",priority:"Medium" },
            { things: "Work4", due: "April 12", owner: "teja",status:"Done",priority:"High" },
            { things: "Work5", due: "May 05", owner: "teja",status:"Working on it",priority:"Low" },       
          ],
        };
      }

      addCol = () => {
        const { columnDefs } = this.state;
        const newCol = {
          field:'NewCol',
          rowDrag:true
        }
        this.setState({
          columnDefs : [...columnDefs,newCol],
        });
      }

      addRow = () => {
        const {rowData} = this.state;
        const newRow = {
          things:'',
          due:'',
          owner:'',
          status:'',
          priority:'',
        }
        this.setState({
          rowData : [...rowData,newRow],
        });
      }

      buttonName = (e) => {
        console.log(e);
        this.addCol();
      }

    render() {
        return (
          <React.Fragment style={{display:'flex'}}>
            <Container>
              <Row>
                <Col span={12}>
                  <img src={plus} className="plus" alt="add-cols-here" onClick={e => this.buttonName(e.target.name)} style={{width:'3%',marginLeft:'1100px'}} />
                </Col>
                <Col span={12}>
                  <div className="ag-theme-alpine" style={ {height: '300px', width: '1000px',marginTop:'-44px',marginLeft:'-6px'} }>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        defaultColDef={this.state.defaultColDef}
                        rowDragManaged={true}
                        animateRows={true}
                        onGridReady={this.onGridReady}
                        rowData={this.state.rowData}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <img src={plus} className="plus" alt="add-cols-here" onClick={this.addRow} style={{width:'3%',marginRight:'670px'}} />
                </Col>
              </Row>
            </Container>
          </React.Fragment>  
          );
    }
}
