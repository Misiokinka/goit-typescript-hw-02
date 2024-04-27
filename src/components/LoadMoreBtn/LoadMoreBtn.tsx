import css from "./LoadMoreBtn.module.css"
import { LoadMoreBtnProps } from "./LoadMoreBtn.types"

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = (props) => {
    const { handleLoadMore } = props
    return (
        <div>  <button className={css.btnLoadMore} onClick={handleLoadMore}>Load More</button></div>
    )
}

export default LoadMoreBtn