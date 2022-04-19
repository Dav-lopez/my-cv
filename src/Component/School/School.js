import React from 'react'
import './School.css'

function School() {
  return (
    <div>
         <h2>Educational Qualifications</h2>
            <table border= '1'>
                <tr id="heading">
                    <td>Qualification</td>
                    <td>University</td>
                    <td>Percentage / Grades</td>
                    <td>Year</td>
                </tr>
               
                <tr>
                    <td>B.Sc. (Hons) - Quantity Surveying </td>
                    <td>UNIVERSITY OF LAGOS </td>
                    <td>2:1 – Upper Second Class Honours</td>
                    <td> 2013-2018</td>
                </tr>
                
            </table>
    </div>
  )
}

export default School