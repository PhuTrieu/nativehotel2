import React, { Component } from 'react'
import NavTop from '../Navigation/NavTop';
import Carousel from '../Carousel/CarouselImg';
import Footer from '../Footer/Footer';
import RoomInfo from '../RoomInfo/RoomInfo';
import SlickSlider from '../SlickSlider/SlickSlider';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state={
            idLP: this.props.match.params.id
        }
    }
    
    // componentWillMount(){
    //     this.setState({
    //         idLP: this.props.match.params.id
    //     })
    // }

    static getDerivedStateFromProps(props, state){
        console.warn('room click hook: ', props, state);
        return {idLP: props.match.params.id};
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        console.warn('room click: ', this.state.idLP);
        return (
            <>
                <NavTop />
                <div style={{ marginTop: "7vh" }}/>
                <div className="another-page-carousel" style={{ height: '60vh', overflow: 'hidden'}}>
                    <Carousel/>
                </div>
                <RoomInfo idLP = { this.state.idLP}/>
                <SlickSlider/>
                <Footer/>
            </>
        )
    }
}
