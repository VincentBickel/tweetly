import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Tweetbox.css';

class TweetBox extends Component {
    static propTypes = {
        publish: PropTypes.func.isRequired
    }
    state = {
        value: "",
    }
    

    handleChange = (e) => {
        let value = e.target.value
        this.setState({value})
    }

    handleSubmit = () => {
        const {publish}= this.props
        const {value} = this.state
        
        if(value.length <= 140){
            publish(value)
            this.setState({ value: '' })
        }
    }


    render() {
        const {value} = this.state

        return(
            <div>

                <h1>TweetBox</h1>

                <textarea
                    rows={5}
                    cols={50}
                    value={this.state.value}
                    onChange={this.handleChange}
                    className={value.length > 140 && 'alert'}
                />
            
                <span>{140 - value.length}</span>
                <button
                disabled={!value.length || value.length > 140}
                onClick={this.handleSubmit}>Tweet</button>

            </div>
        )
    }
};

export default TweetBox;