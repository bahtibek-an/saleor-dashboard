import { Card } from "@material-ui/core";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import CategoriesHeader from "./components/CategoriesHeader/CategoriesHeader";
import CategoriesList from "./components/CategoriesList/CategoriesList";

const CategoriesPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <Container>
            <PageHeader
                title={"Категории"}
            >
                <Button
                    variant="primary"
                    color="primary"
                    onClick={() => navigate("/category/add/")}
                    // href={href}
                    style={{ width: "100%" }}
                >
                    Создать категорию
                </Button>
            </PageHeader>
            <Card>
                <CategoriesHeader/>
                <CategoriesList/>
            </Card>
        </Container>
        </>
    );
}

export default CategoriesPage;