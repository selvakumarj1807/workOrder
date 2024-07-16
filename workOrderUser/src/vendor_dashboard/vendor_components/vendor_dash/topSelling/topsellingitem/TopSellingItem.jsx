import React from 'react'
import { Link } from 'react-router-dom'

function TopSellingItem({item}) {
  return (
    <tr>
    <th scope='row'>
        <Link to=" " className='a'>
            <img src={item.preview} alt="" />
        </Link>
    </th>
    <td>
        <Link to=" " className='text-primary fw-bold'>
            {item.name}
        </Link>
    </td>
    <td>${item.price.toFixed(2)}</td>
    <td className='fw-bold'>{item.sold}</td>
    <td> ${(item.price * item.sold).toLocaleString('en-US')}</td>
</tr>
  )
}

export default TopSellingItem