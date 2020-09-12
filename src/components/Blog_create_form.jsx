import React from 'react'

function Blog_create_form() {
    return (
        <div style={{padding:"40px"}}>
            <form>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname"/>
                </div>
                <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <input type="text" className="form-control" id="branch"/>
                </div>
                <div className="form-group">
                    <label htmlFor="emailaddress">Email address</label>
                    <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br/>
                <div>
                    <button type="button" className="btn btn-primary"> Validate </button>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="key">Key</label>
                    <input type="password" className="form-control" id="key" />
                    <small id="emailHelp" className="form-text text-muted">Please check your email.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" className="form-control" id="title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Blog Body</label>
                    <textarea type="text" className="form-control" id="title" rows="10" placeholder="Write here......" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Blog_create_form
