var React = require('react')
var Fragment = React.Fragment


const form = () =>
    <Fragment>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Bob Smith" id="name" type="text" className="validate" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="8" id="size" type="text" className="validate" />
                        <label htmlFor="size">Party Size</label>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="(###)### ####" id="phone" type="text" className="validate" />
                        <label htmlFor="phone">Phone</label>
                    </div>
                </div>
                <center>

                    <button id='addMe'>Reserve</button>
                </center>
            </form>
        </div>
    </Fragment>

module.exports = form