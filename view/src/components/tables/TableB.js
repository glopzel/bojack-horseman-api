import React from 'react'

const TableB = ({tableContent}) => {
  return (
    <div className='table-block'>
        <table>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Value Type</th>
                    <th>Content</th>
                </tr>
            </thead>

            <tbody>
                {tableContent.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default TableB