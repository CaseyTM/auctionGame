import React, {Component} from 'react';

class Navbar extends Component{
	render(){
		return(	
			<div className="container-fluid">
				<div className="navbar col-xs-12" id="navbar">
					<div className="col-xs-2" id="logo">
						Logo
					</div>
				   	<div className="input-group col-xs-4">
						<form className="navbar-form" role="search">
					    	<input className="form-control" placeholder="Search..." name="srch-term" id="srch-term" type="text" />		
							<button className="btn btn-default btn-lg" type="submit"></button>
						</form>
				   	</div>
					<div className="col-xs-2 dropDown-menu">
						Menu
					</div>
				</div>
			</div>					
		)
	}
}

export default Navbar;