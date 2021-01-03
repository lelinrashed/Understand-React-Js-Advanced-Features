import React, { Component } from 'react'
import { newsCategory } from '../news'

class Header extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = event => {
        // TODO: implement letter
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleKeyPress = event => {
        // Todo: implement letter
    }

    render() {
        const { category, changeCategory } = this.props
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{ fontWeight: '300' }}>
                    Block Buster Headlines
                </h1>
                <input
                    type="search"
                    className="form-control"
                    placeholder="Type anything and press Enter to search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="my-4">
                    {newsCategory && Object.keys(newsCategory).map(item => {
                        if (category === newsCategory[item]) {
                            return (
                                <button onClick={() => changeCategory(newsCategory[item])} className='btn btn-sm btn-warning mb-2 mr-2'>
                                    {`#${newsCategory[item]}`}
                                </button>
                            )
                        }
                        return (
                            <button onClick={() => changeCategory(newsCategory[item])} className='btn btn-sm btn-light mb-2 mr-2'>
                                {`#${newsCategory[item]}`}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Header
