import React, { Component } from "react";

import { motion } from 'framer-motion'

export default class ContactAirtableForm extends Component {

    constructor(props) {
        super(props);
        this.contactBox = React.createRef(); // use ref to create our element
    }

    componentDidMount() {
        let scriptE2 = document.createElement("script");
        scriptE2.setAttribute("src", "https://static.airtable.com/js/embed/embed_snippet_v1.js");
        console.log(this.contactBox)
        // this.contactBox.current.appendChild(scriptE2);
    }

    render() {
        return (
            <div style={{ width: '100%' }} id="contacts">
            <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            >
                <iframe className="airtable-embed airtable-dynamic-height border rounded-lg" 
                src="https://airtable.com/embed/shreimpqukyiwrqHw?backgroundColor=purple" 
                frameBorder="0"  
                width="100%" height="794" 
                style={{background: 'transparent', border: '1px solid #ccc'}}
                >
            </iframe>
            </motion.div>
            </div>
        )
    }
}