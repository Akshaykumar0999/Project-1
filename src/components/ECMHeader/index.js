import {Link} from 'react-router-dom'
import './index.css'

const ProductsLists = [
    {
        id: 1,
        linkTo: '/',
        name: "Home",
    },
    {
        id: 2,
        linkTo: '/privacy',
        name: "Privacy",
    },
    {
        id: 3,
        linkTo: '/Ecm-company',
        name: "Company",
    },
    {
        id: 4,
        linkTo: '/category',
        name: "Category",
    },
    {
        id: 5,
        linkTo: '/Ecm-supplier',
        name: "Supplier",
    },
    {
        id: 6,
        linkTo: '/Ecm-category-type',
        name: "CategoryType",
    },
    {
        id: 7,
        linkTo: '/Ecm-product',
        name: "Product",
    },
    {
        id: 8,
        linkTo: '/product-rate-history',
        name: "ProductRateHistory",
    },
    {
        id: 9,
        linkTo: '/customer',
        name: "Customer",
    },
    {
        id: 10,
        linkTo: '/customer-address',
        name: "CustomerAddress",
    },
    {
        id: 11,
        linkTo: '/purchase-order',
        name: "PurchaseOrder",
    },
    {
        id: 12,
        linkTo: '/purchase-order-details',
        name: "PurchaseOrderDetails",
    },
    {
        id: 13,
        linkTo: '/login',
        name: "Login",
    }
]

const ECMHeader = () => {
    return(
        <nav className='nav-ECM-conatiner'>
            <h1 className='ECM-nav-heading'>ECM_ExcellentWeb</h1>
            <ul className='ul-ECM-lists'>
                {ProductsLists.map(each => (
                    <Link className='ECM-link' to={each.linkTo} key={each.id}>
                        <li className='List-items-ECM'>
                            <p className='ECM-nav-names'>{each.name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default ECMHeader