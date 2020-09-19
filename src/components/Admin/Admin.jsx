import React, { useState } from 'react'
import Axios from 'axios'
import AdminView from './AdminView';
import loading from '../../media/loading.gif';
function Admin() {
    const [key, setKey] = useState('');
    const [blog, setBlog] = useState([]);
    const [placement, setPlacement] = useState([]);
    const [message, fetchMessage] = useState({ message: "", status: "none" });
    const [callbacks, fetchCallbacks] = useState({ message: "", status: "none" });


    const submithandler = (e) => {
        e.preventDefault()
        fetchMessage({ ...message, message: "waiting for server response", status: "loading" })

        Axios.post("https://o1codingclub.herokuapp.com/blog/", { key: key }).
            then((response) => {

                setBlog(response.data)


                Axios.post("https://o1codingclub.herokuapp.com/placement/", { key: key }).
                    then((response) => {

                        fetchMessage({ ...message, message: "Successfully Signed in as an Admin", status: "DONE" })
                        setPlacement(response.data)
                        console.log("signed inn")
                        setTimeout(() => { fetchMessage({ ...message, message: "Successfully Signed in as an Admin", status: "SIGNED IN" }) }, 2000)

                    }).
                    catch(function (error) {

                        fetchMessage({ ...message, message: error.response.data, status: "INVALID" })
                    });





            }).
            catch(function (error) {

                fetchMessage({ ...message, message: error.response.data, status: "INVALID" })
            });



    }

    function updateblog() {
        Axios.post("https://o1codingclub.herokuapp.com/blog/", { key: key }).
            then((response) => {


                setBlog(response.data)

            })
        console.log("blog updated", message.message)
    }

    function updateplacement() {

        Axios.post("https://o1codingclub.herokuapp.com/placement/", { key: key }).
            then((response) => {


                setPlacement(response.data)
            })

        console.log("placement updated", message.message)
    }

    function deleteitem(id, type) {
        if (type === "BLOGS") {
            alert("Do you want to delete this Blog!!")
            Axios.post(`https://o1codingclub.herokuapp.com/blog/delete/${id}`, { key: key }).
                then((response) => {
                    fetchCallbacks({ ...callbacks, message: response.data, status: "DONE" });
                    updateblog()

                }).
                catch(function (error) {

                    console.log(error)
                    fetchCallbacks({ ...callbacks, message: error.response.data, status: "INVALID" })
                });



        }
        else {
            alert("Do you want to delete this Placement Blog!!")
            Axios.post(`https://o1codingclub.herokuapp.com/placement/delete/${id}`, { key: key }).
                then((response) => {
                    fetchCallbacks({ ...callbacks, message: response.data, status: "DONE" })
                    updateplacement()
                }).
                catch(function (error) {

                    console.log(error)
                    fetchCallbacks({ ...callbacks, message: error.response.data, status: "INVALID" })
                });

        }
    }

    function approveitem(id, type) {
        if (type === "BLOGS") {
            alert("Do you want to approve this Blog!!")
            Axios.post(`https://o1codingclub.herokuapp.com/blog/approve/${id}`, { key: key }).
                then((response) => {
                    fetchCallbacks({ ...callbacks, message: response.data, status: "DONE" })
                    updateblog()
                }).
                catch(function (error) {

                    fetchCallbacks({ ...callbacks, message: error.response.data, status: "INVALID" })
                });

        }
        else {
            alert("Do you want to approve this Placement Blog!!")
            Axios.post(`https://o1codingclub.herokuapp.com/placement/approve/${id}`, { key: key }).
                then((response) => {
                    fetchCallbacks({ ...callbacks, message: response.data, status: "DONE" })
                    updateplacement()
                }).
                catch(function (error) {

                    fetchCallbacks({ ...callbacks, message: error.response.data, status: "INVALID" })
                });

        }
    }

    const updateadmin = (id, type, operation) => {

        if (operation === 'approve') {
            approveitem(id, type)
        }
        else {
            deleteitem(id, type)
        }

    }





    return (
        <>
            <div className={`shadow sticky-top alert alert-${message.status === 'VALID' || message.status === 'DONE' ? 'success' : 'warning'}  fade show ${message.status === 'none' || message.status === 'SIGNED IN' ? 'condition1' : 'condition2'}`}
                role="alert" style={{ borderRadius: "50px" }}>
                <strong>{message.status}</strong> {message.message}

            </div>
            <div className={`shadow sticky-top alert alert-${callbacks.status === 'VALID' || callbacks.status === 'DONE' ? 'success' : 'warning'}  fade show ${callbacks.status === 'none' ? 'condition1' : 'condition2'}`}
                role="alert" style={{ borderRadius: "50px" }}>
                <strong>{callbacks.status}</strong> {callbacks.message}

            </div>
            <div className="container shadow" id="admin_body" style={{ borderRadius: "50px", backgroundColor: "white" }}>
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
                            <div className="col-12 loading"><img src={loading} alt="" style={{ borderRadius: "50px" }} /></div>
                        </div>
                    </div>

                </>

            }
            <br />
            <br />
            {
                message.status === 'DONE' || message.status === 'SIGNED IN' &&
                <>

                    <div className="container shadow" style={{ borderRadius: "50px", backgroundColor: "white" }}>
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
