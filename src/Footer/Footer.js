import './Footer.css';
import React from 'react';




export default class Footer extends React.Component{


    render(){


        return(
            <div className  = 'Footer'>
                <h1 className="FooterTitle">Welcome to Alternative Netflix</h1>
                <table>
                    <tr>
                        <th>Questions? Contact us</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>

                    <tr>
                        <td>FAQ</td>
                        <td>Help Center</td>
                        <td>Account</td>
                        <td>Media Center</td>
                    </tr>

                    <tr>
                        <td>Investor Relations</td>
                        <td>Jobs</td>
                        <td>Redeem Gift Cards</td>
                        <td>Buy Gift Cards</td>
                    </tr>

                    <tr>
                        <td>Ways to watch</td>
                        <td>Terms of use</td>
                        <td>Privacy</td>
                        <td>Cookie Preferences</td>
                    </tr>

                    <tr>
                        <td>Corporate Information</td>
                        <td>Contact us</td>
                        <td>Speed test</td>
                        <td>Legal Notices</td>
                    </tr>

                    <tr>
                        <td>Netflix Oringinals</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        )
    }
}