import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Dropdown.scss";

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            selected: null
        }
    }

    handleOpenDropdown = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleSelectOption = (option) => {
        this.setState({
            selected: option,
            isOpen: false
        });
    }

    getOptions = () => {
        return this.props.options.map((option) => {
            return <Option option={option} onSelect={this.handleSelectOption} />
        })
    }

    render() {
        let optionsList = this.getOptions();
        let selected = this.state.selected ? this.state.selected.value : this.props.defaultLabel;
        let openClass = this.state.isOpen ? 'is-open' : '';

        return (
            <div className={`ter-dropdown ${openClass}`} onClick={this.handleOpenDropdown}>
                <span className="ter-dropdown__selected">{selected}</span>
                <ul className="ter-dropdown__options-list">
                    {optionsList}
                </ul>
            </div>
        )
    }
}

const Option = props => {
    const onSelect = (event) => {
        event.preventDefault()
        props.onSelect(props.option)
    }
    
    return (
        <li className="ter-dropdown__options-list-item" onClick={onSelect} key={props.option.key}>{props.option.value}</li>
    )
}

export default Dropdown;

Dropdown.propTypes = {
    defaultLabel: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.number.isRequired,
          value: PropTypes.string.isRequired,
        })
      ).isRequired
  };