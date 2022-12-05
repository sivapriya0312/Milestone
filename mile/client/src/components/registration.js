import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export function Registration(){

    return(
        <>
        <div className='container'>
            <div className='row mt-4 text-center'>
                <h1>Registration Form</h1>
            </div>
            <form>
            <div className="row mt-4">
                <div className="col-lg-2">
                    <label>First Name</label>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className="col-lg-3">
                    <input type="text" name="firstname" id="firstname" className="form-control"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Last Name</label>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className="col-lg-3">
                    <input type="text" name="lastname" id="lastname" className="form-control"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Email</label>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className="col-lg-3">
                    <input type="email" name="email" id="email" className="form-control"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Phone</label>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className="col-lg-3">
                    <input type="text" name="phone" id="phone" className="form-control"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Password</label>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className="col-lg-3">
                    <input type="password" name="password" id="password" className="form-control"/>
                </div>
                <div className='row mt-4'>
                    <Link to='/'>
                        <input type='button' name='button' id='button' value='Submit' className='btn btn-danger'/>
                    </Link>
                </div>
            </div>
            </form>
         </div>
        </>
    );
}
