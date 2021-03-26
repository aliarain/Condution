import { IonContent, IonPage, IonSplitPane, IonMenu, IonText, IonIcon, IonMenuButton, IonRouterOutlet, IonMenuToggle, isPlatform } from '@ionic/react';
//import { chevronForwardCircle, checkmarkCircle, filterOutline, listOutline, bicycle } from 'ionicons/icons';
import React, { Component } from 'react';
import './Perspectives.css'
import './Pages.css';
import ReactTooltip from 'react-tooltip';
import { withRouter } from "react-router";

import BlkArt from './Components/BlkArt';

import Task from './Components/Task';
import PerspectiveEdit from './Components/PerspectiveEditor';

import Perspective from "../backend/src/Objects/Perspective";

import Spinner from './Components/Spinner';

const autoBind = require('auto-bind/react');



/* 
 * To sort, we give our tasks tags
 *
 * We can also give them flags
 * 
 * With perspectives we filter,
 *
 * To keep our tasks in kilter,
 *
 * Then refactor the code if it lags!
 *
 *
 * @enquirer
 *
 */


class Perspectives extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initialRenderingDone: false,
            perspectiveObject: null,
            taskList:[]
        };


        this.updatePrefix = this.random();
        this.repeater = React.createRef(); // what's my repeater? | i.. i dont know what this does...


        // AutoBind!
        autoBind(this);
    }
    showEdit() {
        this.setState({showEdit: true})
    } // util func for showing repeat
    hideEdit() {
        this.setState({showEdit: false});
    } // util func for hiding repeat

    componentWillUnmount() {
    }

    async refresh() {
        console.log("hewo", this.props);
        let perspective = await Perspective.fetch(this.props.cm, this.props.id);
        let tasks = await perspective.execute();

        console.log(tasks);

        this.setState({
            perspectiveObject: perspective,
            taskList: tasks,
            initialRenderingDone: true
        });
    }

    updateName(e) {

    } 


    handleDelete() {
         
    }

    componentDidMount() {
        this.refresh()
    }

    componentDidUpdate(prevProps, prevState, _) {
        if (prevProps.id !== this.props.id) 
            this.refresh();
    }

    random() { return (((1+Math.random())*0x10000)|0).toString(16)+"-"+(((1+Math.random())*0x10000)|0).toString(16);}

    render() {
        return (
            <IonPage>
		{/* the perspective editor! */}
                {/*<PerspectiveEdit 
                    reference={this.repeater} 
                    isShown={this.state.showEdit} 
                    onDidDismiss={this.hideEdit}
                    uid={this.props.uid} 
                    engine={this.props.engine} 
                    gruntman={this.props.gruntman}
                    id={this.props.id}
                    perspectiveName={this.state.perspectiveName}
                    query={this.state.perspectiveQuery}
                    avail={this.state.perspectiveAvail}
                    tord={this.state.perspectiveTord}
                    menuRefresh={this.props.menuRefresh}
                    updateName={this.updateName}
                    startHighlighted={this.props.options === "do"}
                />*/}
                <div className={"page-invis-drag " + (()=>{
                    if (!isPlatform("electron")) // if we are not running electron
                        return "normal"; // normal windowing proceeds
                    else if (window.navigator.platform.includes("Mac")){ // macos
                        return "darwin"; // frameless setup
                    }
                    else if (process.platform === "win32") // windows
                        return "windows"; // non-frameless
                    else 
                        return "windows"; // ummm, it does not know about windows pt.n
                })()}>&nbsp;</div>
                <div className={"page-content " + (()=>{
                    if (!isPlatform("electron")) // if we are not running electron
                        return "normal"; // normal windowing proceeds
                    else if (window.navigator.platform.includes("Mac")){ // macos
                        return "darwin"; // frameless setup
                    }
                    else if (process.platform === "win32") // windows
                        return "windows"; // non-frameless
                    else 
                        return "windows"; // ummm, it does not know about windows pt.n
                })()}>

		    <div className="header-container" >
                        <div style={{display: "inline-block"}}>
                            <div> 
                                <IonMenuToggle>
                                    <i className="fas fa-bars" 
                                        style={{marginLeft: 20, color: "var(--page-header-sandwich)"}} />
                                </IonMenuToggle> 
                                <h1 className="page-title">
                                    <i style={{paddingRight: 10}} 
                                        className="fas fa-layer-group">
                                    </i>
                                    <input className="editable-title" 
                                        onChange={(e)=> {e.persist(); this.updateName(e)}}
                                        value={this.state.perspectiveName} // TODO: jack this is hecka hacky
                                    />
                                </h1> 
                                {/*<ReactTooltip effect="solid" offset={{top: 3}} backgroundColor="black" className="tooltips" />*/}

                                <div className="greeting-container" style={{marginLeft: 11, marginTop: 7, marginBottom: 5}}>
                                    <a 
                                        onClick={this.showEdit} 
                                        data-tip="LOCALIZE: Edit"
                                        className="perspective-icon" 
                                        style={{borderColor: "var(--task-icon-ring)", cursor: "pointer"}}>
                                        <i className="fas fa-edit" 
                                            style={{margin: 3, color: "var(--task-icon-text)", 
                                                fontSize: 10, 
                                                transform: "translate(2px, -2px)"}} 
                                        ></i>
                                    </a>

                                    <a 
                                        onClick={this.handleDelete} 
                                        data-tip="LOCALIZE: Delete"
                                        className="perspective-icon" 
                                        style={{borderColor: "var(--task-icon-ring)", 
                                            cursor: "pointer", marginLeft: 5}}>
                                        <i className="fas fa-trash"
                                            style={{margin: 3, color: "var(--task-icon-text)", 
                                                fontSize: 10, transform: "translate(2px, -2px)"}}>
                                        </i>
                                    </a>

                                </div> 
                            </div>
                        </div>
                    </div>

                    <div style={{marginLeft: 10, marginRight: 10, overflowY: "scroll"}}>
                        {this.state.taskList.map(i => {
                            return <div>{i.name}</div>
                        })};
                        <Spinner ready={this.state.initialRenderingDone} />
                        <BlkArt visible={this.state.initialRenderingDone} title={"Nothing in this perspective."} subtitle={"Add some more filters?"} />
                        <div className="bottom-helper">&nbsp;</div>
                    </div>
                </div>
            </IonPage>
        )
    }
}

export default withRouter(Perspectives);

