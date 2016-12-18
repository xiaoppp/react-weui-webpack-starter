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

export default class InfoPage extends React.Component {

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
            <Page className="input" title="detail">
                <CellsTitle>detail</CellsTitle>

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
