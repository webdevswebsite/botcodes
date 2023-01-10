import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'

class ServiceOne extends Component {

    render() {

        var ServiceData = this.props.ServiceData;

        return (
            <section className="services-wrap section-padding pt-0" id="service">
                <div className="container">
                    
                <SectionTitle Title="The Latest Hosting Server Technology"  Titlep="We Provide Online Solutions For Businesses And Individuals" />  

                    <div className="row">

                    {
                        ServiceData.serviceBoxItem.map(item=> {
                            return(
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12" key={item.id} >
                                <div className="single-service-box" data-aos="fade-up" data-aos-duration={800}>
                                    <div className="service-icon">
                                        <img src={require (`../../assets/img/services/${item.imgUrl}`)} alt="klaud" />
                                    </div>
                                    <h4>{item.title}</h4>
                                    {/* <p>{item.text}</p> */}
                                </div>
                            </div>
                            )
                        })
                    }

                    </div>
                </div>
            </section>
        )
    }
}

export default ServiceOne
