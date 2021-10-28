export default ({message}) => {
    return (
        <section className="loadingCenter">
            <div className="spinner-border text-warning" role="status"></div>
            <div>
                <span className="sr-only loadingphrase" >{message}</span>
            </div>
        </section>
    )
}