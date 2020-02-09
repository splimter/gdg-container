import React, {Component} from "react";
import HeadLine from "./HeadLine";
import Main from "./Main";
import Guidance from "./Guidance";
import NavFooter from "../../components/navigation/NavFooter";

class AboutPage extends Component {
    state = {};

    render() {
        return (
            <>
                <HeadLine/>
                <div className="container mt-2 fluid">
                    <Main/>
                    <Guidance/>
                </div>
                <NavFooter/>

            </>
        );
    }
}

export default AboutPage;
