import React, { useEffect } from "react";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { Button } from "../components/Button";
import { Card } from "@material-ui/core";
import ProductList from "./components/ProductList";
import FilterBar from "./components/ProductHeader";

const Products = () => {
    useEffect(() => {
        document.title = "Товары";
    }, []);

    return (
        <>
        <Container>
            <PageHeader
                title={"Товары"}
            >
                <Button
                    variant="primary"
                    color="primary"
                    // onClick={onClick}
                    // href={href}
                    style={{ width: "100%" }}
                >
                    Создать товар
                </Button>
            </PageHeader>
            <Card>
                <FilterBar/>
                <ProductList/>
            </Card>
        </Container>
        </>
    );
}

export default Products;