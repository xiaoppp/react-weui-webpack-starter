import React from 'react';

import 'weui';
import 'react-weui/lib/react-weui.min.css'

import {
    ButtonArea,
    Button,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Checkbox,
    Select,
    Agreement,
    Toptips
} from 'react-weui'
import Page from '../component/page'
import iconSrc from '../images/icon.png'
import vcodeSrc from '../images/vcode.jpg'
import avatarSrc from '../images/avatar.jpg'

export default class RegisterPage extends React.Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        console.log(this.state)

        if (this.state.showToptips)
            return;
        this.setState({
            showToptips: !this.state.showToptips
        })
        window.setTimeout(e => this.setState({
            showToptips: !this.state.showToptips
        }), 2000)
    }

    render() {
        return (
            <Page className="input" title="info">
                <CellsTitle>info</CellsTitle>

                <ButtonArea>
                    <Button
                        onClick={this.handleSubmit}>
                        ok
                    </Button>
                </ButtonArea>
            </Page>
        )
    }
}
