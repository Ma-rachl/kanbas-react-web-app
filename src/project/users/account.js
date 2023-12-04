import * as client from "./client";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const save = async () => {
        await client.updateUser(account);
    };

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);


    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };


    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };


    return (
        <div className="w-50">
            <h1>Account</h1>

            {account && (
                <div>
                    <div>
                    {/*    <input value={account.password}*/}
                    {/*           onChange={(e) => setAccount({ ...account,*/}
                    {/*               password: e.target.value })}/>*/}
                    {/*    <select onChange={(e) => setAccount({ ...account,*/}
                    {/*        role: e.target.value })}>*/}
                    {/*        <option value="USER">User</option>*/}
                    {/*        <option value="ADMIN">Admin</option>*/}
                    {/*        <option value="FACULTY">Faculty</option>*/}
                    {/*        <option value="STUDENT">Student</option>*/}
                    {/*    </select>*/}

                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input value={account.firstName}*/}
                    {/*           placeholder="firstname"*/}
                    {/*           onChange={(e) => setAccount({ ...account,*/}
                    {/*               firstname: e.target.value })}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input value={account.lastName}*/}
                    {/*           placeholder="lastnmae"*/}
                    {/*           onChange={(e) => setAccount({ ...account,*/}
                    {/*               lastName: e.target.value })}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input value={account.dob}*/}
                    {/*           placeholder="date of birth"*/}
                    {/*           onChange={(e) => setAccount({ ...account,*/}
                    {/*               dob: e.target.value })}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input value={account.email}*/}
                    {/*           placeholder="email"*/}
                    {/*           onChange={(e) => setAccount({ ...account,*/}
                    {/*               email: e.target.value })}/>*/}
                    {/*</div>*/}
                        <select className="account-inputs form-select"
                                value={account && account.role ? account.role : "USER"}
                                onChange={(e) => setAccount({
                                    ...account,
                                    role: e.target.value
                                })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                        </select>

                        <input className="account-inputs form-control" value={account.password} placeholder="password"
                               onChange={(e) => setAccount({
                                   ...account,
                                   password: e.target.value
                               })}/>
                        <input className="account-inputs form-control" value={account.firstName} placeholder="firstname"
                               onChange={(e) => setAccount({
                                   ...account,
                                   firstName: e.target.value
                               })}/>
                        <input className="account-inputs form-control" value={account.lastName} placeholder="lastname"
                               onChange={(e) => setAccount({
                                   ...account,
                                   lastName: e.target.value
                               })}/>
                        <input className="account-inputs form-control" value={account.dob} placeholder="dob"
                               onChange={(e) => setAccount({
                                   ...account,
                                   dob: e.target.value
                               })}/>
                        <input className="account-inputs form-control" value={account.email} placeholder="email"
                               onChange={(e) => setAccount({
                                   ...account,
                                   email: e.target.value
                               })}/>




                    </div>

                </div>


            )}
            <button onClick={save} className="btn btn-success w-100">
                Save
            </button>
            <button onClick={signout} className="btn btn-danger w-100">
                Signout
            </button>

            <Link to="/project/admin/users" className="btn btn-warning w-100">
                Users
            </Link>
        </div>
    );
}
export default Account;

