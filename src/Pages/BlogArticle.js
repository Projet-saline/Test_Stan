import React from "react";

const BlogArticle = () => {

    const [article, setArticle] = useState([]);
    const { id } = useParams();

    const getArticle = async () => {
        const response = await fetch(`http://localhost:3000/news/${id}`);
        const data = await response.json()
        .then((data) => {
            console.log(data);
            setArticle(data);
        })
        .catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
            getArticle();
        }
    , []);

    return (
        <>
            {article ? (
                <>
                    <Navbar Style={true}/>
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-date">{`Date de publication : ${article.date}`}</p>
                    <p className="article-content">{article.body}</p>
                    <a className="article-link" href={`/article/${id+1}`}>Lire le prochain article</a>
                    <Footer/>
                </>
            ) : (
                <Loading/>
            )}
        </>
    );
}

export default BlogArticle;