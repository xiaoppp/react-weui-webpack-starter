import React from 'react'

import 'weui'
import 'react-weui/lib/react-weui.min.css'

import { Link } from 'react-router'

import Page from '../component/page'
import Accordion from '../component/accordion'

import HomeView from './home'
import InfoView from './info_edit'
import DetailView from './detail_edit'

import '../index.less'
import IconForm from '../images/icon_nav_form.png'
import IconNav from '../images/icon_nav_nav.png'
import IconZIndex from '../images/icon_nav_z-index.png'

export default class IndexPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<HomeView />)
    }
}
