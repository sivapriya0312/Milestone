import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export function Login(){
    return(
        <>
        <div className='container'>
            <div className='row mt-4 text-center'>
                <h1>Login Form</h1>
            </div>
            <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Username</label>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className="col-lg-3">
                    <input type="text" name="username" id="username" className="form-control" placeholder='Enter username'/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Password</label>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className="col-lg-3">
                    <input type="password" name="password" id="password" className="form-control" placeholder='Enter password'/>
                </div>
            </div>
            <div className='row mt-4 text-align-center'>
                    <Link to='/login'>
                        <input type='button' name='button' id='button' value='Login' className='btn btn-success'/>
                    </Link>
            </div>
        </div>
        </>
    );
}