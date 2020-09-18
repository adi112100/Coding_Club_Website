import React, { useState } from 'react'
import Axios from 'axios'
import AdminView from './AdminView';
import loading from '../../media/loading.gif';
function Admin() {
    const [key, setKey] = useState('');
    const [blog, setBlog] = useState([]);
    const [placement, setPlacement] = useState([]);
    const [message, fetchMessage] = useState({ message: "", status: "none" });


    const submithandler = (e) => {
        e.preventDefault()
        fetchMessage({ ...message, message: "waiting for server response", status: "loading" })

        Axios.post("https://o1codingclub.herokuapp.com/blog/", { key: key }).
            then((response) => {

                setBlog(response.data)


                Axios.post("https://o1codingclub.herokuapp.com/placement/", { key: key }).
                    then((response) => {

                        fetchMessage({ ...message, message: "Successfully Signed in", status: "VALID" })
                        setPlacement(response.data)
                        setTimeout(() => { fetchMessage({ ...message, message: "Successfully Signed in", status: "DONE" }) }, 1000)
                    }).
                    catch(function (error) {

                        fetchMessage({ ...message, message: error.response.data, status: "INVALID" })
                    });





            }).
            catch(function (error) {

                fetchMessage({ ...message, message: error.response.data, status: "INVALID" })
            });



    }

    const updateadmin = () => {
        console.log("executed")
        //     Axios.post("https://o1codingclub.herokuapp.com/blog/", { key: key }).
        //     then((response) => {

        //         fetchMessage({ ...message, message: "Successfully Signed in", status: "VALID" })
        //         setBlog(response.data)

        //     }).
        //     catch(function (error) {

        //         fetchMessage({ ...message, message: error.response.data, status: "INVALID" })
        //     });

        // Axios.post("https://o1codingclub.herokuapp.com/placement/", { key: key }).
        //     then((response) => {

        //         fetchMessage({ ...message, message: "Successfully Signed in", status: "VALID" })
        //         setPlacement(response.data)
        //     }).
        //     catch(function (error) {

        //         fetchMessage({ ...message, message: error.response.data, status: "INVALID" })
        //     });

    }





    return (
        <>
            <div className={`shadow sticky-top alert alert-${message.status === 'VALID' ? 'success' : 'warning'}  fade show ${message.status === 'none' || message.status === 'DONE' ? 'condition1' : 'condition2'}`}
                role="alert" style={{ borderRadius: "50px" }}>
                <strong>{message.status}</strong> {message.message}

            </div>
            <div className="container shadow" id="admin_body" style={{ borderRadius: "50px" }}>
                <div className="row p-3">
                    <form className="col-12 col-xl-12" onSubmit={submithandler}>
                        <div className="form-group">
                            <label htmlFor="adminkey">Key</label>
                            <input type="password" className="form-control" id="adminkey"
                                value={key}
                                onChange={(e) => setKey(e.target.value)} />

                            <small className="form-text text-muted">Please check your email and enter your key.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>

            </div>
            {
                message.status === 'loading' &&
                <>

                    <div className="container shadow" style={{ borderRadius: "50px" }}>
                        <div className="row p-3">
                            <div className="col-12 loading"><img src={loading} alt="" style={{borderRadius:"50px"}}/></div>
                        </div>
                    </div>

                </>

            }
            {
                message.status === 'DONE' &&
                <>

                    <div className="container shadow" style={{ borderRadius: "50px" }}>
                        <div className="row p-3">
                            <div className="col-xl-6 col-12">< AdminView data={blog} type="BLOGS" keys={key} callbackk={updateadmin} /></div>
                            <div className="col-xl-6 col-12"><AdminView data={placement} type="PLACEMENT" keys={key} callbackk={updateadmin} /></div>
                        </div>
                    </div>

                </>
            }
        </>
    )
}

export default Admin
