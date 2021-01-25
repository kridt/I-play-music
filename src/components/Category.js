import "./Category.css";
import Undercategory from "./UnderCategory";

export default function Category({ categoryName, color }) {

    return(
        <section className="category_section">
            
            <article style={{backgroundColor:color}} className="categoryName">
                <h1>{categoryName}</h1>
                <i class="fas fa-ellipsis-h"></i>
            </article>

            <section className="under_category_section">
                <Undercategory undercategoryName="undercategoryName" />
            </section>
        </section>
    )
}