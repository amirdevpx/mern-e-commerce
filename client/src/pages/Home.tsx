import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { productFilter, productList } from "~/app/selectors";
import { fetchProductsApi } from "~/app/slices/productSlice";
import Card from "~/componets/Card";
import GridBox from "~/componets/GridBox";

import Heading from "~/componets/Heading";
import Container from "~/componets/Container";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productList);
  const filter = useAppSelector(productFilter);
  const LOADING = products.loading;

  const fetchProducts = useCallback(() => {
    dispatch(fetchProductsApi(filter));
  }, [dispatch, filter]);

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  if (LOADING) {
    return <Heading>Loading...</Heading>;
  }

  if (products.data.length === 0) {
    return <Heading>Mahsulot yo'q</Heading>;
  }

  return (
    <>
      <section id="products">
        <Container>
          <GridBox>
            {products.data.map((item, index) => (
              <Card key={index + 1} data={item} />
            ))}
          </GridBox>
        </Container>
      </section>
    </>
  );
};

export default Home;
