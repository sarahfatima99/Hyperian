import React, { useState } from 'react'
import DialogSelect from './DialogSelect'
import {
	TabContent, TabPane, Nav,
	NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';

function NavTabs() {

	// State for current active Tab
	const [currentActiveTab, setCurrentActiveTab] = useState('1');

	// Toggle active state for Tab
	const toggle = tab => {
		if (currentActiveTab !== tab) setCurrentActiveTab(tab);
	}

	return (
		<div >
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({
							active:
								currentActiveTab === '1'	}   ,
                                'tab-nav-link')} 
						onClick={() => { toggle('1'); }}
					>
						Logic
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active:
								currentActiveTab === '2'
						},'tab-nav-link')}
						onClick={() => { toggle('2'); }}
					>
						Design
					</NavLink>
				</NavItem>
			
			</Nav>
			<TabContent activeTab={currentActiveTab}>
				<TabPane tabId="1">
					<Row>
						<Col sm="12">
							<h5 className='logic-heading' >Branching and Conditions</h5>
                            <div className='dialogue-box'>
                            <DialogSelect/>
                            </div>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="12">
							<h5>Sample Tab 2 Content</h5>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="3">
					<Row>
						<Col sm="12">
							<h5>Sample Tab 3 Content</h5>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</div >
	);
}

export default NavTabs;
