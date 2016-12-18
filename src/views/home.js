import React from 'react'

import 'weui'
import 'react-weui/lib/react-weui.min.css'

import { Link } from 'react-router'

import Page from '../component/page'
import Accordion from '../component/accordion'
import {
        MediaBox,
        MediaBoxHeader,
        MediaBoxTitle,
        MediaBoxBody,
        MediaBoxInfo,
        MediaBoxDescription,
        MediaBoxInfoMeta,
        Panel,
        PanelHeader,
        PanelBody,
        PanelFooter, Flex, FlexItem, Cells, Cell, CellsTitle, CellBody, CellMore, CellFooter} from 'react-weui'

import '../index.less'
import IconForm from '../images/icon_nav_form.png'
import IconNav from '../images/icon_nav_nav.png'
import IconZIndex from '../images/icon_nav_z-index.png'

export default class HomePage extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <Page className="home" title="首页" spacing>
                <Panel>
                    <PanelHeader>
                        主要信息
                    </PanelHeader>
                    <PanelBody>
                        <MediaBox type="text">
                            <MediaBoxTitle></MediaBoxTitle>
                            <MediaBoxDescription>
                            </MediaBoxDescription>
                            <MediaBoxInfo>
                                <MediaBoxInfoMeta>WeUI</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>2016-8-8</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>More</MediaBoxInfoMeta>
                            </MediaBoxInfo>
                        </MediaBox>
                    </PanelBody>
                </Panel>
                <Panel>
                    <CellsTitle>nav</CellsTitle>
                    <Cells>
                        <Cell component={Link} to='/info' access>
                            <CellBody>
                                info
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell component={Link} to='/detail' access>
                            <CellBody>
                                detail
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                    </Cells>
                </Panel>
            </Page>
        )
    }
}
