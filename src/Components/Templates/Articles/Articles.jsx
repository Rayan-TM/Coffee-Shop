import { articles } from "../../../fakeData";
import Container from "../../../Shared/Container";
import Heading2 from "../../../Shared/Heading2";
import Wrapper from "./Wrapper";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

export default function Articles() {
  return (
    <Wrapper>
      <Container>
        <div className="header">
          <Heading2>Articles</Heading2>
          <div>
            View all <GoChevronRight className="arrow-right" />
          </div>
        </div>
        <div className="articles">
          {articles.map((article) => (
            <article key={article.id}>
              <div className="img-container">
                <img loading="lazy" src={`/images/${article.img}`} alt={article.title} />
                <div className="overlay">
                  <button>
                    Read more <GoChevronRight className="arrow-right" />
                  </button>
                </div>
              </div>
              <div className="body">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>

              <div className="footer">
                <div className="date">
                  <CiCalendarDate />
                  <span>{article.date}</span>
                </div>

                <div className="view">
                  <span>{article.views}</span>
                  <FaRegEye />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}
