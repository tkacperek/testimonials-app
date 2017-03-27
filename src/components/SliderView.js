import React from 'react'

const SliderView = (props) => {
    const sliderCode = `<div id="embed">${props.params.name}</div>` +
        `<script async defer src="${window.location.origin}/static/js/embed.js">` +
        '</script>'
    return (
        <div>
            <h3>Get slider</h3>
            <p>Copy this code to your website:</p>
            <textarea cols="32" rows="4" defaultValue={sliderCode} />
        </div>
    )
}

SliderView.propTypes = {
    params: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
    }).isRequired,
}

export default SliderView
