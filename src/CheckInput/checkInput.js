import React from 'react';
const MAX_TEXT_LENGTH = 15;
class CheckInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            message: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleOnKeyPress(e) {
        if (e.charCode === 13) {
            let message = '';
            const { content } = this.state;
            if (content.length > 0 && content.length <= MAX_TEXT_LENGTH) {
                message = 'Nội dung hợp lệ.'
            } else if (content.length > MAX_TEXT_LENGTH) {
                message = 'Nội dung quá dài, vui lòng đảm bảo nội dung nhỏ hơn hoặc bằng 15 ký tự'
            }
            this.setState({
                message,
            })
        }
    }

    render() {
        const { content } = this.state;
        return (
            <div>
                <h3>Nội dung</h3>
                <input
                    value={content}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleOnKeyPress}
                    name="name"
                    placeholder="Nhập nội dung"
                    data-testid="input_name"
                />
                {this.state.message && (<div className="error_message">
                    <h3 data-testid="error_message">{this.state.message}</h3>
                </div>)}
            </div>
        )
    }
}

export default CheckInput;