import './index.css'

const Pagenation = ({data, pageHandler}) => {
    let pages = []
    for (let i = 1; i< Math.ceil(data.length/ 10)+1; i++){
        pages.push(i)
    }
    return(
        <div className="pages-conatiner">
            {pages.map(page => (
            <button type='button' className="page-item" onClick={() => pageHandler(page)} >
                {page}
            </button>
            ))}
        </div>
    )
}

export default Pagenation