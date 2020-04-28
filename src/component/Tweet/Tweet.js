import React, { Component } from "react";
import PropTypes from 'prop-types';
import  FontAwesome  from 'react-fontawesome';
import moment from 'moment';


class Tweet extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        remove: PropTypes.func.isRequired,
        date: PropTypes.string
    }

    static defaultProps = {
        date: moment().format('DD-MM-YYYY')
    }

    state = {
        isFocus: false
    }

    handleFocus = (e) => {
        const type = e.type;
        this.setState({isFocus: type === 'mouseenter'})
    }


    render() {
        let {isFocus} = this.state
        const { username, fullname, date, content, index, remove } = this.props

        return(
            <ul>
                <li>{username}</li>
                <li>{fullname}</li>
                <li>{content}</li>
                <li>{date}</li>
                
                {username === 'koto' && (
                <FontAwesome
                    name={isFocus ? 'trash' : 'trash-o'}
                    onMouseEnter={this.handleFocus}
                    onMouseLeave={this.handleFocus}
                    onClick={()=> remove(index)}
                />)}
            </ul>
        )
    };
}

export default Tweet;