import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchReviews } from '../../services/filmsApi';
import { List, Item, Wrapper, Description, Lebel } from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchReviews(id).then(({ results }) => setReviews(results));
  }, [id]);
  return (
    <>
      <List>
        {reviews
          ? reviews.length > 0
            ? reviews.map(review => (
                <Item key={review?.id}>
                  <Wrapper>
                    {review.author_details.avatar_path ? (
                      <img
                        src={
                          review.author_details.avatar_path.includes('http')
                            ? review.author_details.avatar_path.slice(1)
                            : 'https://image.tmdb.org/t/p/w300' +
                              review?.author_details.avatar_path
                        }
                        alt={review?.author}
                        width="80px"
                      />
                    ) : null}

                    <Description>
                      <Lebel>NickName:</Lebel> {review?.author}
                    </Description>
                  </Wrapper>
                  <Description>
                    <Lebel>Review:</Lebel> {review?.content}
                  </Description>
                </Item>
              ))
            : "We don't have any reviews for this movie"
          : null}
      </List>
    </>
  );
}

export default Reviews;