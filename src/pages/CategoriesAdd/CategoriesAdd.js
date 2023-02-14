import { Card, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { Autocomplete, Backlink } from "@saleor/macaw-ui";
import React from "react";
import { useSelector } from "react-redux";
import CardSpacer from "../../components/CardSpacer";
import CardTitle from "../../components/CardTitle";
import Container from "../../components/Container";
import FormSpacer from "../../components/FormSpacer/FormSpacer";
import PageHeader from "../../components/PageHeader";

const useStyles = makeStyles(
    theme => ({
        mainCardInfo: {
            paddingTop: 0,
            padding: `${theme.spacing(3)} ${theme.spacing(4)}`
        },
    })
);

const CategoriesAdd = (props) => {
    const categories = useSelector((state) => state.categories);
    const classes = useStyles(props);

    return (
        <Container>
            <Backlink>Категории</Backlink>
            <PageHeader title="Создать новую категорию"/>
            <div>
                <Card>
                    <CardTitle title={"Основная информация"}/>
                    <div className={classes.mainCardInfo}>
                        <TextField
                            fullWidth
                            label={"Название категории"}
                        />
                        <FormSpacer/>
                        <TextField
                            multiline 
                            fullWidth
                            label="Описание категории"
                            name="descriptionCategory"
                            // value={mainInputValue.descriptionCategory}
                            // onChange={handleChange}
                        />
                    </div>
                </Card>
                <CardSpacer/>
                <Card>
                    <CardTitle title={"Родительское категория"}/>
                    <div className={classes.mainCardInfo}>
                        <Autocomplete
                            fullWidth
                            choices={categories}
                            onChange={(e) => console.log(e)}
                            label="Родительское категория"
                        >
                            {({ highlightedIndex, getItemProps }) =>
                                categories.map((category, categoryIndex) => (
                                category.isParent && 
                                <MenuItem
                                    selected={highlightedIndex === categoryIndex}
                                    {...getItemProps({ item: category, index: categoryIndex })}
                                >
                                    {category.name}
                                </MenuItem>
                                ))
                            }
                        </Autocomplete>
                    </div>
                </Card>
            </div>
        </Container>            
    );
}

export default CategoriesAdd;
